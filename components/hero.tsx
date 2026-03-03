'use client'

import { ArrowRight, Bitcoin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-b from-accent/10 via-background to-background">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Bitcoin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Pelajari Cryptocurrency</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Pahami Bitcoin Dari Nol Hingga Mahir
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Panduan lengkap dalam bahasa Indonesia untuk memahami Bitcoin, teknologi blockchain, dan cara memulai perjalanan cryptocurrency Anda dengan percaya diri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base">
                Mulai Belajar Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Jelajahi Modul
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">6+</div>
                <p className="text-sm text-muted-foreground">Modul Lengkap</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
                <p className="text-sm text-muted-foreground">Gratis & Terbuka</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">∞</div>
                <p className="text-sm text-muted-foreground">Akses Selamanya</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[500px] hidden md:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Animated circles */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute inset-8 rounded-full border-2 border-accent/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              <div className="absolute inset-16 rounded-full border-2 border-primary/40"></div>
              
              {/* Center Bitcoin icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                  <Bitcoin className="w-16 h-16 text-background" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary/20 rounded-lg animate-bounce"></div>
              <div className="absolute bottom-10 left-0 w-16 h-16 bg-accent/20 rounded-lg animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute top-1/3 left-8 w-10 h-10 bg-primary/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
