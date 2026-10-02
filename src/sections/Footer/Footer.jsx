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

                    <a
                        href="https://www.facebook.com/share/1CJZqB6Xap/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <span
                        className={styles.socialButton}
                        aria-label="TikTok"
                    >
                        <FaTiktok />
                    </span>

                </div>

                <div className={styles.divider} />

                <a
                    href="https://wa.me/573222190438?text=Hola%2C%20quiero%20info%20sobre%20Arca%20Coffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialButton} ${styles.whatsapp}`}
                    aria-label="Contactar Arca Coffee por WhatsApp"

                >

                    
                    <FaWhatsapp />
                

                </a>


                <p className={styles.copyright}>
                    © 2026 Arca Coffee
                </p>

            </div>
        </footer>
    );
}

export default Footer;