import { useEffect, useState } from "react";
import experiences from "../../data/experiences";
import styles from "./Experiences.module.css";
import Button from "../../components/Button";
import ImageModal from "../../components/ImageModal";
import { useLanguage } from "../../context/LanguageContext";
import { useLocation } from "react-router-dom";

import {
    FaWhatsapp,
    FaClock,
    FaUsers,
    FaCoffee,
    FaCheck
} from "react-icons/fa";


function ExperienceGallery({ experience, language, galleryTitle }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const gallery = experience.gallery || [];


    useEffect(() => {

        if (gallery.length <= 1) return;

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

    }, [gallery.length]);


    if (gallery.length === 0) {
        return null;
    }


    const previousImage = () => {

        setCurrentIndex((prev) =>
            prev === 0
                ? gallery.length - 1
                : prev - 1
        );

    };


    const nextImage = () => {

        setCurrentIndex((prev) =>
            prev === gallery.length - 1
                ? 0
                : prev + 1
        );

    };


    return (
        <>
            <div className={styles.gallerySection}>

                <h3 className={styles.galleryTitle}>
                    {galleryTitle}
                </h3>


                <div className={styles.gallery}>

                    {gallery.length > 1 && (
                        <button
                            className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`}
                            onClick={previousImage}
                            aria-label={
                                language === "es"
                                    ? "Imagen anterior"
                                    : "Previous image"
                            }
                        >
                            ‹
                        </button>
                    )}


                    <button
                        className={styles.galleryImageButton}
                        onClick={() => setIsModalOpen(true)}
                    >

                        <img
                            src={gallery[currentIndex]}
                            alt={`${experience.title[language]} ${currentIndex + 1}`}
                            className={styles.galleryImage}
                        />

                    </button>


                    {gallery.length > 1 && (
                        <button
                            className={`${styles.galleryArrow} ${styles.galleryArrowRight}`}
                            onClick={nextImage}
                            aria-label={
                                language === "es"
                                    ? "Imagen siguiente"
                                    : "Next image"
                            }
                        >
                            ›
                        </button>
                    )}

                </div>

            </div>


            <ImageModal
                isOpen={isModalOpen}
                images={gallery}
                currentIndex={currentIndex}
                alt={experience.title[language]}
                onClose={() => setIsModalOpen(false)}
            />

        </>
    );
}



function Experiences() {

    const { language } = useLanguage();
    const location = useLocation();


    const content = {

        es: {
            title: "Experiencias",

            intro:
                "Entra tomando café. Sal entendiéndolo.",

            includes:
                "Qué incluye",

            gallery:
                "Galería",

            reserve:
                "Reservar por WhatsApp",

            experience:
                "EXPERIENCIA",

            smallGroups:
                "Grupos pequeños"
        },


        en: {
            title: "Experiences",

            intro:
                "Come in drinking coffee. Leave understanding it.",

            includes:
                "What's included",

            gallery:
                "Gallery",

            reserve:
                "Book through WhatsApp",

            experience:
                "EXPERIENCE",

            smallGroups:
                "Small groups"
        }

    };


    const text = content[language];


    useEffect(() => {

        const targetId =
            location.hash.replace("#", "");


        const scrollToTarget = () => {

            if (!targetId) {

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

                return;
            }


            const element =
                document.getElementById(targetId);


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


        requestAnimationFrame(() => {

            requestAnimationFrame(
                scrollToTarget
            );

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


                {experiences.map(
                    (experience, index) => (

                        <section
                            key={experience.id}
                            id={experience.slug}
                            className={styles.experience}
                        >


                            <div
                                className={
                                    styles.experienceHeader
                                }
                            >

                                <span
                                    className={
                                        styles.number
                                    }
                                >
                                    {String(index + 1).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>


                                <span
                                    className={
                                        styles.experienceLabel
                                    }
                                >
                                    {text.experience}
                                </span>

                            </div>


                            <div className={styles.card}>


                                <div
                                    className={
                                        styles.imageWrapper
                                    }
                                >

                                    <img
                                        src={
                                            experience.image
                                        }
                                        alt={
                                            experience.title[
                                            language
                                            ]
                                        }
                                        className={
                                            styles.image
                                        }
                                    />


                                    <div
                                        className={
                                            styles.imageBadge
                                        }
                                    >
                                        <FaCoffee />
                                    </div>

                                </div>


                                <div
                                    className={
                                        styles.content
                                    }
                                >


                                    <h2
                                        className={
                                            styles.cardTitle
                                        }
                                    >
                                        {
                                            experience.title[
                                            language
                                            ]
                                        }
                                    </h2>


                                    <div
                                        className={
                                            styles.meta
                                        }
                                    >

                                        <div
                                            className={
                                                styles.metaItem
                                            }
                                        >

                                            <FaClock />

                                            <span>
                                                {
                                                    experience
                                                        .duration[
                                                    language
                                                    ]
                                                }
                                            </span>

                                        </div>


                                        <div
                                            className={
                                                styles.metaItem
                                            }
                                        >

                                            <FaUsers />

                                            <span>
                                                {
                                                    text.smallGroups
                                                }
                                            </span>

                                        </div>

                                    </div>


                                    <p
                                        className={
                                            styles.description
                                        }
                                    >
                                        {
                                            experience
                                                .description[
                                            language
                                            ]
                                        }
                                    </p>


                                    {/* MODALIDADES — SOLO EXPERIENCIA 03 */}

                                    {experience.modalities && (
                                        <div
                                            className={
                                                styles.modalities
                                            }
                                        >

                                            {experience.modalities[
                                                language
                                            ].map(
                                                (modality, modalityIndex) => (

                                                    <div
                                                        key={
                                                            modalityIndex
                                                        }
                                                        className={
                                                            styles.modality
                                                        }
                                                    >

                                                        <h3
                                                            className={
                                                                styles.modalityTitle
                                                            }
                                                        >
                                                            {
                                                                modality.title
                                                            }
                                                        </h3>


                                                        <p
                                                            className={
                                                                styles.modalitySubtitle
                                                            }
                                                        >
                                                            {
                                                                modality.subtitle
                                                            }
                                                        </p>


                                                        <p
                                                            className={
                                                                styles.modalityDescription
                                                            }
                                                        >
                                                            {
                                                                modality.description
                                                            }
                                                        </p>


                                                        <p
                                                            className={
                                                                styles.modalityIdeal
                                                            }
                                                        >
                                                            <strong>
                                                                {language === "es"
                                                                    ? "Ideal para: "
                                                                    : "Ideal for: "}
                                                            </strong>

                                                            {
                                                                modality.idealFor
                                                            }
                                                        </p>

                                                    </div>

                                                )
                                            )}

                                        </div>
                                    )}


                                    <div
                                        className={
                                            styles.includes
                                        }
                                    >

                                        <h3>
                                            {text.includes}
                                        </h3>


                                        <ul>

                                            {
                                                experience
                                                    .includes[
                                                    language
                                                ]
                                                    .map(
                                                        (
                                                            item
                                                        ) => (

                                                            <li
                                                                key={
                                                                    item
                                                                }
                                                            >

                                                                <FaCheck />

                                                                <span>
                                                                    {
                                                                        item
                                                                    }
                                                                </span>

                                                            </li>

                                                        )
                                                    )
                                            }

                                        </ul>

                                    </div>


                                    <div
                                        className={
                                            styles.actions
                                        }
                                    >

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


                            <ExperienceGallery
                                experience={experience}
                                language={language}
                                galleryTitle={text.gallery}
                            />

                        </section>

                    )
                )}

            </div>

        </main>

    );
}


export default Experiences;