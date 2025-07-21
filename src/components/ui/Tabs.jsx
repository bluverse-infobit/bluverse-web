"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tabs({ tabs, variant = "default" }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        className={`flex flex-wrap justify-center gap-4 mb-6 ${
          variant === "glass" ? "glass p-4 rounded-xl" : ""
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 text-sm md:text-base rounded-full transition-all font-semibold glow-hover ${
              activeTab.id === tab.id
                ? "gradient-primary text-white shadow-md"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
