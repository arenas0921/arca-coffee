import { Container } from "..";
import navLinks from "../../data/navLinks";

import styles from "./Navbar.module.css";
import logo from "../../assets/logo/logo.jpg";
import useScroll from "../../hooks/useScroll";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
    const isScrolled = useScroll();
    const { language, toggleLanguage } = useLanguage();
    return (
        <header
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""
                }`}
        >
            <Container>
                <div className={styles.content}>
                    <a href="/" className={styles.logo}>
                        <img src={logo} alt="Arca Coffee" />
                    </a>

                    <nav className={styles.navigation}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href}>
                                        {link.label[language]}
                                    </a>
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
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Navbar;