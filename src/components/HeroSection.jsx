"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Database, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "./ScrollIndicator";

console.log("HeroSection imports successful");

const features = [
  { icon: Cpu, text: "AI-Powered Solutions" },
  { icon: Database, text: "Cloud Infrastructure" },
  { icon: Shield, text: "Cybersecurity" },
];

export default function HeroSection() {
  console.log("HeroSection component rendering...");
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-tech.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />

      {/* 3D Scene Background - REMOVED FOR DEBUGGING */}
      {/* <div className="absolute inset-0 opacity-60">
        <Scene3D />
      </div> */}

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
                <span className="gradient-text">Transform</span>
                <br />
                Your Digital
                <br />
                <span className="text-accent">Future</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              Unleash the power of cutting-edge technology with our innovative
              IT solutions. We craft digital experiences that drive growth and
              revolutionize your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="gradient-primary glow-primary hover:glow-accent transition-all duration-300 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass hover:bg-primary/10 transition-all duration-300"
              >
                Watch Demo
              </Button>
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
              {/* 3D Scene removed for debugging */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-4xl font-bold gradient-text">3D Scene</div>
              </div>

              {/* Floating Stats */}
              <motion.div className="absolute top-4 right-4 glass px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </motion.div>

              <motion.div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start glow-primary"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
      <ScrollIndicator />
    </section>
  );
}
