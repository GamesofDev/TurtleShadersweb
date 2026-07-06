"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Download", href: "#download" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: scrolled ? "var(--color-canvas)" : "transparent", borderBottom: scrolled ? "1px solid var(--color-hairline)" : "none" }}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="TurtleShaders"
              className="h-8 w-8 rounded object-cover"
              style={{ border: "1px solid var(--color-hairline)" }}
            />
            <span className="text-base font-semibold" style={{ color: "var(--color-ink)" }}>
              Turtle<span style={{ color: "var(--color-primary)" }}>Shaders</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm transition-colors duration-200"
                style={{ color: "var(--color-body)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-body)"}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              className="btn-primary ml-4"
            >
              Download
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2"
            style={{ color: "var(--color-body)" }}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
            style={{ background: "rgba(16, 16, 16, 0.98)" }}
          >
            <div className="absolute right-0 top-0 h-full w-72 p-6" style={{ background: "var(--color-canvas)", borderLeft: "1px solid var(--color-hairline)" }}>
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "var(--color-body)" }}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base transition-colors duration-200"
                    style={{ color: "var(--color-body)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-body)"}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#download"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary mt-4 text-center"
                >
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
