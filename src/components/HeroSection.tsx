import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative">
      <div className="max-w-4xl">
        <p className="text-primary font-display text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
          Creative Developer & Designer
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          I build
          <br />
          <span className="text-gradient">digital</span>
          <br />
          experiences.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Crafting performant, elegant web applications with modern technologies. Turning ideas into pixel-perfect reality.
        </p>
        <div className="flex gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
