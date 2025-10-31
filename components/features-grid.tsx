"use client"
import Link from "next/link"
import { Music, Film, Users, Laugh } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Coding Music Player",
    description: "Lo-fi, chill, and instrumental playlists designed to keep you focused while coding.",
    href: "/music",
    color: "from-cyan-500/20 to-cyan-600/20",
    accentColor: "text-cyan-400",
  },
  {
    icon: Film,
    title: "Movies & Inspiration",
    description: "Discover tech documentaries, startup stories, and inspirational films for developers.",
    href: "/movies",
    color: "from-purple-500/20 to-purple-600/20",
    accentColor: "text-purple-400",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Discuss with developers, share knowledge, and find job opportunities in your niche.",
    href: "/community",
    color: "from-pink-500/20 to-pink-600/20",
    accentColor: "text-pink-400",
  },
  {
    icon: Laugh,
    title: "Meme Gallery",
    description: "Laugh at absurd memes from the programming world. Upload and share your own.",
    href: "/memes",
    color: "from-orange-500/20 to-orange-600/20",
    accentColor: "text-orange-400",
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Code, Chill & Connect</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A complete ecosystem for programmers to stay focused, get inspired, and build connections with like-minded
            developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <Link key={idx} href={feature.href}>
              <div
                className={`group h-full p-8 rounded-xl border border-border bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 transform`}
              >
                <feature.icon
                  className={`w-12 h-12 ${feature.accentColor} mb-4 group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">{feature.description}</p>
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
