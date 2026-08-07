import { Container } from "..";
import navLinks from "../../data/navLinks";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo/logo2.png";
import useScroll from "../../hooks/useScroll";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu";
import { Menu } from "lucide-react";

function Navbar() {
    const isScrolled = useScroll();
    const { language, toggleLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    return (
        <header
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""
                }`}
        >
            <Container>
                <div className={styles.content}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="Arca Coffee" />
                    </Link>

                    <nav className={styles.navigation}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    {link.type === "route" ? (
                                        <Link to={link.href}>
                                            {link.label[language]}
                                        </Link>
                                    ) : (
                                        <a href={link.href}>
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
                            {language === "es" ? "EN" : "ES"}
                        </button>
                        <button
                            className={styles.menuButton}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Abrir menú"
                        >
                            <Menu size={24} strokeWidth={2.2} />
                        </button>
                    </div>
                </div>
            </Container>
            {isMenuOpen && (
                <MobileMenu
                    onClose={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    );
}

export default Navbar;