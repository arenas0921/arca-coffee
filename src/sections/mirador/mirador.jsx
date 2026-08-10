import { useState } from "react";
import miradorData from "../../data/miradorData";
import ImageModal from "../../components/ImageModal";
import styles from "./mirador.module.css";
import { useLanguage } from "../../context/LanguageContext";

function Mirador() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { language } = useLanguage();

    const openImage = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    return (
        <section
            id="mirador"
            className={styles.section}
        >

            <div className={styles.content}>

                <span className={styles.eyebrow}>
                    {language === "es"
                        ? "EL LUGAR"
                        : "THE PLACE"}
                </span>


                <h2 className={styles.title}>
                    {miradorData.title[language]}
                </h2>


                <p className={styles.subtitle}>
                    {miradorData.subtitle[language]}
                </p>


                <p className={styles.description}>
                    {miradorData.description[language]}
                </p>


                <div className={styles.gallery}>

                    <button
                        className={styles.galleryItem}
                        onClick={() => openImage(0)}
                    >
                        <img
                            src={miradorData.gallery[0]}
                            alt={
                                language === "es"
                                    ? "Mirador Arca Coffee"
                                    : "Arca Coffee viewpoint"
                            }
                        />
                    </button>

                </div>


                <p className={styles.quote}>
                    {miradorData.closingQuote[language]}
                </p>

            </div>


            <ImageModal
                isOpen={isModalOpen}
                images={miradorData.gallery}
                currentIndex={currentIndex}
                alt={
                    language === "es"
                        ? "Mirador Arca Coffee"
                        : "Arca Coffee viewpoint"
                }
                onClose={() => setIsModalOpen(false)}
            />

        </section>
    );
}

export default Mirador;