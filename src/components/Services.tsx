import {
  Palette,
  Megaphone,
  FileText,
  Truck,
  Store,
  User,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import servicesVisual from "@/assets/services-visual.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import vehicleWrap from "@/assets/vehicle-wrap.jpg";
import printingProduction from "@/assets/printing-production.jpg";
import socialMediaTablet from "@/assets/social-media-tablet.jpg";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Comunicação visual",
      description:
        "Fachadas em ACM e lona, placas em acrílico, PS, MDF ou PVC expandido. Instalações completas de comunicação visual.",
    },
    {
      icon: Megaphone,
      title: "Mídia digital",
      description:
        "Criação de criativos de impacto para redes sociais, spots e releases. Conteúdo que engaja e converte.",
    },
    {
      icon: FileText,
      title: "Materiais gráficos",
      description:
        "Banners em lona, adesivos personalizados e diversos materiais impressos com qualidade profissional.",
    },
    {
      icon: Truck,
      title: "Plotagem de frota",
      description:
        "Transforme seus veículos em ferramentas de marketing mobile com adesivação profissional e durável.",
    },
    {
      icon: Store,
      title: "Identidade visual",
      description:
        "Desenvolvimento completo de identidade visual para sua marca, do conceito à aplicação.",
    },
    {
      icon: User,
      title: "Apresentador de conteúdo",
      description:
        "Microinfluencer especialista em humanizar marcas e produtos, criando conexão autêntica com seu público.",
    },
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Orange glow effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6 rounded-full shadow-[0_0_20px_hsl(37_97%_66%/0.5)]" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas em publicidade integrada para impulsionar sua marca
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <img
            src={servicesVisual}
            alt="Materiais gráficos e impressos Flash Publicidade"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
          <img
            src={digitalMarketing}
            alt="Marketing digital Flash Publicidade"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
          <img
            src={printingProduction}
            alt="Produção gráfica Flash Publicidade"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
          <img
            src={vehicleWrap}
            alt="Plotagem de frota Flash Publicidade"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
          <img
            src={socialMediaTablet}
            alt="Gestão de redes sociais Flash Publicidade"
            className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl sm:rounded-2xl shadow-lg"
          />
          <div className="w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center p-6 sm:p-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                E muito mais!
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Soluções personalizadas para cada necessidade
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
