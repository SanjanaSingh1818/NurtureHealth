import { useEffect } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { FaWhatsapp } from "react-icons/fa";


const FloatingActions = () => {
  useEffect(() => {
    gsap.fromTo(".floating-actions", 
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1.5, ease: "power2.out" }
    );

    // Floating animation
    gsap.to(".floating-actions .floating-btn", {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.2
    });
  }, []);

  const actions = [
 {
  icon: FaWhatsapp,
  href: "https://wa.me/918506000750",
  bgColor: "bg-green-500 hover:bg-green-600",
  label: "WhatsApp"
},
    {
      icon: Phone,
      href: "tel:+918506000750",
      bgColor: "bg-primary hover:bg-primary/90",
      label: "Call"
    },
    {
      icon: Mail,
      href: "mailto:we.nurturehealth@gmail.com",
      bgColor: "bg-secondary hover:bg-secondary/90",
      label: "Email"
    }
  ];

  return (
    <div className="floating-actions fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <Button
            key={index}
            size="icon"
            className={`floating-btn w-12 h-12 rounded-full shadow-lg ${action.bgColor} bg-opacity-80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-opacity-100`}
            asChild
          >
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={action.label}
            >
              <Icon className="w-7 h-7 text-white" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default FloatingActions;