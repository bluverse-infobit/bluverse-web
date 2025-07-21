"use client";

import { motion } from "framer-motion";
import VerticalTabs from "@/components/ui/VerticalTabs";
import { useRouter } from "next/navigation";

export default function SaaSResellingPage() {
  const router = useRouter();

  const tabData = [
    {
      id: "offerings",
      name: "What We Offer",
      cards: [
        {
          id: "resell",
          img: "key.svg",
          head: "Licensing & Reselling",
          text: "Authorized for CrowdStrike, Microsoft Defender, Mimecast, Zscaler, and more.",
        },
        {
          id: "consult",
          img: "brain.svg",
          head: "Consultation",
          text: "Get guidance based on compliance, risk, and budget.",
        },
        {
          id: "deploy",
          img: "gear.svg",
          head: "Deployment Support",
          text: "We assist in setup, onboarding, and policy configuration.",
        },
        {
          id: "training",
          img: "chalkboard.svg",
          head: "User Training",
          text: "Tailored docs and enablement for your IT and end users.",
        },
        {
          id: "support",
          img: "lifebuoy.svg",
          head: "Ongoing Support",
          text: "Lifecycle management, proactive renewals, and L1/L2 support.",
        },
      ],
    },
    {
      id: "solutions",
      name: "Solutions We Resell",
      cards: [
        {
          id: "email",
          img: "envelope.svg",
          head: "Email Security",
          text: "Protection for Office365, Gmail, and hybrid environments.",
        },
        {
          id: "edr",
          img: "monitor-play.svg",
          head: "EDR",
          text: "Advanced endpoint threat detection and response.",
        },
        {
          id: "iam",
          img: "fingerprint.svg",
          head: "Identity & Access",
          text: "Role-based access, MFA, SSO, and IAM platforms.",
        },
        {
          id: "casb",
          img: "cloud-check.svg",
          head: "CASB",
          text: "Control cloud app access and enforce security policies.",
        },
        {
          id: "dlp",
          img: "shield-slash.svg",
          head: "Data Loss Prevention",
          text: "Prevent sensitive data exfiltration or exposure.",
        },
        {
          id: "ztna",
          img: "lock.svg",
          head: "Zero Trust (ZTNA)",
          text: "Enforce least privilege across your network.",
        },
        {
          id: "siem",
          img: "chart-bar.svg",
          head: "SIEM",
          text: "Centralized log analysis and threat detection.",
        },
      ],
    },
    {
      id: "whyus",
      name: "Why Bluverse",
      cards: [
        {
          id: "certified",
          img: "user-check.svg",
          head: "Certified Experts",
          text: "Consultants trained across SaaS stacks and tools.",
        },
        {
          id: "partners",
          img: "handshake.svg",
          head: "Tier-1 Partners",
          text: "Official resellers for top security vendors.",
        },
        {
          id: "bundles",
          img: "boxes.svg",
          head: "Custom Bundling",
          text: "Tailored stacks that fit your infra and budget.",
        },
        {
          id: "roi",
          img: "trending-down.svg",
          head: "Cost Optimization",
          text: "Avoid over-licensing, reduce total cost of ownership.",
        },
        {
          id: "hybrid",
          img: "globe-hemisphere-west.svg",
          head: "Hybrid Support",
          text: "Support for on-prem, hybrid, and remote setups.",
        },
      ],
    },
    {
      id: "industries",
      name: "Industries",
      cards: [
        {
          id: "fintech",
          img: "bank.svg",
          head: "Fintech & BFSI",
          text: "Secure digital finance operations at scale.",
        },
        {
          id: "healthcare",
          img: "heartbeat.svg",
          head: "Healthcare",
          text: "HIPAA-ready SaaS security and data privacy.",
        },
        {
          id: "bpo",
          img: "briefcase.svg",
          head: "IT & BPO",
          text: "Protect your IT operations and client data.",
        },
        {
          id: "edtech",
          img: "graduation-cap.svg",
          head: "EdTech",
          text: "Safeguard student and faculty digital tools.",
        },
        {
          id: "retail",
          img: "shopping-cart.svg",
          head: "E-commerce",
          text: "PCI-DSS aligned SaaS for customer data security.",
        },
        {
          id: "gov",
          img: "building.svg",
          head: "Gov & Public Sector",
          text: "Secure cloud environments for public data.",
        },
      ],
    },
    {
      id: "process",
      name: "VAR Process",
      cards: [
        {
          id: "assessment",
          img: "clipboard-text.svg",
          head: "Needs Assessment",
          text: "We identify the gaps, overlaps, and must-haves.",
        },
        {
          id: "match",
          img: "target.svg",
          head: "Vendor Matching",
          text: "We map tech to your use case and infra.",
        },
        {
          id: "costing",
          img: "wallet.svg",
          head: "Smart Costing",
          text: "Bundle efficiently. Avoid shelfware.",
        },
        {
          id: "rollout",
          img: "rocket-launch.svg",
          head: "Secure Rollout",
          text: "We assist with secure implementation.",
        },
        {
          id: "training",
          img: "chalkboard-teacher.svg",
          head: "Training & SLA",
          text: "Training for admins + SLA-based support.",
        },
      ],
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.3]">
            SaaS Security Solutions
            <br />
            <span className="gradient-text">Reselling</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-Grade SaaS Security Delivered Through Trusted
            Partnerships. Scalable. Secure. Seamless.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover"
              onClick={() => router.push("/contact")}
            >
              Get a Custom SaaS Bundle
            </button>
            <button
              className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
              onClick={() => router.push("/contact")}
            >
              Talk to Our Security Consultant
            </button>
          </div>
        </motion.div>

        {/* Vertical Tab Content */}
        <VerticalTabs tabs={tabData} />

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Make Security{" "}
            <span className="gradient-text">Simple & Scalable</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Don’t just buy software—invest in cybersecurity with a trusted
            partner. We help you select, implement, and support the right SaaS
            stack from day one.
          </p>
          <button
            className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover mr-4"
            onClick={() => router.push("/contact")}
          >
            Request a Free Consultation
          </button>
          <p className="mt-4 text-muted-foreground text-sm">
            📧 contact@bluverseinfobit.com <br />
            📞 +91-9600896897
          </p>
        </motion.div>
      </section>
    </motion.main>
  );
}
