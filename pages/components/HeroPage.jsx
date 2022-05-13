import Hero from "./Hero";
import Navbar from "./navbar/Navbar";
const HeroPage = () => {
  return (
    <div className="bg-hero-pattern bg-[100%] h-[1075px] scroll-smooth">
      <div className="container mx-auto ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default HeroPage;
