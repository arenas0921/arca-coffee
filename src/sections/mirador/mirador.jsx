import { useState } from "react";
import miradorData from "../../data/miradorData";
import ImageModal from "../../components/ImageModal";
import styles from "./Mirador.module.css";

function Mirador() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openImage = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    return (
        <section className={styles.section}>

            <div className={styles.content}>

                <span className={styles.eyebrow}>
                    EL LUGAR
                </span>

                <h2 className={styles.title}>
                    {miradorData.title}
                </h2>

                <p className={styles.subtitle}>
                    {miradorData.subtitle}
                </p>

                <p className={styles.description}>
                    {miradorData.description}
                </p>

                <div className={styles.gallery}>
                    <button
                        className={styles.galleryItem}
                        onClick={() => openImage(0)}
                    >
                        <img
                            src={miradorData.gallery[0]}
                            alt="Mirador Arca Coffee"
                        />
                    </button>
                </div>

            </div>

            <ImageModal
                isOpen={isModalOpen}
                images={miradorData.gallery}
                currentIndex={currentIndex}
                alt="Mirador Arca Coffee"
                onClose={() => setIsModalOpen(false)}
            />

        </section>
    );
}

export default Mirador;