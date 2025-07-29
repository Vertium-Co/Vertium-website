'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function HeroSection() {
  const handleScrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-black">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/background-hero.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Badge
              variant="outline"
              className="mb-6 cursor-pointer border-white/30 text-sm text-white transition-all duration-300 hover:scale-105 hover:border-lime-accent/50 hover:bg-lime-accent/10 md:text-base"
            >
              <span className="animate-pulse-slow mr-2 size-2 rounded-full bg-lime-accent"></span>
              Tecnologia que move o mundo
            </Badge>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-8xl">
              <span className="animate-fade-in-up inline-block" style={{ animationDelay: '400ms' }}>
                Soluções
              </span>{' '}
              <span className="animate-fade-in-up inline-block" style={{ animationDelay: '600ms' }}>
                digitais
              </span>
              <br />
              <span className="animate-fade-in-up inline-block" style={{ animationDelay: '800ms' }}>
                inovadoras
              </span>{' '}
              <span className="animate-fade-in-up inline-block" style={{ animationDelay: '1000ms' }}>
                e sob medida
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
            <Separator className="animate-scale-x mx-auto w-24 bg-lime-accent" />
          </div>

          <div className="animate-fade-in-up mt-8" style={{ animationDelay: '1300ms' }}>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
              Projetamos e implementamos soluções digitais que geram impacto real e duradouro.
            </p>
          </div>

          <div
            className="animate-fade-in-up mt-8 flex justify-center"
            style={{ animationDelay: '1400ms' }}
          >
            <Button
              size="lg"
              className={`group bg-white px-8 py-6 text-lg text-black transition-all duration-300 
                  hover:scale-105 hover:bg-gray-200 hover:shadow-2xl`}
              onClick={handleScrollToContact}
            >
              Solicite um orçamento
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="size-6 text-lime-accent" />
      </div>
    </section>
  )
} 