"use client"
import { MessageCircle, Eye, Clock } from "lucide-react"

const mockThreads = {
  javascript: [
    {
      id: 1,
      title: "Best practices for async/await in 2025?",
      author: "DevGuru",
      replies: 24,
      views: 342,
      time: "2h ago",
      pinned: true,
    },
    {
      id: 2,
      title: "React 19 - What are your thoughts?",
      author: "CodeMaster",
      replies: 18,
      views: 256,
      time: "4h ago",
    },
    { id: 3, title: "How to optimize bundle size?", author: "FrontendDev", replies: 12, views: 189, time: "6h ago" },
  ],
  python: [
    {
      id: 4,
      title: "Django vs FastAPI for APIs",
      author: "PyExpert",
      replies: 31,
      views: 428,
      time: "1h ago",
      pinned: true,
    },
    { id: 5, title: "Async programming in Python", author: "CodeNinja", replies: 15, views: 203, time: "3h ago" },
  ],
  react: [
    {
      id: 6,
      title: "Server Components vs Client Components",
      author: "NextJsPro",
      replies: 42,
      views: 567,
      time: "30m ago",
      pinned: true,
    },
    { id: 7, title: "State management in 2025", author: "StateManager", replies: 28, views: 412, time: "2h ago" },
  ],
  backend: [{ id: 8, title: "Database optimization tips", author: "DBAdmin", replies: 19, views: 276, time: "1h ago" }],
  jobs: [
    {
      id: 9,
      title: "[HIRING] Full Stack Developer - Remote",
      author: "TechCorp",
      replies: 8,
      views: 542,
      time: "30m ago",
    },
    {
      id: 10,
      title: "Looking for Freelance React Developer",
      author: "StartupOwner",
      replies: 12,
      views: 389,
      time: "2h ago",
    },
  ],
}

export default function ThreadList({ forum }: { forum: string }) {
  const threads = mockThreads[forum as keyof typeof mockThreads] || []

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold capitalize">{forum}</h2>
        <button className="px-4 py-2 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-colors">
          New Thread
        </button>
      </div>

      <div className="space-y-3">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:bg-card/50 cursor-pointer group"
          >
            <div className="flex gap-4">
              {/* Pinned indicator */}
              {thread.pinned && (
                <div className="hidden sm:flex items-start">
                  <div className="w-1 h-full bg-primary rounded-full"></div>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {thread.pinned && <span className="text-primary text-xs mr-2">[PINNED]</span>}
                  {thread.title}
                </h3>
                <p className="text-sm text-foreground/60 mt-2">by {thread.author}</p>
              </div>

              {/* Stats */}
              <div className="hidden md:flex items-center gap-6 text-foreground/50 text-sm">
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span>{thread.replies}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>{thread.views}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{thread.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
