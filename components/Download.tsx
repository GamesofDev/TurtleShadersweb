"use client"

import { motion } from "framer-motion"
import { Download as DownloadIcon, Github, FileText, Package } from "lucide-react"

const downloadData = {
  version: "v2.2",
  size: "29 MB",
  minecraftVersions: "1.19 - 26.2",
  releaseDate: "June 30, 2026",
}

export default function Download() {
  return (
    <section id="download" className="py-24 px-6" style={{ borderTop: "1px dashed rgba(79, 93, 117, 0.4)" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="eyebrow-primary block mb-4">Downloads</span>
          <h2 className="display-lg mb-4">
            Get Turtle<span style={{ color: "var(--color-primary)" }}>Shaders</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--color-body)", fontSize: "16px", lineHeight: "26px" }}>
            Free, open source, and ready to download. No strings attached.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-chrome-emphasized p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded" style={{ background: "var(--color-canvas-soft)" }}>
                <Package className="h-6 w-6" style={{ color: "var(--color-primary)" }} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: "rgba(0, 217, 146, 0.15)", color: "var(--color-primary)" }}>
                    Latest Release
                  </span>
                  <span className="text-xs" style={{ color: "var(--color-mute)" }}>{downloadData.releaseDate}</span>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>{downloadData.version}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { label: "File Size", value: downloadData.size },
                { label: "MC Versions", value: downloadData.minecraftVersions },
                { label: "License", value: "MIT" },
              ].map((item) => (
                <div key={item.label} className="card-chrome p-4 text-center">
                  <div className="text-xs mb-1" style={{ color: "var(--color-mute)" }}>{item.label}</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="https://adfoc.us/8763971" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 min-w-[200px] text-center">
                <DownloadIcon className="inline-block h-5 w-5 mr-2 -mt-0.5" />
                Download ZIP
              </a>
              <a href="https://github.com/GamesofDev/TurtleShaders" target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 min-w-[160px] text-center">
                <Github className="inline-block h-5 w-5 mr-2 -mt-0.5" />
                Source Code
              </a>
              <a href="#changelog" className="btn-outline flex-1 min-w-[160px] text-center">
                <FileText className="inline-block h-5 w-5 mr-2 -mt-0.5" />
                Changelog
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
