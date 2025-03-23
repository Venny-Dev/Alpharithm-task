import Hero from "./components/Hero";
// import ServiceCarousel from "./components/ServiceCarousel";
import Services from "./components/Services";
import TrustedCompaniesAndAI from "./components/TrustedCompaniesAndAI";

function App() {
  return (
    <div className="w-full">
      <Hero />
      <TrustedCompaniesAndAI />
      <Services />
      {/* <ServiceCarousel /> */}
    </div>
  );
}

export default App;
