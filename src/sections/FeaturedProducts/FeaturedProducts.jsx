import styles from "./FeaturedProducts.module.css";
import ProductCard from "../../components/ProductCard";

import productsData from "../../data/productsData";
import { useLanguage } from "../../context/LanguageContext";
import Carousel from "../../components/Carousel";

function FeaturedProducts() {
    const { language } = useLanguage();
    return (
        <section className={styles.section}>

            <div className={styles.content}>

                <h2 className={styles.title}>
                    {language === "es"
                        ? "Nuestra manera de hacer las cosas"
                        : "Our way of doing things"}
                </h2>

                <Carousel>
                    <div className={styles.grid}>
                        {productsData.map((product) => (
                            <ProductCard
                                key={product.id}
                                image={product.image}
                                title={product.title[language]}
                                subtitle={product.subtitle?.[language]}
                            />
                        ))}
                    </div>
                </Carousel>

            </div>

        </section>
    );
}

export default FeaturedProducts;