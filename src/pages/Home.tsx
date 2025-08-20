import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Heart, Shield, Star, MapPin } from "lucide-react";

const Home = () => {
  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.fromTo(".hero-title", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(".hero-subtitle", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(".hero-cta", 
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Features animation
    gsap.fromTo(".feature-card", 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        }
      }
    );
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Expert Orthopaedic Care",
      description: "Specialized treatment for bone, joint, and muscle conditions with years of experience."
    },
    {
      icon: Shield,
      title: "Modern Treatment Methods",
      description: "Latest medical technology and minimally invasive procedures for better recovery."
    },
    {
      icon: Star,
      title: "Personalized Treatment Plans",
      description: "Customized care plans tailored to each patient's specific needs and conditions."
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-32 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nurture Health
              </span>
              <br />
              <span className="text-foreground text-4xl md:text-5xl">
                Orthopaedics Specialist
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert bone and joint care with compassionate treatment. 
              Your path to recovery starts here.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 text-lg px-8 py-6"
                asChild
              >
                <Link to="/contact">Book Appointment</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-105 text-lg px-8 py-6"
                asChild
              >
                <a 
                  href="https://share.google/oXaGK00jvKaXtdV4F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Find Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose <span className="text-primary">Nurture Health</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive orthopaedic care with a patient-first approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="feature-card bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-border">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-center text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Recovery?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards better bone and joint health. Contact us today for a consultation.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 transition-all hover:scale-105 text-lg px-12 py-6"
            asChild
          >
            <Link to="/contact">Contact Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;