import { useState } from "react";

import styles from "./FeaturedProducts.module.css";
import ProductCard from "../../components/ProductCard";

import productsData from "../../data/productsData";
import origenesData from "../../data/origenesData";

import { useLanguage } from "../../context/LanguageContext";
import Carousel from "../../components/Carousel";
import ImageModal from "../../components/ImageModal";

function FeaturedProducts() {
    const { language } = useLanguage();

    const [isOriginsModalOpen, setIsOriginsModalOpen] = useState(false);

    return (
        <>
            <section id="productos" className={styles.section}>
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
                                    onClick={
                                        product.id === 1
                                            ? () => setIsOriginsModalOpen(true)
                                            : undefined
                                    }
                                />
                            ))}
                        </div>
                    </Carousel>

                </div>
            </section>

            <ImageModal
                isOpen={isOriginsModalOpen}
                slides={origenesData}
                onClose={() => setIsOriginsModalOpen(false)}
            />
        </>
    );
}

export default FeaturedProducts;