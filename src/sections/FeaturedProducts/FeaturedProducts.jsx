import styles from "./FeaturedProducts.module.css";
import ProductCard from "../../components/ProductCard";

import productsData from "../../data/productsData";
import { useLanguage } from "../../context/LanguageContext";
import Carousel from "../../components/Carousel";

function FeaturedProducts() {
    const { language } = useLanguage();
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>
                {language === "es" ? "Productos Destacados" : "Featured Products"}
            </h2>

            <Carousel>
                <div className={styles.grid}>
                    {productsData.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title[language]}
                            description={product.description[language]}
                        />
                    ))}
                </div>
            </Carousel>
        </section>
    );
}

export default FeaturedProducts;