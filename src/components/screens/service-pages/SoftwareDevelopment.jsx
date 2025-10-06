"use client";

import { motion } from "framer-motion";
import VerticalTabs from "@/components/ui/VerticalTabs";
import { useRouter } from "next/navigation";

export default function SoftwareDevelopmentPage() {
  const router = useRouter();

  const tabData = [
    {
      id: "philosophy",
      name: "Our Philosophy",
      cards: [
        {
          id: "philosophy-card",
          img: "philosophy.svg",
          head: "Development Philosophy",
          text: "We build digital engines — secure, scalable, and user-centric. Tailored platforms for MVPs, SaaS, automation, or modernization.",
        },
      ],
    },
    {
      id: "services",
      name: "Core Services",
      cards: [
        {
          id: "webapps",
          img: "webapp.svg",
          head: "Full-Stack Apps",
          text: "CRMs, portals, mobile apps (iOS, Android, Flutter), PWAs, dashboards.",
        },
        {
          id: "api",
          img: "api.svg",
          head: "API & Integrations",
          text: "Stripe, OAuth, custom REST/GraphQL, event triggers, microservices.",
        },
        {
          id: "cloud",
          img: "cloud.svg",
          head: "Cloud & DevOps",
          text: "AWS, Azure, CI/CD, containerization, logging, monitoring setups.",
        },
      ],
    },
    {
      id: "clients",
      name: "Who We Build For",
      cards: [
        {
          id: "startups",
          img: "startup.svg",
          head: "Startups & Founders",
          text: "Fast MVPs, investor decks, pilot-ready solutions.",
        },
        {
          id: "smes",
          img: "sme.svg",
          head: "SMEs & Enterprises",
          text: "Process automation, tools, portals, and dashboards.",
        },
        {
          id: "agencies",
          img: "agency.svg",
          head: "Agencies & SaaS",
          text: "White-label builds and scale-ready backends.",
        },
      ],
    },
    {
      id: "stack",
      name: "Tech Stack",
      cards: [
        {
          id: "frontend",
          img: "frontend.svg",
          head: "Front-End",
          text: "React, Vue, Angular, Tailwind, Bootstrap.",
        },
        {
          id: "backend",
          img: "backend.svg",
          head: "Back-End",
          text: "Node.js, Django, .NET, Spring Boot, Laravel.",
        },
        {
          id: "cloudtools",
          img: "tools.svg",
          head: "Cloud & Tools",
          text: "AWS, GCP, Docker, Kubernetes, GitHub Actions.",
        },
      ],
    },
    {
      id: "why",
      name: "Why Bluverse",
      cards: [
        {
          id: "ownership",
          img: "ownership.svg",
          head: "Full Ownership",
          text: "We handle end-to-end SDLC from spec to scale.",
        },
        {
          id: "design",
          img: "design.svg",
          head: "Design Thinking",
          text: "UI/UX first approach with real user validation.",
        },
        {
          id: "security",
          img: "secure.svg",
          head: "Security First",
          text: "GDPR readiness, OAuth, CI/CD with audit trails.",
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
            Web, App & Software Solutions—
            <br />
            <span className="gradient-text">Tailored for Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From full-stack platforms to secure cloud-native apps, we design,
            develop, and deploy digital solutions built for performance, scale,
            and business value.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover"
              onClick={() => router.push("/contact")}
            >
              Request a Free Consultation
            </button>
            <button
              className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
              onClick={() => router.push("/contact")}
            >
              Explore Our Portfolio
            </button>
          </div>
        </motion.div>

        {/* Vertical Tabs with Animated Cards */}
        <VerticalTabs tabs={tabData} />

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Your{" "}
            <span className="gradient-text">Digital Product</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Whether you're transforming customer experiences or automating
            back-end operations, Bluverse can help you deliver secure, scalable
            software that works.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover"
              onClick={() => router.push("/contact")}
            >
              Book a Discovery Call
            </button>
            <button
              className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
              onClick={() => router.push("/contact")}
            >
              Download Project Planning Checklist
            </button>
          </div>
          <p className="mt-4 text-muted-foreground text-sm">
            📧 contact@bluverseinfobit.com <br />
            📞 +91-7397562321
          </p>
        </motion.div>
      </section>
    </motion.main>
  );
}
