import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoVertical from "@/assets/logo-vertical.png";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden" style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/60" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
            <img src={logoVertical} alt="Flash Publicidade" className="h-48 sm:h-56 md:h-72 lg:h-80 w-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in">
            flashpublicidade
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-6 sm:mb-8 animate-fade-in px-4">
            Sua solução completa em publicidade integrada
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in text-zinc-950 px-4">
            Somos muito mais que impressão. Do conceito ao resultado líder, oferecemos
            comunicação visual, digital e gráfica com qualidade inegociável.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in px-4">
            <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group text-sm sm:text-base w-full sm:w-auto">
              Solicite um orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => {
            const element = document.getElementById("servicos");
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
            }
          }} size="lg" variant="outline" className="border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary text-sm sm:text-base w-full sm:w-auto">
              Conheça nossos serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>;
};
export default Hero;