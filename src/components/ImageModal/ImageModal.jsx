import { useEffect, useState } from "react";
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

    /*
     * Sincroniza la posición inicial enviada por el componente padre.
     *
     * Esto permite que si el usuario hace click en la foto 4
     * desde Mirador o Experiencias, el modal abra directamente
     * la foto 4.
     */
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
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

            if (event.key === "Escape") {
                onClose();
            }

            if (event.key === "ArrowLeft" && gallery.length > 1) {
                setCurrentIndex((prev) =>
                    prev === 0
                        ? gallery.length - 1
                        : prev - 1
                );
            }

            if (event.key === "ArrowRight" && gallery.length > 1) {
                setCurrentIndex((prev) =>
                    prev === gallery.length - 1
                        ? 0
                        : prev + 1
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose, gallery.length]);

    /*
     * Autoplay del modal.
     *
     * La imagen cambia automáticamente cada 5 segundos.
     * Al llegar a la última vuelve a la primera.
     */
    useEffect(() => {
        if (!isOpen || gallery.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === gallery.length - 1
                    ? 0
                    : prev + 1
            );
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [isOpen, gallery.length]);

    if (!isOpen || gallery.length === 0) return null;

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

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === gallery.length - 1
                ? 0
                : prev + 1
        );
    };

    const previousSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0
                ? gallery.length - 1
                : prev - 1
        );
    };

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

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
        >
            <div
                className={`${styles.modal} ${
                    currentDescription
                        ? styles.modalWithDescription
                        : ""
                }`}
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    ×
                </button>


                <h2 className={styles.title}>
                    {currentTitle}
                </h2>


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

                    {hasGallery && (
                        <button
                            className={`${styles.arrow} ${styles.previous}`}
                            onClick={previousSlide}
                            aria-label="Imagen anterior"
                        >
                            ‹
                        </button>
                    )}


                    <img
                        src={currentSlide.image}
                        alt={currentTitle}
                        className={styles.image}
                    />


                    {hasGallery && (
                        <button
                            className={`${styles.arrow} ${styles.next}`}
                            onClick={nextSlide}
                            aria-label="Imagen siguiente"
                        >
                            ›
                        </button>
                    )}

                </div>


                {currentDescription && (
                    <p className={styles.description}>
                        {currentDescription}
                    </p>
                )}


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
                                aria-label={`Ir a ${
                                    typeof slide.title === "object"
                                        ? slide.title[language]
                                        : slide.title
                                }`}
                            />

                        ))}

                    </div>
                )}

            </div>
        </div>
    );
}

export default ImageModal;