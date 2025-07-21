"use client";
import { motion } from "framer-motion";
import { Wrench, Clock } from "lucide-react";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d9cff22] via-[#7f5af022] to-[#00c6fb11] pointer-events-none -z-10" />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass rounded-2xl px-10 py-14 flex flex-col items-center shadow-xl"
      >
        <div className="mb-6">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#7f5af0] to-[#3d9cff] shadow-2xl animate-bounce-slow">
            <Wrench size={44} className="text-white" />
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Under Construction
        </h1>
        <p className="text-lg text-muted-foreground mb-6 text-center max-w-md">
          This page is being built.
          <br />
          We’re working hard to launch this section soon!
        </p>
        <Link href="/">
          <button className="gradient-primary px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Back to Home
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
