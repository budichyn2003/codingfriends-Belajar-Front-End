"use client"

const categories = [
  { id: "all", label: "All Movies" },
  { id: "tech", label: "Tech & AI" },
  { id: "documentary", label: "Documentary" },
]

export default function MovieFilters({ selectedCategory, setSelectedCategory }: any) {
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-6 py-2 rounded-lg border transition-all duration-300 font-medium ${
            selectedCategory === category.id
              ? "border-primary bg-primary/10 text-primary neon-glow"
              : "border-border text-foreground/70 hover:border-primary/50 hover:text-foreground"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
