import Hero from "./components/Hero";
import Services from "./components/Services";
import TrustedCompaniesAndAI from "./components/TrustedCompaniesAndAI";

function App() {
  return (
    <div className="w-full max-w-[1700px] mx-auto">
      <Hero />
      <TrustedCompaniesAndAI />
      <Services />
    </div>
  );
}

export default App;
