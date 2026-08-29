import { useEffect } from "react";

import Hero from "./components/Hero";
import FeaturedProducts from "../../sections/FeaturedProducts";
import About from "../../sections/About";
import ExperiencesPreview from "../../sections/ExperiencesPreview";
import Tienda from "../../sections/Tienda";
import Mirador from "../../sections/mirador";
import Ubicacion from "../../sections/Ubicacion";
import Footer from "../../sections/Footer";


function Home({ scrollToTienda = false }) {


  useEffect(() => {

    if (!scrollToTienda) return;


    let attempts = 0;

    const maxAttempts = 40;


    const scrollToSection = () => {

      const element =
        document.getElementById("tienda");


      if (element) {

        const isMobile =
          window.innerWidth <= 600;


        const navbarHeight =
          isMobile ? 20 : 20;


        const elementPosition =
          element.getBoundingClientRect().top +
          window.scrollY;


        window.scrollTo({

          top:
            elementPosition -
            navbarHeight,

          behavior: "smooth",

        });


        return;
      }


      attempts++;


      if (attempts < maxAttempts) {

        setTimeout(
          scrollToSection,
          50
        );

      }

    };


    const timer =
      setTimeout(
        scrollToSection,
        50
      );


    return () => {

      clearTimeout(timer);

    };

  }, [scrollToTienda]);


  return (

    <>

      <Hero />

      <About />

      <Mirador />

      <FeaturedProducts />

      <ExperiencesPreview />

      <Tienda />

      <Ubicacion />

      <Footer />

    </>

  );

}


export default Home;