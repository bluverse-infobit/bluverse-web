"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Zap,
  Briefcase,
  Handshake,
  CheckCircle,
} from "lucide-react";

const stats = [
  { icon: Users, number: "150+", label: "Team Members" },
  { icon: Award, number: "500+", label: "Projects Delivered" },
  { icon: Target, number: "98%", label: "Client Satisfaction" },
  { icon: Zap, number: "24/7", label: "Support Available" },
];

const values = [
  {
    title: "Sector Expertise",
    description:
      "Tailored solutions and security frameworks for regulated, complex, and high-growth industries.",
  },
  {
    title: "Technology Partnerships",
    description:
      "Alliances with Microsoft, CrowdStrike, AWS, UiPath, and more, for best-in-class innovation.",
  },
  {
    title: "Client Outcomes",
    description:
      "We deliver real results—from accelerated market entry to measurable risk reduction.",
  },
  {
    title: "Human-Centric",
    description:
      "We focus on people and process as much as platforms—empowering teams and protecting stakeholders.",
  },
];

const industries = [
  "Financial Services",
  "Healthcare & Pharmaceuticals",
  "Retail & E-commerce",
  "Telecom & Utilities",
  "Education & EdTech",
  "Manufacturing & Engineering",
];

const partners = [
  { name: "Microsoft", category: "Cyber & Cloud" },
  { name: "CrowdStrike", category: "Cyber" },
  { name: "Palo Alto", category: "Cyber" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "UiPath", category: "Automation" },
  { name: "Blue Prism", category: "Automation" },
  { name: "GitHub", category: "DevOps" },
];

const stories = [
  {
    title: "UK Market Entry for SaaS",
    result: "+35% ARR in 90 days with 500+ qualified leads for a SaaS startup.",
  },
  {
    title: "Compliance Excellence",
    result:
      "GDPR & ISO 27001 passed with zero non-conformities for a healthcare client.",
  },
  {
    title: "Enhanced Cyber Resilience",
    result: "Reduced threat detection time by 60% for an e-commerce retailer.",
  },
  {
    title: "Human Risk Reduced",
    result: "Phishing incidents down 75% after training for a global IT firm.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 min-h-screen flex items-center relative"
    >
      <div className="container mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Bluverse Infobit</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Bluverse Infobit delivers sector-specific digital
                transformation—integrating cybersecurity, strategy, SaaS, and
                BPO with the world’s best technology partners. We don’t just
                solve technical problems; we help you achieve measurable
                business outcomes.
              </p>
              <p className="text-lg text-muted-foreground">
                Our teams work hand-in-hand with financial institutions,
                healthcare innovators, manufacturers, retailers, and technology
                leaders. Each engagement leverages industry knowledge,
                compliance expertise, and the right technology stack to ensure
                results are relevant, sustainable, and secure.
              </p>
            </div>

            {/* INDUSTRIES */}
            <div>
              <h4 className="font-semibold text-primary flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5" />
                Industries We Serve
              </h4>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Each sector benefits from tailored security frameworks,
                regulatory compliance, and industry-optimized support.
              </p>
            </div>

            {/* VALUES */}
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
            className="space-y-10"
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
                    className="bg-about-card p-6 rounded-2xl text-center transition-all duration-300 glow-hover card-outline"
                  >
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r-primary-accent rounded-lg p-3 flex items-center justify-center"
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* TECHNOLOGY PARTNERS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-about-card p-6 rounded-2xl card-outline"
            >
              <h4 className="font-semibold text-primary flex items-center gap-2 mb-3">
                <Handshake className="w-5 h-5" />
                Technology & Partnerships
              </h4>
              <div className="flex flex-wrap gap-2 mb-2">
                {partners.map((partner) => (
                  <span
                    key={partner.name}
                    className="px-2 py-1 bg-accent/10 rounded text-xs text-accent"
                  >
                    {partner.name}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Strategic alliances with global leaders for seamless,
                innovative, and supported solutions.
              </p>
            </motion.div>

            {/* SUCCESS STORIES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-about-card p-6 rounded-2xl card-outline"
            >
              <h4 className="font-semibold text-primary flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5" />
                Business Outcomes
              </h4>
              <ul className="space-y-2 text-sm">
                {stories.map((story, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary"></span>
                    <div>
                      <span className="font-medium">{story.title}: </span>
                      <span className="text-muted-foreground">
                        {story.result}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-muted-foreground mt-2">
                Detailed case studies available on request.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
