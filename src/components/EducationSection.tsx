import { GraduationCap, School } from "lucide-react";

const education = [
  {
    degree: "Bachelor's Degree",
    institution: "University of Westminster",
    affiliate: "Affiliated with Informatics Institute of Technology",
    period: "Current",
    icon: GraduationCap,
  },
  {
    degree: "Secondary Education",
    institution: "Gampaha Bandaranayake College",
    affiliate: "",
    period: "Completed",
    icon: School,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Background</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-14">Education</h2>

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-8 flex gap-6 items-start hover:border-primary/30 transition-colors">
              <div className="bg-secondary rounded-lg p-3 shrink-0">
                <edu.icon className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-1">{edu.degree}</h3>
                <p className="text-foreground/90 font-medium">{edu.institution}</p>
                {edu.affiliate && (
                  <p className="text-muted-foreground text-sm mt-1">{edu.affiliate}</p>
                )}
                <span className="inline-block mt-3 bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-md font-display">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
