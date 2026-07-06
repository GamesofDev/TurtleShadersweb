"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0" style={{ background: "var(--color-canvas)" }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto" style={{ paddingTop: "80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/logo.png"
            alt="TurtleShaders"
            className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded"
            style={{ border: "1px solid var(--color-hairline)" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <span className="eyebrow block mb-6">
            Open Source Minecraft Shaders
          </span>
          <h1 className="display-xl mb-6">
            Turtle<span style={{ color: "var(--color-primary)" }}>Shaders</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-body)", lineHeight: "28px" }}>
            Beautiful open source Minecraft shaders by GamesofDev.
            <br />
            <span style={{ color: "var(--color-mute)" }}>High performance. Cinematic visuals. Free forever.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          <a href="#download" className="btn-primary">
            Download Latest
          </a>
          <a
            href="https://github.com/GamesofDev/TurtleShaders"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github className="inline-block h-5 w-5 mr-2 -mt-0.5" />
            GitHub
          </a>
          <a
            href="https://discord.gg/xZRUZuqxJJ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <img src="/discordlogo.png" alt="" className="inline-block h-5 w-5 mr-2 -mt-0.5" />
            Discord
          </a>
          <a
            href="https://www.youtube.com/@GlacierServicesMC"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg className="inline-block h-5 w-5 mr-2 -mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-mute)" }}>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
