'use client'

import { Bitcoin, Mail, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bitcoin className="w-6 h-6 text-primary" />
              <span className="font-bold text-foreground">Bitcoin Explained</span>
            </div>
            <p className="text-sm text-muted-foreground">Platform edukasi Bitcoin terlengkap dalam bahasa Indonesia.</p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Pelajari</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://bitcoin.org/files/bitcoin-paper/bitcoin_id.pdf" className="hover:text-primary transition-colors">Modul Bitcoin</a></li>
              <li><a href="https://brainmatics.id/blockchain-fundamentals/" className="hover:text-primary transition-colors">Blockchain Basics</a></li>
              <li><a href="https://www.finansialku.com/ebook/belajar-trading-untuk-pemula.pdf" className="hover:text-primary transition-colors">Trading Guide</a></li>
              <li><a href="https://id.tradingview.com/security/" className="hover:text-primary transition-colors">Security Tips</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Sumber Daya</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://bitcoin.org/en/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="https://developer.bitcoin.org/glossary.html" className="hover:text-primary transition-colors">Glossary</a></li>
              <li><a href="https://bitbo.io/tools/" className="hover:text-primary transition-colors">Tools</a></li>
              <li><a href="https://bitcoin.org/en/community" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a href="https://x.com/pasyaawanr_" className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com/pasyaawannn" className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="pasyaawanr@gmail.com" className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Bitcoin Explained. Semua hak dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-primary transition-colors">Kontak</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border text-xs text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Disclaimer:</p>
          <p>Konten ini hanya untuk tujuan edukasi. Kami tidak memberikan saran investasi finansial. Cryptocurrency adalah aset dengan risiko tinggi. Lakukan riset menyeluruh dan konsultasi dengan ahli keuangan sebelum membuat keputusan investasi.</p>
        </div>
      </div>
    </footer>
  )
}
