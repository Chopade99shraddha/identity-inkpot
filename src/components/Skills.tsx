const Skills = () => {
  const skills = [
    { 
      name: "Angular Development",
      level: "Advanced",
      technologies: "Angular, TypeScript, RxJS, NgRx"
    },
    { 
      name: "Frontend Development",
      level: "Advanced",
      technologies: "HTML5, CSS3, JavaScript, Bootstrap"
    },
    { 
      name: "Version Control & Tools",
      level: "Advanced",
      technologies: "Git, GitHub, Angular CLI"
    }
  ];

  return (
    <section className="py-20 bg-secondary" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-text mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-text mb-2">{skill.name}</h3>
              <p className="text-primary font-medium mb-2">{skill.level}</p>
              <p className="text-text-light text-sm">{skill.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;