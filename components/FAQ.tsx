"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faq } from "@/data/faq"

function AccordionItem({ item, index }: { item: (typeof faq)[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="card-chrome"
      style={{ borderColor: isOpen ? "var(--color-primary)" : undefined }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded"
          style={{ background: "var(--color-canvas-soft)" }}
        >
          <ChevronDown className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-0">
              <p style={{ color: "var(--color-body)", fontSize: "14px", lineHeight: "20px" }}>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6" style={{ borderTop: "1px dashed rgba(79, 93, 117, 0.4)" }}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="eyebrow-primary block mb-4">FAQ</span>
          <h2 className="display-lg mb-4">
            Frequently Asked <span style={{ color: "var(--color-primary)" }}>Questions</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--color-body)", fontSize: "16px", lineHeight: "26px" }}>
            Everything you need to know about TurtleShaders.
          </p>
        </motion.div>

        <div className="space-y-2">
          {faq.map((item, i) => (
            <AccordionItem key={item.question} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
