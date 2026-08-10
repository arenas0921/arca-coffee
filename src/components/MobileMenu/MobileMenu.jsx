import styles from "./MobileMenu.module.css";
import navLinks from "../../data/navLinks";
import { useLanguage } from "../../context/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo/logo2.png";

function MobileMenu({ onClose }) {
    const { language, toggleLanguage } = useLanguage();

    const location = useLocation();
    const navigate = useNavigate();


    // Lleva a una sección específica del Home.
    const scrollToSection = (targetId) => {
        const element = document.getElementById(targetId);

        if (!element) return;

        let navbarHeight;

        if (targetId === "mirador") {
            navbarHeight = 50;
        } else if (targetId === "ubicacion") {
            navbarHeight = 30;
        } else {
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


    // Maneja los enlaces del menú móvil
    // que apuntan a secciones del Home.
    const handleScrollNavigation = (href) => {
        const targetId = href.replace("/#", "");

        // Cerramos el menú primero.
        onClose();

        // Si ya estamos en Home,
        // hacemos scroll directamente.
        if (location.pathname === "/") {
            setTimeout(() => {
                scrollToSection(targetId);
            }, 50);

            return;
        }

        // Si estamos en otra página,
        // volvemos primero al Home.
        navigate("/");

        // Esperamos a que Home se monte.
        setTimeout(() => {
            scrollToSection(targetId);
        }, 150);
    };


    // Logo → Home al inicio.
    const handleLogoClick = (event) => {
        event.preventDefault();

        onClose();

        if (location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            return;
        }

        navigate("/");

        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 150);
    };


    return (
        <div
            className={styles.overlay}
            onClick={onClose}
        >
            <aside
                className={styles.menu}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.header}>

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


                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label={
                            language === "es"
                                ? "Cerrar menú"
                                : "Close menu"
                        }
                    >
                        <X
                            size={24}
                            strokeWidth={1.8}
                        />
                    </button>

                </div>


                <div className={styles.divider} />


                <nav>
                    <ul className={styles.list}>

                        {navLinks.map((link) => (

                            <li key={link.href}>

                                {link.type === "whatsapp" ? (

                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={onClose}
                                    >
                                        <span>
                                            {link.label[language]}
                                        </span>

                                        <FaWhatsapp
                                            size={21}
                                            className={
                                                styles.whatsappIcon
                                            }
                                        />
                                    </a>

                                ) : link.type === "route" ? (

                                    <Link
                                        to={link.href}
                                        onClick={onClose}
                                    >
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


                <div className={styles.footer}>

                    <button
                        className={styles.languageButton}
                        onClick={toggleLanguage}
                    >
                        {language === "es"
                            ? "ES"
                            : "EN"}
                    </button>


                    <span className={styles.footerText}>
                        ARCA COFFEE
                    </span>

                </div>

            </aside>
        </div>
    );
}

export default MobileMenu;