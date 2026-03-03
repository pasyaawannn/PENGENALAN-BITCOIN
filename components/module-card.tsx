'use client'

import { ArrowRight } from 'lucide-react'

interface ModuleCardProps {
  number: string
  title: string
  description: string
  topics: string[]
  color: 'primary' | 'accent'
}

export default function ModuleCard({
  number,
  title,
  description,
  topics,
  color,
}: ModuleCardProps) {
  const bgColor = color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
  const borderColor = color === 'primary' ? 'border-primary' : 'border-accent'
  const textColor = color === 'primary' ? 'text-primary' : 'text-accent'

  return (
    <div className={`group rounded-lg border-2 ${borderColor} p-8 hover:shadow-lg transition-all duration-300 cursor-pointer`}>
      {/* Number */}
      <div className={`text-5xl font-bold ${textColor} mb-4 opacity-10`}>{number}</div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

      {/* Topics */}
      <div className="mb-6">
        <div className="text-sm font-semibold text-foreground mb-3">Topik yang Dibahas:</div>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className={`w-1.5 h-1.5 rounded-full ${textColor}`}></span>
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className={`flex items-center gap-2 ${textColor} font-semibold group-hover:gap-3 transition-all`}>
        Mulai Pelajaran
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  )
}
