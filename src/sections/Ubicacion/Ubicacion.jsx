import styles from "./Ubicacion.module.css";

const LAT = 4.6411257;
const LNG = -75.5725345;

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

function Ubicacion() {
    return (
        <section className={styles.ubicacion} id="ubicacion">
            <div className={styles.header}>
                <span className={styles.eyebrow}>Ubicación</span>
                <h2>Salento, Quindío</h2>
            </div>

            <div className={styles.mapWrapper}>
                <iframe
                    className={styles.map}
                    title="Ubicación de Arca Coffee en Salento, Quindío"
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
                    aria-label="Abrir ubicación de Arca Coffee en Google Maps"
                >
                    Cómo llegar
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