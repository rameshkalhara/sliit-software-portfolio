import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: any;
  currentImage: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectModal({
  project,
  currentImage,
  onClose,
  onPrev,
  onNext,
}: ProjectModalProps) {
  const images =
    project.images || (project.image ? [project.image] : []);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-primary"
      >
        <X size={32} />
      </button>

      <div className="max-w-6xl w-full bg-card rounded-xl border border-border overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-border">
          <h2 className="text-2xl font-bold">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative bg-black flex items-center justify-center">

          {images.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-4 z-10 bg-black/50 p-2 rounded-full"
            >
              <ChevronLeft color="white" />
            </button>
          )}

          <img
            src={images[currentImage]}
            className="max-h-[70vh] object-contain"
          />

          {images.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-4 z-10 bg-black/50 p-2 rounded-full"
            >
              <ChevronRight color="white" />
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="p-6">

          <p className="text-muted-foreground mb-6">
            {project.description}
          </p>

          <div className="flex gap-4">

            {project.github !== "#" && (
              <Button asChild variant="heroOutline">
                <a
                  href={project.github}
                  target="_blank"
                >
                  <Github />
                  GitHub
                </a>
              </Button>
            )}

            {project.live !== "#" && (
              <Button asChild variant="hero">
                <a
                  href={project.live}
                  target="_blank"
                >
                  <ExternalLink />
                  Live Demo
                </a>
              </Button>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}