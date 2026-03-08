import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, Stripe payments, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards, real-time updates, and team chat.",
    tags: ["TypeScript", "Next.js", "Prisma"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with custom charts, filters, and PDF export functionality.",
    tags: ["React", "D3.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Selected Work</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-14">Featured Projects</h2>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-card rounded-xl border border-border overflow-hidden md:grid md:grid-cols-2 hover:border-primary/30 transition-colors">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-md font-display">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-display">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-display">
                    <Github size={16} /> Source
                  </a>
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
