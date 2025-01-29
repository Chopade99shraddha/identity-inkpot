const Projects = () => {
  const projects = [
    {
      title: "Angular E-commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online store operations",
      technologies: ["Angular", "TypeScript", "NgRx", "Material UI"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Real-time task tracking application with team collaboration features",
      technologies: ["Angular", "RxJS", "Firebase", "Bootstrap"],
      link: "#"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling and medical records",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-text mb-12 text-center">Featured Angular Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-text mb-3">{project.title}</h3>
              <p className="text-text-light mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                className="text-primary hover:text-primary-dark font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;