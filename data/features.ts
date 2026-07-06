export interface Feature {
  title: string
  description: string
  icon: string
}

export const features: Feature[] = [
  {
    title: "High Performance",
    description: "Optimized for all GPUs. Smooth 60+ FPS on mid-range hardware with intelligent rendering pipelines.",
    icon: "zap",
  },
  {
    title: "Beautiful Lighting",
    description: "Physically based lighting with realistic shadows, ambient occlusion, and global illumination.",
    icon: "sun",
  },
  {
    title: "Dynamic Sky",
    description: "Cinematic skyboxes with volumetric clouds, stars, sunsets, and weather effects that change over time.",
    icon: "cloud-sun",
  },
  {
    title: "Water Reflections",
    description: "Stunning reflective water with wave simulation, caustics, and realistic transparency.",
    icon: "droplets",
  },
  {
    title: "Volumetric Clouds",
    description: "3D cloud rendering with soft edges, god rays, and dynamic lighting for immersive skies.",
    icon: "cloud",
  },
  {
    title: "Open Source",
    description: "Fully open source under a permissive license. Free forever. Contribute on GitHub.",
    icon: "code",
  },
  {
    title: "Community Driven",
    description: "Built with love by the community. Feature requests, bug reports, and contributions are always welcome.",
    icon: "users",
  },
  {
    title: "Easy Installation",
    description: "Drag and drop installation. Compatible with all major Minecraft shader loaders including Iris and OptiFine.",
    icon: "package",
  },
]
