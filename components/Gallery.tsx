"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { gallery } from "@/data/gallery"

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const open = useCallback((i: number) => setSelected(i), [])
  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() => {
    setSelected((s) => (s !== null ? (s - 1 + gallery.length) % gallery.length : null))
  }, [])

  const next = useCallback(() => {
    setSelected((s) => (s !== null ? (s + 1) % gallery.length : null))
  }, [])

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [selected, close, prev, next])

  return (
    <section id="gallery" className="py-24 px-6" style={{ borderTop: "1px dashed rgba(79, 93, 117, 0.4)" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="eyebrow-primary block mb-4">Gallery</span>
          <h2 className="display-lg mb-4">
            See it in <span style={{ color: "var(--color-primary)" }}>Action</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--color-body)", fontSize: "16px", lineHeight: "26px" }}>
            Stunning screenshots captured in-game with TurtleShaders.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 gap-3 space-y-3">
          {gallery.map((item, i) => (
            <motion.button
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => open(i)}
              className="group relative w-full overflow-hidden card-chrome"
              style={{ breakInside: "avoid", padding: "4px" }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--color-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--color-hairline)"}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto rounded" />
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: "linear-gradient(to top, rgba(16,16,16,0.8), transparent)" }}>
                <span className="text-xs font-medium" style={{ color: "var(--color-ink)" }}>Click to view fullscreen</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(16, 16, 16, 0.95)" }}
            onClick={close}
          >
            <button onClick={close} className="absolute top-4 right-4 p-2 rounded" style={{ color: "var(--color-body)", border: "1px solid var(--color-hairline)" }} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded" style={{ color: "var(--color-body)", border: "1px solid var(--color-hairline)" }} aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded" style={{ color: "var(--color-body)", border: "1px solid var(--color-hairline)" }} aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] overflow-hidden card-chrome"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={gallery[selected].src} alt={gallery[selected].alt} className="w-full h-full object-contain" />
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded text-sm" style={{ background: "var(--color-canvas)", border: "1px solid var(--color-hairline)", color: "var(--color-body)" }}>
              {selected + 1} / {gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
