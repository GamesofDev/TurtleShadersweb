"use client"

import { motion } from "framer-motion"

const changelog = [
  {
    version: "v2.2",
    title: "",
    date: "June 30, 2026",
    sections: [
      {
        heading: "New Features",
        items: [
          "Added Cloud Colour customization.",
          "Cloud colours can now be changed from **Advanced Settings > Sky > Cloud Colour**.",
        ],
      },
      {
        heading: "Improvements",
        items: ["Minor optimizations and improvements."],
      },
    ],
  },
  {
    version: "v2.1",
    title: "Light Update",
    date: "June 21, 2026",
    sections: [
      {
        heading: "New Features",
        items: ["Added Colored Lighting.", "Added Glowing Nether Portals."],
      },
      {
        heading: "Improvements",
        items: ["Improved Light Propagation.", "Enhanced Emissive Effects.", "Better Night Visibility."],
      },
      {
        heading: "Fixes",
        items: ["Fixed Nether Darkness.", "General bug fixes and optimizations."],
      },
    ],
  },
  {
    version: "v2.0",
    title: "The End Update",
    date: "June 20, 2026",
    sections: [
      {
        heading: "New Features",
        items: ["Added 3 Custom End Skies.", "Improved End Atmosphere.", "Enhanced End Sky Quality."],
      },
      {
        heading: "Fixes",
        items: ["General bug fixes and optimizations."],
      },
    ],
  },
  {
    version: "v1.9",
    title: "Old TV Update",
    date: "June 19, 2026",
    sections: [
      {
        heading: "New Features",
        items: ["Added Old TV Effect."],
      },
      {
        heading: "Fixes",
        items: ["Minor bug fixes."],
      },
    ],
  },
  {
    version: "v1.8",
    title: "Flat Water Update",
    date: "June 18, 2026",
    sections: [
      {
        heading: "New Features",
        items: ["Added Flat Water.", "Added Flat Water Toggle."],
      },
      {
        heading: "Fixes",
        items: ["Minor optimizations."],
      },
    ],
  },
  {
    version: "v1.7",
    title: "Cinematic Update",
    date: "June 9, 2026",
    sections: [
      {
        heading: "New Features",
        items: ["Added Cinematic Mode."],
      },
      {
        heading: "Fixes",
        items: ["Minor bug fixes."],
      },
    ],
  },
  {
    version: "v1.6",
    title: "Atmosphere Update",
    date: "June 8, 2026",
    sections: [
      {
        heading: "New Features",
        items: ["Added Auroras.", "Added Lava Glow.", "Added Firefly Bush Emission."],
      },
      {
        heading: "Fixes",
        items: ["Minor optimizations."],
      },
    ],
  },
  {
    version: "v1.5",
    title: "",
    date: "June 2, 2026",
    sections: [
      {
        heading: "New Features",
        items: ["Added Cinematic Bars."],
      },
      {
        heading: "Improvements",
        items: ["Better Water Waves."],
      },
    ],
  },
  {
    version: "v1.4",
    title: "Light Update",
    date: "May 25, 2026",
    sections: [
      {
        heading: "New Features",
        items: [
          "Added Light Emissiveness.",
          "Glowstone now emits light.",
          "Added emissive lighting to additional light blocks.",
        ],
      },
      {
        heading: "Improvements",
        items: [
          "Better Light Rendering.",
          "Improved Night Visibility.",
          "Improved Atmosphere in Dark Areas.",
          "Smoother Glow Effects.",
        ],
      },
      {
        heading: "Fixes",
        items: ["Fixed Minor Lighting Issues.", "Performance optimizations."],
      },
    ],
  },
  {
    version: "v1.3",
    title: "Water Update",
    date: "May 7, 2026",
    sections: [
      {
        heading: "New Features",
        items: ["Crystal Clear Water."],
      },
      {
        heading: "Improvements",
        items: ["Better Wave Speed.", "Improved Depth of Field (DOF)."],
      },
    ],
  },
  {
    version: "v1.1",
    title: "Reflection Update",
    date: "February 18, 2026",
    sections: [
      {
        heading: "New Features",
        items: [
          "Added Reflections on Farmland Blocks.",
          "Added Wetness Effect on Farmland Blocks.",
          "Depth of Field (DOF) is now enabled by default.",
        ],
      },
      {
        heading: "Changes",
        items: ["DOF can be enabled or disabled from the shader settings."],
      },
    ],
  },
  {
    version: "v1.0",
    title: "Initial Release",
    date: "January 29, 2026",
    sections: [
      {
        heading: "Initial Release",
        items: ["First public release of Turtle Shaders."],
      },
    ],
  },
]

function ChangelogEntry({
  entry,
  index,
}: {
  entry: (typeof changelog)[0]
  index: number
}) {
  const isLatest = index === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      id={isLatest ? "changelog" : undefined}
    >
      <div className="card-chrome-emphasized p-6 md:p-8">
        <div className="flex flex-wrap items-baseline gap-3 mb-4">
          <h3 className="text-xl font-bold" style={{ color: "var(--color-ink)" }}>
            {entry.version}{entry.title ? ` - ${entry.title}` : ""}
          </h3>
          <span className="text-sm" style={{ color: "var(--color-mute)" }}>
            {entry.date}
          </span>
          {isLatest && (
            <span
              className="text-xs px-2 py-0.5 rounded font-semibold"
              style={{ background: "rgba(0, 217, 146, 0.15)", color: "var(--color-primary)" }}
            >
              Latest
            </span>
          )}
        </div>

        <div className="space-y-4">
          {entry.sections.map((section) => (
            <div key={section.heading}>
              <h4
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                {section.heading}
              </h4>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm" style={{ color: "var(--color-body)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Changelog() {
  return (
    <section className="py-24 px-6" style={{ borderTop: "1px dashed rgba(79, 93, 117, 0.4)" }}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="display-lg mb-4">
            Changelog
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--color-body)", fontSize: "16px", lineHeight: "26px" }}>
            Every release, every change - tracked since day one.
          </p>
        </motion.div>

        <div className="space-y-6">
          {changelog.map((entry, index) => (
            <ChangelogEntry key={entry.version} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
