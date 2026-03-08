import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "University of Westminster",
    affiliate: "Informatics Institute of Technology",
    period: "2024 – Present",
    modules: {
      "Year 1 (Completed)": [
        "Computer System Fundamentals", "Mathematics for Computing",
        "Software Development (Python)", "Software Development 2 (Java)",
        "Trends in Computer Science", "Web Design and Development",
      ],
      "Year 2 (In Progress)": [
        "Database Systems", "Object-Oriented Programming",
        "Software Development Group Project", "Server-Side Web Development",
        "Data Structures and Algorithms", "Client-Server Architecture",
      ],
    },
  },
  {
    degree: "Secondary Education",
    institution: "Gampaha Bandaranayake College",
    affiliate: "",
    period: "Completed",
    modules: {},
  },
];

const certificates = [
  "Cisco IT Essentials",
  "Node.js Complete Developer – Andrew Mead",
  "AWS Cloud Practitioner",
  "React Native – The Practical Guide",
  "React – The Complete Guide (incl. Next.js, Redux)",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="py-24 px-6 md:px-16 lg:px-24 border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 variants={itemVariants} className="font-serif-display text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-16">
          Education
        </motion.h2>

        <div className="space-y-8 mb-20">
          {education.map((edu, i) => (
            <motion.div key={i} variants={itemVariants} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">{edu.degree}</h3>
                <span className="text-sm text-primary font-display tracking-wider">{edu.period}</span>
              </div>
              <p className="text-foreground/80 font-medium">{edu.institution}</p>
              {edu.affiliate && <p className="text-muted-foreground text-sm mt-1">{edu.affiliate}</p>}
              <div className="w-full h-px bg-border mt-4" />
              {Object.keys(edu.modules).length > 0 && (
                <div className="mt-6 grid sm:grid-cols-2 gap-8">
                  {Object.entries(edu.modules).map(([year, mods]) => (
                    <div key={year}>
                      <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                        <BookOpen size={12} className="text-primary" /> {year}
                      </p>
                      <ul className="space-y-1.5">
                        {mods.map((mod) => (
                          <li key={mod} className="text-sm text-muted-foreground pl-4 border-l border-border">{mod}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants}>
          <p className="text-xs text-muted-foreground font-display uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <Award size={14} className="text-primary" /> Certificates & Courses
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div key={cert} className="bg-card border border-border p-4 rounded hover:border-primary/40 transition-colors">
                <span className="text-sm text-foreground font-display">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
