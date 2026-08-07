import { useEffect } from "react";
import styles from "./ImageModal.module.css";

function ImageModal({
    isOpen,
    image,
    alt,
    onClose
}) {

    useEffect(() => {

        if (!isOpen) return;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [isOpen, onClose]);
    
    if (!isOpen) return null;

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

                <img
                    src={image}
                    alt={alt}
                    className={styles.image}
                />

            </div>
        </div>
    );
}

export default ImageModal;