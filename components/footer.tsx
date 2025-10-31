"use client"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-background text-sm">
                CF
              </div>
              <span className="font-bold text-primary">CodingFriends</span>
            </div>
            <p className="text-foreground/60 text-sm">Your coding buddy for music, movies, and community.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-foreground/60 hover:text-foreground">
              <li>
                <Link href="/music">Music Player</Link>
              </li>
              <li>
                <Link href="/movies">Movies</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/memes">Memes</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-foreground/60 hover:text-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-border hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-border hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-border hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-border hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; 2025 CodingFriends. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
