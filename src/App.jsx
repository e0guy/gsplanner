import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import FeatureStrip from "./sections/FeatureStrip.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Pricing from "./sections/Pricing.jsx";
import Newsletter from "./sections/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-gs-bg text-white">
      <Header />
      <Hero />
      <FeatureStrip />
      <Testimonials />
      <Pricing />
      <Newsletter />
      <Footer />
    </main>
  );
}
