import c14 from "../assets/images/experiences/c14.jpg";
import c1 from "../assets/images/experiences/c1.jpg";
import c2 from "../assets/images/experiences/c2.jpg";
import c3 from "../assets/images/experiences/c3.jpg";
import c4 from "../assets/images/experiences/c4.jpg";
import c5 from "../assets/images/experiences/c5.jpg";
import c6 from "../assets/images/experiences/c6.jpg";
import c7 from "../assets/images/experiences/c7.jpg";

const experiences = [
    {
        id: 1,
        slug: "cata",

        title: {
            es: "Cata básica de café",
            en: "Basic Coffee Tasting"
        },

        duration: {
            es: "1 hora y media",
            en: "1 hour and a half"
        },

        image: c14,

        description: {
            es: "En esta experiencia vas a hacer algo que suena simple y resulta revelador: oler, probar y comparar varios orígenes de Colombia en la misma mesa, uno al lado del otro. Y ahí, con las tazas enfrente, vas a empezar a notar diferencias que siempre estuvieron ahí. Que este sabe a caramelo. Que aquel tiene fruta. Que no todos los cafés son el mismo café. No necesitas saber nada de antemano. Solo tus sentidos del olfato y el gusto, mientras descubres que tu paladar sabe mucho más de lo que creías.",

            en: "In this experience, you will do something that sounds simple but turns out to be revealing: smell, taste and compare several Colombian origins side by side at the same table. With the cups in front of you, you will begin to notice differences that were always there. One tastes like caramel. Another has notes of fruit. Not all coffees are the same. You do not need any previous knowledge. Just your sense of smell and taste, as you discover that your palate knows much more than you thought."
        },

        includes: {
            es: [
                "Sin conocimientos previos",
                "Degustación de varios orígenes de Colombia",
                "Exploración del olfato y el gusto",
                "En español e inglés",
                "Grupos pequeños"
            ],

            en: [
                "No previous knowledge required",
                "Tasting of several Colombian coffee origins",
                "Exploration of smell and taste",
                "Available in Spanish and English",
                "Small groups"
            ]
        },

        gallery: [
            c1,
            c2,
            c3,
            c4,
            c5,
            c6,
            c7
        ]
    },

    {
        id: 2,
        slug: "prepara",

        title: {
            es: "Prepara tu café como un experto",
            en: "Prepare Your Coffee Like an Expert"
        },

        duration: {
            es: "1 hora y media",
            en: "1 hour and a half"
        },

        // Imagen temporal. Se reemplazará posteriormente.
        image: c14,

        description: {
            es: "Entra como cliente. Sal como barista. Esta es la experiencia completa: la que te llevará detrás de la barra a hacer, con tus propias manos, lo que normalmente solo ves hacer. En una misma sesión vas a aprender los tres factores que sostienen una buena taza: el espresso, el latte art y el filtrado.",

            en: "Come in as a customer. Leave as a barista. This is the complete experience: you will step behind the bar and, with your own hands, do what you normally only see others do. In one session, you will learn the three elements behind a great cup of coffee: espresso, latte art and filter coffee."
        },

        includes: {
            es: [
                "Práctica de espresso",
                "Preparación de latte art",
                "Preparación de café filtrado",
                "Práctica completamente con las manos",
                "Recetas escritas",
                "En español e inglés",
                "Grupos pequeños"
            ],

            en: [
                "Espresso practice",
                "Latte art preparation",
                "Filter coffee preparation",
                "Hands-on practice",
                "Written recipes",
                "Available in Spanish and English",
                "Small groups"
            ]
        },

        gallery: []
    }
];

export default experiences;