"use client"

const playlists = [
  { id: "lofi", name: "Lo-Fi Hip Hop", desc: "Chill beats for focus", tracks: 45 },
  { id: "ambient", name: "Ambient Sounds", desc: "Peaceful background", tracks: 38 },
  { id: "instrumental", name: "Instrumental Jazz", desc: "Smooth melodies", tracks: 52 },
]

export default function PlaylistSelector({ selectedPlaylist, setSelectedPlaylist }: any) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Playlists</h3>
      <div className="space-y-3">
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => setSelectedPlaylist(playlist.id)}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
              selectedPlaylist === playlist.id
                ? "border-primary bg-primary/10 neon-glow"
                : "border-border hover:border-primary/50"
            }`}
          >
            <p className="font-semibold">{playlist.name}</p>
            <p className="text-sm text-foreground/60">{playlist.desc}</p>
            <p className="text-xs text-foreground/40 mt-2">{playlist.tracks} tracks</p>
          </button>
        ))}
      </div>
    </div>
  )
}
