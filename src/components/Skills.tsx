const Skills = () => {
  const skills = [
    { name: "Frontend Development", level: "Expert" },
    { name: "Backend Development", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Database Management", level: "Advanced" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-text mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-text mb-2">{skill.name}</h3>
              <p className="text-text-light">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;