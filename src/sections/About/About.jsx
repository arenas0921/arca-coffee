import styles from "./About.module.css";
import aboutImage from "../../assets/images/about/about2.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import ImageModal from "../../components/ImageModal";

function About() {
    const { translations } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.content}>

                {translations.about.eyebrow && (
                    <span className={styles.eyebrow}>
                        {translations.about.eyebrow}
                    </span>
                )}

                <h2 className={styles.title}>
                    {translations.about.title}
                </h2>

                <p className={styles.intro}>
                    {translations.about.intro.before}

                    <span className={styles.highlight}>
                        {translations.about.intro.highlight1}
                    </span>

                    {translations.about.intro.middle}

                    <span className={styles.highlight}>
                        {translations.about.intro.highlight2}
                    </span>

                    {translations.about.intro.after}
                </p>
                <div className={styles.text}>
                    <p>
                        {translations.about.description.before}

                        <span className={styles.highlight}>
                            {translations.about.description.highlight}
                        </span>

                        {translations.about.description.after}
                    </p>
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

                {translations.about.quote && (
                    <p className={styles.quote}>
                        {translations.about.quote}
                    </p>
                )}

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