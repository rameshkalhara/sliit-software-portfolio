import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2024",
    link: "#",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google (Coursera)",
    date: "2023",
    link: "#",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    link: "#",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford (Coursera)",
    date: "2023",
    link: "#",
  },
  {
    title: "Agile with Atlassian Jira",
    issuer: "Atlassian",
    date: "2024",
    link: "#",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(177_70%_50%/0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
            Professional certifications demonstrating my commitment to continuous learning
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-12" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <a
                key={cert.title}
                href={cert.link}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow block"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {cert.title}
                      </h3>
                      <ExternalLink className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" size={16} />
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                    <p className="text-primary/70 text-xs mt-2 font-mono">{cert.date}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 text-sm">
            View all certifications on{" "}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
