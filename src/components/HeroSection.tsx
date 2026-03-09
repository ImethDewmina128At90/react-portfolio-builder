import { motion } from "framer-motion";
import profileImg from "@/assets/imeth-profile.jpg";
import cv2Img from "@/assets/cv_2.png";
import imethb2Img from "@/assets/imethb-2.jpg";
import Stack from "./Stack";


const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 pt-20 pb-16 relative overflow-hidden">

      {/* Decorative sparkle */}
      <div className="absolute top-1/4 right-[15%] hidden md:block z-10">
        <motion.svg
          width="60" height="60" viewBox="0 0 60 60" fill="none"
          className="text-foreground"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <path d="M30 0L32 28L60 30L32 32L30 60L28 32L0 30L28 28L30 0Z" fill="currentColor" />
        </motion.svg>
      </div>

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-[1fr_auto] gap-10 items-center relative z-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground text-sm tracking-widest uppercase mb-8 font-display"
          >
            Computer Science Undergraduate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="font-serif-display text-primary text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] block">
              Imeth
            </span>
            <span className="font-display font-bold text-foreground text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] block mt-2">
              Dewina.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg leading-relaxed mt-6 sm:mt-10"
          >
            A motivated, detail-oriented CS student passionate about web/software development and DevOps/cloud computing. Eager to contribute to innovative projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-10"
          >
            <a href="#projects" className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded font-display font-medium hover:opacity-90 transition-opacity text-center text-sm sm:text-base">
              View Work
            </a>
            <a href="#contact" className="border border-border px-6 sm:px-8 py-3 sm:py-3.5 rounded font-display font-medium text-foreground hover:bg-secondary transition-colors text-center text-sm sm:text-base">
              Contact
            </a>
            <a
              href="/Imeth_Dewina_CV.pdf"
              download
              className="border border-primary text-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded font-display font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-center text-sm sm:text-base"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Profile photos stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="w-64 lg:w-80 aspect-[3/4]">
            <Stack
              randomRotation
              sensitivity={200}
              sendToBackOnClick
              autoplay
              autoplayDelay={2500}
              pauseOnHover
              cards={[profileImg, cv2Img, imethb2Img].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Imeth Dewmina ${i + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                />
              ))}
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile profile photo stack */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="md:hidden mt-10 flex justify-center relative z-10"
      >
        <div className="w-40 sm:w-48 aspect-[3/4]">
          <Stack
            randomRotation
            sensitivity={200}
            sendToBackOnClick
            autoplay
            autoplayDelay={2500}
            pauseOnHover
            cards={[profileImg, cv2Img, imethb2Img].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Imeth Dewmina ${i + 1}`}
                className="w-full h-full object-cover pointer-events-none"
              />
            ))}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 md:left-16 lg:left-24 text-xs sm:text-sm text-muted-foreground font-display z-10">
        Software Developer
      </div>
      <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-6 md:right-16 lg:right-24 text-xs sm:text-sm text-muted-foreground font-display z-10">
        2026
      </div>
    </section>
  );
};

export default HeroSection;
