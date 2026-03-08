const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative sparkle */}
      <div className="absolute top-1/4 right-[15%] hidden md:block">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-foreground animate-spin" style={{ animationDuration: '8s' }}>
          <path d="M30 0L32 28L60 30L32 32L30 60L28 32L0 30L28 28L30 0Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8 animate-fade-in font-display">
          Computer Science Undergraduate
        </p>

        <h1 className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="font-serif-display text-primary text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] block">
            Imeth
          </span>
          <span className="font-display font-bold text-foreground text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] block mt-2">
            Dewina.
          </span>
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed mt-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A motivated, detail-oriented CS student passionate about web/software development and DevOps/cloud computing. Eager to contribute to innovative projects.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a href="#projects" className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-display font-medium hover:opacity-90 transition-opacity">
            View Work
          </a>
          <a href="#contact" className="border border-border px-8 py-3.5 rounded font-display font-medium text-foreground hover:bg-secondary transition-colors">
            Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 md:left-16 lg:left-24 text-sm text-muted-foreground font-display">
        Software Developer
      </div>
      <div className="absolute bottom-10 right-6 md:right-16 lg:right-24 text-sm text-muted-foreground font-display">
        2026
      </div>
    </section>
  );
};

export default HeroSection;
