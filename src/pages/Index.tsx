
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, Code, Layout, Shield } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
  // References for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Apply animation when component mounts
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    
    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Main content with responsive padding */}
      <main className="pt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-20">
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
                  Build Incredible Web Experiences
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Discover our revolutionary solutions designed to transform your digital presence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="lg" className="group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Begin your journey with NOVA</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Discover our features and capabilities</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-lg">
              <div className="relative aspect-video rounded-lg overflow-hidden border shadow-xl bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800" 
                  alt="Modern web development" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-20" ref={featuresRef}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create stunning web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Modern Design",
                description: "Create beautiful, responsive interfaces with our cutting-edge design system.",
                icon: <Layout className="h-10 w-10 text-primary" />,
                delay: 0,
                tooltip: "Craft stunning user interfaces with modern design principles"
              },
              {
                title: "Powerful Development",
                description: "Build robust applications with our advanced development tools and frameworks.",
                icon: <Code className="h-10 w-10 text-primary" />,
                delay: 100,
                tooltip: "Leverage powerful development tools and frameworks"
              },
              {
                title: "Enterprise Security",
                description: "Ensure your data and users are protected with our comprehensive security solutions.",
                icon: <Shield className="h-10 w-10 text-primary" />,
                delay: 200,
                tooltip: "Protect your applications with enterprise-grade security"
              },
            ].map((feature, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Card 
                    className="feature-card opacity-0 translate-y-8 transition-all duration-700 ease-out hover:shadow-lg border border-border/50 bg-card/50 backdrop-blur-sm"
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="rounded-full p-4 bg-primary/10 mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{feature.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-20">
          <div className="rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 mix-blend-multiply"></div>
            <div className="relative p-8 md:p-12 bg-card/30 backdrop-blur-sm">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Ready to get started?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join thousands of companies already using our platform to build amazing web experiences.
                </p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="lg" className="mt-4">
                      Contact Us
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Get in touch with our team to start your project</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/40 mt-12 bg-muted/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">
              © 2025 NOVA. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
