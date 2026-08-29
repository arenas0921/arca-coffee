import { useEffect, useState } from "react";
import { FaExpand } from "react-icons/fa";
import styles from "./ImageModal.module.css";
import { useLanguage } from "../../context/LanguageContext";

function ImageModal({
    isOpen,
    image,
    images,
    alt,
    title,
    description,
    slides = [],
    currentIndex: initialIndex = 0,
    onClose,
}) {
    const { language } = useLanguage();

    const gallery = slides.length
        ? slides
        : image
            ? [
                {
                    image,
                    title: title || alt || "Imagen",
                    description,
                },
            ]
            : images?.map((item, index) => ({
                image: item,
                title: title || alt || `Imagen ${index + 1}`,
                description,
            })) || [];

    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const [isImageExpanded, setIsImageExpanded] = useState(false);


    /*
     * Sincroniza la posición inicial enviada por el componente padre.
     */
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            setIsImageExpanded(false);
        }
    }, [isOpen, initialIndex]);


    /*
     * Bloquea el scroll de la página mientras el modal está abierto
     * y permite navegación con teclado.
     */
    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {

            /*
             * Si la imagen está ampliada, Escape cierra primero
             * la ampliación y mantiene abierto el modal principal.
             */
            if (event.key === "Escape") {

                if (isImageExpanded) {
                    setIsImageExpanded(false);
                    return;
                }

                onClose();
                return;
            }


            /*
             * La navegación con teclado continúa funcionando
             * mientras no estemos viendo la imagen ampliada.
             */
            if (!isImageExpanded && gallery.length > 1) {

                if (event.key === "ArrowLeft") {
                    setCurrentIndex((prev) =>
                        prev === 0
                            ? gallery.length - 1
                            : prev - 1
                    );
                }

                if (event.key === "ArrowRight") {
                    setCurrentIndex((prev) =>
                        prev === gallery.length - 1
                            ? 0
                            : prev + 1
                    );
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [
        isOpen,
        onClose,
        gallery.length,
        isImageExpanded
    ]);


    /*
     * Si el modal se cierra, también cerramos la ampliación.
     */
    useEffect(() => {
        if (!isOpen) {
            setIsImageExpanded(false);
        }
    }, [isOpen]);


    if (!isOpen || gallery.length === 0) {
        return null;
    }


    const currentSlide = gallery[currentIndex];

    const hasGallery = gallery.length > 1;


    const currentTitle =
        typeof currentSlide.title === "object"
            ? currentSlide.title[language]
            : currentSlide.title;


    const currentDescription =
        typeof currentSlide.description === "object"
            ? currentSlide.description[language]
            : currentSlide.description;


    /*
     * Avanza a la siguiente imagen.
     */
    const nextSlide = () => {

        setCurrentIndex((prev) =>
            prev === gallery.length - 1
                ? 0
                : prev + 1
        );

    };


    /*
     * Regresa a la imagen anterior.
     */
    const previousSlide = () => {

        setCurrentIndex((prev) =>
            prev === 0
                ? gallery.length - 1
                : prev - 1
        );

    };


    /*
     * Touch / Swipe
     */
    const handleTouchStart = (event) => {

        setTouchEnd(null);

        setTouchStart(
            event.targetTouches[0].clientX
        );

    };


    const handleTouchMove = (event) => {

        setTouchEnd(
            event.targetTouches[0].clientX
        );

    };


    const handleTouchEnd = () => {

        if (
            touchStart === null ||
            touchEnd === null
        ) {
            return;
        }


        const distance =
            touchStart - touchEnd;


        const minimumSwipeDistance = 50;


        if (
            Math.abs(distance) <
            minimumSwipeDistance
        ) {
            return;
        }


        if (distance > 0) {
            nextSlide();
        } else {
            previousSlide();
        }


        setTouchStart(null);
        setTouchEnd(null);

    };


    /*
     * Abre la imagen actual en pantalla completa.
     */
    const openImageExpanded = () => {
        setIsImageExpanded(true);
    };


    /*
     * Cierra solamente la ampliación.
     */
    const closeImageExpanded = () => {
        setIsImageExpanded(false);
    };


    return (
        <>
            {/* =========================================
                MODAL PRINCIPAL
            ========================================= */}

            <div
                className={styles.overlay}
                onClick={onClose}
            >

                <div
                    className={`${styles.modal} ${currentDescription
                            ? styles.modalWithDescription
                            : ""
                        }`}
                    onClick={(event) =>
                        event.stopPropagation()
                    }
                >

                    {/* CIERRE PRINCIPAL */}

                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Cerrar"
                        title="Cerrar"
                    >
                        ×
                    </button>


                    {/* TÍTULO */}

                    <h2 className={styles.title}>
                        {currentTitle}
                    </h2>


                    {/* =========================================
                        IMAGEN + GALERÍA
                    ========================================= */}

                    <div
                        className={styles.imageWrapper}
                        onTouchStart={
                            hasGallery
                                ? handleTouchStart
                                : undefined
                        }
                        onTouchMove={
                            hasGallery
                                ? handleTouchMove
                                : undefined
                        }
                        onTouchEnd={
                            hasGallery
                                ? handleTouchEnd
                                : undefined
                        }
                    >

                        {/* FLECHA ANTERIOR */}

                        {hasGallery && (
                            <button
                                className={`${styles.arrow} ${styles.previous}`}
                                onClick={previousSlide}
                                aria-label="Imagen anterior"
                                title="Imagen anterior"
                            >
                                ‹
                            </button>
                        )}


                        {/* =========================================
                            CONTENEDOR REAL DE LA IMAGEN

                            IMPORTANTE:
                            El botón de ampliar está aquí dentro
                            para que siempre quede pegado a la
                            fotografía, independientemente de
                            su proporción.
                        ========================================= */}

                        <div
                            className={styles.imageContainer}
                        >

                            <img
                                src={currentSlide.image}
                                alt={currentTitle}
                                className={styles.image}
                                onClick={openImageExpanded}
                            />


                            {/* BOTÓN DE AMPLIAR */}

                            <button
                                className={styles.expandButton}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    openImageExpanded();
                                }}
                                aria-label="Ampliar imagen"
                                title="Ampliar imagen"
                            >
                                <FaExpand />
                            </button>

                        </div>


                        {/* FLECHA SIGUIENTE */}

                        {hasGallery && (
                            <button
                                className={`${styles.arrow} ${styles.next}`}
                                onClick={nextSlide}
                                aria-label="Imagen siguiente"
                                title="Imagen siguiente"
                            >
                                ›
                            </button>
                        )}

                    </div>


                    {/* DESCRIPCIÓN */}

                    {currentDescription && (
                        <p className={styles.description}>
                            {currentDescription}
                        </p>
                    )}


                    {/* INDICADORES */}

                    {hasGallery && (
                        <div className={styles.indicators}>

                            {gallery.map((slide, index) => (

                                <button
                                    key={index}
                                    className={
                                        index === currentIndex
                                            ? styles.activeIndicator
                                            : styles.indicator
                                    }
                                    onClick={() =>
                                        setCurrentIndex(index)
                                    }
                                    aria-label={`Ir a ${typeof slide.title === "object"
                                            ? slide.title[language]
                                            : slide.title
                                        }`}
                                />

                            ))}

                        </div>
                    )}

                </div>

            </div>


            {/* =========================================
                VISTA AMPLIADA DE LA FOTOGRAFÍA

                No es otro componente.
                Forma parte del ImageModal reutilizable.
            ========================================= */}

            {isImageExpanded && (

                <div
                    className={styles.expandedOverlay}
                    onClick={closeImageExpanded}
                >

                    <button
                        className={styles.expandedCloseButton}
                        onClick={closeImageExpanded}
                        aria-label="Cerrar imagen ampliada"
                        title="Cerrar"
                    >
                        ×
                    </button>


                    <img
                        src={currentSlide.image}
                        alt={currentTitle}
                        className={styles.expandedImage}
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    />

                </div>

            )}

        </>
    );
}

export default ImageModal;