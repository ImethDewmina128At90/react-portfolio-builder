const projects = [
  {
    title: "NaviKid",
    subtitle: "Software Development Group Project",
    description: "A solution for ensuring the safety and punctuality of children during school commutes. NaviKid helps parents and transport organizations track and manage school transportation effectively.",
    tags: ["Group Project", "2025 – Present"],
    number: "01",
  },
  {
    title: "Back-end Node",
    subtitle: "Web Project",
    description: "Built a mock Node.js backend and static frontend for testing API workflows. Focused on RESTful API design and clean architecture.",
    tags: ["Node.js", "REST API", "Oct 2025"],
    number: "02",
  },
  {
    title: "Java QuizGame",
    subtitle: "Desktop Project",
    description: "A Java-based desktop quiz game where users can add multiple questions across different categories with a grading system, integrated with MySQL database.",
    tags: ["Java", "MySQL", "Oct 2025"],
    number: "03",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif-display text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Project Highlights
        </h2>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-16">
          <p className="text-muted-foreground max-w-sm text-sm">
            A selection of projects showcasing my approach to software development.
          </p>
          <p className="text-muted-foreground max-w-sm text-sm text-right">
            Blending technical skills, problem-solving, and practical implementation.
          </p>
        </div>

        <div className="space-y-0">
          {projects.map((project, i) => (
            <div key={i} className="group border-t border-border py-8 hover:bg-card/50 transition-colors px-2 -mx-2">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <span className="text-primary font-display text-sm tracking-wider shrink-0 mt-1">{project.number}</span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground font-display uppercase tracking-widest">{project.subtitle}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-2xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border border-border text-muted-foreground text-xs px-3 py-1 rounded font-display">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
