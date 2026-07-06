"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Download, Star, GitCommit, Users, Package } from "lucide-react"

const stats = [
  { label: "Downloads", value: "12,500+", icon: Download },
  { label: "Stars", value: "840+", icon: Star },
  { label: "Commits", value: "320+", icon: GitCommit },
  { label: "Contributors", value: "28", icon: Users },
  { label: "Releases", value: "16", icon: Package },
]

function AnimatedCounter({ value }: { value: string }) {
  const digits = value.replace(/[^0-9]/g, "")
  const suffix = value.replace(/[0-9]/g, "")
  const num = parseInt(digits) || 0

  const ref = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] })
  const springProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  const displayValue = useTransform(springProgress, [0, 1], [0, num])

  return (
    <span ref={ref}><motion.span>{displayValue}</motion.span><span>{suffix}</span></span>
  )
}

export default function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="card-chrome p-6 text-center"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-hairline)"}
              >
                <Icon className="h-5 w-5 mx-auto mb-3" style={{ color: "var(--color-primary)" }} />
                <div className="text-2xl md:text-3xl font-bold mb-1 tabular-nums" style={{ color: "var(--color-ink)" }}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs uppercase tracking-wider" style={{ color: "var(--color-mute)" }}>{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
