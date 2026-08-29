import alegria from "../assets/images/tienda/alegria.png";
import alegriaEtiqueta from "../assets/images/tienda/alegria1.png";

import andaki from "../assets/images/tienda/andaki.png";
import andakiEtiqueta from "../assets/images/tienda/andaki1.png";

import rosa from "../assets/images/tienda/rosa.png";
import rosaEtiqueta from "../assets/images/tienda/rosa1.png";

import jazmin from "../assets/images/tienda/jazmin.png";
import jazminEtiqueta from "../assets/images/tienda/jazmin1.png";


const tiendaData = [

    {
        id: 1,

        slug: "alegria",

        title: {
            es: "Alegría",
            en: "Alegría",
        },

        variety: {
            es: "Geisha",
            en: "Geisha",
        },

        image: alegria,

        labelImage: alegriaEtiqueta,

        prices: {
            500: 68000,
            250: 45000,
            125: 25000,
        },

        description: {
            es: "Un Geisha de Acevedo, Huila, con un perfil dulce y expresivo que combina notas frutales y miel.",
            en: "A Geisha from Acevedo, Huila, with a sweet and expressive profile combining fruity and honey notes.",
        },

        information: {
            producer: {
                es: "Heimar Collazos",
                en: "Heimar Collazos",
            },

            altitude: {
                es: "1.822 msnm",
                en: "1,822 masl",
            },

            process: {
                es: "Honey",
                en: "Honey",
            },

            origin: {
                es: "Acevedo - Huila",
                en: "Acevedo - Huila",
            },
        },

        flavorProfile: {
            es: [
                "Melón",
                "Mandarina",
                "Mango",
                "Miel",
            ],

            en: [
                "Melon",
                "Mandarin",
                "Mango",
                "Honey",
            ],
        },
    },


    {
        id: 2,

        slug: "andaki",

        title: {
            es: "Andakí",
            en: "Andakí",
        },

        variety: {
            es: "Castillo",
            en: "Castillo",
        },

        image: andaki,

        labelImage: andakiEtiqueta,

        prices: {
            500: 50000,
            250: 35000,
            125: 18000,
        },

        description: {
            es: "Un Castillo de Acevedo, Huila, de carácter definido y equilibrado, con notas profundas de fruta y chocolate.",
            en: "A Castillo from Acevedo, Huila, with a defined and balanced character, featuring deep fruit and chocolate notes.",
        },

        information: {
            producer: {
                es: "Heimar Collazos",
                en: "Heimar Collazos",
            },

            altitude: {
                es: "1.721 msnm",
                en: "1,721 masl",
            },

            process: {
                es: "Lavado",
                en: "Washed",
            },

            origin: {
                es: "Acevedo - Huila",
                en: "Acevedo - Huila",
            },
        },

        flavorProfile: {
            es: [
                "Ciruela",
                "Mora",
                "Chocolate",
            ],

            en: [
                "Plum",
                "Blackberry",
                "Chocolate",
            ],
        },
    },


    {
        id: 3,

        slug: "rosa",

        title: {
            es: "Rosa",
            en: "Rosa",
        },

        variety: {
            es: "Bourbon Rosado",
            en: "Pink Bourbon",
        },

        image: rosa,

        labelImage: rosaEtiqueta,

        prices: {
            500: 68000,
            250: 45000,
            125: 25000,
        },

        description: {
            es: "Un Bourbon Rosado de Acevedo, Huila, de expresión delicada y aromática, con notas dulces y tropicales.",
            en: "A Pink Bourbon from Acevedo, Huila, with a delicate and aromatic expression, featuring sweet and tropical notes.",
        },

        information: {
            producer: {
                es: "Heimar Collazos",
                en: "Heimar Collazos",
            },

            altitude: {
                es: "1.722 msnm",
                en: "1,722 masl",
            },

            process: {
                es: "Lavado",
                en: "Washed",
            },

            origin: {
                es: "Acevedo - Huila",
                en: "Acevedo - Huila",
            },
        },

        flavorProfile: {
            es: [
                "Caramelo",
                "Frutos tropicales",
                "Limoncillo",
            ],

            en: [
                "Caramel",
                "Tropical fruits",
                "Lemongrass",
            ],
        },
    },


    {
        id: 4,

        slug: "jazmin",

        title: {
            es: "Jazmín",
            en: "Jazmín",
        },

        variety: {
            es: "Geisha",
            en: "Geisha",
        },

        image: jazmin,

        labelImage: jazminEtiqueta,

        prices: {
            500: 68000,
            250: 45000,
            125: 25000,
        },

        description: {
            es: "Un Geisha de Acevedo, Huila, de perfil floral y elegante, acompañado de notas dulces y una expresión de té negro.",
            en: "A Geisha from Acevedo, Huila, with an elegant floral profile complemented by sweet notes and a black tea character.",
        },

        information: {
            producer: {
                es: "Heimar Collazos",
                en: "Heimar Collazos",
            },

            altitude: {
                es: "1.822 msnm",
                en: "1,822 masl",
            },

            process: {
                es: "Honey",
                en: "Honey",
            },

            origin: {
                es: "Acevedo - Huila",
                en: "Acevedo - Huila",
            },
        },

        flavorProfile: {
            es: [
                "Jazmín",
                "Miel",
                "Limoncillo",
                "Té negro",
            ],

            en: [
                "Jasmine",
                "Honey",
                "Lemongrass",
                "Black tea",
            ],
        },
    },

];


export default tiendaData;