"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import MovieFilters from "@/components/movie-filters"
import MovieGrid from "@/components/movie-grid"
import Footer from "@/components/footer"

export default function MoviesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">Movies & Inspiration</h1>
          <p className="text-foreground/60 text-lg">
            Explore tech-inspired films, documentaries, and stories that spark creativity and innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <MovieFilters selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>

        {/* Movie Grid */}
        <MovieGrid category={selectedCategory} />
      </main>

      <Footer />
    </div>
  )
}
