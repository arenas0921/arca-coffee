import Hero from "./components/Hero";
import FeaturedProducts from "../../sections/FeaturedProducts";
import About from "../../sections/About";
import ExperiencesPreview from "../../sections/ExperiencesPreview";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <ExperiencesPreview />
    </>
  );
}

export default Home;