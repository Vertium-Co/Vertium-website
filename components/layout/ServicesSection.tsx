'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Code2, Zap, Bot, Settings, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Desenvolvimento Full Stack',
    description:
      'Soluções completas de front-end e back-end com as tecnologias mais modernas do mercado.',
  },
  {
    icon: Zap,
    title: 'APIs & Integrações',
    description:
      'Desenvolvimento de APIs robustas e integrações seamless entre sistemas e plataformas.',
  },
  {
    icon: Bot,
    title: 'Automações & IA',
    description: 'Implementação de automações inteligentes e soluções com inteligência artificial.',
  },
  {
    icon: Settings,
    title: 'Consultoria Técnica',
    description: 'Orientação especializada para otimização de processos e arquitetura de software.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className={`bg-neutral-950 py-20 lg:py-32`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <Badge
            variant="outline"
            className="mb-6 cursor-pointer hover:bg-lime-accent/10 border-white/30 hover:border-lime-accent/50 transition-all duration-300 transform hover:scale-105 text-white"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-lime-accent"></span>
            Nossos Serviços
          </Badge>
          <h2 className={`mb-8 text-4xl font-bold text-white lg:text-6xl`}>
            Expertise em tecnologia
          </h2>
          <Separator className="mx-auto mb-8 w-24 bg-lime-accent" />
          <p className={`mx-auto max-w-3xl text-xl leading-relaxed text-gray-300`}>
            Oferecemos soluções completas em desenvolvimento de software, desde a concepção até a
            implementação e manutenção.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group cursor-pointer border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 
                  hover:-translate-y-2 hover:scale-105 hover:bg-white/10`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="flex h-full flex-col p-8">
                <div className="mb-6">
                  <div
                    className={`flex size-16 items-center justify-center rounded-2xl bg-white/10 transition-all duration-500 group-hover:rotate-12`}
                  >
                    <service.icon className={`size-8 text-lime-accent transition-all duration-500`} />
                  </div>
                </div>
                <h3 className={`mb-4 text-xl font-bold text-white transition-colors duration-300`}>
                  {service.title}
                </h3>
                <p className={`grow leading-relaxed text-gray-300 transition-colors duration-300`}>
                  {service.description}
                </p>
                <div className="mt-6 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight className="size-5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 