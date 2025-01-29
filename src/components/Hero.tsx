import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="bg-primary px-4 py-1 text-white rounded-full text-sm mb-4 inline-block">
          Hello, I'm Shraddha Chopade
          </span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-text mb-6"
        >
          Specializing in building robust and scalable web applications with Angular
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-light mb-8"
        >
          Specializing in building robust and scalable web applications with Angular
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="bg-secondary-dark text-text px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;