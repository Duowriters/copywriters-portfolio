import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import CopyComparison from "@/components/sections/CopyComparison";
import Contact from "@/components/sections/Contact";
import Booking from "@/components/sections/Booking";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CopyComparison />
        <Booking />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
