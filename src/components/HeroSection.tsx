
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FloatingCube from './FloatingCube';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleScrollToAbout = () => {
    navigate('/about');
  };

  const handleDownloadResume = () => {
    // This would trigger a download of your resume PDF
    console.log('Download resume');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Background Gradient Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I'm{' '}
              <span className="gradient-text">
                Your Name
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Developer & UI/UX Designer crafting digital experiences 
              with modern technologies and creative solutions.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={handleContactClick}
                className="group px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-8 py-4 border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <FloatingCube className="floating-animation" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <button
            onClick={handleScrollToAbout}
            className="text-muted-foreground hover:text-accent-cyan transition-colors duration-300 flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
