import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    gsap.fromTo(".not-found-content", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 font-poppins">
      <div className="not-found-content text-center max-w-2xl mx-auto px-4">
        <div className="text-8xl md:text-9xl font-bold mb-8">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Page Not Found
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist. Let's get you back to health care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105"
            asChild
          >
            <Link to="/">Go Home</Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-105"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
