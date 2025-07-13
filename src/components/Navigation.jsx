"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "/under-construction" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-sm py-2"
            : "bg-background/60 backdrop-blur-lg py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Brand with gradient */}
            <Link href="/" className="inline-flex items-center space-x-2">
              <img
                src="/assets/logo-wbg.png"
                alt="Bluverse Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text cursor-pointer">
                Bluverse Infobit
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                <span>{item.name}</span>
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="#contact">
                <Button className="h-11 px-8 text-base font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-lg hover:scale-105 transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.name}</span>
              </a>
            ))}
            <Button className="w-full h-11 px-8 text-base font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-lg hover:scale-105 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
