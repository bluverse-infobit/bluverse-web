"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe2, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "./ScrollIndicator";
import CubeCluster from "./CubeCluster";
import { TypewriterHeading } from "./TypewriterHeading";

const features = [
  { icon: ShieldCheck, text: "24x7 Cyber Defence" },
  { icon: Globe2, text: "UK Market Entry Experts" },
  { icon: Users, text: "Certified Global Team" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-tech.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />

      <div className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Typewriter heading */}
              <TypewriterHeading
                prefix=""
                suffix="by Bluverse"
                words={[
                  "Secure Digital Excellence",
                  "Cyber Resilience Delivered",
                  "Trusted UK Market Experts",
                  "Smart AI Protection",
                  "Global SaaS Enablement",
                ]}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Transform your business through cyber-resilient strategy, UK &amp;
              Global market expertise, and scalable SaaS &amp; BPO. We embed
              security at every layer, delivering operational resilience and
              measurable growth in a digitally connected world.
            </motion.p>

            {/* Features List (Optional - can be removed or moved) */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {features.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-background/60 rounded-lg px-3 py-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center lg:justify-start"
            >
              <Link href="#contact" passHref>
                <Button
                  size="lg"
                  className="gradient-primary glow-primary hover:glow-accent transition-all duration-300 group w-full sm:w-auto"
                >
                  Schedule Cyber Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg h-64 sm:h-80 md:h-96 lg:h-[500px] glass rounded-2xl overflow-hidden glow-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
                <CubeCluster />
              </div>
              {/* Floating Stats */}
              <motion.div className="absolute top-2 right-2 glass px-3 py-1 rounded-lg">
                <div className="text-xl md:text-2xl font-bold gradient-text">
                  24x7
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500">
                  Cyber Protection
                </div>
              </motion.div>
              <motion.div className="absolute bottom-2 left-2 glass px-3 py-1 rounded-lg">
                <div className="text-xl md:text-2xl font-bold gradient-text">
                  Global
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500">
                  Market Strategy
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
