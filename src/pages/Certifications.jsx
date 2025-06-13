import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming Basics",
      description:
        "For successfully completing a free online course Programming Basics from Great Learning",
      technologies: ["Programming Basics"],
      image: "/public/assets/certificate-1.jpg",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      technologies: ["React", "TypeScript", "Socket.io", "Express"],
      image: "/placeholder.svg",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with 3D elements and animations",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      image: "/placeholder.svg",
      github: "#",
      live: "#",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-16"
      id="certifications">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          My Certifications
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent-cyan/10 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="object-contain  h-full"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{certificate.title}</h3>
                <p className="text-muted-foreground">
                  {certificate.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {certificate.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={certificate.github}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent-cyan transition-colors">
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={certificate.live}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent-cyan transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
