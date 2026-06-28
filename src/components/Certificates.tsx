import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import CertificateModal from "@/components/CertificateModal";

// imports
import aiml2 from "@/assets/certificates/aiml-stage2.jpg";
import mongodb from "@/assets/certificates/mongodb-node.jpg";
import github from "@/assets/certificates/github-basics.jpg";
import aiml1 from "@/assets/certificates/aiml-stage1.jpg";
import hpai from "@/assets/certificates/hp-ai.jpg";
import hpagile from "@/assets/certificates/hp-agile.jpg";
import hpemail from "@/assets/certificates/hp-business-email.jpg";
import postman from "@/assets/certificates/postman.jpg";
import python1 from "@/assets/certificates/python-dp1.jpg";
import python2 from "@/assets/certificates/python-dp.jpg";
import dean from "@/assets/certificates/deans-list.jpg";

const certificates = [
  {
    title: "Dean's List - Academic Excellence",
    issuer: "SLIIT",
    date: "2024",
    image: dean,
    featured: true,
  },

  {
    title: "AI/ML Engineer - Stage 2",
    issuer: "SLIIT",
    date: "Dec 2025",
    image: aiml2,
  },

  {
    title: "MongoDB Node.js Developer Path",
    issuer: "MongoDB",
    date: "Oct 2025",
    image: mongodb,
  },

  {
    title: "GitHub Basics",
    issuer: "Simplilearn",
    date: "Jul 2025",
    image: github,
  },

  {
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT",
    date: "Jul 2025",
    image: aiml1,
  },

  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    date: "Jun 2025",
    image: hpai,
  },

  {
    title: "Agile Project Management",
    issuer: "HP LIFE",
    date: "Jun 2025",
    image: hpagile,
  },

  {
    title: "Business Email",
    issuer: "HP LIFE",
    date: "Jun 2025",
    image: hpemail,
  },

  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Jun 2025",
    image: postman,
  },

  {
    title: "Introduction to Programming Using Python",
    issuer: "DP Education",
    date: "Jan 2025",
    image: python1,
  },

  {
    title: "Introduction to Programming Using Python",
    issuer: "DP Education",
    date: "Jan 2025",
    image: python2,
  },
];

export const Certificates = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <section
        id="certificates"
        className="py-24 bg-secondary/30 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(177_70%_50%/0.05),transparent_70%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="text-gradient">
                Certifications & Achievements
              </span>
            </h2>

            <p className="text-muted-foreground text-center mb-4">
              Certifications and academic achievements
              demonstrating continuous learning and
              professional development
            </p>

            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-12" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {certificates.map((cert) => (
                <div
                  key={`${cert.title}-${cert.image}`}
                  className="group rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelected([cert.image]);
                    setCurrentImage(0);
                  }}
                >
                  {/* Certificate Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Award
                          className="text-primary"
                          size={20}
                        />
                      </div>

                      <ExternalLink
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                        size={18}
                      />
                    </div>

                    <h3 className="font-semibold mb-2 leading-tight group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                    </p>

                    <p className="text-primary text-xs mt-2 font-mono">
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-10">
              View additional certifications on{" "}
              <a
                href="https://www.linkedin.com/in/ramesh-kalhara-041504314/"
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

      <CertificateModal
        isOpen={selected.length > 0}
        onClose={() => setSelected([])}
        certificates={selected}
        currentIndex={currentImage}
        setCurrentIndex={setCurrentImage}
      />
    </>
  );
};