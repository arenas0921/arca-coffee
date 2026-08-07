import { Button, Container } from "../../../../components";

import heroImage from "../../../../assets/images/hero/e9.jpg";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroData from "../../../../data/heroData";
import { useLanguage } from "../../../../context/LanguageContext";
import {
    MapPinned,
    Leaf,
    Coffee,
    Clock3,
    Trees,
    UtensilsCrossed
} from "lucide-react";

function Hero() {
    const { language } = useLanguage();
    return (
        <section
            className={styles.hero}
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className={styles.overlay}>
                <Container>
                    <div className={styles.content}>

                        <div className={styles.chips}>

                            <span className={styles.tag}>
                                <MapPinned size={14} />
                                {heroData.chips[language][0]}
                            </span>

                            <span className={styles.tag}>
                                <Leaf size={14} />
                                {heroData.chips[language][1]}
                            </span>

                            <span className={styles.tag}>
                                <Coffee size={14} />
                                {heroData.chips[language][2]}
                            </span>

                        </div>
                        <h1>
                            {heroData.title[language]}
                        </h1>
                        <p>
                            {heroData.description[language]}
                        </p>

                        <div className={styles.actions}>
                            <a href="#productos">
                                <Button>
                                    <UtensilsCrossed size={18} />
                                    {heroData.buttons.primary[language]}
                                </Button>
                            </a>

                            <Link to="/experiencias">
                                <Button variant="outline">
                                    <Coffee size={18} />
                                    {heroData.buttons.secondary[language]}
                                </Button>
                            </Link>
                            <Button
                                onClick={() =>
                                    window.open(heroData.mapsUrl, "_blank", "noopener,noreferrer")
                                }
                            >
                                <MapPinned size={18} />
                                {heroData.buttons.location[language]}
                            </Button>
                        </div>

                        <div className={styles.footerInfo}>

                            <span>
                                <MapPinned size={16} />
                                Salento, Quindío
                            </span>

                            <span>
                                <Clock3 size={16} />
                                Abierto todos los días
                            </span>

                            <span>
                                <Trees size={16} />
                                A minutos del Valle de Cocora
                            </span>

                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Hero;