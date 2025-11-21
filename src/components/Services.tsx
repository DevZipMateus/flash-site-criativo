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
    <section id="servicos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em publicidade integrada para impulsionar sua marca
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <img
            src={servicesVisual}
            alt="Materiais gráficos e impressos Flash Publicidade"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <img
            src={digitalMarketing}
            alt="Marketing digital Flash Publicidade"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <img
            src={printingProduction}
            alt="Produção gráfica Flash Publicidade"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <img
            src={vehicleWrap}
            alt="Plotagem de frota Flash Publicidade"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <img
            src={socialMediaTablet}
            alt="Gestão de redes sociais Flash Publicidade"
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl shadow-lg flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                E muito mais!
              </h3>
              <p className="text-muted-foreground">
                Soluções personalizadas para cada necessidade
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <h3 className="text-xl font-bold text-center mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
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
