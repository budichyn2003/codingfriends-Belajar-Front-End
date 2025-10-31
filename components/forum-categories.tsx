"use client"

const forums = [
  { id: "javascript", name: "JavaScript", count: 342 },
  { id: "python", name: "Python", count: 298 },
  { id: "react", name: "React & Frontend", count: 256 },
  { id: "backend", name: "Backend", count: 189 },
  { id: "jobs", name: "Job Board", count: 127 },
]

export default function ForumCategories({ selectedForum, setSelectedForum }: any) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-bold mb-4">Categories</h3>
      <div className="space-y-2">
        {forums.map((forum) => (
          <button
            key={forum.id}
            onClick={() => setSelectedForum(forum.id)}
            className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
              selectedForum === forum.id
                ? "border-primary bg-primary/10 neon-glow"
                : "border-border hover:border-primary/50"
            }`}
          >
            <p className="font-semibold text-sm">{forum.name}</p>
            <p className="text-xs text-foreground/50 mt-1">{forum.count} threads</p>
          </button>
        ))}
      </div>
    </div>
  )
}
