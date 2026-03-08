import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ImethDewmina128" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/imethdewmina" },
  { icon: Mail, label: "Email", href: "mailto:imeth128@gmail.com" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="py-24 px-6 md:px-16 lg:px-24 border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div variants={itemVariants}>
            <h2 className="font-serif-display text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Contact
            </h2>
            <p className="text-muted-foreground mb-10">
              Have a question or want to work together? Get in touch!
            </p>

            <div className="space-y-4 border-l-2 border-primary pl-6">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-primary shrink-0" />
                <span className="text-foreground text-sm">+94 77-9508456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:imeth128@gmail.com" className="text-foreground text-sm hover:text-primary transition-colors">imeth128@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-primary shrink-0" />
                <span className="text-foreground text-sm">Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="flex gap-5 mt-10">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={label}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-start md:items-end justify-center">
            <a href="mailto:imeth128@gmail.com" className="bg-primary text-primary-foreground px-10 py-4 rounded font-display font-medium text-lg hover:opacity-90 transition-opacity">
              Send Message
            </a>
          </motion.div>
        </div>

        <div className="mt-20 flex justify-between items-center text-sm text-muted-foreground font-display">
          <span>Software Developer</span>
          <span>© 2026 Imeth Dewina</span>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
