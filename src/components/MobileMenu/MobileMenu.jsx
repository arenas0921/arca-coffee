import { useState } from "react";

import styles from "./MobileMenu.module.css";
import navLinks from "../../data/navLinks";
import { useLanguage } from "../../context/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo/logo2.png";

function MobileMenu({ onClose }) {
    const { language, toggleLanguage } = useLanguage();

    const [isReservationOpen, setIsReservationOpen] = useState(false);

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


    // =====================================================
    // RESERVA POR WHATSAPP
    // =====================================================

    const handleReservation = (href) => {
        setIsReservationOpen(false);
        onClose();

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
        <>
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
                                            onClick={(event) => {
                                                event.preventDefault();

                                                setIsReservationOpen(
                                                    true
                                                );
                                            }}
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


            {/* =====================================================
                CONFIRMACIÓN DE RESERVA
               ===================================================== */}

            {isReservationOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 10000,
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
                        aria-labelledby="mobile-reservation-title"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                        style={{
                            width: "100%",
                            maxWidth: "380px",
                            padding: "30px 24px 25px",
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
                            id="mobile-reservation-title"
                            style={{
                                margin: "0 0 10px",
                                fontFamily:
                                    "var(--font-heading)",
                                fontSize: "1.45rem",
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
                                margin: "0 auto 23px",
                                maxWidth: "300px",
                                fontFamily:
                                    "var(--font-body)",
                                fontSize: "0.88rem",
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
                            }}
                        >

                            <button
                                type="button"
                                onClick={() =>
                                    setIsReservationOpen(false)
                                }
                                style={{
                                    flex: 1,
                                    padding: "11px 12px",
                                    border: "1px solid #2a1b12",
                                    borderRadius: "7px",
                                    background:
                                        "transparent",
                                    color: "#2a1b12",
                                    fontFamily:
                                        "var(--font-body)",
                                    fontSize: "0.84rem",
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
                                    padding: "11px 12px",
                                    border: "1px solid #2a1b12",
                                    borderRadius: "7px",
                                    background:
                                        "#2a1b12",
                                    color: "#F5EFE7",
                                    fontFamily:
                                        "var(--font-body)",
                                    fontSize: "0.84rem",
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

export default MobileMenu;