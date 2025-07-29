'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const stats = [
  { value: 110, label: 'Projetos Entregues' },
  { value: 40, label: 'Clientes Satisfeitos' },
  { value: 150000, label: 'Usuários Impactados' },
]

interface AnimatedStatProps {
  value: number
  label: string
  delay: number
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, label, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      const start = 0
      const end = value
      if (start === end) return

      const duration = 2000
      const frameRate = 60
      const totalFrames = (duration / 1000) * frameRate
      let frame = 0

      const counter = () => {
        frame++
        const progress = frame / totalFrames
        const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3))) // Easing easeOutCubic

        if (frame < totalFrames) {
          setCount(currentCount)
          requestAnimationFrame(counter)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(counter)
    }
  }, [inView, value])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (
        <>
          +{Math.floor(num / 1000000)}
          <span className="ml-2 text-4xl lg:text-5xl">M</span>
        </>
      )
    }
    if (num >= 1000) {
      return (
        <>
          +{Math.floor(num / 1000)}
          <span className="ml-2 text-4xl lg:text-5xl">K</span>
        </>
      )
    }
    return `+${num}`
  }

  return (
    <div
      ref={ref}
      className={`flex w-48 flex-col items-center transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="flex items-baseline justify-center text-5xl font-bold lg:text-6xl">
        {inView ? formatNumber(count) : '+0'}
      </p>
      <p className="mt-2 text-lg text-gray-300">{label}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className={`bg-neutral-950 py-20 lg:py-32`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <Badge
            variant="outline"
            className="mb-6 cursor-pointer border-white/30 text-white transition-all duration-300 hover:scale-105 hover:border-lime-accent/50 hover:bg-lime-accent/10"
          >
            <span className="mr-2 size-2 rounded-full bg-lime-accent"></span>
            Resultados em Números
          </Badge>
          <h2 className={`mb-8 text-4xl font-bold text-white lg:text-6xl`}>
            Nosso Impacto no Mercado
          </h2>
          <Separator className="mx-auto mb-8 w-24 bg-lime-accent" />
          <p className={`mx-auto max-w-3xl text-xl leading-relaxed text-gray-300`}>
            A confiança e o sucesso dos nossos clientes, traduzidos em dados que falam por si.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-8 md:space-x-16">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <AnimatedStat value={stat.value} label={stat.label} delay={index * 200} />
              {index < stats.length - 1 && (
                <Separator orientation="vertical" className="hidden h-24 bg-white/20 md:block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
} 