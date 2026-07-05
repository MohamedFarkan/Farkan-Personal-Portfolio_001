import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming Basics",
      type: "Course",
      description:
        "Completed foundational programming course covering logic building, problem solving, and core programming concepts.",
      image: "certificate-1.jpg",
    },
    {
      title: "Techplement Internship",
      type: "Internship",
      description:
        "Worked with a team to develop a dynamic news aggregator web application using modern web technologies.",
      image: "certificate-2.png",
    },
    {
      title: "MongoDB Basics (M001)",
      type: "Database",
      description:
        "Completed MongoDB University certification covering NoSQL concepts, CRUD operations, and database modeling.",
      image: "certificate-3.png",
    },
    {
      title: "PMT Steel Corporation Project",
      type: "Real Project",
      description:
        "Developed a responsive business website for a steel corporation to improve product visibility and customer engagement.",
      image: "certificate-4.jpg",
    },
  ];

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
          className="text-center mb-14">
          <h1 className="text-5xl font-bold gradient-text">
            Certifications & Achievements
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of certifications, internships, and real-world project
            experiences that shaped my development journey.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent-cyan transition-all duration-300 hover:-translate-y-2">
              {/* IMAGE */}
              <div className="h-48 bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                {/* TYPE BADGE */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                    <CheckCircle className="w-3 h-3" />
                    {item.type}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    Verified
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold group-hover:text-accent-cyan transition">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-muted-foreground leading-6">
                  {item.description}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* HIGHLIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20">
          <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-border rounded-3xl p-10 text-center max-w-4xl mx-auto">
            <Award className="w-10 h-10 mx-auto mb-4 text-accent-cyan" />

            <h2 className="text-3xl font-bold gradient-text mb-4">
              Continuous Learning
            </h2>

            <p className="text-muted-foreground leading-8">
              I actively pursue certifications and hands-on projects to
              strengthen my expertise in software development, databases, and
              enterprise PLM systems like Siemens Teamcenter. Every
              certification reflects my commitment to continuous improvement and
              real-world problem solving.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certifications;
