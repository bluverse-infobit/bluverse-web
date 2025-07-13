"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    title: "UK Outbound Sales Strategy",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M3 7l6 6-6 6" />
        <path d="M9 19h11v-6M9 5h11v6" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-blue-500 to-cyan-500",
    description:
      "Authentic connections & tailored outreach to accelerate your UK market entry and pipeline growth.",
    features: [
      "Market Intelligence & ICP Research",
      "Personalized Multichannel Outreach",
      "Performance Analytics & Human Insights",
    ],
  },
  {
    title: "Cybersecurity Consulting & IT Services",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-green-500 to-emerald-500",
    description:
      "Peace-of-mind cybersecurity and IT consulting. We secure, optimize, and future-proof your operations.",
    features: [
      "Enterprise Risk Assessment",
      "Penetration Testing & Cloud Hardening",
      "Compliance Advisory & DevSecOps",
    ],
  },
  {
    title: "Managed Security Services (MSSP)",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-cyan-600 to-blue-500",
    description:
      "Always-on vigilance: 24/7 SOC, threat hunting, and incident response by certified analysts.",
    features: [
      "Human-Powered SOC",
      "Proactive Threat Hunting",
      "Vulnerability Management & Response",
    ],
  },
  {
    title: "Cybersecurity Training & Awareness",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3v4M8 3v4" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-yellow-500 to-orange-500",
    description:
      "Transforming behaviour, reducing risk. Empower your staff to be your strongest cyber defence.",
    features: [
      "Role-based, Interactive Training",
      "Phishing Simulations & E-learning",
      "Behavioural Metrics & Certification Prep",
    ],
  },
  {
    title: "SaaS Security Solutions Reselling",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect width="18" height="14" x="3" y="7" rx="2" />
        <path d="M7 7V3h10v4" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-indigo-500 to-purple-500",
    description:
      "Strategic SaaS security tool selection, seamless deployment, and ongoing optimization.",
    features: [
      "Technology Fit Assessment",
      "Unified Procurement & Implementation",
      "License Optimization & Health Checks",
    ],
  },
  {
    title: "BPO & Outsourcing",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="19" cy="7" r="4" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-pink-500 to-red-500",
    description:
      "Human-centric BPO for operational efficiency and superior customer & tech support experiences.",
    features: [
      "Customer Experience & Support Desk",
      "Back-Office Operations & Automation",
      "Hybrid Delivery & Scalability",
    ],
  },
  {
    title: "Web, App & Custom Software Development",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <path d="M8 7v10M16 7v10" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-purple-600 to-blue-500",
    description:
      "Custom web, mobile, and software development to digitally empower your business.",
    features: [
      "Full-Stack Web & Mobile Apps",
      "API Integrations & Modern Frameworks",
      "Cloud-Native, Secure by Design",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure, strategic, and human-centric solutions—empowering your
            business through cybersecurity, sales strategy, SaaS, BPO, and
            custom digital development.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              className="group"
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-service-card h-full border-0 hover:glow-primary transition-all duration-500 group-hover:border-primary/50">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <motion.div
                    className={`w-12 h-12 rounded-lg ${service.iconClass} p-3 mb-4`}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 list-none">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
