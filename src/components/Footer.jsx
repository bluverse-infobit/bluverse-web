"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const footerLinks = {
  Services: [
    "Cloud Solutions",
    "Custom Development",
    "Cybersecurity",
    "Mobile Apps",
  ],
  Company: ["About Us", "Careers", "Contact", "Blog"],
  Resources: ["Documentation", "Support", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-20 bg-background/95 backdrop-blur-xl border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text">
              Bluverse Infobit
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses through innovative technology solutions.
              Your digital future starts here.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    aria-label={social.label}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:glow-primary transition-all duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], columnIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (columnIndex + 1) * 0.1, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-primary">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (columnIndex + 1) * 0.1 + linkIndex * 0.05,
                      duration: 0.4,
                    }}
                  >
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bluverse Infobit. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:glow-primary transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
