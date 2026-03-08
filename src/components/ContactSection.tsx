import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Get In Touch</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          Let's work together
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          I'm always open to new opportunities and interesting projects. Drop me a line!
        </p>
        <a href="mailto:hello@example.com" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-display font-medium text-lg hover:opacity-90 transition-opacity mb-12">
          Say Hello
        </a>
        <div className="flex justify-center gap-6">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={label}>
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center text-sm text-muted-foreground font-display">
        © 2026 Portfolio. Built with React & Tailwind CSS.
      </div>
    </section>
  );
};

export default ContactSection;
