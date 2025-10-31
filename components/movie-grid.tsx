"use client"
import { Star, Play } from "lucide-react"

const mockMovies = {
  all: [
    { id: 1, title: "The Code", rating: 8.5, category: "Documentary", poster: "/documentary-programming.jpg" },
    {
      id: 2,
      title: "Silicon Valley Dreams",
      rating: 7.8,
      category: "Documentary",
      poster: "/startup-documentary.jpg",
    },
    { id: 3, title: "AI Revolution", rating: 9.2, category: "Tech", poster: "/ai-artificial-intelligence.jpg" },
    { id: 4, title: "Hackers", rating: 7.2, category: "Hacker", poster: "/hacker-movie.jpg" },
    { id: 5, title: "Startup Life", rating: 8.1, category: "Startup", poster: "/startup-life.jpg" },
    { id: 6, title: "The Network", rating: 8.8, category: "Tech", poster: "/network-technology.jpg" },
  ],
  tech: [
    { id: 3, title: "AI Revolution", rating: 9.2, category: "Tech", poster: "/ai-technology.png" },
    { id: 6, title: "The Network", rating: 8.8, category: "Tech", poster: "/interconnected-network.png" },
  ],
  documentary: [
    { id: 1, title: "The Code", rating: 8.5, category: "Documentary", poster: "/programming-concept.png" },
    {
      id: 2,
      title: "Silicon Valley Dreams",
      rating: 7.8,
      category: "Documentary",
      poster: "/silicon-valley.jpg",
    },
  ],
}

export default function MovieGrid({ category }: { category: string }) {
  const movies = category === "all" ? mockMovies.all : mockMovies[category as keyof typeof mockMovies] || mockMovies.all

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
            {/* Poster */}
            <div className="aspect-[2/3] overflow-hidden bg-card">
              <img
                src={movie.poster || "/placeholder.svg"}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Play className="w-16 h-16 text-primary fill-primary" />
              </div>
            </div>

            {/* Info */}
            <div className="p-4 bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold text-sm line-clamp-2">{movie.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-foreground/50">{movie.category}</span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold">{movie.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
