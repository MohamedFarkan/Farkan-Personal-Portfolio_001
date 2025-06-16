import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            About Me
          </motion.h1>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A dedicated and enthusiastic MCA student with a strong
                foundation in computer science, eager to apply academic
                knowledge and practical skills in a dynamic work environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A quick learner with a passion for staying updated on emerging
                technologies, and committed to driving innovation in the field
                of computer science.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into a
                commitment to crafting exceptional digital experiences. I
                believe in the power of clean code, intuitive design, and
                continuous learning.
              </p>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
                <img
                  src="/assets/Farkan_photo5.jpg"
                  className="w-72 h-72 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground"
                />
                {/* <img src="/public/assets/Farkan (1).jpg" alt="" /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
