'use client'

import { useState } from 'react'
import { ChevronDown, Bitcoin, TrendingUp, Lock, Users, Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Hero from '@/components/hero'
import ModuleCard from '@/components/module-card'
import FAQSection from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      
      {/* Modul Pembelajaran */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Modul Pembelajaran</h2>
            <p className="text-xl text-muted-foreground">Pelajari Bitcoin dengan urutan yang terstruktur, dari dasar hingga mahir</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ModuleCard
              number="01"
              title="Apa Itu Bitcoin?"
              description="Pahami konsep dasar Bitcoin, sejarahnya, dan mengapa Bitcoin diciptakan. Pelajari perbedaan antara Bitcoin dan uang tradisional."
              topics={['Definisi Bitcoin', 'Sejarah Cryptocurrency', 'Apa itu Blockchain', 'Why Bitcoin Matters']}
              color="primary"
            />
            <ModuleCard
              number="02"
              title="Blockchain & Teknologi"
              description="Menggali lebih dalam tentang teknologi blockchain, bagaimana transaksi divalidasi, dan konsep hashing serta mining."
              topics={['Bagaimana Blockchain Bekerja', 'Hashing & Cryptography', 'Smart Contracts', 'Konsensus Mechanism']}
              color="accent"
            />
            <ModuleCard
              number="03"
              title="Mining & Validasi"
              description="Pelajari proses mining Bitcoin, bagaimana transaksi diverifikasi, dan peran miners dalam jaringan Bitcoin."
              topics={['Apa Itu Mining', 'Proof of Work', 'Difficulty & Rewards', 'Mining Pools']}
              color="primary"
            />
            <ModuleCard
              number="04"
              title="Dompet & Keamanan"
              description="Pelajari cara menyimpan Bitcoin dengan aman, jenis-jenis dompet, dan best practices keamanan digital."
              topics={['Jenis-jenis Wallet', 'Private Keys & Public Keys', 'Cold Storage', 'Security Tips']}
              color="accent"
            />
            <ModuleCard
              number="05"
              title="Trading & Investasi"
              description="Memahami cara membeli, menjual, dan memperdagangkan Bitcoin dengan strategi yang tepat dan manajemen risiko."
              topics={['Cara Membeli Bitcoin', 'Trading Basics', 'Risk Management', 'Market Analysis']}
              color="primary"
            />
            <ModuleCard
              number="06"
              title="Masa Depan Bitcoin"
              description="Eksplorasi tren terbaru, aplikasi blockchain, dan prospek masa depan cryptocurrency di ekonomi global."
              topics={['Lightning Network', 'Adoption Trends', 'Regulations', 'Future Challenges']}
              color="accent"
            />
          </div>
        </div>
      </section>

      {/* Keuntungan Belajar Bitcoin */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Mengapa Belajar Bitcoin?</h2>
            <p className="text-xl text-muted-foreground">Temukan alasan mengapa Bitcoin penting di era digital ini</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Keamanan Terjamin</h3>
              <p className="text-muted-foreground">Teknologi kriptografi memastikan transaksi Anda aman dan tidak bisa diubah. Hanya Anda yang mengontrol aset digital Anda.</p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Potensi Investasi</h3>
              <p className="text-muted-foreground">Bitcoin telah menunjukkan pertumbuhan signifikan dari waktu ke waktu. Pahami dinamika pasar dan buat keputusan investasi yang tepat.</p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Komunitas Global</h3>
              <p className="text-muted-foreground">Bergabunglah dengan jutaan pengguna Bitcoin di seluruh dunia. Akses ke jaringan peer-to-peer yang transparan dan terdesentralisasi.</p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Transaksi Cepat</h3>
              <p className="text-muted-foreground">Kirim uang ke seluruh dunia tanpa perantara, dengan biaya yang lebih rendah dan lebih cepat dibanding sistem tradisional.</p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4">
                <Bitcoin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kebebasan Finansial</h3>
              <p className="text-muted-foreground">Bitcoin memberikan kebebasan finansial tanpa bergantung pada lembaga keuangan pusat. Kontrol penuh atas aset Anda sendiri.</p>
            </div>

            <div className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Masa Depan Siap</h3>
              <p className="text-muted-foreground">Memahami Bitcoin memberi Anda keunggulan kompetitif di era digital. Siapkan diri untuk ekonomi masa depan yang terdesentralisasi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Pembelajaran */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Perjalanan Belajar Anda</h2>
            <p className="text-xl text-muted-foreground">Dari pemula hingga expert dalam waktu yang fleksibel</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-card rounded-lg p-6 border-2 border-primary text-center">
                <div className="text-2xl font-bold text-primary mb-2">1-2 Minggu</div>
                <p className="text-sm text-muted-foreground">Pahami dasar Bitcoin dan blockchain</p>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 hidden md:block">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-lg p-6 border-2 border-accent text-center">
                <div className="text-2xl font-bold text-accent mb-2">2-4 Minggu</div>
                <p className="text-sm text-muted-foreground">Kuasai mining dan validasi transaksi</p>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 hidden md:block">
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-lg p-6 border-2 border-primary text-center">
                <div className="text-2xl font-bold text-primary mb-2">4-6 Minggu</div>
                <p className="text-sm text-muted-foreground">Kuasai keamanan dan penyimpanan Bitcoin</p>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 hidden md:block">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border-2 border-accent text-center">
              <div className="text-2xl font-bold text-accent mb-2">6+ Minggu</div>
              <p className="text-sm text-muted-foreground">Trading dan investasi yang cerdas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Memulai Perjalanan Bitcoin Anda?</h2>
          <p className="text-lg text-muted-foreground mb-8">Mulai belajar sekarang dan kuasai cryptocurrency dari nol hingga mahir</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Mulai Belajar Sekarang</Button>
            <Button size="lg" variant="outline">Baca Dokumentasi</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
