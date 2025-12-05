import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="text-primary" size={14} /> using React & Tailwind
          </p>
          
          <p className="text-muted-foreground text-sm font-mono">
            <span className="text-primary">&lt;</span>
            software_engineer
            <span className="text-primary">/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
