import p1 from "../assets/images/origenes/col.png";
import p2 from "../assets/images/products/p2.jpg";
import p3 from "../assets/images/products/p3.jpg";
import p4 from "../assets/images/products/p4.jpg";
import p10 from "../assets/images/products/p10.jpg";

const productsData = [
    {
        id: 1,

        title: {
            es: "Los Orígenes",
            en: "The Origins",
        },

        subtitle: {
            es: "Cinco montañas. Cinco sabores. Un solo país.",
            en: "Five mountains. Five flavors. One country.",
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

        image: p3,

        featured: true,
    },
    {
        id: 4,

        title: {
            es: "Bebidas de autor",
            en: "Signature Drinks",
        },

        subtitle: {
            es: "Estas recetas no existen en ningún otro lado. Nacieron en esta barra.",
            en: "These recipes exist nowhere else. They were born behind this bar.",
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