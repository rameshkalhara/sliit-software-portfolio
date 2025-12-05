import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with user authentication, product management, cart functionality, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "Healthcare Management App",
    description:
      "Hospital management system for appointment scheduling, patient records, and doctor availability management.",
    tech: ["React", "Spring Boot", "MySQL", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Assistant",
    description:
      "Intelligent chatbot application using machine learning for natural language processing and contextual responses.",
    tech: ["Python", "TensorFlow", "Flask", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing and management platform with search filters, virtual tours, and agent communication.",
    tech: ["Vue.js", "Express", "PostgreSQL", "AWS S3"],
    github: "#",
    live: "#",
  },
  {
    title: "Inventory Management System",
    description:
      "Enterprise inventory solution with barcode scanning, stock alerts, and comprehensive reporting dashboard.",
    tech: ["Angular", "Django", "Redis", "Chart.js"],
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
            A selection of projects I've worked on during my academics and internship
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-12" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={40} />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
