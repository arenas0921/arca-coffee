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
    const [isReservationOpen, setIsReservationOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // =====================================================
    // PÁGINAS QUE INICIAN CON EL NAVBAR SÓLIDO
    // =====================================================

    const isExperiencesPage =
        location.pathname === "/experiencias";

    const isProductPage =
        location.pathname.startsWith("/tienda/");

    const isSolidNavbar =
        isScrolled ||
        isExperiencesPage ||
        isProductPage;


    useEffect(() => {
        if (isMenuOpen || isReservationOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen, isReservationOpen]);


    // =====================================================
    // SCROLL HACIA SECCIONES DEL HOME
    // =====================================================

    const scrollToSection = (targetId) => {
        const element = document.getElementById(targetId);

        if (!element) return;

        const isMobile = window.innerWidth <= 600;

        let navbarHeight;

        if (isMobile) {
            if (targetId === "mirador") {
                navbarHeight = 50;
            } else if (targetId === "ubicacion") {
                navbarHeight = 30;
            } else {
                navbarHeight = 20;
            }
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


    // =====================================================
    // NAVEGACIÓN HACIA SECCIONES DEL HOME
    // =====================================================

    const handleScrollNavigation = (href) => {
        const targetId = href.replace("/#", "");

        if (location.pathname === "/") {
            scrollToSection(targetId);
            return;
        }

        navigate("/");

        setTimeout(() => {
            scrollToSection(targetId);
        }, 100);
    };


    // =====================================================
    // RESERVA POR WHATSAPP
    // =====================================================

    const handleReservation = (href) => {
        setIsReservationOpen(false);

        const message = encodeURIComponent(
            "Quiero reservar en Arca Coffee"
        );

        const separator = href.includes("?")
            ? "&"
            : "?";

        const whatsappUrl =
            `${href}${separator}text=${message}`;

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };


    // =====================================================
    // LOGO
    // =====================================================

    const handleLogoClick = (event) => {
        event.preventDefault();

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
        }, 100);
    };


    return (
        <>
            <header
                className={`${styles.navbar} ${isSolidNavbar
                    ? styles.scrolled
                    : ""
                    }`}
            >
                <Container>

                    <div className={styles.content}>

                        {/* =========================
                            LOGO
                           ========================= */}

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


                        {/* =========================
                            NAVEGACIÓN
                           ========================= */}

                        <nav className={styles.navigation}>
                            <ul>

                                {navLinks.map((link) => (

                                    <li key={link.href}>

                                        {link.type === "whatsapp" ? (

                                            <a
                                                href={link.href}
                                                onClick={(event) => {
                                                    event.preventDefault();

                                                    setIsReservationOpen(
                                                        true
                                                    );
                                                }}
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


                        {/* =========================
                            ACCIONES
                           ========================= */}

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


            {/* =========================
                MENÚ MÓVIL
               ========================= */}

            {isMenuOpen && (
                <MobileMenu
                    onClose={() => setIsMenuOpen(false)}
                />
            )}


            {/* =========================
                CONFIRMACIÓN DE RESERVA
               ========================= */}

            {isReservationOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px",
                        background:
                            "rgba(42, 27, 18, 0.58)",
                    }}
                    onClick={() =>
                        setIsReservationOpen(false)
                    }
                >

                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="reservation-title"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                        style={{
                            width: "100%",
                            maxWidth: "420px",
                            padding: "32px 28px 28px",
                            boxSizing: "border-box",
                            background: "#E8D8C5",
                            border: "3.5px solid #2a1b12",
                            borderRadius: "16px",
                            textAlign: "center",
                            boxShadow:
                                "0 18px 50px rgba(42, 27, 18, 0.28)",
                        }}
                    >

                        <FaWhatsapp
                            size={30}
                            style={{
                                color: "#2a1b12",
                                marginBottom: "14px",
                            }}
                        />

                        <h2
                            id="reservation-title"
                            style={{
                                margin: "0 0 10px",
                                fontFamily:
                                    "var(--font-heading)",
                                fontSize: "1.55rem",
                                lineHeight: 1.2,
                                color: "var(--color-text)",
                            }}
                        >
                            {language === "es"
                                ? "¿Seguro que quieres reservar?"
                                : "Are you sure you want to book?"}
                        </h2>

                        <p
                            style={{
                                margin: "0 auto 24px",
                                maxWidth: "320px",
                                fontFamily:
                                    "var(--font-body)",
                                fontSize: "0.92rem",
                                lineHeight: 1.5,
                                color:
                                    "rgba(42, 27, 18, 0.72)",
                            }}
                        >
                            {language === "es"
                                ? "Te llevaremos a WhatsApp para completar tu reserva en Arca Coffee."
                                : "You will be taken to WhatsApp to complete your reservation at Arca Coffee."}
                        </p>


                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                justifyContent: "center",
                            }}
                        >

                            <button
                                type="button"
                                onClick={() =>
                                    setIsReservationOpen(false)
                                }
                                style={{
                                    flex: 1,
                                    padding: "11px 14px",
                                    border: "1px solid #2a1b12",
                                    borderRadius: "7px",
                                    background:
                                        "transparent",
                                    color: "#2a1b12",
                                    fontFamily:
                                        "var(--font-body)",
                                    fontSize: "0.86rem",
                                    cursor: "pointer",
                                }}
                            >
                                {language === "es"
                                    ? "Cancelar"
                                    : "Cancel"}
                            </button>


                            <button
                                type="button"
                                onClick={() => {
                                    const reservationLink =
                                        navLinks.find(
                                            (item) =>
                                                item.type ===
                                                "whatsapp"
                                        );

                                    if (
                                        reservationLink
                                    ) {
                                        handleReservation(
                                            reservationLink.href
                                        );
                                    }
                                }}
                                style={{
                                    flex: 1,
                                    padding: "11px 14px",
                                    border: "1px solid #2a1b12",
                                    borderRadius: "7px",
                                    background:
                                        "#2a1b12",
                                    color: "#F5EFE7",
                                    fontFamily:
                                        "var(--font-body)",
                                    fontSize: "0.86rem",
                                    cursor: "pointer",
                                }}
                            >
                                {language === "es"
                                    ? "Sí, reservar"
                                    : "Yes, book"}
                            </button>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
}

export default Navbar;