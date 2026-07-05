import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillCategories = [
    {
      title: "PLM / Teamcenter",
      skills: [
        {
          name: "Siemens Teamcenter",
          desc: "Enterprise Product Lifecycle Management (PLM) system used for managing product data, BOMs, and engineering workflows.",
        },
        {
          name: "ITK Customization (C/C++)",
          desc: "Server-side Teamcenter customization using C/C++ APIs to extend business logic and core functionalities.",
        },
        {
          name: "BMIDE Data Modeling",
          desc: "Used to define and customize Teamcenter data model objects like Item, Dataset, and relations.",
        },
        {
          name: "Active Workspace (AWC)",
          desc: "Modern web UI of Teamcenter used for user interaction, search, and PLM operations.",
        },
        {
          name: "Workflow Development",
          desc: "Automation of engineering processes like approvals, change management, and release cycles.",
        },
        {
          name: "RAC Customization",
          desc: "Rich Client customization for desktop-based Teamcenter applications.",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", desc: "Structure of web pages using semantic markup." },
        { name: "CSS", desc: "Styling and layout of web applications." },
        {
          name: "React",
          desc: "Component-based JavaScript library for building UI.",
        },
        {
          name: "Tailwind CSS",
          desc: "Utility-first CSS framework for rapid UI development.",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "JavaScript",
          desc: "Core programming language for web development.",
        },
        {
          name: "Node.js",
          desc: "JavaScript runtime for backend development.",
        },
        { name: "Express", desc: "Web framework for Node.js APIs." },
        { name: "MongoDB", desc: "NoSQL database for flexible data storage." },
        { name: "MySQL", desc: "Relational database for structured data." },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        {
          name: "Git",
          desc: "Version control system for tracking code changes.",
        },
        { name: "MS Word", desc: "Documentation and reporting tool." },
        { name: "Excel", desc: "Data analysis and spreadsheet management." },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          Skills & Technologies
        </motion.h1>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h3 className="text-2xl font-semibold text-center gradient-text">
                {category.title}
              </h3>

              {/* SKILLS */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.button
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/20 rounded-lg p-3 text-center hover:shadow-lg hover:shadow-accent-cyan/10 transition-all duration-300 transform hover:scale-105">
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* POPUP MODAL */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}>
              <motion.div
                className="bg-card border border-border max-w-md w-full rounded-xl p-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-bold mb-3 gradient-text">
                  {selectedSkill.name}
                </h2>

                <p className="text-muted-foreground leading-6">
                  {selectedSkill.desc}
                </p>

                <button
                  onClick={() => setSelectedSkill(null)}
                  className="mt-6 px-4 py-2 bg-accent-cyan text-white rounded-lg hover:opacity-80 transition">
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* QUOTE SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-border rounded-3xl p-10 max-w-4xl mx-auto">
            <p className="text-lg italic text-muted-foreground">
              “Skills are not just what you know, but how you apply them to
              solve real-world problems.”
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
