import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
           <div className="flex items-center space-x-2">
  {/* Logo with gradient background */}
  <div className="w-40 h-20 bg-gradient-primary rounded-lg flex items-center justify-center overflow-hidden">
    <img
      src={logo}
      alt="Nurture Health Logo"
      className="w-40 h-20"
    />
  </div>

</div>
            <p className="text-muted-foreground font-poppins">
              Leading Orthopaedics Specialist providing comprehensive bone and joint care with modern treatment approaches.
            </p>
           <div className="flex space-x-4">
  {/* WhatsApp */}
  <a
    href="https://wa.me/918506000750" // replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:text-secondary transition-colors"
  >
    <i className="fab fa-whatsapp text-2xl"></i>
  </a>

  {/* Call */}
  <a
    href="tel:+918506000750" // replace with your phone number
    className="text-primary hover:text-secondary transition-colors"
  >
    <i className="fas fa-phone-alt text-xl"></i>
  </a>

  {/* Email */}
  <a
    href="mailto:we.nurturehealth@gmail.com" // replace with your email
    className="text-primary hover:text-secondary transition-colors"
  >
    <i className="fas fa-envelope text-xl"></i>
  </a>
</div>

          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-poppins">
                  Mahagun Mart, MAHAGUN MODERNE, apartment, <br/> Sector 78, Noida, Uttar Pradesh 201301
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-poppins">+91-8506000750</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-poppins">we.nurturehealth@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-foreground">Location</h3>
            <div className="w-full h-40 bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1932724649364!2d77.38510367495424!3d28.56395848719231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef76c1943541%3A0x4a999169cdeedfd2!2sNurture%20Health!5e0!3m2!1sen!2sin!4v1756103629482!5m2!1sen!2sin"
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
    © 2025 Nurture Health. All rights reserved. | Orthopaedics Specialist
    <br />
    Powered by{" "}
    <a
      href="https://genesisvirtue.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      Genesis Virtue
    </a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;