import styles from "./MobileMenu.module.css";
import navLinks from "../../data/navLinks";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo/logo2.png";

function MobileMenu({ onClose }) {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className={styles.overlay} onClick={onClose}>
            <aside
                className={styles.menu}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.header}>
                    <Link
                        to="/"
                        className={styles.logo}
                        onClick={onClose}
                    >
                        <img src={logo} alt="Arca Coffee" />
                    </Link>

                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Cerrar menú"
                    >
                        <X size={24} strokeWidth={1.8} />
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
                                        className={styles.whatsapp}
                                    >
                                        <span>
                                            {link.label[language]}
                                        </span>

                                        <FaWhatsapp size={21} />
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
                                        onClick={onClose}
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
                        {language === "es" ? "ES" : "EN"}
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