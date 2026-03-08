import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-4xl">
        <p className="text-primary font-display text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
          Computer Science Undergraduate
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Hi, I'm
          <br />
          <span className="text-gradient">Imeth</span>
          <br />
          Dewina.
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A motivated, detail-oriented CS student passionate about web/software development and DevOps/cloud computing. Eager to contribute to innovative projects.
        </p>
        <div className="flex flex-wrap gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a href="#projects" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-display font-medium hover:opacity-90 transition-opacity">
            View Work
          </a>
          <a href="#contact" className="border border-border px-8 py-3 rounded-lg font-display font-medium text-foreground hover:bg-secondary transition-colors">
            Contact
          </a>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
