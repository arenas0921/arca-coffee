import { useNavigate } from "react-router-dom";

import styles from "./ProductCard.module.css";


function ProductCard({
    image,
    title,
    subtitle,
    footerText,
    onClick,
    variant,
    buttonText,
    onButtonClick,
    productLink,
}) {

    const navigate = useNavigate();


    return (
        <article
            className={`${styles.card} ${variant === "store"
                    ? styles.storeCard
                    : ""
                }`}
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

                {buttonText && (

                    <button
                        type="button"
                        className={styles.footerButton}
                        onClick={(event) => {

                            event.stopPropagation();


                            if (productLink) {
                                navigate(productLink);
                                return;
                            }


                            if (onButtonClick) {
                                onButtonClick();
                            }

                        }}
                    >
                        {buttonText}
                    </button>

                )}


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