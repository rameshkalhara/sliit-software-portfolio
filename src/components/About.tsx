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
                I'm a passionate software engineering student currently in my 3rd year, 
                2nd semester at Sri Lanka Institute of Information Technology (SLIIT), 
                Malabe Campus.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm gaining valuable industry experience as a Software Engineering 
                Intern at <span className="text-primary font-semibold">ORELIT</span> at 
                Mireka Tower. This internship has allowed me to work on real-world projects 
                and collaborate with experienced professionals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I've contributed to multiple software projects and gained experience with 
                various programming languages and technologies. I'm always eager to learn 
                new skills and take on challenging projects.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Education</h3>
                    <p className="text-muted-foreground text-sm">SLIIT Malabe Campus</p>
                    <p className="text-primary text-sm">BSc (Hons) Software Engineering</p>
                    <p className="text-muted-foreground text-xs mt-1">3rd Year, 2nd Semester</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Building2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Current Role</h3>
                    <p className="text-muted-foreground text-sm">ORELIT, Mireka Tower</p>
                    <p className="text-primary text-sm">Software Engineering Intern</p>
                    <p className="text-muted-foreground text-xs mt-1">Present</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Code2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Experience</h3>
                    <p className="text-muted-foreground text-sm">Multiple Projects</p>
                    <p className="text-primary text-sm">Full-Stack Development</p>
                    <p className="text-muted-foreground text-xs mt-1">Various Technologies</p>
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
