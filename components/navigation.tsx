"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Music", href: "/music" },
    { label: "Movies", href: "/movies" },
    { label: "Community", href: "/community" },
    { label: "Memes", href: "/memes" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-background">
              CF
            </div>
            <span className="hidden sm:inline font-bold text-lg text-primary">CodingFriends</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg text-foreground/70 hover:text-foreground transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-background font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
