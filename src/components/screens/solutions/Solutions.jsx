"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const solutionItems = [
  {
    title: "BPO & Contact Centres (UK/International)",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M9 12h6m2 0a8 8 0 1 0-8 8" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-pink-500 to-rose-500",
    description: "Boost lead quality and reduce ramp-up time.",
    features: [
      "Intelligent Dialer & CRM Integration",
      "UK Culture & Accent Training",
      "Quality & Compliance Dashboard",
      "Real-time Performance Monitoring",
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 6v4m0 0v4m0-4h4m-4 0H8" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-green-500 to-teal-500",
    description: "Secure and fast healthcare onboarding.",
    features: [
      "HIPAA-Compliant Web Portals",
      "Digital KYC for Patient Onboarding",
      "Secure EHR Integrations",
      "Audit Trail Systems",
    ],
  },
  {
    title: "Retail & E-commerce",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M5 6h14l1 7H4z" />
        <path d="M16 13v6a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-6" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-yellow-500 to-orange-500",
    description: "Drive engagement and automate ops.",
    features: [
      "Custom E-commerce Platforms (Web + App)",
      "Inventory Automation",
      "Warehouse Sync",
      "WhatsApp Cart Recovery Bot",
    ],
  },
  {
    title: "Education & EdTech",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M4 6l8-4 8 4-8 4z" />
        <path d="M4 6v6c0 4 8 8 8 8s8-4 8-8V6" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-indigo-500 to-purple-500",
    description: "Integrated learning & analytics.",
    features: [
      "LMS Integration with Real-time Analytics",
      "Attendance Automation",
      "Assessment & Progress Dashboards",
    ],
  },
  {
    title: "BFSI & Fintech",
    icon: (
      <svg
        className="w-full h-full text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15h8M8 11h8m-8-4h8" />
      </svg>
    ),
    iconClass: "bg-gradient-to-r from-blue-500 to-cyan-600",
    description: "Secure & compliant financial onboarding.",
    features: [
      "Secure Client Portals & Mobile Apps",
      "AML/KYC Automation",
      "Role-Based Access & Audit Logs",
    ],
  },
];

const comparisonTable = [
  {
    solution: "Cybersecurity Training & Awareness",
    idealFor: "All industries",
    features: "Phishing sims, awareness modules, role-based content",
    techStack: "LMS, SCORM, Zoom/MS Teams",
    value: "Human risk mitigation",
  },
  {
    solution: "SaaS Security Reselling",
    idealFor: "IT, Healthcare, BFSI",
    features: "EDR, CASB, DLP, Identity tools, 24/7 support",
    techStack: "CrowdStrike, Okta, Zscaler, M365",
    value: "Easy deployment of enterprise-grade tools",
  },
  {
    solution: "Web & App Development",
    idealFor: "Startups, Enterprises, E-commerce",
    features: "Custom UI/UX, API integrations, cross-platform apps",
    techStack: "React, Node.js, Flutter, AWS",
    value: "Digital product acceleration",
  },
  {
    solution: "Outbound Sales Optimization",
    idealFor: "BPOs, Call Centers",
    features: "CRM sync, lead scoring, agent tracking",
    techStack: "Zoho, HubSpot, Custom CRMs",
    value: "Increased conversion & team productivity",
  },
  {
    solution: "CRM & Workflow Automation",
    idealFor: "SMEs, SaaS Providers",
    features: "Custom dashboards, automation triggers, integrations",
    techStack: "Airtable, Zapier, Python, APIs",
    value: "Reduced manual work and better insights",
  },
  {
    solution: "HR Tech Solutions",
    idealFor: "Mid to large companies",
    features: "ATS, employee self-service, attendance & payroll",
    techStack: "Java, MySQL, ERPNext",
    value: "Streamlined HR processes",
  },
];

export default function SolutionsPage() {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-3">
            Solving Real Problems with Tailored Digital Innovation
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At Bluverse Infobit Pvt Ltd, we don’t sell just service, we deliver
            targeted solutions that address real-world business challenges.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionItems.map((item, idx) => (
            <motion.div
              className="group"
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-service-card h-full border-0 hover:glow-primary transition-all duration-500 group-hover:border-primary/50">
                <CardHeader className="flex flex-col space-y-1.5 p-6">
                  <motion.div
                    className={`w-12 h-12 rounded-lg ${item.iconClass} p-3 mb-4`}
                  >
                    {item.icon}
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <ul className="space-y-2 list-none">
                    {item.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <section className="mt-24">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-8">
            Solution Comparison Chart
          </h2>
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full text-sm text-left border-collapse bg-service-card rounded-lg">
              <thead>
                <tr className="text-accent border-b border-white/10">
                  <th className="p-4">Solution</th>
                  <th className="p-4">Ideal For</th>
                  <th className="p-4">Key Features</th>
                  <th className="p-4">Tech Stack</th>
                  <th className="p-4">Business Value</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="p-4">{row.solution}</td>
                    <td className="p-4">{row.idealFor}</td>
                    <td className="p-4">{row.features}</td>
                    <td className="p-4">{row.techStack}</td>
                    <td className="p-4">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Don’t see your industry? Our consulting team can analyze your
            operations and create a custom-fit solution just for your business.
            From idea to execution, we’re your digital partner.
          </p>
          <p className="text-xl font-semibold text-primary">
            📞 Let’s co-create your business solution.
          </p>
          <p className="text-base mt-1 text-muted-foreground">
            Book a free strategy session or request a call back.
          </p>
        </section>
      </div>
    </section>
  );
}
