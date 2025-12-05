import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(177_70%_50%/0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up">
            Hi, my name is
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up animation-delay-100">
            <span className="text-foreground">Software Engineer</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up animation-delay-200">
            <span className="text-gradient">Intern @ ORELIT</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-300 leading-relaxed">
            3rd Year Software Engineering student at{" "}
            <span className="text-primary">SLIIT</span>, passionate about building 
            scalable applications and solving complex problems through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up animation-delay-400">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center animate-fade-up animation-delay-500">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="text-muted-foreground" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
