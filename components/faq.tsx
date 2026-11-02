'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Apa perbedaan Bitcoin dengan uang tradisional?',
    answer: 'Bitcoin adalah mata uang digital yang tidak dikelola oleh bank pusat. Tidak ada lembaga yang mengontrol Bitcoin - semuanya berjalan di jaringan terdesentralisasi. Bitcoin juga transparan, karena semua transaksi tercatat di blockchain yang bisa diakses siapa saja.',
  },
  {
    question: 'Berapa biaya untuk membeli Bitcoin?',
    answer: 'Biaya membeli Bitcoin tergantung platform yang Anda gunakan. Umumnya ada biaya transaksi (trading fee) antara 0,1% hingga 2%. Anda bisa membeli Bitcoin dalam jumlah kecil, bahkan hanya senilai Rp 10.000. Tidak ada biaya minimum pembelian di sebagian besar platform.',
  },
  {
    question: 'Apakah Bitcoin legal di Indonesia?',
    answer: 'Bitcoin legal untuk dimiliki sebagai aset digital di Indonesia. Bappebti (Bursa Berjangka Indonesia) mengatur cryptocurrency sebagai komoditas. Namun, penggunaannya sebagai alat pembayaran belum diakui resmi. Pastikan Anda mengikuti semua regulasi pajak yang berlaku.',
  },
  {
    question: 'Bagaimana cara menyimpan Bitcoin dengan aman?',
    answer: 'Ada beberapa cara menyimpan Bitcoin: wallet online (exchange), mobile wallet, desktop wallet, dan hardware wallet. Hardware wallet seperti Ledger atau Trezor dianggap paling aman karena menyimpan kunci privat Anda secara offline. Jangan pernah bagikan kunci privat Anda kepada siapapun.',
  },
  {
    question: 'Bisakah Bitcoin saya dicuri atau hilang?',
    answer: 'Bitcoin tidak bisa dicuri jika Anda menjaga kunci privat dengan baik. Jika Anda kehilangan kunci privat, Bitcoin Anda akan hilang selamanya karena tidak ada cara untuk memulihkannya. Itulah mengapa penting untuk membuat backup frasa pemulihan (seed phrase) dan menyimpannya di tempat yang aman.',
  },
  {
    question: 'Berapa lama transaksi Bitcoin?',
    answer: 'Transaksi Bitcoin biasanya membutuhkan waktu 10-30 menit untuk dikonfirmasi di blockchain. Kecepatan tergantung pada fee yang Anda bayar dan kondisi jaringan. Dengan teknologi Lightning Network, transaksi bisa hampir instan dengan biaya yang sangat kecil.',
  },
  {
    question: 'Apakah Bitcoin bisa digunakan untuk pembayaran?',
    answer: 'Secara teknis, Bitcoin bisa digunakan untuk pembayaran, tetapi masih sangat terbatas. Beberapa toko online dan merchant menerima Bitcoin, tetapi di Indonesia, penggunaan untuk pembayaran masih jarang. Bitcoin lebih sering dipandang sebagai aset atau investasi daripada alat pembayaran sehari-hari.',
  },
  {
    question: 'Bagaimana jika saya lupa password dompet saya?',
    answer: 'Tergantung jenis wallet. Jika Anda memiliki frasa pemulihan (seed phrase) 12 atau 24 kata, Anda bisa recover wallet Anda di device atau platform lain. Jika Anda tidak memiliki seed phrase dan lupa password hardware wallet, uang Anda mungkin tidak bisa diakses selamanya.',
  },
  {
    question: 'Apakah Bitcoin bisa bangkrut?',
    answer: 'Bitcoin tidak bisa "bangkrut" dalam arti tradisional karena tidak memiliki aset atau hutang. Namun, nilai Bitcoin bisa turun drastis jika kepercayaan publik menurun atau regulasi yang tidak menguntungkan diterapkan. Bitcoin juga tidak memiliki arus kas atau profit, sehingga valuasinya berbeda dengan saham perusahaan.',
  },
  {
    question: 'Berapa Bitcoin yang ada di dunia?',
    answer: 'Jumlah maksimal Bitcoin yang akan pernah ada adalah 21 juta. Saat ini sudah lebih dari 19 juta Bitcoin yang di-mining (beredar). Sisa Bitcoin akan terus di-mining hingga tahun 2140. Kelangkaan ini adalah salah satu alasan Bitcoin dianggap berharga.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Pertanyaan Umum</h2>
          <p className="text-xl text-muted-foreground">Jawaban untuk pertanyaan yang sering diajakan tentang Bitcoin</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-secondary/20">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
