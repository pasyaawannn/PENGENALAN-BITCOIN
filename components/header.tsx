'use client'

import { Bitcoin, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bitcoin className="w-7 h-7 text-primary" />
          <span className="text-xl font-bold text-foreground">Bitcoin Explained</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#modul" className="text-foreground hover:text-primary transition-colors">Modul</a>
          <a href="#keuntungan" className="text-foreground hover:text-primary transition-colors">Keuntungan</a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          <a href="#" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Mulai</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-4">
            <a href="#modul" className="block text-foreground hover:text-primary transition-colors">Modul</a>
            <a href="#keuntungan" className="block text-foreground hover:text-primary transition-colors">Keuntungan</a>
            <a href="#faq" className="block text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#" className="block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-center">Mulai</a>
          </div>
        </div>
      )}
    </header>
  )
}
