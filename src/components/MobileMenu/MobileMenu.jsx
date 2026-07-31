import styles from "./MobileMenu.module.css";
import navLinks from "../../data/navLinks";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

function MobileMenu({ onClose }) {
    const { language } = useLanguage();

    return (
        <div className={styles.overlay} onClick={onClose}>
            <aside
                className={styles.menu}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Cerrar menú"
                >
                    <X size={24} strokeWidth={2.2} />
                </button>

                <nav>
                    <ul className={styles.list}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                {link.type === "route" ? (
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
            </aside>
        </div>
    );
}

export default MobileMenu;