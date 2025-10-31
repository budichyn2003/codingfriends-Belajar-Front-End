"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react"

const mockSongs = {
  lofi: [
    { id: 1, title: "Midnight Code", artist: "Lo-Fi Dev", duration: "3:45", thumbnail: "/lofi-music-beats.jpg" },
    { id: 2, title: "Focus Flow", artist: "Chill Beats", duration: "4:12", thumbnail: "/focus-music-ambient.jpg" },
    { id: 3, title: "Night Typing", artist: "Dev Vibes", duration: "3:28", thumbnail: "/coding-lofi-hip-hop.jpg" },
  ],
  ambient: [
    { id: 4, title: "Digital Space", artist: "Ambient Lab", duration: "5:00", thumbnail: "/ambient-electronic-music.png" },
    { id: 5, title: "Code Garden", artist: "Nature Sync", duration: "4:35", thumbnail: "/ambient-background-music.jpg" },
  ],
  instrumental: [
    {
      id: 6,
      title: "Productive Hours",
      artist: "Instrumental",
      duration: "3:50",
      thumbnail: "/instrumental-jazz-music.jpg",
    },
    { id: 7, title: "Deep Work", artist: "Focus Music", duration: "4:20", thumbnail: "/instrumental-work-music.jpg" },
  ],
}

export default function MusicPlayer({ playlist }: { playlist: string }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [volume, setVolume] = useState(70)
  const [liked, setLiked] = useState<number[]>([])

  const songs = mockSongs[playlist as keyof typeof mockSongs] || mockSongs.lofi
  const current = songs[currentTrack]

  return (
    <div className="space-y-6">
      {/* Album Art */}
      <div className="relative">
        <div className="aspect-square rounded-xl overflow-hidden border border-border bg-card neon-glow">
          <img
            src={current.thumbnail || "/placeholder.svg"}
            alt={current.title}
            className="w-full h-full object-cover"
          />
        </div>
        {isPlaying && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/20 to-transparent animate-pulse"></div>
        )}
      </div>

      {/* Now Playing Info */}
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">{current.title}</h2>
        <p className="text-foreground/60">{current.artist}</p>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="h-1 rounded-full bg-border overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-primary to-secondary"></div>
        </div>
        <div className="flex justify-between text-xs text-foreground/50">
          <span>1:15</span>
          <span>{current.duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button className="text-foreground/50 hover:text-foreground transition-colors">
          <SkipBack size={24} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-background flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all neon-glow"
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
        </button>
        <button className="text-foreground/50 hover:text-foreground transition-colors">
          <SkipForward size={24} />
        </button>
      </div>

      {/* Volume Control */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Volume2 size={20} className="text-foreground/50" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 h-1 rounded-full appearance-none cursor-pointer accent-primary"
          />
          <span className="text-sm text-foreground/50 w-8 text-right">{volume}%</span>
        </div>
      </div>

      {/* Like Button */}
      <button
        onClick={() =>
          setLiked(liked.includes(current.id) ? liked.filter((id) => id !== current.id) : [...liked, current.id])
        }
        className="w-full py-3 rounded-lg border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all flex items-center justify-center gap-2"
      >
        <Heart size={20} fill={liked.includes(current.id) ? "currentColor" : "none"} />
        {liked.includes(current.id) ? "Liked" : "Like Track"}
      </button>
    </div>
  )
}
