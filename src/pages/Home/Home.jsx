import Hero from "./components/Hero";
import FeaturedProducts from "../../sections/FeaturedProducts";
import About from "../../sections/About";
import ExperiencesPreview from "../../sections/ExperiencesPreview";
import Mirador from "../../sections/mirador";
import Ubicacion from "../../sections/Ubicacion";
import Footer from "../../sections/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mirador />
      <FeaturedProducts />
      <ExperiencesPreview />
      <Ubicacion />
      <Footer />
    </>
  );
}

export default Home;