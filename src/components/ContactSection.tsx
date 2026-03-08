import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ImethDewmina128" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/imethdewmina" },
  { icon: Mail, label: "Email", href: "mailto:imeth128@gmail.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Get In Touch</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          Let's work together
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-6">
          I'm always open to new opportunities and interesting projects. Drop me a line!
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-10">
          <span className="flex items-center gap-1.5"><Phone size={14} className="text-primary" /> +94 77-9508456</span>
          <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Colombo, Sri Lanka</span>
        </div>
        <a href="mailto:imeth128@gmail.com" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-display font-medium text-lg hover:opacity-90 transition-opacity mb-12">
          Send Message
        </a>
        <div className="flex justify-center gap-6">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={label}>
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center text-sm text-muted-foreground font-display">
        © 2026 Imeth Dewina. Built with React & Tailwind CSS.
      </div>
    </section>
  );
};

export default ContactSection;
