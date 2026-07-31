import styles from "./ExperiencesPreview.module.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import previewImage from "../../assets/images/experiences/c14.jpg";

function ExperiencesPreview() {
    return (
        <section
            id="experiencias-preview"
            className={styles.section}
        >
            <div className={styles.container}>

                <h2 className={styles.title}>
                    Vive la experiencia del café
                </h2>

                <article className={styles.card}>

                    <div className={styles.image}>
                        <img
                            src={previewImage}
                            alt="Cata de café en Arca Coffee"

                        />
                    </div>

                    <div className={styles.content}>

                        <span className={styles.tag}>
                            ☕ Nuestra experiencia principal
                        </span>

                        <h3 className={styles.cardTitle}>
                            Cata de Café
                        </h3>

                        <p className={styles.cardDescription}>
                            Recorre la finca, conoce el proceso de producción,
                            aprende sobre el café de especialidad y finaliza con
                            una cata guiada mientras disfrutas del paisaje de Arca Coffee.
                        </p>

                        <ul className={styles.features}>
                            <li>🌱 Recorrido por la finca</li>
                            <li>☕ Proceso del café</li>
                            <li>👃 Cata guiada</li>
                            <li>🌄 Entorno natural</li>
                        </ul>

                        <Link to="/experiencias">
                            <Button variant="primary">
                                Ir a experiencias
                            </Button>
                        </Link>

                        <a
                            href="https://wa.me/573001112233"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="whatsapp">
                                Reservar por WhatsApp
                            </Button>
                        </a>

                    </div>

                </article>

            </div>
        </section>
    );
}

export default ExperiencesPreview;