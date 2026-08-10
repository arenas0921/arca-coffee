import styles from "./Ubicacion.module.css";
import { useLanguage } from "../../context/LanguageContext";

const LAT = 4.6411257;
const LNG = -75.5725345;

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

function Ubicacion() {
    const { language } = useLanguage();

    return (
        <section
            id="ubicacion"
            className={styles.ubicacion}
        >

            <div className={styles.header}>

                <span className={styles.eyebrow}>
                    {language === "es"
                        ? "Ubicación"
                        : "Location"}
                </span>

                <h2>
                    {language === "es"
                        ? "Ubicación"
                        : "Location"}
                </h2>

            </div>


            <div className={styles.mapWrapper}>

                <iframe
                    className={styles.map}
                    title={
                        language === "es"
                            ? "Ubicación de Arca Coffee en Salento, Quindío"
                            : "Arca Coffee location in Salento, Quindío"
                    }
                    src={`https://www.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />


                <a
                    className={styles.mapButton}
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                        language === "es"
                            ? "Abrir ubicación de Arca Coffee en Google Maps"
                            : "Open Arca Coffee location in Google Maps"
                    }
                >
                    {language === "es"
                        ? "Cómo llegar"
                        : "Get directions"}

                    <span>↗</span>
                </a>

            </div>


            <div className={styles.locationLabel}>

                <span>⌖</span>

                SALENTO, QUINDÍO, COLOMBIA

            </div>

        </section>
    );
}

export default Ubicacion;