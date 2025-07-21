"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import VerticalTabs from "@/components/ui/VerticalTabs";

const teamTabsData = [
  {
    id: "team-breakdown",
    name: "Team Breakdown",
    cards: [
      {
        id: "sales",
        img: "handshake.svg",
        head: "24/7 Sales Associates",
        text: "50+ sales professionals ensuring seamless support round the clock.",
      },
      {
        id: "devs",
        img: "monitor-play.svg",
        head: "Full Stack Developers",
        text: "30+ full-stack engineers powering scalable web and app solutions.",
      },
      {
        id: "cyber",
        img: "shield-slash.svg",
        head: "Cybersecurity & Cloud Experts",
        text: "20+ security and cloud professionals securing your cloud journey.",
      },
      {
        id: "qa",
        img: "graduation-cap.svg",
        head: "Trainers & QA Analysts",
        text: "25+ trainers and QA analysts driving continuous learning and quality.",
      },
      {
        id: "management",
        img: "briefcase.svg",
        head: "PMs & Consultants",
        text: "10+ project managers and consultants leading delivery and strategy.",
      },
      {
        id: "partners",
        img: "users-three.svg",
        head: "Partner-Supported Staff",
        text: "15+ on-demand, partner-supported team for agile scaling.",
      },
    ],
  },
];

export default function TeamSection() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Animated Counter
  useEffect(() => {
    let current = 0;
    const target = 150;
    const step = 3;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        current += step;
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="team"
      // Main containers, dark background, foreground text
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Headline & Counter */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-2 flex flex-col items-center gap-2 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span>
          <span className="gradient-text">{count}+</span> Team Members
        </span>
        <span className="text-base md:text-lg font-medium text-gradient tracking-tight mt-2">
          Agile, scalable, and cross-functional—our people make it possible.
        </span>
      </motion.h2>

      {/* Supporting Text with optional "Learn More" Modal */}
      <div className="mb-10">
        <p className="text-md text-muted-foreground max-w-2xl mx-auto mb-2">
          Our strength lies in a diverse team of 150+ professionals, including
          in-house experts, certified consultants, remote developers, and
          strategic partners.&nbsp;
          <button
            tabIndex={0}
            className="underline text-primary font-medium focus:outline-none"
            aria-expanded={showMore}
            aria-controls="team-more"
            onClick={() => setShowMore((s) => !s)}
          >
            {showMore ? "Show less" : "Learn more"}
          </button>
        </p>
        <AnimatePresence>
          {showMore && (
            <motion.div
              id="team-more"
              className="text-muted-foreground max-w-xl mx-auto mt-2 text-sm bg-white/10 rounded-xl shadow p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              This blended model helps us stay lean while delivering
              enterprise-level results for global clients. Team distribution
              includes full-timers, partner-supported, project-based, and remote
              talent—ensuring agility, scale, and consistent quality.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Team Breakdown - Use VerticalTabs */}
      <div className="max-w-5xl mx-auto mb-12">
        <VerticalTabs tabs={teamTabsData} />
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button
          onClick={() => router.push("/contact")}
          className="gradient-primary px-6 py-3 rounded-xl text-white font-semibold glow-hover shadow hover:scale-105 transition-transform"
        >
          Connect With Our Team
        </button>
      </div>
    </motion.section>
  );
}
