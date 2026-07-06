"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

export default function OpenSource() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="card-chrome-emphasized p-10 md:p-14 text-center"
        >
          <span className="eyebrow-primary block mb-6">Open Source</span>
          <h2 className="display-lg mb-6">
            TurtleShaders is completely
            <br />
            <span className="gradient-text">open source</span>.
          </h2>
          <p className="text-lg mb-4" style={{ color: "var(--color-body)", lineHeight: "28px" }}>
            Everyone can contribute.
          </p>
          <div className="flex justify-center gap-6 md:gap-10 mb-10" style={{ color: "var(--color-mute)", fontSize: "14px" }}>
            {["Fork", "Improve", "Learn", "Build together"].map((word, i) => (
              <span key={word} className="relative">
                {word}
                {i < 3 && <span className="ml-6 md:ml-10" style={{ color: "var(--color-primary)" }}>•</span>}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://github.com/GamesofDev/TurtleShaders" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Github className="inline-block h-5 w-5 mr-2 -mt-0.5" />
              GitHub Repository
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
