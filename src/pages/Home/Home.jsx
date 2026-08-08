import Hero from "./components/Hero";
import FeaturedProducts from "../../sections/FeaturedProducts";
import About from "../../sections/About";
import ExperiencesPreview from "../../sections/ExperiencesPreview";
import Mirador from "../../sections/Mirador";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mirador />
      <FeaturedProducts />
      <ExperiencesPreview />
    </>
  );
}

export default Home;