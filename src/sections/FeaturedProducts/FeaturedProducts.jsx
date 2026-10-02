import { useState } from "react";

import styles from "./FeaturedProducts.module.css";
import ProductCard from "../../components/ProductCard";

import productsData from "../../data/productsData";
import origenesData from "../../data/origenesData";
import espressoData from "../../data/espressoData";
import metodosData from "../../data/metodosData";
import autorData from "../../data/autorData";
import coctelesData from "../../data/coctelesData";

import { useLanguage } from "../../context/LanguageContext";
import Carousel from "../../components/Carousel";
import ImageModal from "../../components/ImageModal";


function FeaturedProducts() {
    const { language } = useLanguage();


    const [isOriginsModalOpen, setIsOriginsModalOpen] = useState(false);
    const [isEspressoModalOpen, setIsEspressoModalOpen] = useState(false);
    const [isMethodsModalOpen, setIsMethodsModalOpen] = useState(false);
    const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
    const [isCocktailsModalOpen, setIsCocktailsModalOpen] = useState(false);

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
                                            : product.id === 2
                                                ? () => setIsEspressoModalOpen(true)
                                                : product.id === 3
                                                    ? () => setIsMethodsModalOpen(true)
                                                    : product.id === 4
                                                        ? () => setIsAuthorModalOpen(true)
                                                        : product.id === 5
                                                            ? () => setIsCocktailsModalOpen(true)
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

            <ImageModal
                isOpen={isEspressoModalOpen}
                slides={espressoData}
                onClose={() => setIsEspressoModalOpen(false)}
            />

            <ImageModal
                isOpen={isMethodsModalOpen}
                slides={metodosData}
                onClose={() => setIsMethodsModalOpen(false)}
                variant="methods"
            />
            <ImageModal
                isOpen={isAuthorModalOpen}
                slides={autorData}
                onClose={() => setIsAuthorModalOpen(false)}
                variant="methods"
            />
            <ImageModal
                isOpen={isCocktailsModalOpen}
                slides={coctelesData}
                onClose={() => setIsCocktailsModalOpen(false)}
                variant="methods"
            />
        </>
    );


}

export default FeaturedProducts;
