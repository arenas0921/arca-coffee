import styles from "./About.module.css";
import { useLanguage } from "../../context/LanguageContext";

function About() {
    const { translations } = useLanguage();
    return (
        <section className={styles.section}>
            <div className={styles.image}></div>

            <div className={styles.content}>
                <h2 className={styles.title}>
                    {translations.about.title}
                </h2>

                <p className={styles.text}>
                    {translations.about.description}
                </p>

                <button className={styles.button}>
                    {translations.about.button}
                </button>
            </div>
        </section>
    );
}

export default About;