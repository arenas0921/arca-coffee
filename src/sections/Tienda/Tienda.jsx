import ProductCard from "../../components/ProductCard";
import Carousel from "../../components/Carousel";

import tiendaData from "../../data/tiendaData";

import { useLanguage } from "../../context/LanguageContext";

import styles from "./Tienda.module.css";


function Tienda() {

    const { language } = useLanguage();

    return (
        <section
            id="tienda"
            className={styles.section}
        >

            <div className={styles.content}>

                <h2 className={styles.title}>
                    {language === "es"
                        ? "Tienda"
                        : "Shop"}
                </h2>


                <Carousel>

                    <div className={styles.grid}>

                        {tiendaData.map((product) => (

                            <ProductCard
                                key={product.id}

                                variant="store"

                                image={product.image}

                                title={product.title[language]}

                                subtitle={product.variety[language]}

                                buttonText={
                                    language === "es"
                                        ? "Ver producto"
                                        : "View product"
                                }

                                productLink={`/tienda/${product.slug}`}
                            />

                        ))}

                    </div>

                </Carousel>

            </div>

        </section>
    );
}


export default Tienda;