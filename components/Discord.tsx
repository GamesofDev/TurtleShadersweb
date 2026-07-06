"use client"

import { motion } from "framer-motion"

export default function Discord() {
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
          <img src="/discordlogo.png" alt="Discord" className="h-14 w-14 mx-auto mb-6" />
          <h2 className="display-md mb-4">Join our community</h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--color-body)", fontSize: "16px", lineHeight: "26px" }}>
            Get support. Report bugs. Share screenshots. Request features. Be part of the TurtleShaders community.
          </p>
          <a href="https://discord.gg/xZRUZuqxJJ" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center">
            <img src="/discordlogo.png" alt="" className="h-5 w-5 mr-3" />
            Join Discord
          </a>
        </motion.div>
      </div>
    </section>
  )
}
