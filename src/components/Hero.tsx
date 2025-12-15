import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoVertical from "@/assets/logo-vertical.png";

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

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden bg-background">
      {/* Abstract orange wave effects - left side */}
      <div className="absolute left-0 top-0 w-1/3 h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-1/4 w-80 h-80 bg-gradient-to-br from-primary/60 via-primary/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -left-10 top-1/2 w-60 h-96 bg-gradient-to-r from-primary/40 to-transparent rounded-full blur-2xl transform rotate-45" />
        <div className="absolute left-10 bottom-20 w-40 h-60 bg-gradient-to-t from-primary/50 via-primary/20 to-transparent rounded-full blur-2xl transform -rotate-12" />
        {/* Flowing wave shape */}
        <svg className="absolute left-0 top-0 h-full w-48 opacity-40" viewBox="0 0 200 800" preserveAspectRatio="none">
          <path d="M0,0 C80,100 20,200 60,300 C100,400 40,500 80,600 C120,700 60,750 100,800 L0,800 Z" fill="url(#orangeGradientLeft)" />
          <defs>
            <linearGradient id="orangeGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(37 97% 66% / 0.7)" />
              <stop offset="50%" stopColor="hsl(37 97% 66% / 0.4)" />
              <stop offset="100%" stopColor="hsl(37 97% 66% / 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Abstract orange wave effects - right side */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full overflow-hidden pointer-events-none">
        <div className="absolute -right-20 bottom-1/4 w-80 h-80 bg-gradient-to-tl from-primary/60 via-primary/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute -right-10 bottom-1/2 w-60 h-96 bg-gradient-to-l from-primary/40 to-transparent rounded-full blur-2xl transform -rotate-45" />
        <div className="absolute right-10 top-20 w-40 h-60 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent rounded-full blur-2xl transform rotate-12" />
        {/* Flowing wave shape */}
        <svg className="absolute right-0 bottom-0 h-full w-48 opacity-40" viewBox="0 0 200 800" preserveAspectRatio="none">
          <path d="M200,800 C120,700 180,600 140,500 C100,400 160,300 120,200 C80,100 140,50 100,0 L200,0 Z" fill="url(#orangeGradientRight)" />
          <defs>
            <linearGradient id="orangeGradientRight" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="hsl(37 97% 66% / 0.7)" />
              <stop offset="50%" stopColor="hsl(37 97% 66% / 0.4)" />
              <stop offset="100%" stopColor="hsl(37 97% 66% / 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(37 97% 66% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(37 97% 66% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
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
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in px-4 text-foreground/70">
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
    </section>
  );
};

export default Hero;
