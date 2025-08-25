import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Heart, Shield, Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-image-1.jpg";
import heroImage2 from "@/assets/hero-image-2.jpg";
import aboutImage from "@/assets/image.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [heroImage1, heroImage2];

  useEffect(() => {
    // Auto-slide carousel every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

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

    // Carousel slide animation
    gsap.fromTo(".carousel-image", 
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    // About section animation
    gsap.fromTo(".about-content", 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".about-section", start: "top 80%" } }
    );
    
    gsap.fromTo(".about-img", 
      { x: 50, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out", scrollTrigger: { trigger: ".about-section", start: "top 80%" } }
    );

  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

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
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Hero ${index + 1}`}
                  className="carousel-image w-full h-full object-cover"
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
            ))}
          </div>
          
          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-32 text-center relative z-30">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
                Nurture Health
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl drop-shadow-lg">
                Orthopaedics Specialist
              </span>
            </h1>
            
            <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Expert bone and joint care with compassionate treatment. 
              Your path to recovery starts here.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 text-lg px-8 py-6 shadow-xl"
                asChild
              >
                <Link to="/contact">Book Appointment</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-all hover:scale-105 text-lg px-8 py-6 shadow-xl"
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

      {/* About Section */}
      <section className="about-section py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-primary">Nurture Health</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left: Content */}
            <div className="about-content space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <strong>Nurture Health</strong>, we are committed to delivering 
                world-class orthopaedic care. Our team of specialists provides 
                personalized treatment plans that focus on improving mobility, 
                reducing pain, and enhancing quality of life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With state-of-the-art technology and a patient-first approach, 
                we ensure that every individual receives compassionate and 
                comprehensive care tailored to their unique needs.
              </p>

              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 px-8 py-6 shadow-lg"
                asChild
              >
                <Link to="/about">Read More</Link>
              </Button>
            </div>

            {/* Right: Image */}
            <div className="about-image relative">
              <img
                src={aboutImage}
                alt="About Nurture Health"
                className="rounded-2xl shadow-xl object-cover w-full h-[400px] about-img"
              />
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
