import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "Siemens Teamcenter",
  "ITK",
  "BMIDE",
  "Active Workspace",
  "C",
  "C++",
  "SQL",
  "Git",
  "Visual Studio",
  "Eclipse",
];

const services = [
  {
    title: "Teamcenter Development",
    description:
      "Develop and customize Teamcenter applications using ITK to build scalable and efficient PLM solutions.",
  },
  {
    title: "BMIDE Configuration",
    description:
      "Configure business objects, properties, workflows, and data models tailored to enterprise requirements.",
  },
  {
    title: "Active Workspace",
    description:
      "Customize Active Workspace to create intuitive user experiences and enhance productivity.",
  },
];

const stats = [
  {
    number: "1+",
    title: "Years Experience",
  },
  {
    number: "20+",
    title: "Customizations",
  },
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Passion for Learning",
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            About Me
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate Teamcenter PLM Developer focused on building enterprise
            Product Lifecycle Management solutions through customization,
            automation, and modern engineering practices.
          </p>
        </motion.div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6">
            <h2 className="text-3xl font-bold">Teamcenter PLM Developer</h2>

            <p className="text-lg text-muted-foreground leading-8">
              I'm a passionate PLM Developer specializing in Siemens Teamcenter
              development. My expertise includes Teamcenter ITK customization,
              BMIDE configuration, and Active Workspace customization for
              enterprise Product Lifecycle Management applications.
            </p>

            <p className="text-lg text-muted-foreground leading-8">
              I enjoy solving complex business problems by developing scalable
              custom solutions, automating workflows, extending Teamcenter
              functionalities, and creating efficient engineering processes for
              enterprise customers.
            </p>

            <p className="text-lg text-muted-foreground leading-8">
              Apart from PLM development, I continuously improve my knowledge of
              backend development, databases, software architecture, and modern
              technologies. I believe writing clean, maintainable code and
              constantly learning are the keys to becoming a great software
              engineer.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center shadow-2xl">
                <img
                  src="hero.png"
                  alt="Profile"
                  className="w-72 h-72 object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}>
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold gradient-text">
                {item.number}
              </h3>

              <p className="text-muted-foreground mt-3">{item.title}</p>
            </div>
          ))}
        </motion.div>

        {/* What I Do */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}>
          <h2 className="text-4xl font-bold text-center gradient-text mb-14">
            What I Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent-cyan hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

                <p className="text-muted-foreground leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}>
          <h2 className="text-4xl font-bold text-center gradient-text mb-12">
            Technologies I Work With
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 rounded-full bg-card border border-border hover:border-accent-cyan hover:scale-105 transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}>
          <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-border rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              My Philosophy
            </h2>

            <p className="text-xl text-muted-foreground leading-9 italic max-w-4xl mx-auto">
              "Technology is not just about writing code; it's about solving
              real business challenges. I strive to build scalable,
              maintainable, and impactful PLM solutions that improve engineering
              collaboration and drive innovation."
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
