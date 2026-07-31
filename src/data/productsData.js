import p1 from "../assets/images/products/p1.jpg";
import p2 from "../assets/images/products/p2.jpg";
import p3 from "../assets/images/products/p3.jpg";
import p4 from "../assets/images/products/p4.jpg";

const productsData = [
    {
        id: 1,

        title: {
            es: "Aeropress Signature",
            en: "Aeropress Signature",
        },

        description: {
            es: "Preparación artesanal con notas dulces y un perfil limpio que resalta el origen del café.",
            en: "Artisanal preparation with sweet notes and a clean profile that highlights the coffee's origin.",
        },

        image: p1,

        featured: true,
    },

    {
        id: 2,

        title: {
            es: "Cold Brew Rosemary",
            en: "Cold Brew Rosemary",
        },

        description: {
            es: "Cold brew refrescante con notas herbales y un toque cítrico.",
            en: "Refreshing cold brew with herbal notes and a citrus touch.",
        },

        image: p2,

        featured: true,
    },

    {
        id: 3,

        title: {
            es: "Cat Latte",
            en: "Cat Latte",
        },

        description: {
            es: "Espresso con leche texturizada y latte art preparado al momento.",
            en: "Espresso with silky milk and freshly crafted latte art.",
        },

        image: p3,

        featured: true,
    },

    {
        id: 4,

        title: {
            es: "Berry Spark",
            en: "Berry Spark",
        },

        description: {
            es: "Bebida artesanal con frutos rojos y un acabado refrescante.",
            en: "Handcrafted sparkling berry drink with a refreshing finish.",
        },

        image: p4,

        featured: true,
    },
];

export default productsData;