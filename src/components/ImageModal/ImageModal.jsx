import { useEffect, useState } from "react";
import styles from "./ImageModal.module.css";

function ImageModal({
    isOpen,
    image,
    images,
    alt,
    title,
    description,
    onClose,
}) {
    const gallery = images?.length ? images : image ? [image] : [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }

            if (event.key === "ArrowLeft" && gallery.length > 1) {
                setCurrentIndex((prev) =>
                    prev === 0 ? gallery.length - 1 : prev - 1
                );
            }

            if (event.key === "ArrowRight" && gallery.length > 1) {
                setCurrentIndex((prev) =>
                    prev === gallery.length - 1 ? 0 : prev + 1
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose, gallery.length]);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
        }
    }, [isOpen]);

    if (!isOpen || gallery.length === 0) return null;

    const currentImage = gallery[currentIndex];

    const hasGallery = gallery.length > 1;
    const hasTitle = Boolean(title);
    const hasDescription = Boolean(description);

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === gallery.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? gallery.length - 1 : prev - 1
        );
    };

    const handleTouchStart = (event) => {
        setTouchEnd(null);
        setTouchStart(event.targetTouches[0].clientX);
    };

    const handleTouchMove = (event) => {
        setTouchEnd(event.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return;

        const distance = touchStart - touchEnd;
        const minimumSwipeDistance = 50;

        if (Math.abs(distance) < minimumSwipeDistance) return;

        if (distance > 0) {
            nextImage();
        } else {
            previousImage();
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
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Cerrar imagen"
                >
                    ×
                </button>

                {hasTitle && (
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                )}

                <div
                    className={styles.imageWrapper}
                    onTouchStart={hasGallery ? handleTouchStart : undefined}
                    onTouchMove={hasGallery ? handleTouchMove : undefined}
                    onTouchEnd={hasGallery ? handleTouchEnd : undefined}
                >

                    {hasGallery && (
                        <button
                            className={`${styles.arrow} ${styles.previous}`}
                            onClick={previousImage}
                            aria-label="Imagen anterior"
                        >
                            ‹
                        </button>
                    )}

                    <img
                        src={currentImage}
                        alt={alt}
                        className={styles.image}
                    />

                    {hasGallery && (
                        <button
                            className={`${styles.arrow} ${styles.next}`}
                            onClick={nextImage}
                            aria-label="Imagen siguiente"
                        >
                            ›
                        </button>
                    )}

                </div>

                {hasDescription && (
                    <p className={styles.description}>
                        {description}
                    </p>
                )}

                {hasGallery && (
                    <div className={styles.indicators}>
                        {gallery.map((_, index) => (
                            <button
                                key={index}
                                className={
                                    index === currentIndex
                                        ? styles.activeIndicator
                                        : styles.indicator
                                }
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageModal;