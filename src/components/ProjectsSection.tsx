import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NaviKid",
    subtitle: "Software Development Group Project",
    description: "A solution for ensuring the safety and punctuality of children during school commutes. NaviKid helps parents and transport organizations track and manage school transportation effectively.",
    tags: ["Group Project", "2025 – Present"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Back-end Node",
    subtitle: "Web Project",
    description: "Built a mock Node.js backend and static frontend for testing API workflows. Focused on RESTful API design and clean architecture.",
    tags: ["Node.js", "REST API", "Oct 2025"],
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "Java QuizGame",
    subtitle: "Desktop Project",
    description: "A Java-based desktop quiz game where users can add multiple questions across different categories with a grading system, integrated with MySQL database.",
    tags: ["Java", "MySQL", "Oct 2025"],
    color: "from-primary/10 to-primary/5",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Selected Work</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-14">Projects</h2>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-colors">
              <div className={`bg-gradient-to-r ${project.color} p-6 sm:p-8 md:p-10`}>
                <p className="text-primary text-xs font-display uppercase tracking-widest mb-2">{project.subtitle}</p>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-md font-display">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
