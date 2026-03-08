import { motion } from "framer-motion";

const technicalSkills = [
  "Python", "Java", "JavaScript", "TypeScript",
  "Node.js", "Express", "React", "React Native",
  "AWS", "GCP (Firebase)", "MySQL", "MongoDB",
  "Git", "GitHub", "Linux", "Postman",
];

const softSkills = [
  "Critical Thinking", "Teamwork", "Problem Solving", "Kind & Empathetic",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-12 md:mb-20">
          <motion.div variants={itemVariants}>
            <h2 className="font-serif-display text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Computer Science undergraduate at the University of Westminster (affiliated with Informatics Institute of Technology), based in Colombo, Sri Lanka. I have a strong interest in web/software development and DevOps/cloud computing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I play cricket for IIT, volunteer for events like IET Summer School, and regularly attend technical workshops to stay current with emerging technologies.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <p className="text-xs text-muted-foreground font-display uppercase tracking-[0.2em] mb-4">Languages</p>
              <div className="flex flex-wrap gap-3">
                <span className="border border-border text-foreground px-4 py-2 rounded text-sm font-display">Sinhala (Native)</span>
                <span className="border border-border text-foreground px-4 py-2 rounded text-sm font-display">English (Intermediate)</span>
                <span className="border border-border text-foreground px-4 py-2 rounded text-sm font-display">Tamil (Basic)</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="border-t border-border pt-12" variants={itemVariants}>
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
