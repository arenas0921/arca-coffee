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

                    <a
                        href="https://www.instagram.com/arcacoffeespecial?igsi=MXh5NGt6MGoxYmN1Ng%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <span
                        className={styles.socialButton}
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </span>

                    <span
                        className={styles.socialButton}
                        aria-label="TikTok"
                    >
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