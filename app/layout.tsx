import type { Metadata } from "next"
import "./globals.css"
import ScrollProgress from "@/components/ScrollProgress"
import BackToTop from "@/components/BackToTop"

export const metadata: Metadata = {
  title: "TurtleShaders — Beautiful Open Source Minecraft Shaders",
  description:
    "TurtleShaders is an open-source Minecraft Java shader pack by GamesofDev. Download for free — beautiful visuals, high performance, community driven.",
  keywords: [
    "turtleshaders",
    "minecraft shaders",
    "open source shaders",
    "gamesofdev",
    "minecraft",
    "shader pack",
    "free shaders",
  ],
  openGraph: {
    title: "TurtleShaders — Open Source Minecraft Shaders",
    description: "Beautiful open source Minecraft shaders by Indian developer GamesofDev.",
    url: "https://turtleshaders.dev",
    siteName: "TurtleShaders",
    images: [{ url: "/banner.png", width: 1200, height: 630, alt: "TurtleShaders Banner" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurtleShaders — Open Source Minecraft Shaders",
    description: "Beautiful open source Minecraft shaders by Indian developer GamesofDev.",
    images: ["/banner.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-canvas text-ink">
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
