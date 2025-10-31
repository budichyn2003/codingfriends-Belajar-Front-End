"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import ThreadList from "@/components/thread-list"
import ForumCategories from "@/components/forum-categories"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function CommunityPage() {
  const [selectedForum, setSelectedForum] = useState("javascript")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-primary">Community Forum</h1>
            <p className="text-foreground/60 text-lg">
              Connect with developers, share knowledge, and build lasting friendships.
            </p>
          </div>
          <Button className="mt-6 sm:mt-0 flex items-center gap-2 bg-primary text-background hover:bg-primary/90">
            <Plus size={20} />
            New Thread
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ForumCategories selectedForum={selectedForum} setSelectedForum={setSelectedForum} />
            </div>
          </div>

          {/* Thread List */}
          <div className="lg:col-span-3">
            <ThreadList category={selectedForum} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
