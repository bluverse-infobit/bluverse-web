"use client";

import { motion } from "framer-motion";
import VerticalTabs from "@/components/ui/VerticalTabs";
import { useRouter } from "next/navigation";

export default function UKOutboundSalesPage() {
  const router = useRouter();

  const tabData = [
    {
      id: "who",
      name: "Who We Are",
      cards: [
        {
          id: "who-card",
          img: "team.svg",
          head: "Who We Are",
          text: "Bluverse Infobit specializes in smart, compliant, and effective UK outbound sales. Our India-based team is trained in UK etiquette, ensuring strong ROI.",
        },
      ],
    },
    {
      id: "offering",
      name: "What We Do",
      cards: [
        {
          id: "b2c",
          img: "b2c.svg",
          head: "B2C & B2B Calling",
          text: "Cold and warm campaigns in Energy, Telecom, SaaS, and more.",
        },
        {
          id: "crm",
          img: "crm.svg",
          head: "CRM & Dialers",
          text: "Real-time CRM integrations with predictive dialing.",
        },
        {
          id: "consult",
          img: "consult.svg",
          head: "Consultative Selling",
          text: "Empathy-first pitch strategy for UK buyer psychology.",
        },
        {
          id: "compliance",
          img: "compliance.svg",
          head: "Compliance First",
          text: "GDPR-ready campaigns with active QA monitoring.",
        },
      ],
    },
    {
      id: "process",
      name: "Our Process",
      cards: [
        {
          id: "planning",
          img: "planning.svg",
          head: "Planning",
          text: "We align with your goals, script pitches, and define personas.",
        },
        {
          id: "team",
          img: "teamalloc.svg",
          head: "Team Allocation",
          text: "We onboard trained UK sales reps with relevant experience.",
        },
        {
          id: "qa",
          img: "qa.svg",
          head: "Monitoring & QA",
          text: "Live QA, whisper coaching, and weekly reviews.",
        },
      ],
    },
    {
      id: "tech",
      name: "Tech & Tools",
      cards: [
        {
          id: "autodial",
          img: "dialer.svg",
          head: "Auto Dialers",
          text: "Smart dialers integrated with Zoho, HubSpot, and more.",
        },
        {
          id: "dashboard",
          img: "dashboard.svg",
          head: "Live Dashboard",
          text: "Track metrics like call duration, conversion, and objection.",
        },
        {
          id: "security",
          img: "security.svg",
          head: "Data Security",
          text: "All calls and data are encrypted with GDPR-compliant tools.",
        },
      ],
    },
    {
      id: "industries",
      name: "Industries",
      cards: [
        {
          id: "telecom",
          img: "telecom.svg",
          head: "Telecom & SIM",
          text: "SIM card and broadband services for UK consumers.",
        },
        {
          id: "finance",
          img: "finance.svg",
          head: "Finance & Recovery",
          text: "Specialized in debt recovery, insurance, and loans.",
        },
        {
          id: "edu",
          img: "edu.svg",
          head: "Education",
          text: "Student counseling and enrollment follow-ups.",
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
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-background">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.3] text-white">
            Strategic <span className="gradient-text">UK Outbound Sales</span>
            <br />
            That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Optimized B2C & B2B calling campaigns tailored to UK market
            psychology, time zone logic, and cultural nuance — powered by data,
            driven by performance.
          </p>
        </motion.div>

        {/* Vertical Tab Section */}
        <VerticalTabs tabs={tabData} />

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Let’s Scale Your <span className="gradient-text">UK Sales</span>{" "}
            Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Our Asia-based team is ready to fuel your outbound sales engine.
            Book a discovery call to see how we can tailor a campaign for your
            business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover mr-4"
            onClick={() => router.push("/contact")}
          >
            Book a Free Consultation
          </motion.button>
          <p className="mt-4 text-muted-foreground text-sm">
            📧 contact@bluverseinfobit.com
          </p>
        </motion.div>
      </section>
    </motion.main>
  );
}
