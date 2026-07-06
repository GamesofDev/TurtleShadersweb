"use client"

import { motion } from "framer-motion"

export default function Developer() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="card-chrome-emphasized p-8 md:p-10 text-center"
        >
          <div className="relative inline-block mb-6">
            <img src="/author.png" alt="GamesofDev" className="h-20 w-20 md:h-24 md:w-24 mx-auto rounded" style={{ border: "1px solid var(--color-hairline)" }} />
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded flex items-center justify-center" style={{ background: "var(--color-primary)" }}>
              <span className="text-[10px]">👋</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>GamesofDev</h3>
          <p className="text-sm font-medium mb-4" style={{ color: "var(--color-primary)" }}>Indian Open Source Developer</p>
          <p className="max-w-lg mx-auto" style={{ color: "var(--color-body)", fontSize: "14px", lineHeight: "20px" }}>
            Creator of TurtleShaders and other Minecraft optimization projects. Passionate about making
            Minecraft look better while staying accessible for every player.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
