import { GraduationCap, Building2, Code2 } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Software Engineering undergraduate at
                Sri Lanka Institute of Information Technology (SLIIT),
                currently pursuing a BSc (Hons) in Information Technology
                specializing in Software Engineering.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I recently completed a six-month Software Engineer
                Internship at{" "}
                <span className="text-primary font-semibold">
                  OREL IT
                </span>
                , where I gained hands-on experience across the software
                development lifecycle, working on full-stack applications,
                cloud deployment workflows, and modern software engineering
                practices.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My interests lie in Full-Stack Development, Cloud-Native
                Engineering, DevOps, Kubernetes, and AI-powered applications.
                I enjoy building scalable systems and have developed projects
                involving microservices architecture, AI integration,
                containerization, and modern web technologies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="text-primary" size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Education
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      SLIIT University
                    </p>
                    <p className="text-primary text-sm">
                      BSc (Hons) IT Specializing in Software Engineering
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      GPA: 3.32
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Building2 className="text-primary" size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Industry Experience
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      OREL IT Pvt Ltd
                    </p>
                    <p className="text-primary text-sm">
                      Software Engineer Intern
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Jul 2025 – Dec 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Code2 className="text-primary" size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Technical Focus
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Full-Stack • AI • DevOps
                    </p>
                    <p className="text-primary text-sm">
                      React • Spring Boot • Kubernetes
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Cloud-Native & AI Applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};