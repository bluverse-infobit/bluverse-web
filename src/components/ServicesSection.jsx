// import React from "react";
// import { motion } from "framer-motion";
// import { Cloud, Code, Shield, Smartphone, Database, Cpu } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// const services = [
//   {
//     icon: Cloud,
//     title: "Cloud Solutions",
//     description:
//       "Scalable cloud infrastructure that grows with your business needs.",
//     features: ["AWS & Azure", "Auto-scaling", "24/7 Monitoring"],
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     icon: Code,
//     title: "Custom Development",
//     description:
//       "Bespoke software solutions tailored to your unique requirements.",
//     features: [
//       "Full-stack Development",
//       "API Integration",
//       "Modern Frameworks",
//     ],
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: Shield,
//     title: "Cybersecurity",
//     description:
//       "Comprehensive security solutions to protect your digital assets.",
//     features: ["Threat Assessment", "Data Protection", "Compliance"],
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     icon: Smartphone,
//     title: "Mobile Apps",
//     description:
//       "Native and cross-platform mobile applications for all devices.",
//     features: ["iOS & Android", "React Native", "Progressive Web Apps"],
//     color: "from-orange-500 to-red-500",
//   },
//   {
//     icon: Database,
//     title: "Data Analytics",
//     description: "Transform raw data into actionable business insights.",
//     features: ["Big Data Processing", "ML & AI", "Real-time Analytics"],
//     color: "from-indigo-500 to-purple-500",
//   },
//   {
//     icon: Cpu,
//     title: "AI Integration",
//     description: "Harness artificial intelligence to automate and optimize.",
//     features: [
//       "Machine Learning",
//       "Natural Language Processing",
//       "Computer Vision",
//     ],
//     color: "from-cyan-500 to-blue-500",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section id="services" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Our <span className="gradient-text">Services</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             From cloud infrastructure to AI integration, we provide
//             comprehensive technology solutions that drive innovation and growth.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.8 }}
//                 whileHover={{ y: -10 }}
//                 className="group"
//               >
//                 <Card className="glass h-full border-0 hover:glow-primary transition-all duration-500 group-hover:border-primary/50">
//                   <CardHeader>
//                     <motion.div
//                       whileHover={{ scale: 1.1, rotate: 5 }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 20,
//                       }}
//                       className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4`}
//                     >
//                       <IconComponent className="w-full h-full text-white" />
//                     </motion.div>
//                     <CardTitle className="text-xl group-hover:text-primary transition-colors">
//                       {service.title}
//                     </CardTitle>
//                     <CardDescription className="text-muted-foreground">
//                       {service.description}
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <ul className="space-y-2">
//                       {service.features.map((feature, featureIndex) => (
//                         <motion.li
//                           key={feature}
//                           initial={{ opacity: 0, x: -20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{
//                             delay: index * 0.1 + featureIndex * 0.05,
//                             duration: 0.5,
//                           }}
//                           className="flex items-center text-sm text-muted-foreground"
//                         >
//                           <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
//                           {feature}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
// Import your Card, CardHeader, etc. from your UI library
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    title: "Cloud Solutions",
    icon: (
      <svg
        /* ...icon props... */ className="w-full h-full text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-blue-500 to-cyan-500",
    description:
      "Scalable cloud infrastructure that grows with your business needs.",
    features: ["AWS & Azure", "Auto-scaling", "24/7 Monitoring"],
  },
  {
    title: "Custom Development",
    icon: (
      <svg
        /* ...icon props... */ className="w-full h-full text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-purple-500 to-pink-500",
    description:
      "Bespoke software solutions tailored to your unique requirements.",
    features: [
      "Full-stack Development",
      "API Integration",
      "Modern Frameworks",
    ],
  },
  {
    title: "Cybersecurity",
    icon: (
      <svg
        /* ...icon props... */ className="w-full h-full text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-green-500 to-emerald-500",
    description:
      "Comprehensive security solutions to protect your digital assets.",
    features: ["Threat Assessment", "Data Protection", "Compliance"],
  },
  {
    title: "Mobile Apps",
    icon: (
      <svg
        /* ...icon props... */ className="w-full h-full text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-orange-500 to-red-500",
    description:
      "Native and cross-platform mobile applications for all devices.",
    features: ["iOS & Android", "React Native", "Progressive Web Apps"],
  },
  {
    title: "Data Analytics",
    icon: (
      <svg
        /* ...icon props... */ className="w-full h-full text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
        <path d="M3 12A9 3 0 0 0 21 12"></path>
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-indigo-500 to-purple-500",
    description: "Transform raw data into actionable business insights.",
    features: ["Big Data Processing", "ML & AI", "Real-time Analytics"],
  },
  {
    title: "AI Integration",
    icon: (
      <svg
        /* ...icon props... */ className="w-full h-full text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
        <path d="M15 2v2"></path>
        <path d="M15 20v2"></path>
        <path d="M2 15h2"></path>
        <path d="M2 9h2"></path>
        <path d="M20 15h2"></path>
        <path d="M20 9h2"></path>
        <path d="M9 2v2"></path>
        <path d="M9 20v2"></path>
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-cyan-500 to-blue-500",
    description: "Harness artificial intelligence to automate and optimize.",
    features: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From cloud infrastructure to AI integration, we provide
            comprehensive technology solutions that drive innovation and growth.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              className="group"
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass h-full border-0 hover:glow-primary transition-all duration-500 group-hover:border-primary/50">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <motion.div
                    className={`w-12 h-12 rounded-lg ${service.iconClass} p-3 mb-4`}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
