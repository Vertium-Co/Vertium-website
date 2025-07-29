'use client'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useInView } from 'react-intersection-observer'
import { Code2, Search, DraftingCompass, TestTube2, Rocket } from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    title: 'Levantamento',
    description: 'Análise profunda de requisitos e objetivos para garantir o alinhamento total com sua visão.',
  },
  {
    icon: DraftingCompass,
    title: 'Protótipo',
    description: 'Criação de designs de UI/UX e protótipos interativos para validar a experiência do usuário.',
  },
  {
    icon: Code2,
    title: 'Desenvolvimento',
    description: 'Codificação da solução com tecnologias modernas, seguindo as melhores práticas de mercado.',
  },
  {
    icon: TestTube2,
    title: 'Testes',
    description: 'Execução de testes rigorosos para assegurar a qualidade, performance e segurança da aplicação.',
  },
  {
    icon: Rocket,
    title: 'Entrega',
    description: 'Lançamento do projeto, com suporte contínuo e planos para futuras evoluções.',
  },
]

function ProcessStep({ step, index }: { step: (typeof processSteps)[0]; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative z-10 mb-6 flex size-24 items-center justify-center rounded-full border-2 border-lime-accent bg-black transition-all duration-300 group-hover:scale-110">
        <step.icon className="size-10 text-lime-accent" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
      <p className="leading-relaxed text-gray-400">{step.description}</p>
    </div>
  )
}

export function ProcessSection() {
  return (
    <section id="processo" className="bg-black py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <Badge
            variant="outline"
            className="mb-6 cursor-pointer border-white/30 text-white transition-all duration-300 hover:scale-105 hover:border-lime-accent/50 hover:bg-lime-accent/10"
          >
            <span className="mr-2 size-2 rounded-full bg-lime-accent"></span>
            Nossa Abordagem
          </Badge>
          <h2 className="mb-8 text-4xl font-bold text-white lg:text-6xl">Um Processo Claro e Eficiente</h2>
          <Separator className="mx-auto mb-8 w-24 bg-lime-accent" />
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
            Da ideia ao lançamento, seguimos um caminho estruturado para garantir a excelência do seu projeto.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-12 hidden h-0.5 w-full bg-neutral-800 lg:block" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 