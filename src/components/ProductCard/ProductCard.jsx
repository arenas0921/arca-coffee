import styles from "./ProductCard.module.css";

function ProductCard({ image, title, description }) {
    return (
        <article className={styles.card}>
            <img
                src={image}
                alt={title}
                className={styles.image}
            />

            <div className={styles.content}>
                <h3 className={styles.title}>
                    {title}
                </h3>

                <p className={styles.description}>
                    {description}
                </p>

                <button className={styles.link}>
                    <span className={styles.linkText}>
                        Descubrir
                    </span>

                    <span className={styles.arrow}>
                        →
                    </span>
                </button>
            </div>
        </article>
    );
}

export default ProductCard;