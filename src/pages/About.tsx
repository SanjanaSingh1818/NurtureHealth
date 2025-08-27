import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Clock, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Create floating bubbles
    const createBubbles = () => {
      const bubbleContainer = document.querySelector('.bubble-container');
      if (!bubbleContainer) return;

      for (let i = 0; i < 6; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.top = Math.random() * 100 + '%';
        bubble.style.width = (Math.random() * 60 + 20) + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.animationDelay = Math.random() * 6 + 's';
        bubbleContainer.appendChild(bubble);
      }
    };

    createBubbles();

    // Page animations
    const tl = gsap.timeline();
    
    tl.fromTo(".about-hero", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(".about-content", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Stats animation
    gsap.fromTo(".stat-card", 
      { y: 50, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power2.out",
        delay: 0.5
      }
    );

    // Specialty section animation
    gsap.fromTo(".specialty-content", 
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out",
        delay: 1
      }
    );
  }, []);

  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Patients Treated",
      color: "text-primary"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "text-secondary"
    },
    {
      icon: Clock,
      number: "50+",
      label: "Advanced Treatments",   // ✅ Replaced "Emergency Care"
      color: "text-accent"
    },
    {
      icon: Heart,
      number: "99%",
      label: "Success Rate",
      color: "text-health-green"
    }
  ];


  return (
    <div className="min-h-screen font-poppins pt-20">
      {/* Floating Bubbles Background */}
      <div className="bubble-container fixed inset-0 pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="about-hero max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nurture Health
              </span>
            </h1>
            <p className="about-content text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Dedicated to providing exceptional orthopaedic care with a compassionate approach. 
              Your health and recovery are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="stat-card text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="about-content bg-background p-8 md:p-12 rounded-3xl shadow-xl border border-border">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                Our <span className="text-primary">Story</span>
              </h2>
              
             <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
  <p className="text-xl">
    At <strong>Nurture Health</strong>, we believe that every patient deserves 
    personalized, comprehensive orthopaedic care. Our clinic was founded with the 
    vision of combining cutting-edge medical technology with compassionate patient care.
  </p>
  
  <p>
    We understand that bone and joint problems can significantly impact your quality 
    of life. That's why we're committed to providing not just treatment, but a complete 
    healing experience that addresses your physical, emotional, and lifestyle needs.
  </p>
  
  <p>
    Our state-of-the-art facility is equipped with the latest diagnostic and treatment 
    technologies, allowing us to provide accurate diagnoses and effective treatment 
    plans for a wide range of orthopaedic conditions.
  </p>

  <p>
    Our team is led by <strong>Dr. Kulbhushan Kamboj</strong>, a highly skilled 
    orthopaedic specialist known for his expertise and patient-first approach. 
    He is also an active member of the <em>Orthopedics Community on Medisage</em>, 
    where he contributes his knowledge and stays updated with the latest advancements 
    in orthopaedic care. With his guidance, Nurture Health continues to set high 
    standards in delivering compassionate and world-class treatment tailored to 
    each patient’s unique needs.
  </p>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="specialty-section py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="specialty-content">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="text-secondary">Specialty</span>
              </h2>
              <h3 className="text-3xl font-semibold mb-6 text-primary">Orthopaedics</h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Our orthopaedic specialty encompasses the comprehensive diagnosis, treatment, 
                  and rehabilitation of musculoskeletal disorders, including:
                </p>
                
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Joint replacement and reconstruction surgery
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Sports injury treatment and prevention
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Spine and back pain management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-health-green rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    Fracture treatment and trauma care
                  </li>
                </ul>
                
                <p className="text-lg">
                  We utilize minimally invasive techniques whenever possible to ensure 
                  faster recovery times and better patient outcomes.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card p-8 rounded-3xl shadow-xl border border-border">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-foreground">Board Certified</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our specialists are board-certified in orthopaedic surgery with 
                    extensive training in the latest treatment methodologies and surgical techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;