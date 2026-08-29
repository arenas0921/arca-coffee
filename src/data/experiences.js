import c14 from "../assets/images/experiences/c14.jpg";
import c1 from "../assets/images/experiences/c1.jpg";
import c2 from "../assets/images/experiences/c2.jpg";
import c3 from "../assets/images/experiences/c3.jpg";
import c4 from "../assets/images/experiences/c4.jpg";
import c5 from "../assets/images/experiences/c5.jpg";
import c6 from "../assets/images/experiences/c6.jpg";
import c7 from "../assets/images/experiences/c7.jpg";
import e21 from "../assets/images/experiences/e22.jpg";
import e22 from "../assets/images/experiences/molino.jpg";
import e23 from "../assets/images/experiences/maquina.jpg";
import e24 from "../assets/images/experiences/latte1.jpg";
import e25 from "../assets/images/experiences/latte2.jpg";
import e31 from "../assets/images/experiences/e31.jpg";
import e32 from "../assets/images/experiences/e32.jpg";
import e33 from "../assets/images/experiences/e33.jpg";


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
            es: "Tu espresso, preparado por ti en una máquina profesional",
            en: "Your espresso, prepared by you on a professional machine."
        },

        duration: {
            es: "1 hora y media",
            en: "1 hour and a half"
        },

        image: e21,

        description: {
            es: "Prepara tu propio espresso en una máquina profesional y vive la experiencia completa: aprende a extraer el café, texturizar la leche (Latte Art). Una experiencia práctica para disfrutar el café de especialidad y una taza preparada por ti.",

            en: "Prepare your own espresso on a professional machine and experience the full process: learn how to extract the coffee and texture the milk (Latte Art). A hands-on experience to enjoy specialty coffee and a cup prepared by you."
        },

        includes: {
            es: [
                "Práctica de espresso",
                "Preparación de latte art",
                "Recetas escritas",
                "En español e inglés",
                "Grupos pequeños"
            ],

            en: [
                "Espresso practice",
                "Latte art preparation",
                "Written recipes",
                "Available in Spanish and English",
                "Small groups"
            ]
        },

        gallery: [
            e22,
            e23,
            e24,
            e25
        ]
    },


    {
        id: 3,
        slug: "metodos",

        title: {
            es: "Tres cafés, tres formas de descubrirlos",
            en: "Three coffees, three ways to discover them"
        },

        duration: {
            es: "1 hora y media",
            en: "1 hour and a half"
        },

        image: e31,

        description: {
            es: "Descubre cómo el origen y la preparación pueden transformar la expresión de un café.",

            en: "Discover how origin and preparation can transform the expression of a coffee."
        },

        modalities: {

            es: [

                {
                    title: "TRES CAFÉS · UN MÉTODO",

                    subtitle:
                        "Tres orígenes. Una misma preparación. Tres formas de descubrir el café.",

                    description:
                        "Descubre cómo un mismo método puede revelar diferentes expresiones del café.",

                    idealFor:
                        "quienes quieren aprender a reconocer las diferencias entre cafés."
                },

                {
                    title: "UN CAFÉ · TRES MÉTODOS",

                    subtitle:
                        "Un origen. Tres preparaciones. Una experiencia para descubrir todo lo que puede expresar una taza.",

                    description:
                        "Descubre cómo la preparación puede transformar la expresión de un mismo café.",

                    idealFor:
                        "quienes quieren descubrir cómo la preparación puede cambiar una misma taza."
                }

            ],

            en: [

                {
                    title: "THREE COFFEES · ONE METHOD",

                    subtitle:
                        "Three origins. One preparation. Three ways to discover coffee.",

                    description:
                        "Discover how the same brewing method can reveal different expressions of coffee.",

                    idealFor:
                        "those who want to learn how to recognize the differences between coffees."
                },

                {
                    title: "ONE COFFEE · THREE METHODS",

                    subtitle:
                        "One origin. Three preparations. An experience to discover everything a cup can express.",

                    description:
                        "Discover how brewing can transform the expression of the same coffee.",

                    idealFor:
                        "those who want to discover how brewing can change the same cup."
                }

            ]
        },

        includes: {

            es: [
                "Tres cafés, un mismo método de preparación",
                "Un café, tres métodos de extracción",
                "Comparación de aroma, acidez, dulzor, cuerpo y sabor",
                "Preparación guiada y explicación de cada método",
                "En español e inglés",
                "Grupos pequeños"
            ],

            en: [
                "Three coffees, one brewing method",
                "One coffee, three brewing methods",
                "Comparison of aroma, acidity, sweetness, body and flavor",
                "Guided preparation and explanation of each method",
                "Available in Spanish and English",
                "Small groups"
            ]

        },

        gallery: [
            e31,
            e32,
            e33
        ]
    }

];


export default experiences;