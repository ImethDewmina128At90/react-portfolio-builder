import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      toast.error(err.message || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

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
              Have a question or want to work together? Send me a message!
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

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  placeholder="Subject (optional)"
                />
              </div>
              <div>
                <label className="text-sm font-display text-muted-foreground mb-1.5 block">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-secondary border border-border rounded px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/50"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-display font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
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
