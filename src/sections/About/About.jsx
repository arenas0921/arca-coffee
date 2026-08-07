import styles from "./About.module.css";
import aboutImage from "../../assets/images/about/about1.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import ImageModal from "../../components/ImageModal";

function About() {
    const { translations } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.content}>

                <span className={styles.eyebrow}>
                    {translations.about.eyebrow}
                </span>

                <h2 className={styles.title}>
                    {translations.about.title}
                </h2>

                <div className={styles.text}>
                    {translations.about.description.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph.highlight && (
                                <span className={styles.highlight}>
                                    {paragraph.highlight}{" "}
                                </span>
                            )}
                            {paragraph.text}
                        </p>
                    ))}
                </div>

                <div className={styles.imageContainer}>
                    <img
                        src={aboutImage}
                        alt="Arca Coffee"
                        className={styles.image}
                        onClick={() => setIsModalOpen(true)}
                    />

                    <span
                        className={styles.imageHint}
                        onClick={() => setIsModalOpen(true)}
                    >
                        🔍 Ver fotografía
                    </span>
                </div>

                <p className={styles.quote}>
                    {translations.about.quote}
                </p>

            </div>
            <ImageModal
                isOpen={isModalOpen}
                image={aboutImage}
                alt="Arca Coffee"
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}

export default About;