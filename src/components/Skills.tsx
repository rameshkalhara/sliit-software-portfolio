const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "Django", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "Linux", "CI/CD", "Agile/Scrum"],
  },
  {
    title: "Other",
    skills: ["Machine Learning", "Data Structures", "System Design", "UI/UX"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(177_70%_50%/0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
            Technologies I've been working with through academics and industry projects
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-12" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300 border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
