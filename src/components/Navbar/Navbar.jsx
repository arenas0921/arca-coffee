import { Container } from "..";
import navLinks from "../../data/navLinks";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo/logo2.png";
import useScroll from "../../hooks/useScroll";
import { useLanguage } from "../../context/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu";
import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
    const isScrolled = useScroll();
    const { language, toggleLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // Solo Experiencias inicia con el navbar sólido.
    const isExperiencesPage =
        location.pathname === "/experiencias";

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);


    // Lleva a una sección del Home.
    // Los valores cambian únicamente en móvil.
    const scrollToSection = (targetId) => {
        const element = document.getElementById(targetId);

        if (!element) return;

        const isMobile = window.innerWidth <= 600;

        let navbarHeight;

        if (isMobile) {
            // Ajustes específicos para móvil.
            if (targetId === "mirador") {
                navbarHeight = 50;
            } else if (targetId === "ubicacion") {
                navbarHeight = 30;
            } else {
                navbarHeight = 20;
            }
        } else {
            // Desktop se mantiene como estaba.
            navbarHeight = 20;
        }

        const elementPosition =
            element.getBoundingClientRect().top +
            window.scrollY;

        window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
        });
    };


    // Maneja los enlaces del menú que apuntan
    // a secciones del Home.
    const handleScrollNavigation = (href) => {
        const targetId = href.replace("/#", "");

        // Si ya estamos en el Home,
        // hacemos scroll directamente.
        if (location.pathname === "/") {
            scrollToSection(targetId);
            return;
        }

        // Si estamos en otra página,
        // primero volvemos al Home.
        navigate("/");

        // Esperamos a que el Home se monte.
        setTimeout(() => {
            scrollToSection(targetId);
        }, 100);
    };


    // Maneja el logo.
    const handleLogoClick = (event) => {
        event.preventDefault();

        // Si ya estamos en el Home,
        // simplemente subimos al inicio.
        if (location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            return;
        }

        // Si estamos en otra página,
        // volvemos al Home.
        navigate("/");

        // Esperamos a que el Home se monte
        // y subimos al inicio.
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 100);
    };


    return (
        <>
            <header
                className={`${styles.navbar} ${isScrolled || isExperiencesPage
                        ? styles.scrolled
                        : ""
                    }`}
            >
                <Container>

                    <div className={styles.content}>

                        <Link
                            to="/"
                            className={styles.logo}
                            onClick={handleLogoClick}
                        >
                            <img
                                src={logo}
                                alt="Arca Coffee"
                            />
                        </Link>


                        <nav className={styles.navigation}>
                            <ul>

                                {navLinks.map((link) => (

                                    <li key={link.href}>

                                        {link.type === "whatsapp" ? (

                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.label[language]}

                                                <FaWhatsapp
                                                    size={18}
                                                    style={{
                                                        marginLeft: "6px",
                                                        flexShrink: 0,
                                                    }}
                                                />
                                            </a>

                                        ) : link.type === "route" ? (

                                            <Link to={link.href}>
                                                {link.label[language]}
                                            </Link>

                                        ) : (

                                            <a
                                                href={link.href}
                                                onClick={(event) => {
                                                    event.preventDefault();

                                                    handleScrollNavigation(
                                                        link.href
                                                    );
                                                }}
                                            >
                                                {link.label[language]}
                                            </a>

                                        )}

                                    </li>

                                ))}

                            </ul>
                        </nav>


                        <div className={styles.actions}>

                            <button
                                className={styles.languageButton}
                                onClick={toggleLanguage}
                            >
                                {language === "es"
                                    ? "EN"
                                    : "ES"}
                            </button>


                            <button
                                className={styles.menuButton}
                                onClick={() =>
                                    setIsMenuOpen(!isMenuOpen)
                                }
                                aria-label={
                                    language === "es"
                                        ? "Abrir menú"
                                        : "Open menu"
                                }
                            >
                                <Menu
                                    size={24}
                                    strokeWidth={2.2}
                                />
                            </button>

                        </div>

                    </div>

                </Container>
            </header>


            {isMenuOpen && (
                <MobileMenu
                    onClose={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
}

export default Navbar;