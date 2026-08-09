import styles from "./ProductCard.module.css";

function ProductCard({
    image,
    title,
    subtitle,
    footerText,
    onClick,
}) {
    return (
        <article
            className={styles.card}
            onClick={onClick}
        >
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {title}
                </h3>

                {subtitle && (
                    <>
                        <span className={styles.divider}></span>

                        <p className={styles.subtitle}>
                            {subtitle}
                        </p>
                    </>
                )}
            </div>

            <img
                className={styles.image}
                src={image}
                alt={title}
            />

            <div className={styles.footer}>
                {footerText && (
                    <p className={styles.footerText}>
                        {footerText}
                    </p>
                )}
            </div>
        </article>
    );
}

export default ProductCard;