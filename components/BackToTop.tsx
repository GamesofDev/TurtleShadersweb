"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0, 1, 1])

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ opacity, background: "var(--color-canvas)", border: "1px solid var(--color-hairline)", color: "var(--color-primary)" }}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded transition-colors duration-200"
      aria-label="Back to top"
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-ink)"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-hairline)"}
    >
      <ArrowUp className="h-4 w-4" />
    </motion.button>
  )
}
