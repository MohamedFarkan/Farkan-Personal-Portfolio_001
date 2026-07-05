import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "AI SaaS Web App",
      category: "AI",
      description:
        "AI-powered SaaS platform for article generation, image creation, and automation using Gemini API.",
      technologies: ["React", "Tailwind", "Gemini API", "PostgreSQL", "Clerk"],
      image: "project-6.png",
      github: "https://github.com/MohamedFarkan/AI_Saas",
      live: "",
      featured: true,
    },
    {
      title: "Moleculyst - Drug Discovery Platform",
      category: "AI",
      description:
        "AI-powered drug discovery platform using ML and protein structure prediction with NVIDIA APIs.",
      technologies: ["React", "NVIDIA API", "MongoDB", "Gemini API"],
      image: "project-5.png",
      github: "https://github.com/MohamedFarkan/Moleculyst",
      live: "",
      featured: true,
    },
    {
      title: "SmartScan - AI Summarizer",
      category: "AI",
      description:
        "Summarizes long articles into concise insights using AI for faster reading and productivity.",
      technologies: ["React", "Rapid API", "Tailwind"],
      image: "project-2.png",
      github: "https://github.com/MohamedFarkan/AI-Summarizer",
      live: "https://smart-scan.netlify.app/",
      featured: false,
    },
    {
      title: "PMT Steel Website",
      category: "Web",
      description:
        "Modern business website built for steel corporation to showcase products and improve engagement.",
      technologies: ["React", "Framer Motion", "Tailwind"],
      image: "project-3.png",
      github: "https://github.com/MohamedFarkan/PMT-STEELS",
      live: "https://mohamedfarkan.github.io/PMT-STEELS/",
      featured: false,
    },
    {
      title: "Expense Tracker App",
      category: "Full Stack",
      description:
        "Track income and expenses with a simple full-stack MERN application.",
      technologies: ["React", "MongoDB", "Node"],
      image: "project-4.png",
      github: "https://github.com/MohamedFarkan/Expense-Tracker",
      live: "#",
      featured: false,
    },
  ];

  const categories = ["All", "AI", "Web", "Full Stack"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text">My Projects</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of my work in AI, web development, and full-stack
            applications.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? "bg-accent-cyan text-white border-accent-cyan"
                  : "border-border text-muted-foreground hover:border-accent-cyan"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent-cyan transition-all duration-300 hover:-translate-y-2">
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 left-3 bg-accent-cyan text-black text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Rocket className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* IMAGE */}
              <div className="h-48 overflow-hidden bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-accent-cyan transition">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-6">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-background border border-border">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex justify-between pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-cyan">
                    <Github className="w-4 h-4" />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-cyan">
                    <ExternalLink className="w-4 h-4" />
                    Live
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
