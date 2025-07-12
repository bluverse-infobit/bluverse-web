"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Zap } from "lucide-react";

const stats = [
  { icon: Users, number: "150+", label: "Team Members" },
  { icon: Award, number: "500+", label: "Projects Delivered" },
  { icon: Target, number: "98%", label: "Client Satisfaction" },
  { icon: Zap, number: "24/7", label: "Support Available" },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies to deliver solutions that set new industry standards.",
  },
  {
    title: "Client-Centric",
    description:
      "Your success is our priority. We build long-term partnerships based on trust and results.",
  },
  {
    title: "Quality Driven",
    description:
      "Excellence in every line of code, every design decision, and every client interaction.",
  },
  {
    title: "Future Ready",
    description:
      "We stay ahead of technology trends to ensure your solutions remain competitive tomorrow.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Bluverse Infobit</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded on the principle that technology should empower
                businesses, not complicate them. We're a team of passionate
                developers, designers, and strategists who live and breathe
                innovation.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                For over a decade, we've been at the forefront of digital
                transformation, helping businesses of all sizes harness the
                power of technology to achieve their goals and exceed
                expectations.
              </p>

              <p className="text-muted-foreground">
                Our approach combines technical expertise with creative
                problem-solving, ensuring every solution we deliver is not just
                functional, but transformational.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="space-y-2"
                >
                  <h4 className="font-semibold text-primary">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-2xl text-center hover:glow-primary transition-all duration-300"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-lg p-3"
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize technology and make advanced digital solutions
                accessible to businesses worldwide. We believe every
                organization deserves the tools to compete in the digital age.
              </p>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative overflow-hidden glass p-8 rounded-2xl group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">Ready to Transform?</h3>
                <p className="text-muted-foreground">
                  Join hundreds of companies who trust us with their digital
                  future.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
