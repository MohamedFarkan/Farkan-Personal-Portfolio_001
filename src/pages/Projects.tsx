import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    // {
    //   title: "E-commerce Platform",
    //   description:
    //     "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    //   technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    //   image: "/assets/certificate-1.jpg",
    //   github: "#",
    //   live: "#",
    // },
    {
      title: "SmartScan - AI Summarizer",
      description:
        "SmartScan is an AI-powered tool that condenses lengthy articles into clear and concise summaries, helping you read smarter and faster.",
      technologies: ["React", "Javascript", "Tailwind CSS", "Rapid API"],
      image: "/public/assets/project-2.png",
      github: "https://github.com/MohamedFarkan/AI-Summarizer",
      live: "https://smart-scan.netlify.app/",
    },
    {
      title: "PMT Steel Corporation – Modern Business Website",
      description:
        "Developed and delivered a modern, responsive website for PMT Steel Corporation to showcase their steel products and boost customer engagement.",
      technologies: ["React", "Javascript", "Framer Motion", "Tailwind CSS"],
      image: "/public/assets/project-3.png",
      github: "https://github.com/MohamedFarkan/PMT-STEELS",
      live: "https://mohamedfarkan.github.io/PMT-STEELS/",
    },
    {
      title: "Expense Tracker",
      description: "Expense Tracker allows users to track their money flow ",
      technologies: ["React", "Javascript", "Tailwind CSS", "MongoDB"],
      image: "/public/assets/project-4.png",
      github: "https://github.com/MohamedFarkan/Expense-Tracker",
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
      id="projects">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          My Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent-cyan/10 transition-all duration-300 transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="blank"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent-cyan transition-colors">
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="blank"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent-cyan transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
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

export default Projects;
