import p1 from "../assets/images/origenes/11.jpg";
import p2 from "../assets/images/products/espresso1.jpg";
import p3 from "../assets/images/products/p3.jpg";
import p4 from "../assets/images/autor/inicio.jpeg";
import p10 from "../assets/images/cocteles/camu_camu.JPG";
import p5 from "../assets/images/metodos/syphon.jpg";

const productsData = [
    {
        id: 1,

        title: {
            es: "Los Orígenes",
            en: "The Origins",
        },

        subtitle: {
            es: "Diversidad cafetera. Una Colombia por descubrir.",
            en: "Coffee diversity. A Colombia waiting to be discovered.",
        },

        image: p1,

        featured: true,
    },

    {
        id: 2,

        title: {
            es: "Calibrar el Espresso",
            en: "Dialing In Espresso",
        },

        subtitle: {
            es: "La base de nuestras bebidas.",
            en: "The base of our drinks.",
        },

        image: p2,

        featured: true,
    },

    {
        id: 3,

        title: {
            es: "Métodos",
            en: "Methods",
        },

        subtitle: {
            es: "Según cómo se prepare un café, no sabe igual.",
            en: "Coffee tastes different depending on how it is prepared.",
        },

        image: p5,

        featured: true,
    },
    {
        id: 4,

        title: {
            es: "Bebidas de autor",
            en: "Signature Drinks",
        },

        subtitle: {
            es: "Sabores que nacen de la creatividad, el café y la biodiversidad amazónica.",
            en: "Flavors born from creativity, coffee, and Amazonian biodiversity.",
        },

        image: p4,

        featured: true,
    },
    {
        id: 5,

        title: {
            es: "Coctelería",
            en: "Cocktails",
        },

        subtitle: {
            es: "Es una combinación que no vas a encontrar en otro lado.",
            en: "It's a combination you won't find anywhere else.",
        },

        image: p10,

        featured: true,
    },
];

export default productsData;