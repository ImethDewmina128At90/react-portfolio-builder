import { GraduationCap, School, BookOpen, Award } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "University of Westminster",
    affiliate: "Informatics Institute of Technology",
    period: "2024 – Present",
    icon: GraduationCap,
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
    icon: School,
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

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Background</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-14">Education</h2>

        <div className="grid gap-6 mb-16">
          {education.map((edu, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/30 transition-colors">
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="bg-secondary rounded-lg p-3 shrink-0">
                  <edu.icon className="text-primary" size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-1">{edu.degree}</h3>
                  <p className="text-foreground/90 font-medium">{edu.institution}</p>
                  {edu.affiliate && (
                    <p className="text-muted-foreground text-sm mt-1">{edu.affiliate}</p>
                  )}
                  <span className="inline-block mt-3 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-md font-display">
                    {edu.period}
                  </span>
                </div>
              </div>
              {Object.keys(edu.modules).length > 0 && (
                <div className="mt-6 grid sm:grid-cols-2 gap-6 pl-0 sm:pl-16">
                  {Object.entries(edu.modules).map(([year, mods]) => (
                    <div key={year}>
                      <p className="text-sm font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                        <BookOpen size={14} className="text-primary" /> {year}
                      </p>
                      <ul className="space-y-1">
                        {mods.map((mod) => (
                          <li key={mod} className="text-sm text-muted-foreground">• {mod}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3 flex items-center gap-2">
            <Award size={16} /> Certificates & Courses
          </p>
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert) => (
              <span key={cert} className="bg-card border border-border text-foreground px-4 py-2 rounded-lg text-sm font-display hover:border-primary/30 transition-colors">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
