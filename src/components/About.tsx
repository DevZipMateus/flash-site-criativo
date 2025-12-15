import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutTeam from "@/assets/about-team.jpg";
import officeReception from "@/assets/office-reception.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30 relative overflow-hidden">
      {/* Diagonal decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent -rotate-3 top-8 -left-1/4" 
          style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' }} />
      </div>
      <div className="absolute bottom-0 right-0 w-full h-32 overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rotate-3 bottom-8 -right-1/4" 
          style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' }} />
      </div>
      
      {/* Orange glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Diagonal accent shapes */}
      <svg className="absolute top-20 right-10 w-32 h-32 opacity-20 pointer-events-none" viewBox="0 0 100 100">
        <polygon points="0,100 100,0 100,100" fill="hsl(var(--primary))" />
      </svg>
      <svg className="absolute bottom-20 left-10 w-24 h-24 opacity-15 pointer-events-none" viewBox="0 0 100 100">
        <polygon points="0,0 100,100 0,100" fill="hsl(var(--primary))" />
      </svg>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_20px_hsl(37_97%_66%/0.5)]" />
        </div>

        {/* Image Section */}
        <div className="mb-10 sm:mb-12 md:mb-16 grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <img
            src={officeReception}
            alt="Recepção Flash Publicidade"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
          <img
            src={aboutTeam}
            alt="Equipe Flash Publicidade"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-foreground">
                Missão
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                Capacitar pequenas e médias empresas com soluções completas de publicidade
                integrada, oferecendo a mais alta qualidade em comunicação visual, digital
                e gráfica a um preço justo. Ser o resolvedor de problemas que conecta
                marcas e pessoas de forma eficiente e atraente.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-foreground">
                Visão
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                Ser, em até cinco anos, a principal agência de publicidade integrada e
                referência em Mato Grosso e Mato Grosso do Sul. Consolidar nossa
                capacidade de atendimento B2B e B2C com produção e equipe próprias.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 text-foreground">
                Valores
              </h3>
              <ul className="text-sm sm:text-base text-muted-foreground space-y-2 text-center leading-relaxed">
                <li>Integridade e transparência</li>
                <li>Agilidade "Flash"</li>
                <li>Qualidade inegociável</li>
                <li>Acessibilidade criativa</li>
                <li>Compromisso com a superação</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center max-w-3xl mx-auto px-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
            SOMOS MUITO MAIS QUE IMPRESSÃO
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            Sua solução completa, do conceito ao resultado líder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
