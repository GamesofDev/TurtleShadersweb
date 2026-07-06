export interface FAQItem {
  question: string
  answer: string
}

export const faq: FAQItem[] = [
  {
    question: "How to install?",
    answer:
      "Download the latest ZIP from our website. Open Minecraft, go to Options > Video Settings > Shaders, click 'Open Shader Pack Folder', and paste the ZIP file. Select TurtleShaders from the list. Compatible with Iris Shaders (Fabric) and OptiFine.",
  },
  {
    question: "Which versions are supported?",
    answer:
      "TurtleShaders supports Minecraft Java Edition 1.17 through 1.21+. We actively maintain compatibility with the latest Minecraft releases. Check our GitHub for the most up-to-date version support information.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes! TurtleShaders is completely free and always will be. It's an open-source project developed by GamesofDev. No paywalls, no premium versions, no Patreon locks. Download and enjoy.",
  },
  {
    question: "Is it open source?",
    answer:
      "Absolutely. TurtleShaders is fully open source under the MIT License. The entire source code is available on GitHub. You can fork, modify, and distribute your own versions. We only ask that you credit the original work.",
  },
  {
    question: "How can I contribute?",
    answer:
      "Visit our GitHub repository. You can submit bug reports, suggest features, improve documentation, or contribute code. Join our Discord community to discuss development, share screenshots, and help other users. Every contribution matters.",
  },
]
