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
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="font-serif-display text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Computer Science undergraduate at the University of Westminster (affiliated with Informatics Institute of Technology), based in Colombo, Sri Lanka. I have a strong interest in web/software development and DevOps/cloud computing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I play cricket for IIT, volunteer for events like IET Summer School, and regularly attend technical workshops to stay current with emerging technologies.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <p className="text-xs text-muted-foreground font-display uppercase tracking-[0.2em] mb-4">Languages</p>
              <div className="flex flex-wrap gap-3">
                <span className="border border-border text-foreground px-4 py-2 rounded text-sm font-display">Sinhala (Native)</span>
                <span className="border border-border text-foreground px-4 py-2 rounded text-sm font-display">English (Intermediate)</span>
                <span className="border border-border text-foreground px-4 py-2 rounded text-sm font-display">Tamil (Basic)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid - editorial style */}
        <div className="border-t border-border pt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs text-muted-foreground font-display uppercase tracking-[0.2em] mb-6">Technical Skills</p>
              <div className="grid grid-cols-2 gap-3">
                {technicalSkills.map((skill) => (
                  <div key={skill} className="border-l-2 border-primary pl-4 py-1">
                    <span className="text-sm text-foreground font-display">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-display uppercase tracking-[0.2em] mb-6">Soft Skills</p>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div key={skill} className="border-l-2 border-primary pl-4 py-1">
                    <span className="text-sm text-foreground font-display">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
