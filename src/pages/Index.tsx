import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Stopwatch from "../components/Stopwatch";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Stopwatch Project</h2>
        <Stopwatch />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;