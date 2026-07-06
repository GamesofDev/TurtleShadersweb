"use client"

import { motion } from "framer-motion"
import { Download, Image } from "lucide-react"

const quickLinks = [
  { label: "Downloads", href: "#download", icon: Download },
  { label: "Gallery", href: "#gallery", icon: Image },
  { label: "GitHub", href: "https://github.com/GamesofDev/TurtleShaders", icon: null },
  { label: "Discord", href: "https://discord.gg/xZRUZuqxJJ", icon: null },
  { label: "YouTube", href: "https://www.youtube.com/@GlacierServicesMC", icon: null },
]

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ borderTop: "1px solid var(--color-hairline)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="TurtleShaders" className="h-7 w-7 rounded" style={{ border: "1px solid var(--color-hairline)" }} />
              <span className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                Turtle<span style={{ color: "var(--color-primary)" }}>Shaders</span>
              </span>
            </a>
            <p className="text-sm max-w-xs" style={{ color: "var(--color-mute)", lineHeight: "20px" }}>
              Beautiful open source Minecraft shaders developed by GamesofDev. Free for everyone, forever.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:text-center"
          >
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--color-body)" }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "var(--color-mute)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-mute)"}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:text-right"
          >
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--color-body)" }}>Community</h4>
            <div className="flex gap-3 md:justify-end">
              <a href="https://github.com/GamesofDev/TurtleShaders" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded" style={{ border: "1px solid var(--color-hairline)" }} aria-label="GitHub"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-hairline)"}
              >
                <img src="/githublogo.png" alt="" className="h-4 w-4" />
              </a>
              <a href="https://discord.gg/xZRUZuqxJJ" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded" style={{ border: "1px solid var(--color-hairline)" }} aria-label="Discord"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-hairline)"}
              >
                <img src="/discordlogo.png" alt="" className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@GlacierServicesMC" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded" style={{ border: "1px solid var(--color-hairline)" }} aria-label="YouTube"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-hairline)"}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--color-body)" }}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid var(--color-hairline)", color: "var(--color-mute)" }}
        >
          <p>© 2026 GamesofDev</p>
          <p>Made with ❤️ in India</p>
        </motion.div>
      </div>
    </footer>
  )
}
