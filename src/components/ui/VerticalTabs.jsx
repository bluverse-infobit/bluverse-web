"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Key,
  Brain,
  Gear,
  Chalkboard,
  Lifebuoy,
  Envelope,
  MonitorPlay,
  Fingerprint,
  CloudCheck,
  ShieldSlash,
  Lock,
  ChartBar,
  UserCheck,
  Handshake,
  StackSimple,
  TrendDown,
  MagnifyingGlass,
  GlobeHemisphereWest,
  Bank,
  Heartbeat,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  Building,
  ClipboardText,
  Target,
  Wallet,
  RocketLaunch,
  ChalkboardTeacher,
  UsersThree,
} from "@phosphor-icons/react";

const ICONS = {
  key: Key,
  brain: Brain,
  gear: Gear,
  chalkboard: Chalkboard,
  lifebuoy: Lifebuoy,
  envelope: Envelope,
  "monitor-play": MonitorPlay,
  fingerprint: Fingerprint,
  "cloud-check": CloudCheck,
  "shield-slash": ShieldSlash,
  lock: Lock,
  "chart-bar": ChartBar,
  "user-check": UserCheck,
  handshake: Handshake,
  boxes: StackSimple,
  "trending-down": TrendDown,
  "magnifying-glass": MagnifyingGlass,
  "globe-hemisphere-west": GlobeHemisphereWest,
  bank: Bank,
  heartbeat: Heartbeat,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  "shopping-cart": ShoppingCart,
  building: Building,
  "clipboard-text": ClipboardText,
  target: Target,
  wallet: Wallet,
  "rocket-launch": RocketLaunch,
  "chalkboard-teacher": ChalkboardTeacher,
};

export default function VerticalTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Vertical Tabs */}
      <div className="flex md:flex-col gap-2 md:w-56">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`w-full px-4 py-3 text-left rounded-md font-semibold text-sm transition-all
              ${
                activeTab.id === tab.id
                  ? "bg-gradient-to-r from-[#7f5af0] to-[#00c6fb] text-white shadow-lg"
                  : "bg-white/5 text-white/80 hover:bg-white/10"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {activeTab.cards.map((card) => {
            const iconKey = card.img?.replace(".svg", "");
            const Icon = ICONS[iconKey] || UsersThree;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 shadow-lg text-center flex flex-col items-center glow-hover"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <Icon size={48} weight="duotone" className="text-accent" />
                </motion.div>
                <h4 className="text-lg font-bold text-accent mb-2">
                  {card.head}
                </h4>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
