"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"

export default function MemeUpload({ setMemes }: { setMemes: any }) {
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    if (preview) {
      setMemes((prev: any[]) => [
        ...prev,
        {
          id: Date.now(),
          image: preview,
          author: "You",
          likes: 0,
          comments: 0,
          shared: 0,
        },
      ])
      setPreview(null)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  return (
    <div className="p-6 rounded-lg border border-border bg-card/50">
      <h3 className="text-xl font-bold mb-4">Share Your Meme</h3>

      {preview ? (
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden border border-border">
            <img src={preview || "/placeholder.svg"} alt="preview" className="w-full h-full object-cover" />
            <button
              onClick={() => {
                setPreview(null)
                if (fileInputRef.current) fileInputRef.current.value = ""
              }}
              className="absolute top-2 right-2 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <button
            onClick={handleUpload}
            className="w-full py-3 rounded-lg bg-primary text-background font-bold hover:bg-primary/90 transition-colors"
          >
            Upload Meme
          </button>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full py-8 rounded-lg border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-3 text-foreground/60 hover:text-foreground transition-colors"
        >
          <Upload size={32} />
          <span className="font-semibold">Click to upload your meme</span>
          <span className="text-sm">PNG, JPG up to 10MB</span>
        </button>
      )}

      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
    </div>
  )
}
