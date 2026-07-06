"use client"

import { motion } from "framer-motion"
import { Zap, Sun, CloudSun, Droplets, Cloud, Code, Users, Package } from "lucide-react"
import { features } from "@/data/features"

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  sun: Sun,
  "cloud-sun": CloudSun,
  droplets: Droplets,
  cloud: Cloud,
  code: Code,
  users: Users,
  package: Package,
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-6" style={{ borderTop: "1px dashed rgba(79, 93, 117, 0.4)" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="eyebrow-primary block mb-4">Everything you need</span>
          <h2 className="display-lg mb-4">
            Why Turtle<span style={{ color: "var(--color-primary)" }}>Shaders</span>?
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--color-body)", fontSize: "16px", lineHeight: "26px" }}>
            Carefully crafted features to make Minecraft look stunning while keeping performance smooth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Zap
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="card-chrome p-6 transition-all duration-200"
                style={{ background: "var(--color-canvas)" }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-hairline)"}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded" style={{ background: "var(--color-canvas-soft)" }}>
                  <Icon className="h-5 w-5" style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-ink)" }}>{feature.title}</h3>
                <p style={{ color: "var(--color-body)", fontSize: "14px", lineHeight: "20px" }}>{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
