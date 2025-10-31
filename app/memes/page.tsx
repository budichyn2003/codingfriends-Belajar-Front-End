"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import MemeGallery from "@/components/meme-gallery"
import MemeUpload from "@/components/meme-upload"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export default function MemesPage() {
  const [showUploadModal, setShowUploadModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-primary">Meme Gallery</h1>
            <p className="text-foreground/60 text-lg">
              Laugh out loud with hilarious memes by developers, for developers.
            </p>
          </div>
          <Button
            onClick={() => setShowUploadModal(!showUploadModal)}
            className="mt-6 sm:mt-0 flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <Upload size={20} />
            Share Meme
          </Button>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="mb-12 bg-card/50 border border-border rounded-xl p-8 neon-glow">
            <MemeUpload onClose={() => setShowUploadModal(false)} />
          </div>
        )}

        {/* Meme Gallery */}
        <MemeGallery memes={[]} />
      </main>

      <Footer />
    </div>
  )
}
