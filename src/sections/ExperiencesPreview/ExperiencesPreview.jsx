import { Link } from "react-router-dom";
import {
    FaCoffee,
    FaClock,
    FaUsers,
    FaFlask,
    FaWater,
    FaSlidersH,
    FaMugHot,
    FaWhatsapp
} from "react-icons/fa";

import Button from "../../components/Button";
import experiences from "../../data/experiences";
import { useLanguage } from "../../context/LanguageContext";

import styles from "./ExperiencesPreview.module.css";

function ExperiencesPreview() {
    const { language } = useLanguage();

    const sectionTitle = {
        es: "Vive la experiencia del café",
        en: "Live the coffee experience"
    };

    const previewContent = {
        1: {
            es: {
                tag: "EXPERIENCIA 01",
                description:
                    "Descubre cómo cambia el café cuando aprendes a olerlo, probarlo y compararlo.",
                features: [
                    {
                        icon: FaFlask,
                        text: "Degustación de varios orígenes"
                    },
                    {
                        icon: FaCoffee,
                        text: "Cata guiada"
                    },
                    {
                        icon: FaUsers,
                        text: "Grupos pequeños"
                    }
                ]
            },

            en: {
                tag: "EXPERIENCE 01",
                description:
                    "Discover how coffee changes when you learn to smell, taste and compare it.",
                features: [
                    {
                        icon: FaFlask,
                        text: "Tasting of several origins"
                    },
                    {
                        icon: FaCoffee,
                        text: "Guided tasting"
                    },
                    {
                        icon: FaUsers,
                        text: "Small groups"
                    }
                ]
            }
        },

        2: {
            es: {
                tag: "EXPERIENCIA 02",
                description:
                    "Pasa detrás de la barra y aprende a preparar espresso, latte art y café filtrado con tus propias manos.",
                features: [
                    {
                        icon: FaSlidersH,
                        text: "Espresso"
                    },
                    {
                        icon: FaMugHot,
                        text: "Latte art"
                    },
                    {
                        icon: FaWater,
                        text: "Café filtrado"
                    }
                ]
            },

            en: {
                tag: "EXPERIENCE 02",
                description:
                    "Step behind the bar and learn to prepare espresso, latte art and filter coffee with your own hands.",
                features: [
                    {
                        icon: FaSlidersH,
                        text: "Espresso"
                    },
                    {
                        icon: FaMugHot,
                        text: "Latte art"
                    },
                    {
                        icon: FaWater,
                        text: "Filter coffee"
                    }
                ]
            }
        }
    };

    const buttonText = {
        es: "Ir a experiencia",
        en: "View experience"
    };

    const whatsappLabel = {
        es: "Reservar por WhatsApp",
        en: "Book through WhatsApp"
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <h2 className={styles.title}>
                    {sectionTitle[language]}
                </h2>

                <div className={styles.cards}>

                    {experiences.map((experience) => {

                        const preview =
                            previewContent[experience.id]?.[language];

                        if (!preview) return null;

                        return (
                            <article
                                key={experience.id}
                                className={styles.card}
                            >

                                <div className={styles.image}>

                                    <img
                                        src={experience.image}
                                        alt={experience.title[language]}
                                    />

                                    <div className={styles.imageOverlay}>
                                        <span>
                                            <FaCoffee />
                                        </span>
                                    </div>

                                </div>

                                <div className={styles.content}>

                                    <span className={styles.tag}>
                                        {preview.tag}
                                    </span>

                                    <h3 className={styles.cardTitle}>
                                        {experience.title[language]}
                                    </h3>

                                    <p className={styles.cardDescription}>
                                        {preview.description}
                                    </p>

                                    <div className={styles.meta}>

                                        <div className={styles.metaItem}>
                                            <FaClock />

                                            <span>
                                                {experience.duration[language]}
                                            </span>
                                        </div>

                                        <div className={styles.metaItem}>
                                            <FaUsers />

                                            <span>
                                                {language === "es"
                                                    ? "Grupos pequeños"
                                                    : "Small groups"}
                                            </span>
                                        </div>

                                    </div>

                                    <ul className={styles.features}>

                                        {preview.features.map(
                                            ({ icon: Icon, text }) => (
                                                <li key={text}>

                                                    <Icon />

                                                    <span>
                                                        {text}
                                                    </span>

                                                </li>
                                            )
                                        )}

                                    </ul>

                                    <div className={styles.actions}>

                                        <Link
                                            to={`/experiencias#${experience.slug}`}
                                            className={styles.primaryAction}
                                        >
                                            <Button variant="primary">
                                                {buttonText[language]}
                                            </Button>
                                        </Link>

                                        <a
                                            href="https://wa.me/573177987723?text=Hola,%20quiero%20reservar%20una%20experiencia%20de%20Arca%20Coffee."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.whatsappAction}
                                            aria-label={whatsappLabel[language]}
                                            title={whatsappLabel[language]}
                                        >
                                            <FaWhatsapp />
                                        </a>

                                    </div>

                                </div>

                            </article>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default ExperiencesPreview;