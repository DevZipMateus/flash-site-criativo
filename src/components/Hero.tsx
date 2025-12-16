import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoVertical from "@/assets/logo-vertical-white.png";
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
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center mb-6 sm:mb-8 animate-fade-in">
            <img src={logoVertical} alt="Flash Publicidade" className="h-48 sm:h-56 md:h-72 lg:h-80 w-auto" />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-4 tracking-wider">
              SOMOS MUITO +Q IMPRESSÃO
            </p>
          </div>
          <h1 className="sr-only">
            flashpublicidade
          </h1>
          <h2 className="sr-only">
                Do conceito ao resultado, oferecemos comunicação visual, digital e gráfica com qualidade inegociável.
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in px-4 text-white">
            Do conceito ao resultado, oferecemos comunicação visual, digital e gráfica com qualidade inegociável.
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

      {/* Decorative orange glow effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
    </section>;
};
export default Hero;