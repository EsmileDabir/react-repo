import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <p className="footer-credit">Design by Esmile</p>

    </div>
  );
};

export default App;
