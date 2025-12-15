import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DiagonalDivider from "@/components/DiagonalDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DiagonalDivider direction="left" />
        <About />
        <DiagonalDivider direction="right" />
        <Services />
        <DiagonalDivider direction="left" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
