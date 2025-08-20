import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">NH</span>
              </div>
              <span className="font-poppins font-semibold text-xl">
                <span className="text-primary">Nurture</span>{" "}
                <span className="text-secondary">Health</span>
              </span>
            </div>
            <p className="text-muted-foreground font-poppins">
              Leading Orthopaedics Specialist providing comprehensive bone and joint care with modern treatment approaches.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-primary hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-primary hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-primary hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-poppins">
                  Visit our clinic for consultation
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-poppins">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-poppins">info@nurturehealth.com</span>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground">Location</h3>
            <div className="w-full h-32 bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://share.google/oXaGK00jvKaXtdV4F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground font-poppins text-sm">
            © 2024 Nurture Health. All rights reserved. | Orthopaedics Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;