const technicalSkills = [
  "Python", "Java", "JavaScript", "TypeScript",
  "Node.js", "Express", "React", "React Native",
  "AWS", "GCP (Firebase)", "MySQL", "MongoDB",
  "Git", "GitHub", "Linux", "Postman",
];

const softSkills = [
  "Critical Thinking", "Teamwork", "Problem Solving", "Kind & Empathetic",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Passionate about code & innovation
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm a Computer Science undergraduate at the University of Westminster (affiliated with Informatics Institute of Technology), based in Colombo, Sri Lanka. I have a strong interest in web/software development and DevOps/cloud computing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Beyond coding, I play cricket for IIT, volunteer for events like IET Summer School, and regularly attend technical workshops to stay current with emerging technologies.
          </p>
          <div className="mt-6">
            <p className="text-sm text-muted-foreground font-display uppercase tracking-widest mb-3">Languages</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg text-sm font-display">Sinhala (Native)</span>
              <span className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg text-sm font-display">English (Intermediate)</span>
              <span className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg text-sm font-display">Tamil (Basic)</span>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-sm text-muted-foreground font-display uppercase tracking-widest mb-4">Technical Skills</p>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill) => (
                <span key={skill} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium font-display">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-display uppercase tracking-widest mb-4">Soft Skills</p>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span key={skill} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium font-display">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
