"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ borderTop: "1px dashed rgba(79, 93, 117, 0.4)" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="eyebrow-primary block mb-4">About</span>
          <h2 className="display-lg mb-4">
            About Turtle<span style={{ color: "var(--color-primary)" }}>Shaders</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-chrome p-8 md:p-10 text-center">
            <img src="/logo.png" alt="" className="h-14 w-14 mx-auto mb-6 rounded" style={{ border: "1px solid var(--color-hairline)" }} />
            <p style={{ color: "var(--color-body)", fontSize: "16px", lineHeight: "26px" }}>
              TurtleShaders is an open-source Minecraft Java shader pack focused on delivering beautiful
              visuals while remaining lightweight and customizable. Developed by GamesofDev, it is designed
              for players who want vibrant lighting, cinematic skies, improved water, and smooth performance.
              The project welcomes community contributions and aims to make high-quality shaders accessible
              to everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
