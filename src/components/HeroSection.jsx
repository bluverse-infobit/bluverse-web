"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe2, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollIndicator } from "./ScrollIndicator";
import { TechLoader } from "./TechLoader";

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

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Secure</span>
                <br />
                Digital Excellence
                <br />
                <span className="text-accent">by Bluverse</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              Transform your business through cyber-resilient strategy, UK &
              Global market expertise, and scalable SaaS & BPO. We embed
              security at every layer, delivering operational resilience and
              measurable growth in a digitally connected world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact">
                <Button
                  size="lg"
                  className="gradient-primary glow-primary hover:glow-accent transition-all duration-300 group"
                >
                  Schedule Cyber Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {/* You can add back "Watch Demo" here if needed */}
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-6 pt-8"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3 glass px-4 py-2 rounded-full"
                  >
                    <IconComponent className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] glass rounded-2xl overflow-hidden glow-primary">
              {/* 3D Scene / Loader */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <TechLoader />
              </div>
              {/* Floating Stats */}
              <motion.div className="absolute top-4 right-4 glass px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold gradient-text">24x7</div>
                <div className="text-xs text-muted-foreground">
                  Cyber Protection
                </div>
              </motion.div>
              <motion.div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold gradient-text">Global</div>
                <div className="text-xs text-muted-foreground">
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
