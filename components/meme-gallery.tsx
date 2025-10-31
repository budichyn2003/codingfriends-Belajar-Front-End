"use client"

import { useState } from "react"
import { Heart, MessageCircle, Share2 } from "lucide-react"

const mockMemes = [
  { id: 1, image: "/programmer-meme-developer-funny.jpg", author: "CodeJoker", likes: 342, comments: 28, shared: 15 },
  { id: 2, image: "/it-works-bug-fixed-meme.jpg", author: "BugHunter", likes: 287, comments: 19, shared: 12 },
  { id: 3, image: "/placeholder.svg?height=300&width=300", author: "DesignDad", likes: 425, comments: 34, shared: 22 },
  { id: 4, image: "/placeholder.svg?height=300&width=300", author: "GitMaster", likes: 156, comments: 11, shared: 8 },
  { id: 5, image: "/placeholder.svg?height=300&width=300", author: "JSWizard", likes: 298, comments: 21, shared: 14 },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    author: "StackOverflow",
    likes: 512,
    comments: 42,
    shared: 28,
  },
]

export default function MemeGallery({ memes = [] }: { memes?: any[] }) {
  const [likedMemes, setLikedMemes] = useState<number[]>([])

  const allMemes = [...mockMemes, ...(Array.isArray(memes) ? memes : [])]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allMemes.map((meme) => (
        <div
          key={meme.id}
          className="rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group bg-card/50"
        >
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-input">
            <img
              src={meme.image || "/placeholder.svg"}
              alt="meme"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info */}
          <div className="p-4 space-y-3">
            <p className="text-sm text-foreground/60">
              by <span className="text-foreground font-semibold">{meme.author}</span>
            </p>

            {/* Interactions */}
            <div className="flex gap-4 text-foreground/60 text-sm">
              <button
                onClick={() =>
                  setLikedMemes(
                    likedMemes.includes(meme.id) ? likedMemes.filter((id) => id !== meme.id) : [...likedMemes, meme.id],
                  )
                }
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Heart size={16} fill={likedMemes.includes(meme.id) ? "currentColor" : "none"} />
                <span>{meme.likes + (likedMemes.includes(meme.id) ? 1 : 0)}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle size={16} />
                <span>{meme.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 size={16} />
                <span>{meme.shared}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
