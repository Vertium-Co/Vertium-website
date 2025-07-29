'use client'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, Instagram, ArrowRight } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    title: 'Email',
    content: 'contato@vertium.co',
    href: 'mailto:contato@vertium.co',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    content: 'linkedin.com/company/vertiumcompany',
    href: 'https://www.linkedin.com/company/107886907',
  },
  {
    icon: Github,
    title: 'GitHub',
    content: 'github.com/Vertium-Co',
    href: 'https://github.com/Vertium-Co',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    content: '@vertiumco',
    href: 'https://instagram.com/vertiumco',
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="bg-black py-20 text-white lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <Badge
            variant="outline"
            className="mb-6 cursor-pointer hover:bg-lime-accent/10 border-white/30 hover:border-lime-accent/50 transition-all duration-300 transform hover:scale-105 text-white"
          >
            <span className="mr-2 size-2 rounded-full bg-lime-accent"></span>
            Entre em Contato
          </Badge>
          <h2 className="mb-8 text-4xl font-bold lg:text-6xl">Vamos construir algo incrível juntos</h2>
          <Separator className="mx-auto mb-8 w-24 bg-lime-accent" />
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco e descubra como
            podemos ajudar.
          </p>
        </div>

        <div className="grid gap-20 lg:grid-cols-2">
          <div className="space-y-8">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start space-x-6 transition-all duration-300 hover:translate-x-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-black transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <contact.icon className="size-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold transition-all duration-300 group-hover:tracking-wide">
                    {contact.title}
                  </h3>
                  <p className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {contact.content}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <Card className="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10">
            <CardContent className="p-8">
              <h3 className="mb-8 text-2xl font-bold text-gray-300">Envie uma mensagem</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Nome</label>
                  <Input
                    type="text"
                    className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white transition-all duration-300 placeholder:text-gray-400 hover:bg-white/15 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-accent"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <Input
                    type="email"
                    className="w-full rounded-xl border border-white/20 bg-white/10 p-4 text-white transition-all duration-300 placeholder:text-gray-400 hover:bg-white/15 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-accent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Mensagem</label>
                  <Textarea
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/20 bg-white/10 p-4 text-white transition-all duration-300 placeholder:text-gray-400 hover:bg-white/15 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-accent"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>
                <Button
                  type="submit"
                  className="group w-full bg-white py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-2xl"
                >
                  Enviar mensagem
                  <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 