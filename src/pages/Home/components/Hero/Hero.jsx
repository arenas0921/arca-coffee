import { Button, Container } from "../../../../components";

import heroImage from "../../../../assets/images/hero/e9.jpg";

import styles from "./Hero.module.css";
import heroData from "../../../../data/heroData";
import { useLanguage } from "../../../../context/LanguageContext";

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
                        <span className={styles.tag}>
                            {heroData.tag[language]}
                        </span>

                        <h1>
                            {heroData.title[language]}
                        </h1>

                        <p>
                            {heroData.description[language]}
                        </p>

                        <div className={styles.actions}>
                            <Button>
                                {heroData.buttons.primary[language]}
                            </Button>

                            <Button variant="outline">
                                {heroData.buttons.secondary[language]}
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Hero;