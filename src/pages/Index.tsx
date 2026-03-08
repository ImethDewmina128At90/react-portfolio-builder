import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ClickSpark from "@/components/ClickSpark";
import LiquidEther from "@/components/LiquidEther";

const Index = () => {
  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="min-h-screen bg-background relative">
        {/* Global LiquidEther background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </ClickSpark>
  );
};

export default Index;
