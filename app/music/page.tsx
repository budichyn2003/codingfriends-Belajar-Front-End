"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import MusicPlayer from "@/components/music-player"
import PlaylistSelector from "@/components/playlist-selector"
import Footer from "@/components/footer"

export default function MusicPage() {
  const [selectedPlaylist, setSelectedPlaylist] = useState("lofi")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">Music</h1>
          <p className="text-foreground/60 text-lg">
            Discover curated playlists to keep you focused and inspired while coding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Playlist Selector */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PlaylistSelector selectedPlaylist={selectedPlaylist} setSelectedPlaylist={setSelectedPlaylist} />
            </div>
          </div>

          {/* Music Player */}
          <div className="lg:col-span-2">
            <div className="bg-card/50 border border-border rounded-xl p-8 neon-glow">
              <MusicPlayer playlist={selectedPlaylist} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
