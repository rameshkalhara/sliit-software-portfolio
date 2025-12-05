import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-12" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:your.email@example.com" className="text-foreground hover:text-primary transition-colors">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-muted-foreground hover:text-primary" size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="text-muted-foreground hover:text-primary" size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
