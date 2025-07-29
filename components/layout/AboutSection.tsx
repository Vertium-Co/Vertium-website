'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function AboutSection() {
  return (
    <section id="sobre" className={`bg-black py-20 lg:py-32`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-3">
            <Badge
              variant="outline"
              className="cursor-pointer border-white/30 text-white transition-all duration-300 hover:scale-105 hover:border-lime-accent/50 hover:bg-lime-accent/10"
            >
              <span className="mr-2 size-2 rounded-full bg-lime-accent"></span>
              Sobre a Vertium Co.
            </Badge>
            <h2 className={`text-4xl font-bold leading-tight text-white lg:text-6xl`}>
              Conectando ideias à{' '}
              <span className="group relative inline-block">
                <span className="relative z-10">realidade digital</span>
                <span className="absolute bottom-1 left-0 h-2 w-full origin-left scale-x-0 bg-lime-accent/30 transition-transform duration-500 group-hover:scale-x-100" />
              </span>
            </h2>
            <Separator className="w-16 bg-lime-accent" />
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p className="transition-all duration-300 hover:translate-x-2">
                Na Vertium Co., acreditamos que a tecnologia é a ponte entre o presente e o futuro.
                Nossa missão é transformar visões empresariais em soluções digitais robustas e
                escaláveis.
              </p>
              <p className="transition-all duration-300 hover:translate-x-2">
                Com expertise em desenvolvimento full stack, integrações avançadas e automações
                inteligentes, oferecemos consultoria técnica especializada para empresas que buscam
                inovação e excelência.
              </p>
              <p className="transition-all duration-300 hover:translate-x-2">
                Nossos valores fundamentais incluem transparência, qualidade técnica e parceria
                estratégica com nossos clientes, garantindo resultados que superam expectativas.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 flex items-center justify-center">
            <Image
              src="/images/logo-vertium-dark.png"
              alt="Vertium Co. Logo"
              width={500}
              height={500}
              className="animate-pulse-slow object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 