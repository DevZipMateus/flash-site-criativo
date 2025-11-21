import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                Missão
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
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
              <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                Visão
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
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
              <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                Valores
              </h3>
              <ul className="text-muted-foreground space-y-2 text-center leading-relaxed">
                <li>Integridade e transparência</li>
                <li>Agilidade "Flash"</li>
                <li>Qualidade inegociável</li>
                <li>Acessibilidade criativa</li>
                <li>Compromisso com a superação</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            SOMOS MUITO MAIS QUE IMPRESSÃO
          </p>
          <p className="text-lg text-muted-foreground">
            Sua solução completa, do conceito ao resultado líder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
