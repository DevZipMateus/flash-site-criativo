import { Mail, Clock, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-footer text-foreground py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 sm:col-span-2">
            <div className="bg-background p-3 sm:p-4 rounded-lg inline-block mb-3 sm:mb-4">
              <img
                src={logoHorizontal}
                alt="Flash Publicidade"
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 max-w-md">
              Sua solução completa em publicidade integrada. Do conceito ao resultado
              líder.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/80">
              CNPJ: 35.203.894/0001-00
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:contato.flashintegrada@gmail.com"
                className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3 sm:h-4 w-3 sm:w-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">contato.flashintegrada@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <Clock className="h-3 sm:h-4 w-3 sm:w-4 mt-0.5 flex-shrink-0" />
                <span>Segunda a Sexta: 8h às 17h</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="h-3 sm:h-4 w-3 sm:w-4 mt-0.5 flex-shrink-0" />
                <span>Rua Deputado Benedito Pinto da Silva</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Redes sociais</h3>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.instagram.com/flash.publicidade.integrada/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.facebook.com/flashpublicidadei/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/flash-publicidade-integrada"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-4 sm:pt-6">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Flash Publicidade. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
