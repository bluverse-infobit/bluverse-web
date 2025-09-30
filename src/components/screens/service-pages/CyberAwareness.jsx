"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import VerticalTabs from "@/components/ui/VerticalTabs"; // import your existing component

const cyberAwarenessTabsData = [
  {
    id: "why-awareness",
    name: "Why Awareness?",
    cards: [
      {
        id: "why-awareness-1",
        img: "brain.svg",
        head: "Why Cybersecurity Awareness Matters",
        text: "Human error remains the biggest threat. Our programs give your people the mindset & skills to stop incidents before they start.",
      },
    ],
  },
  {
    id: "what-we-offer",
    name: "What We Offer",
    cards: [
      {
        id: "emp-camp",
        img: "envelope.svg",
        head: "Employee Campaigns",
        text: "Phishing, ransomware & social engineering recognition.",
      },
      {
        id: "role-training",
        img: "users-three.svg",
        head: "Role-Based Training",
        text: "Tailored for IT, finance, leaders, and customer roles.",
      },
      {
        id: "phishing-sim",
        img: "target.svg",
        head: "Simulated Phishing",
        text: "Test real-world readiness and reinforce with simulations.",
      },
      {
        id: "best-practices",
        img: "gear.svg",
        head: "Cyber Hygiene Best Practices",
        text: "Passwords, device safety, cloud security & remote work.",
      },
      {
        id: "compliance",
        img: "clipboard-text.svg",
        head: "Compliance Readiness",
        text: "GDPR, ISO 27001, HIPAA-aligned modules.",
      },
      {
        id: "board-briefings",
        img: "chalkboard-teacher.svg",
        head: "Exec & Board Training",
        text: "Cyber risk & ROI for leaders.",
      },
    ],
  },
  {
    id: "why-bluverse",
    name: "Why Bluverse",
    cards: [
      {
        id: "people-centric",
        img: "handshake.svg",
        head: "People-Centric Approach",
        text: "We drive real behavior change, not just tick-boxes.",
      },
      {
        id: "industry-content",
        img: "briefcase.svg",
        head: "Industry-Relevant Content",
        text: "Customized for your industry and the latest threats.",
      },
      {
        id: "continuous",
        img: "trend-down.svg",
        head: "Continuous Learning",
        text: "Refresher modules, updates, evolving threats.",
      },
      {
        id: "formats",
        img: "monitor-play.svg",
        head: "Multi-format, Multilingual",
        text: "Instructor-led, e-learning, gamified, and more.",
      },
    ],
  },
  {
    id: "modes",
    name: "Delivery Modes",
    cards: [
      {
        id: "on-site",
        img: "building.svg",
        head: "On-site Workshops",
        text: "Facilitated classroom/corporate workshops.",
      },
      {
        id: "virtual",
        img: "monitor-play.svg",
        head: "Virtual Live Classrooms",
        text: "Remote instructor-led sessions.",
      },
      {
        id: "self-paced",
        img: "stack-simple.svg",
        head: "Self-paced LMS",
        text: "Flexible online learning for busy teams.",
      },
      {
        id: "microlearning",
        img: "envelope.svg",
        head: "Microlearning & Tips",
        text: "Ongoing bite-sized mobile/desktop learning.",
      },
      {
        id: "certification",
        img: "graduation-cap.svg",
        head: "Annual Certification",
        text: "Certify staff, drive compliance and engagement.",
      },
    ],
  },
  {
    id: "impact",
    name: "Impact You Can Measure",
    cards: [
      {
        id: "phishing-reduced",
        img: "chart-bar.svg",
        head: "Reduced Phishing Clicks",
        text: "Measured drop in incident rates. Happier auditors.",
      },
      {
        id: "reporting-faster",
        img: "rocket-launch.svg",
        head: "Faster Incident Reporting",
        text: "Early alerts get you ahead of cyber risks.",
      },
      {
        id: "compliance-better",
        img: "clipboard-text.svg",
        head: "Better Audit Scores",
        text: "Higher compliance and staff confidence.",
      },
      {
        id: "confidence",
        img: "users-three.svg",
        head: "Improved Staff Confidence",
        text: "Transform employees into your main line of defense.",
      },
    ],
  },
  {
    id: "industries",
    name: "Industries Served",
    cards: [
      {
        id: "bfsi",
        img: "bank.svg",
        head: "BFSI",
        text: "Banking, Financial Services, & Insurance.",
      },
      {
        id: "healthcare",
        img: "heartbeat.svg",
        head: "Healthcare & Life Sciences",
        text: "Keep PHI safe in a regulated sector.",
      },
      {
        id: "retail",
        img: "shopping-cart.svg",
        head: "Retail & E-commerce",
        text: "Protect customer data and reputation.",
      },
      {
        id: "education",
        img: "graduation-cap.svg",
        head: "Education & Training",
        text: "Secure student & faculty digital lives.",
      },
      {
        id: "it",
        img: "cloud-check.svg",
        head: "IT, SaaS & BPO",
        text: "Train hybrid and remote global workforces.",
      },
    ],
  },
];

export default function CyberAwarenessPage() {
  const router = useRouter();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empower Your Workforce.
          <br />
          <span className="gradient-text">
            Strengthen Your First Line of Defense
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          At Bluverse Infobit, we turn your people into your strongest
          cybersecurity asset through targeted, engaging, and results-driven
          training programs.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover"
            onClick={() => router.push("/contact")}
          >
            Book a Free Awareness Audit
          </button>
          <button
            className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
            onClick={() => router.push("/contact")}
          >
            Schedule a Custom Session
          </button>
        </div>
      </motion.div>

      {/* VerticalTabs */}
      <VerticalTabs tabs={cyberAwarenessTabsData} />

      {/* Final CTA */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Your <span className="gradient-text">Human Firewall</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
          Cybersecurity is everyone’s job. Let’s make your people your best
          defense.
        </p>
        <button
          className="gradient-primary px-6 py-3 rounded-md text-white font-semibold glow-hover mr-4"
          onClick={() => router.push("/contact")}
        >
          Book Awareness Training
        </button>
        <p className="mt-4 text-muted-foreground text-sm">
          📧 contact@bluverseinfobit.com <br />
          📞 +91-7397562321
        </p>
      </motion.div>
    </motion.main>
  );
}
