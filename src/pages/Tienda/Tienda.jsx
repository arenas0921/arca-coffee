import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styles from "./Tienda.module.css";
import tiendaData from "../../data/tiendaData";

import { useLanguage } from "../../context/LanguageContext";

import ProductCard from "../../components/ProductCard";
import Carousel from "../../components/Carousel";
import ImageModal from "../../components/ImageModal";
import Footer from "../../sections/Footer";

import { FaWhatsapp } from "react-icons/fa";

function Tienda() {

    const { slug } = useParams();

    const navigate = useNavigate();

    const { language } = useLanguage();

    const product = tiendaData.find(
        (item) => item.slug === slug
    );

    const [selectedSize, setSelectedSize] = useState("500");

    const [coffeeType, setCoffeeType] = useState("ground");

    const [quantity, setQuantity] = useState(1);

    const [selectedImage, setSelectedImage] = useState("product");

    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);


    /* =========================
       VOLVER AL INICIO
       ========================= */

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });

    }, [slug]);


    /* =========================
       BLOQUEAR SCROLL AL ABRIR
       EL DIÁLOGO DE PEDIDO
       ========================= */

    useEffect(() => {

        if (isOrderModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };

    }, [isOrderModalOpen]);


    /* =========================
       PRODUCTO NO ENCONTRADO
       ========================= */

    if (!product) {

        return (
            <main className={styles.notFound}>

                <h1>
                    {language === "es"
                        ? "Producto no encontrado"
                        : "Product not found"}
                </h1>

            </main>
        );

    }


    /* =========================
       TAMAÑOS
       ========================= */

    const sizeLabels = {

        "500": {
            es: "500 g",
            en: "500 g",
        },

        "250": {
            es: "250 g",
            en: "250 g",
        },

        "125": {
            es: "125 g",
            en: "125 g",
        },

    };


    /* =========================
       PRECIO
       ========================= */

    const selectedPrice =
        product.prices[selectedSize];

    const totalPrice =
        selectedPrice * quantity;

    const formatPrice = (price) =>
        new Intl.NumberFormat(
            language === "es"
                ? "es-CO"
                : "en-US",
            {
                style: "currency",
                currency: "COP",
                maximumFractionDigits: 0,
            }
        ).format(price);

    const formattedPrice =
        formatPrice(selectedPrice);

    const formattedTotal =
        formatPrice(totalPrice);


    /* =========================
       PREPARACIÓN
       ========================= */

    const preparation =
        coffeeType === "whole"
            ? language === "es"
                ? "Café entero"
                : "Whole Bean"
            : language === "es"
                ? "Café molido"
                : "Ground";


    /* =========================
       IMAGEN PRINCIPAL
       ========================= */

    const mainImage =
        selectedImage === "label"
            ? product.labelImage
            : product.image;


    /* =========================
       IMÁGENES PARA IMAGE MODAL
       ========================= */

    const productSlides = [

        {
            image: product.image,
            title: product.title[language],
        },

        {
            image: product.labelImage,
            title:
                language === "es"
                    ? `Historia ${product.title[language]}`
                    : `${product.title[language]} Story`,
        },

    ];


    const initialModalIndex =
        selectedImage === "label"
            ? 1
            : 0;


    /* =========================
       CANTIDAD
       ========================= */

    function decreaseQuantity() {

        setQuantity((current) =>
            Math.max(1, current - 1)
        );

    }


    function increaseQuantity() {

        setQuantity((current) =>
            current + 1
        );

    }


    /* =========================
       ABRIR CONFIRMACIÓN
       ========================= */

    function handleWhatsApp() {

        setIsOrderModalOpen(true);

    }


    /* =========================
       CONFIRMAR PEDIDO
       ========================= */

    function confirmWhatsAppOrder() {

        const productName =
            product.title[language];

        const size =
            sizeLabels[selectedSize][language];

        const message =
            language === "es"

                ? `Hola, quiero pedir:

Producto: ${productName}
Tamaño: ${size}
Preparación: ${preparation}
Cantidad: ${quantity}
Precio unitario: ${formattedPrice}
Total: ${formattedTotal}`

                : `Hello, I would like to order:

Product: ${productName}
Size: ${size}
Preparation: ${preparation}
Quantity: ${quantity}
Unit price: ${formattedPrice}
Total: ${formattedTotal}`;

        const whatsappUrl =
            `https://wa.me/573222190438?text=${encodeURIComponent(message)}`;

        setIsOrderModalOpen(false);

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /* =========================
       PRODUCTOS RELACIONADOS
       ========================= */

    const relatedProducts =
        tiendaData.filter(
            (item) => item.slug !== product.slug
        );


    return (

        <>

            <main className={styles.tienda}>

                {/* =========================
                    FICHA DEL PRODUCTO
                   ========================= */}

                <div className={styles.container}>

                    {/* =========================
                        GALERÍA
                       ========================= */}

                    <section className={styles.gallery}>

                        <div className={styles.thumbnails}>

                            {/* IMAGEN DEL PRODUCTO */}

                            <button
                                type="button"
                                className={`${styles.thumbnail} ${selectedImage === "product"
                                    ? styles.thumbnailActive
                                    : ""
                                    }`}
                                onClick={() =>
                                    setSelectedImage("product")
                                }
                            >

                                <img
                                    src={product.image}
                                    alt={product.title[language]}
                                />

                            </button>


                            {/* IMAGEN DE LA ETIQUETA */}

                            <button
                                type="button"
                                className={`${styles.thumbnail} ${selectedImage === "label"
                                    ? styles.thumbnailActive
                                    : ""
                                    }`}
                                onClick={() =>
                                    setSelectedImage("label")
                                }
                            >

                                <img
                                    src={product.labelImage}
                                    alt={
                                        language === "es"
                                            ? `Etiqueta ${product.title[language]}`
                                            : `${product.title[language]} label`
                                    }
                                />

                            </button>


                        </div>


                        {/* =========================
                            IMAGEN PRINCIPAL
                           ========================= */}

                        <button
                            type="button"
                            className={styles.mainImageWrapper}
                            onClick={() =>
                                setIsImageModalOpen(true)
                            }
                            aria-label={
                                language === "es"
                                    ? "Ampliar imagen"
                                    : "Enlarge image"
                            }
                        >

                            <img
                                src={mainImage}
                                alt={product.title[language]}
                                className={styles.mainImage}
                            />

                        </button>


                    </section>


                    {/* =========================
                        INFORMACIÓN
                       ========================= */}

                    <section className={styles.info}>


                        {/* =========================
                            ENCABEZADO
                           ========================= */}

                        <header className={styles.productHeader}>

                            <h1 className={styles.title}>
                                {product.title[language]}
                            </h1>


                            <p className={styles.variety}>
                                {product.variety[language]}
                            </p>

                        </header>


                        {/* =========================
                            INFORMACIÓN DEL CAFÉ
                           ========================= */}

                        <div className={styles.productDetails}>


                            <h2 className={styles.sectionTitle}>

                                {language === "es"
                                    ? "Información del café"
                                    : "Coffee information"}

                            </h2>


                            <div className={styles.detailList}>


                                <div className={styles.detailItem}>

                                    <span>
                                        {language === "es"
                                            ? "Variedad:"
                                            : "Variety:"}
                                    </span>

                                    <strong>
                                        {product.variety[language]}
                                    </strong>

                                </div>


                                <div className={styles.detailItem}>

                                    <span>
                                        {language === "es"
                                            ? "Productor:"
                                            : "Producer:"}
                                    </span>

                                    <strong>
                                        {product.information.producer[language]}
                                    </strong>

                                </div>


                                <div className={styles.detailItem}>

                                    <span>
                                        {language === "es"
                                            ? "Altura:"
                                            : "Altitude:"}
                                    </span>

                                    <strong>
                                        {product.information.altitude[language]}
                                    </strong>

                                </div>


                                <div className={styles.detailItem}>

                                    <span>
                                        {language === "es"
                                            ? "Proceso:"
                                            : "Process:"}
                                    </span>

                                    <strong>
                                        {product.information.process[language]}
                                    </strong>

                                </div>


                                <div className={styles.detailItem}>

                                    <span>
                                        {language === "es"
                                            ? "Origen:"
                                            : "Origin:"}
                                    </span>

                                    <strong>
                                        {product.information.origin[language]}
                                    </strong>

                                </div>


                            </div>


                            {/* =========================
                                PERFIL DE SABOR
                               ========================= */}

                            <div className={styles.flavorSection}>


                                <h2 className={styles.sectionTitle}>

                                    {language === "es"
                                        ? "Perfil de sabor"
                                        : "Flavor profile"}

                                </h2>


                                <div className={styles.flavors}>

                                    {product.flavorProfile?.[language]?.map(
                                        (flavor) => (

                                            <span
                                                key={flavor}
                                            >
                                                {flavor}
                                            </span>

                                        )
                                    )}

                                </div>


                            </div>


                        </div>


                        {/* =========================
                            TAMAÑO
                           ========================= */}

                        <div className={styles.optionGroup}>


                            <h2 className={styles.optionTitle}>

                                {language === "es"
                                    ? "Tamaño"
                                    : "Size"}

                            </h2>


                            <div className={styles.options}>

                                {Object.keys(product.prices).map(
                                    (size) => (

                                        <button
                                            key={size}
                                            type="button"
                                            className={`${styles.optionButton} ${selectedSize === size
                                                ? styles.optionActive
                                                : ""
                                                }`}
                                            onClick={() =>
                                                setSelectedSize(size)
                                            }
                                        >

                                            {sizeLabels[size][language]}

                                        </button>

                                    )
                                )}

                            </div>


                        </div>


                        {/* =========================
                            PREPARACIÓN
                           ========================= */}

                        <div className={styles.optionGroup}>


                            <h2 className={styles.optionTitle}>

                                {language === "es"
                                    ? "Preparación"
                                    : "Preparation"}

                            </h2>


                            <div className={styles.options}>


                                <button
                                    type="button"
                                    className={`${styles.optionButton} ${coffeeType === "whole"
                                        ? styles.optionActive
                                        : ""
                                        }`}
                                    onClick={() =>
                                        setCoffeeType("whole")
                                    }
                                >

                                    {language === "es"
                                        ? "Café entero"
                                        : "Whole Bean"}

                                </button>


                                <button
                                    type="button"
                                    className={`${styles.optionButton} ${coffeeType === "ground"
                                        ? styles.optionActive
                                        : ""
                                        }`}
                                    onClick={() =>
                                        setCoffeeType("ground")
                                    }
                                >

                                    {language === "es"
                                        ? "Café molido"
                                        : "Ground"}

                                </button>


                            </div>


                        </div>


                        {/* =========================
                            PRECIO
                           ========================= */}

                        <div className={styles.price}>

                            {formattedPrice}

                        </div>


                        {/* =========================
                            CANTIDAD
                           ========================= */}

                        <div className={styles.quantityGroup}>


                            <h2 className={styles.optionTitle}>

                                {language === "es"
                                    ? "Cantidad"
                                    : "Quantity"}

                            </h2>


                            <div className={styles.quantityControl}>


                                <button
                                    type="button"
                                    onClick={decreaseQuantity}
                                    aria-label={
                                        language === "es"
                                            ? "Disminuir cantidad"
                                            : "Decrease quantity"
                                    }
                                >
                                    −
                                </button>


                                <span>
                                    {quantity}
                                </span>


                                <button
                                    type="button"
                                    onClick={increaseQuantity}
                                    aria-label={
                                        language === "es"
                                            ? "Aumentar cantidad"
                                            : "Increase quantity"
                                    }
                                >
                                    +
                                </button>


                            </div>


                        </div>


                        {/* =========================
                            WHATSAPP
                           ========================= */}

                        <button
                            type="button"
                            className={styles.whatsappButton}
                            onClick={handleWhatsApp}
                        >

                            {language === "es"
                                ? "Pedir por WhatsApp"
                                : "Order via WhatsApp"}

                        </button>


                    </section>


                </div>


                {/* =========================
                    TAMBIÉN PODRÍA INTERESARTE
                   ========================= */}

                <section className={styles.relatedSection}>


                    <div className={styles.relatedContent}>


                        <h2 className={styles.relatedTitle}>

                            {language === "es"
                                ? "También podría interesarte"
                                : "You might also like"}

                        </h2>


                        <Carousel
                            scrollItemSelector={`.${styles.relatedCard}`}
                        >

                            <div className={styles.relatedGrid}>


                                {relatedProducts.map(
                                    (relatedProduct) => (

                                        <div
                                            key={relatedProduct.id}
                                            className={styles.relatedCard}
                                        >

                                            <ProductCard
                                                image={
                                                    relatedProduct.image
                                                }
                                                title={
                                                    relatedProduct.title[
                                                    language
                                                    ]
                                                }
                                                subtitle={
                                                    relatedProduct.variety[
                                                    language
                                                    ]
                                                }
                                                buttonText={
                                                    language === "es"
                                                        ? "Ver producto"
                                                        : "View product"
                                                }
                                                onButtonClick={() =>
                                                    navigate(
                                                        `/tienda/${relatedProduct.slug}`
                                                    )
                                                }
                                                variant="store"
                                            />

                                        </div>

                                    )
                                )}


                            </div>

                        </Carousel>


                    </div>


                </section>


            </main>


            {/* =========================
                IMAGE MODAL
               ========================= */}

            <ImageModal
                isOpen={isImageModalOpen}
                slides={productSlides}
                currentIndex={initialModalIndex}
                onClose={() =>
                    setIsImageModalOpen(false)
                }
            />


            {/* =========================
                CONFIRMACIÓN DE PEDIDO
               ========================= */}

            {isOrderModalOpen && (

                <div
                    className={styles.orderOverlay}
                    onClick={() =>
                        setIsOrderModalOpen(false)
                    }
                >

                    <div
                        className={styles.orderModal}
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <h2 className={styles.orderModalTitle}>

                            {language === "es"
                                ? "¿Confirmar pedido?"
                                : "Confirm order?"}

                        </h2>


                        <p className={styles.orderModalIntro}>

                            {language === "es"
                                ? "Revisa los detalles antes de continuar a WhatsApp."
                                : "Review your order details before continuing to WhatsApp."}

                        </p>


                        <div className={styles.orderSummary}>


                            <div className={styles.orderRow}>

                                <span>
                                    {language === "es"
                                        ? "Producto"
                                        : "Product"}
                                </span>

                                <strong>
                                    {product.title[language]}
                                </strong>

                            </div>


                            <div className={styles.orderRow}>

                                <span>
                                    {language === "es"
                                        ? "Tamaño"
                                        : "Size"}
                                </span>

                                <strong>
                                    {sizeLabels[selectedSize][language]}
                                </strong>

                            </div>


                            <div className={styles.orderRow}>

                                <span>
                                    {language === "es"
                                        ? "Preparación"
                                        : "Preparation"}
                                </span>

                                <strong>
                                    {preparation}
                                </strong>

                            </div>


                            <div className={styles.orderRow}>

                                <span>
                                    {language === "es"
                                        ? "Cantidad"
                                        : "Quantity"}
                                </span>

                                <strong>
                                    {quantity}
                                </strong>

                            </div>


                            <div className={styles.orderRow}>

                                <span>
                                    {language === "es"
                                        ? "Precio unitario"
                                        : "Unit price"}
                                </span>

                                <strong>
                                    {formattedPrice}
                                </strong>

                            </div>


                            <div className={`${styles.orderRow} ${styles.orderTotal}`}>

                                <span>
                                    {language === "es"
                                        ? "Total"
                                        : "Total"}
                                </span>

                                <strong>
                                    {formattedTotal}
                                </strong>

                            </div>


                        </div>


                        <div className={styles.orderActions}>


                            <button
                                type="button"
                                className={styles.cancelOrderButton}
                                onClick={() =>
                                    setIsOrderModalOpen(false)
                                }
                            >

                                {language === "es"
                                    ? "Cancelar"
                                    : "Cancel"}

                            </button>


                            <button
                                type="button"
                                className={styles.confirmOrderButton}
                                onClick={confirmWhatsAppOrder}
                            >

                                <span>
                                    {language === "es"
                                        ? "Sí, pedir"
                                        : "Yes, order"}
                                </span>

                                <FaWhatsapp
                                    size={18}
                                />

                            </button>


                        </div>


                    </div>

                </div>

            )}


            {/* =========================
                FOOTER
               ========================= */}

            <Footer />

        </>

    );

}


export default Tienda;