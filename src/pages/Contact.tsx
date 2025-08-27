import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { gsap } from "gsap";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Page animations
    const tl = gsap.timeline();
    
    tl.fromTo(".contact-hero", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(".contact-form", 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(".contact-info", 
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.8"
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create WhatsApp message
      const messageText = `Hello, my name is ${formData.name}.
My email is ${formData.email}.
Here is my message: 
${formData.message}`;

      const encodedMessage = encodeURIComponent(messageText);

      // WhatsApp link (India code +91)
      const whatsappURL = `https://wa.me/918506000750?text=${encodedMessage}`;

      // Redirect to WhatsApp
      window.open(whatsappURL, "_blank");

      toast({
        title: "Redirecting to WhatsApp...",
        description: "You can send your message directly.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open WhatsApp. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      details: ["Mahagun Mart, MAHAGUN MODERNE, apartment, Sector 78, Noida, Uttar Pradesh 201301"],
      action: {
        text: "Get Directions",
        href: "https://share.google/oXaGK00jvKaXtdV4F"
      }
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-8506000750"],
      action: {
        text: "Call Now",
        href: "tel:+918506000750"
      }
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["we.nurturehealth@gmail.com"],
      action: {
        text: "Send Email",
        href: "mailto:we.nurturehealth@gmail.com"
      }
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      details: ["Mon - Sat: 6:30 PM - 8:30 PM", "Sun: Closed"],
      action: null
    }
  ];

  return (
    <div className="min-h-screen font-poppins pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="contact-hero max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to start your journey to better health? Get in touch with our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="contact-form">
              <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Send us a <span className="text-primary">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your condition or questions..."
                      className="w-full min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-success w-full bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 text-lg py-6"
                  >
                    {isSubmitting ? "Redirecting..." : "Send via WhatsApp"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-3">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                        {info.action && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            asChild
                          >
                            <a
                              href={info.action.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.action.text}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Find Our <span className="text-primary">Location</span>
            </h2>
            
            <div className="bg-card p-6 rounded-3xl shadow-xl border border-border">
              <div className="w-full h-96 bg-muted rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1932724649364!2d77.38510367495424!3d28.56395848719231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef76c1943541%3A0x4a999169cdeedfd2!2sNurture%20Health!5e0!3m2!1sen!2sin!4v1756103629482!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
