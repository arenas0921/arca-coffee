import experiences from "../../data/experiences";
import styles from "./Experiences.module.css";
import Button from "../../components/Button";
import { FaWhatsapp } from "react-icons/fa";

function Experiences() {
    return (
        <main className={styles.page}>
            <h1 className={styles.title}>
                Experiencias
            </h1>

            {experiences.map((experience) => (
                <article
                    key={experience.id}
                    className={styles.card}
                >
                    <img
                        src={experience.image}
                        alt={experience.title}
                        className={styles.image}
                    />

                    <div className={styles.content}>

                        <h2>{experience.title}</h2>

                        <p className={styles.duration}>
                            ⏱ {experience.duration}
                        </p>

                        <p>
                            {experience.description}
                        </p>

                        <ul className={styles.includes}>
                            {experience.includes.map((item) => (
                                <li key={item}>
                                    ✓ {item}
                                </li>
                            ))}
                        </ul>

                        <div className={styles.buttons}>
                            <a
                                href="https://wa.me/573177987723?text=Hola,%20quiero%20reservar%20la%20experiencia%20de%20Arca%20Coffee."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="primary">
                                    <FaWhatsapp />
                                    Reservar
                                </Button>
                            </a>

                        </div>

                        <h3 className={styles.galleryTitle}>
                            Galería
                        </h3>

                        <div className={styles.gallery}>
                            {experience.gallery.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${experience.title} ${index + 1}`}
                                />
                            ))}
                        </div>

                    </div>
                </article>
            ))}
        </main>
    );
}

export default Experiences;