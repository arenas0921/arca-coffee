import { Button, Container } from "../../../../components";

import heroImage from "../../../../assets/images/hero/e9.jpg";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroData from "../../../../data/heroData";
import { useLanguage } from "../../../../context/LanguageContext";

import {
    MapPinned,
    Leaf,
    Coffee,
    Clock3,
    Bird
} from "lucide-react";

function V60Icon({ size = 20 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            {/* Cono V60 */}
            <path
                d="M6 5H20L17.2 14.8C16.8 16.2 15.5 17.2 14 17.2H12C10.5 17.2 9.2 16.2 8.8 14.8L6 5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Borde superior */}
            <path
                d="M5 5H21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            {/* Asa del V60 */}
            <path
                d="M19.5 7.5C23 6.5 24.5 8 23.5 10.5C23 11.8 21.8 12.8 19 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            {/* Estrías del V60 */}
            <path
                d="M8.2 7.5L10.7 15.3"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
            />

            <path
                d="M11 7.5L12 16"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
            />

            <path
                d="M14 7.5L13.5 16"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
            />

            <path
                d="M17 7.5L15 15.3"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
            />

            {/* Base entre V60 y jarra */}
            <path
                d="M9 17.5H17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            {/* Cuello de la jarra */}
            <path
                d="M9.5 18L10.5 20.5H15.5L16.5 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Jarra */}
            <path
                d="M10.5 20.5H15.5L18 26C18.5 27.2 17.6 28 16.4 28H9.6C8.4 28 7.5 27.2 8 26L10.5 20.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Asa de la jarra */}
            <path
                d="M17 21.5C21 20.5 22.5 22 21.8 24.5C21.4 26 20.1 26.8 18 26.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            {/* Café dentro de la jarra */}
            <path
                d="M9.2 25.5C11 24.8 14.5 24.8 16.8 25.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
            />
        </svg>
    );
}
function Hero() {
    const { language } = useLanguage();

    const handleLocationClick = () => {
        const element = document.getElementById("ubicacion");

        if (!element) return;

        const isMobile = window.innerWidth <= 600;

        const navbarHeight = isMobile ? 30 : 60;

        const elementPosition =
            element.getBoundingClientRect().top +
            window.scrollY;

        window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
        });
    };

    return (
        <section
            className={styles.hero}
            style={{
                backgroundImage: `url(${heroImage})`
            }}
        >
            <div className={styles.overlay}>

                <Container>

                    <div className={styles.content}>

                        {/*
                        <div className={styles.chips}>

                            <span className={styles.tag}>
                                <MapPinned size={14} />
                                {heroData.chips[language][0]}
                            </span>

                            <span className={styles.tag}>
                                <Leaf size={14} />
                                {heroData.chips[language][1]}
                            </span>

                            <span className={styles.tag}>
                                <Coffee size={14} />
                                {heroData.chips[language][2]}
                            </span>

                        </div>
                        */}


                        <h1>
                            {heroData.title[language]}
                        </h1>


                        <p>
                            {heroData.description[language]}
                        </p>


                        <div className={styles.actions}>

                            <a href="#productos">
                                <Button>
                                    <V60Icon size={24} />
                                    {heroData.buttons.primary[language]}
                                </Button>
                            </a>


                            <Link to="/experiencias">
                                <Button variant="outline">
                                    <Coffee size={18} />

                                    {heroData.buttons.secondary[language]}
                                </Button>
                            </Link>


                            <Button
                                onClick={handleLocationClick}
                            >
                                <MapPinned size={18} />

                                {heroData.buttons.location[language]}
                            </Button>

                        </div>


                        <div className={styles.footerInfo}>

                            {/* 1. Ubicación */}
                            <span>
                                <MapPinned size={16} />

                                {heroData.footer.location[language]}
                            </span>


                            {/* 2. Mirador */}
                            <span>
                                <Bird
                                    size={16}
                                    className={styles.miradorIcon}
                                />

                                {heroData.footer.valley[language]}
                            </span>


                            {/* 3. Horario */}
                            <span>
                                <Clock3 size={16} />

                                {heroData.footer.schedule[language]}
                            </span>

                        </div>

                    </div>

                </Container>

            </div>
        </section>
    );
}

export default Hero;