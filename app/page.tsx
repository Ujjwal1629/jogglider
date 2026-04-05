import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CountryVisa from "./components/CountryVisa";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CountryVisa />
        <Services />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
