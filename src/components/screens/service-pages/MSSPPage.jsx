"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import VerticalTabs from "@/components/ui/VerticalTabs";

const msspTabData = [
  {
    id: "what",
    name: "What is MSSP?",
    cards: [
      {
        id: "what-mssp",
        img: "shield-slash.svg",
        head: "What is MSSP?",
        text: "We deliver managed security as-a-service with 24/7 human and automated defense, becoming your extended SOC.",
      },
    ],
  },
  {
    id: "core",
    name: "Core Services",
    cards: [
      {
        id: "soc",
        img: "heartbeat.svg",
        head: "24/7 Human-Led SOC",
        text: "Always-on monitoring, alert response, log correlation, triage, and expert incident management.",
      },
      {
        id: "threat-hunt",
        img: "magnifying-glass.svg", // Make sure added to ICONS mapping, see step 3!
        head: "Proactive Threat Hunting",
        text: "Behavioral analytics, endpoint and cloud threat hunts, and advanced attack simulation.",
      },
      {
        id: "vuln-mgmt",
        img: "lock.svg",
        head: "Vulnerability Management",
        text: "Automated scans, prioritized risk, patch advisory, and remediation workflows.",
      },
    ],
  },
  {
    id: "verticals",
    name: "Industries We Protect",
    cards: [
      {
        id: "finance",
        img: "bank.svg",
        head: "Finance & Banking",
        text: "Secure and compliant services for high-risk environments.",
      },
      {
        id: "healthcare",
        img: "heartbeat.svg",
        head: "Healthcare & Pharma",
        text: "Safeguarding sensitive PHI and industry compliance.",
      },
      {
        id: "saas",
        img: "monitor-play.svg",
        head: "SaaS & IT Services",
        text: "Modern defense for digital-first, cloud-native businesses.",
      },
      {
        id: "retail",
        img: "shopping-cart.svg",
        head: "Retail & eCommerce",
        text: "PCI-DSS aware protection for payment infrastructure.",
      },
      {
        id: "manufacturing",
        img: "stack-simple.svg",
        head: "Manufacturing & IoT",
        text: "Industrial cyber defense for connected devices and automation.",
      },
      {
        id: "energy",
        img: "globe-hemisphere-west.svg",
        head: "Energy & Infrastructure",
        text: "Critical threat monitoring for essential services.",
      },
    ],
  },
  {
    id: "why",
    name: "Why Choose Bluverse",
    cards: [
      {
        id: "team",
        img: "users-three.svg",
        head: "Certified 24/7 SOC Team",
        text: "CEH/CISSP/OSCP experts on UK/US-aligned shifts.",
      },
      {
        id: "sla",
        img: "handshake.svg",
        head: "Low Response Time SLAs",
        text: "Lightning-fast incident response and transparent escalation.",
      },
      {
        id: "stack",
        img: "gear.svg",
        head: "Enterprise Technology Stack",
        text: "From Splunk to CrowdStrike, we use industry leaders.",
      },
    ],
  },
];

export default function MSSPPage() {
  const router = useRouter();
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Always-On Vigilance,{" "}
          <span className="gradient-text">Delivered by Experts</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          24/7 threat monitoring, real-time response, and human-led SOC support
          to protect your business from evolving cyber threats.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover"
            onClick={() => router.push("/contact")}
          >
            Book a Security Demo
          </button>
          <button
            className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
            onClick={() => router.push("/contact")}
          >
            Schedule a SOC Consultation
          </button>
        </div>
      </motion.div>
      <VerticalTabs tabs={msspTabData} />
      {/* Final CTA */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Cyber Threats Never Sleep{" "}
          <span className="gradient-text">— Neither Do We</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
          Don’t wait for the breach to happen. Partner with Bluverse for
          round-the-clock managed cybersecurity, tailored to your business
          environment.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <button
            className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover"
            onClick={() => router.push("/contact")}
          >
            Schedule a Free Security Audit
          </button>
          <a
            href="/brochures/mssp-brochure.pdf"
            download
            className="border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition"
          >
            Download Our MSSP Brochure
          </a>
        </div>
        <p className="mt-4 text-muted-foreground text-sm">
          📧{" "}
          <a className="underline" href="mailto:contact@bluverseinfobit.com">
            contact@bluverseinfobit.com
          </a>
          <br />
          📞 +91-7397562321
        </p>
      </motion.div>
    </motion.main>
  );
}
