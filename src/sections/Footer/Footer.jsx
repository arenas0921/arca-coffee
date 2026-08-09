import styles from "./Footer.module.css";

import {
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaWhatsapp,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>

                <div className={styles.socials}>
                    <span className={styles.socialButton} aria-label="Instagram">
                        <FaInstagram />
                    </span>

                    <span className={styles.socialButton} aria-label="Facebook">
                        <FaFacebookF />
                    </span>

                    <span className={styles.socialButton} aria-label="TikTok">
                        <FaTiktok />
                    </span>
                </div>

                <div className={styles.divider} />

                <span
                    className={`${styles.socialButton} ${styles.whatsapp}`}
                    aria-label="WhatsApp"
                >
                    <FaWhatsapp />
                </span>

                <p className={styles.copyright}>
                    © 2026 Arca Coffee
                </p>

            </div>
        </footer>
    );
}

export default Footer;