const skills = [
  "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Next.js", "PostgreSQL", "Figma", "Git",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Passionate about code & design
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a full-stack developer with 5+ years of experience building modern web applications. I love creating seamless user experiences that combine beautiful design with clean, maintainable code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sketching UI concepts.
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-display uppercase tracking-widest mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium font-display">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
