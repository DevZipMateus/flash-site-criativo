import { Mail, Clock, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para transformar suas ideias em resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card className="border-none shadow-md">
            <CardContent className="pt-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">
                Informações de contato
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:contato.flashintegrada@gmail.com"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      contato.flashintegrada@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                      Horário de funcionamento
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">Segunda a Sexta: 8h às 17h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Endereço</p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Rua Deputado Benedito Pinto da Silva
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardContent className="pt-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">
                Redes sociais
              </h3>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <a
                  href="https://www.instagram.com/flash.publicidade.integrada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Instagram</p>
                    <p className="text-xs sm:text-sm text-muted-foreground break-all">
                      @flash.publicidade.integrada
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/flashpublicidadei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Facebook</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Flash Publicidade Integrada
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/company/flash-publicidade-integrada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">LinkedIn</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Flash Publicidade Integrada
                    </p>
                  </div>
                </a>
              </div>

              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="mailto:contato.flashintegrada@gmail.com">
                  Enviar mensagem
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
