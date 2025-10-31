"use client"
import Link from "next/link"
import { Music, Film, Users, Laugh } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Tagline */}
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-primary text-sm font-semibold">Your Coding Buddy</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gradient">Code. Chill. Connect.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto">
              Music, Movies, and Memes for Developers — Your ultimate community platform for programmers worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music"
              className="px-8 py-4 rounded-lg bg-primary text-background font-bold hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-2 neon-glow"
            >
              <Music size={20} />
              Explore Now
            </Link>
            <Link
              href="/community"
              className="px-8 py-4 rounded-lg border border-primary/50 text-primary font-bold hover:bg-primary/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Users size={20} />
              Join Community
            </Link>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Music, label: "Coding Music", desc: "Focus beats" },
              { icon: Film, label: "Movies", desc: "Tech inspiration" },
              { icon: Users, label: "Community", desc: "Connect & share" },
              { icon: Laugh, label: "Memes", desc: "Dev humor" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <feature.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold text-sm">{feature.label}</p>
                <p className="text-xs text-foreground/50">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #00d9ff, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes delay-2 {
          0% { animation-delay: 2s; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}
