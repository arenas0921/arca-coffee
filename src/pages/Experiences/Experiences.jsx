import experiences from "../../data/experiences";
import styles from "./Experiences.module.css";
import Button from "../../components/Button";
import { useLanguage } from "../../context/LanguageContext";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import {
    FaWhatsapp,
    FaClock,
    FaUsers,
    FaCoffee,
    FaCheck
} from "react-icons/fa";

function Experiences() {
    const { language } = useLanguage();
    const location = useLocation();

    const content = {
        es: {
            title: "Experiencias",
            intro: "Entra tomando café. Sal entendiéndolo.",
            includes: "Qué incluye",
            gallery: "Galería",
            reserve: "Reservar por WhatsApp",
            experience: "EXPERIENCIA",
            smallGroups: "Grupos pequeños"
        },

        en: {
            title: "Experiences",
            intro: "Come in drinking coffee. Leave understanding it.",
            includes: "What's included",
            gallery: "Gallery",
            reserve: "Book through WhatsApp",
            experience: "EXPERIENCE",
            smallGroups: "Small groups"
        }
    };

    const text = content[language];


    /*
     * Control de posición al entrar a la página.
     *
     * Sin hash:
     * /experiencias
     * → inicio de la página
     *
     * Con hash:
     * /experiencias#cata
     * → experiencia 1
     *
     * /experiencias#prepara
     * → experiencia 2
     */
    useEffect(() => {
        const targetId = location.hash.replace("#", "");

        const scrollToTarget = () => {

            if (!targetId) {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

                return;
            }

            const element = document.getElementById(targetId);

            if (!element) {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

                return;
            }

            const navbarHeight = 90;

            const elementPosition =
                element.getBoundingClientRect().top +
                window.scrollY;

            window.scrollTo({
                top: elementPosition - navbarHeight,
                behavior: "instant"
            });
        };


        // Esperamos a que React termine de montar
        // el contenido antes de calcular la posición.
        requestAnimationFrame(() => {
            requestAnimationFrame(scrollToTarget);
        });

    }, [location.pathname, location.hash]);


    return (
        <main className={styles.page}>

            <header className={styles.header}>

                <h1 className={styles.title}>
                    {text.title}
                </h1>

                <p className={styles.intro}>
                    {text.intro}
                </p>

            </header>


            <div className={styles.experiences}>

                {experiences.map((experience, index) => (

                    <section
                        key={experience.id}
                        id={experience.slug}
                        className={styles.experience}
                    >

                        <div className={styles.experienceHeader}>

                            <span className={styles.number}>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className={styles.experienceLabel}>
                                {text.experience}{" "}
                                {String(index + 1).padStart(2, "0")}
                            </span>

                        </div>


                        <div className={styles.card}>

                            <div className={styles.imageWrapper}>

                                <img
                                    src={experience.image}
                                    alt={experience.title[language]}
                                    className={styles.image}
                                />

                                <div className={styles.imageBadge}>
                                    <FaCoffee />
                                </div>

                            </div>


                            <div className={styles.content}>

                                <h2 className={styles.cardTitle}>
                                    {experience.title[language]}
                                </h2>


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
                                            {text.smallGroups}
                                        </span>
                                    </div>

                                </div>


                                <p className={styles.description}>
                                    {experience.description[language]}
                                </p>


                                <div className={styles.includes}>

                                    <h3>
                                        {text.includes}
                                    </h3>

                                    <ul>

                                        {experience.includes[language].map(
                                            (item) => (
                                                <li key={item}>

                                                    <FaCheck />

                                                    <span>
                                                        {item}
                                                    </span>

                                                </li>
                                            )
                                        )}

                                    </ul>

                                </div>


                                <div className={styles.actions}>

                                    <a
                                        href="https://wa.me/573177987723?text=Hola,%20quiero%20reservar%20una%20experiencia%20de%20Arca%20Coffee."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="primary">

                                            <FaWhatsapp />

                                            {text.reserve}

                                        </Button>
                                    </a>

                                </div>

                            </div>

                        </div>


                        {experience.gallery.length > 0 && (

                            <div className={styles.gallerySection}>

                                <h3 className={styles.galleryTitle}>
                                    {text.gallery}
                                </h3>

                                <div className={styles.gallery}>

                                    {experience.gallery.map(
                                        (image, imageIndex) => (

                                            <img
                                                key={imageIndex}
                                                src={image}
                                                alt={`${experience.title[language]} ${imageIndex + 1}`}
                                            />

                                        )
                                    )}

                                </div>

                            </div>

                        )}

                    </section>

                ))}

            </div>

        </main>
    );
}

export default Experiences;