import Navbar from "./Navbar";
import SectionHero from "./SectionHero";

function Hero() {
  return (
    <div className="  bg-[radial-gradient(circle_at_bottom_center,_#0227a0,_#031a51,_#04142B_50%)] pb-[116px] bg-custom-gradient">
      <Navbar />
      <SectionHero />
    </div>
  );
}

export default Hero;
