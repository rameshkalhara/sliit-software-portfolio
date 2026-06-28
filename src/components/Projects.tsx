import {
  ExternalLink,
  Github,
  Folder,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

// Screenshots
import orelit from "@/assets/projects/OrelIT.jpg";

import health1 from "@/assets/projects/Health1.png";
import health2 from "@/assets/projects/Health2.png";
import health3 from "@/assets/projects/Health3.png";

import biomed1 from "@/assets/projects/BioMedRAG1.jpg";
import biomed2 from "@/assets/projects/BioMedRAG2.png";

import ocean1 from "@/assets/projects/OceanWatch1.png";
import ocean2 from "@/assets/projects/OceanWatch2.jpg";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "AI-Powered Recruitment Management System",
    description:
      "Developed an AI-powered recruitment management platform to automate candidate screening and hiring workflows. Implemented applicant management, AI-assisted processing, workflow automation and scalable Docker-based deployment.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Python",
      "Docker",
      "Tailwind CSS",
    ],
    github: "#",
    live: "#",
    images: [orelit],
  },

  {
    title: "Medicare Healthcare Platform",
    description:
      "Built a cloud-native healthcare platform using microservices architecture. Implemented patient management, doctor appointments, telemedicine consultations, Stripe payments, Gemini AI symptom checking, Docker containerization and Kubernetes deployment.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "React",
      "Docker",
      "Kubernetes",
      "JWT",
      "PostgreSQL",
    ],
    github: "https://github.com/KalharaDMR/HealthCare",
    live: "#",
    images: [health1, health2, health3],
  },

  {
    title: "Biomedical RAG System",
    description:
      "Developed a Retrieval-Augmented Generation (RAG) system for biomedical question answering using hybrid retrieval, semantic search, FAISS/Qdrant vector databases and Google Gemini API with a ChatGPT-style interface.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "FAISS",
      "Qdrant",
      "Gemini",
      "RAG",
    ],
    github: "https://github.com/KalharaDMR/BioMedical_RAG",
    live: "#",
    images: [biomed1, biomed2],
  },

  {
    title: "OceanWatch Illegal Fishing Platform",
    description:
      "Developed a full-stack marine monitoring platform with JWT authentication, role-based authorization, AI advisory features, SMS/email notifications and cloud deployment using Railway and Vercel.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Twilio",
      "SendGrid",
      "Gemini",
    ],
    github:
      "https://github.com/KalharaDMR/illegalFishingBackend",
    live: "#",
    images: [ocean1, ocean2],
  },

  {
    title: "AI-Powered Personal Finance Tracker",
    description:
      "Developed an AI-powered mobile finance tracking application with intelligent financial recommendations using Groq API and LLM integration. Implemented secure REST APIs and mobile-first user experience.",
    tech: [
      "React Native",
      "Node.js",
      "Express",
      "SQLite",
      "Groq API",
      "LLM",
    ],
    github:
      "https://github.com/rameshkalhara/personal-finance-tracker",
    live: "#",
    images: [
      "https://placehold.co/800x500?text=Finance+Tracker",
    ],
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const handleOpenProject = (
    project: Project,
    imageIndex = 0
  ) => {
    setSelectedProject(project);
    setCurrentImage(imageIndex);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const handlePrev = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0
        ? selectedProject.images.length - 1
        : prev - 1
    );
  };

  const handleNext = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="text-gradient">
                Featured Projects
              </span>
            </h2>

            <p className="text-muted-foreground text-center mb-4">
              Real-world projects developed through
              academics, research and industry
              collaboration
            </p>

            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-12" />

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  {/* Screenshot Preview */}
                  <div className="h-60 overflow-hidden">
                    {project.images.length > 1 ? (
                      <div className="grid grid-cols-2 h-full">
                        {project.images
                          .slice(0, 4)
                          .map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={project.title}
                              onClick={() =>
                                handleOpenProject(
                                  project,
                                  index
                                )
                              }
                              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            />
                          ))}
                      </div>
                    ) : (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        onClick={() =>
                          handleOpenProject(project, 0)
                        }
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <Folder
                        className="text-primary"
                        size={32}
                      />

                      <div className="flex gap-3">
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Github size={20} />
                          </a>
                        )}

                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded bg-primary/10 text-primary text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        handleOpenProject(project, 0)
                      }
                      className="mt-4 text-primary text-sm hover:underline"
                    >
                      View Screenshots →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="heroOutline"
                size="lg"
                asChild
              >
                <a
                  href="https://github.com/KalharaDMR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  View More on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          currentImage={currentImage}
          onPrev={handlePrev}
          onNext={handleNext}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

