"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import VerticalTabs from "@/components/ui/VerticalTabs"; // Ensure you have this import

const cyberTabsData = [
  {
    id: "promise",
    name: "Our Promise",
    cards: [
      {
        id: "promise-card",
        img: "shield-slash.svg",
        head: "Security-First IT",
        text: "Strategic, compliance-led cybersecurity and IT services. We secure, optimize, and future-proof your digital infrastructure for maximum business resilience.",
      },
    ],
  },
  {
    id: "core",
    name: "Core Services",
    cards: [
      {
        id: "risk",
        img: "chart-bar.svg",
        head: "Enterprise Risk Assessment",
        text: "Asset discovery, vulnerability scans, business continuity, and threat mapping.",
      },
      {
        id: "pentest",
        img: "target.svg",
        head: "Penetration Testing & Cloud Hardening",
        text: "Web app/API pentesting, cloud/posture checks, network, and container security.",
      },
      {
        id: "compliance",
        img: "clipboard-text.svg",
        head: "Compliance Advisory & DevSecOps",
        text: "Regulatory consulting, secure SDLC, DevSecOps automation, audit readiness.",
      },
    ],
  },
  {
    id: "who",
    name: "Who We Help",
    cards: [
      {
        id: "banking",
        img: "bank.svg",
        head: "Fintech & Banking",
        text: "High compliance, always-on environments.",
      },
      {
        id: "health",
        img: "heartbeat.svg",
        head: "Healthcare & HealthTech",
        text: "Protecting critical PHI and patient data.",
      },
      {
        id: "saas",
        img: "monitor-play.svg",
        head: "SaaS & Cloud",
        text: "Cloud-native platforms and data-driven businesses.",
      },
      {
        id: "edu",
        img: "graduation-cap.svg",
        head: "Education Technology",
        text: "Secure, scalable edtech transitions.",
      },
      {
        id: "manufacturing",
        img: "stack-simple.svg",
        head: "Manufacturing & Logistics",
        text: "OT network and supply chain risk reduction.",
      },
      {
        id: "infra",
        img: "building.svg",
        head: "Government & Critical Infra",
        text: "Securing public sector, infra, and utilities.",
      },
    ],
  },
  {
    id: "why",
    name: "Why Bluverse?",
    cards: [
      {
        id: "security-first",
        img: "shield-slash.svg",
        head: "Security-First, Business-Minded",
        text: "Balancing enterprise safeguards with rapid business enablement.",
      },
      {
        id: "experts",
        img: "users-three.svg",
        head: "Certified Experts",
        text: "AWS, Azure, Kubernetes, CISSP, CEH, and more.",
      },
      {
        id: "compliance",
        img: "wallet.svg",
        head: "Compliance Ready",
        text: "GDPR, PCI DSS, SOC 2 frameworks out of the box.",
      },
      {
        id: "scale",
        img: "trend-up.svg",
        head: "Scalable & Operable",
        text: "Automated + manual controls for cost-effective security.",
      },
      {
        id: "report",
        img: "chart-bar.svg",
        head: "Transparent Reporting",
        text: "Clear, audit-friendly dashboards and 24/7 monitoring options.",
      },
    ],
  },
  {
    id: "process",
    name: "Our Process",
    cards: [
      {
        id: "audit",
        img: "magnifying-glass.svg",
        head: "Audit & Gap Analysis",
        text: "Initial review of security posture and risks.",
      },
      {
        id: "model",
        img: "brain.svg",
        head: "Threat Modeling",
        text: "Attack surface mapping and vulnerability analysis.",
      },
      {
        id: "roadmap",
        img: "rocket-launch.svg",
        head: "Roadmap & Implementation",
        text: "30-60-90 day plan, followed by execution and active monitoring.",
      },
      {
        id: "iterate",
        img: "gear.svg",
        head: "Ongoing Optimization",
        text: "Continuous patching, reviews, and process upgrades.",
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Stack",
    cards: [
      {
        id: "devsecops",
        img: "gear.svg",
        head: "DevSecOps Tooling",
        text: "GitHub Actions, Jenkins, Docker, K8s, automated CI/CD security.",
      },
      {
        id: "cloud",
        img: "cloud-check.svg",
        head: "Cloud Security",
        text: "GuardDuty, Azure Sec Center, IAM, SSO, and native cloud tools.",
      },
      {
        id: "soc",
        img: "monitor-play.svg",
        head: "Security Operations",
        text: "SIEM, SOC, Threat Intel Feeds, and incident triage.",
      },
      {
        id: "zero-trust",
        img: "lock.svg",
        head: "Zero Trust Architecture",
        text: "Identity, RBAC controls, least privilege, audit management.",
      },
    ],
  },
  {
    id: "testimonial",
    name: "Client Testimonial",
    cards: [
      {
        id: "testi",
        img: "handshake.svg",
        head: "Real Client Results",
        text: "“Bluverse helped us secure our AWS infrastructure in record time and prepared us for our SOC 2 audit. Highly recommend their DevSecOps expertise.”\n\n— CTO, Indian SaaS Startup",
      },
    ],
  },
];

export default function CybersecurityPage() {
  const router = useRouter();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Cybersecurity Consulting</span>{" "}
            &amp; IT Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We secure, optimize, and future-proof your digital infrastructure.
            From risk assessment to DevSecOps, our solutions are built for
            resilience and compliance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover"
              onClick={() => router.push("/contact")}
            >
              Request a Free Assessment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
              onClick={() => router.push("/contact")}
            >
              Speak with a Consultant
            </motion.button>
          </div>
        </motion.div>

        {/* Vertical Tabs */}
        <VerticalTabs tabs={cyberTabsData} />

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s <span className="gradient-text">Secure</span> Your Digital
            Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Get a risk-free consultation and discover how we can transform your
            cybersecurity posture and IT efficiency.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover mr-4"
            onClick={() => router.push("/contact")}
          >
            Book a Free Risk Assessment
          </motion.button>
          <p className="mt-4 text-muted-foreground text-sm">
            📧 contact@bluverseinfobit.com
            <br />
            📞 +91-8282808022
          </p>
        </motion.div>
      </section>
    </motion.main>
  );
}
