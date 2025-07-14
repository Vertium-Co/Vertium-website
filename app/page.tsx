"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Code2,
  Zap,
  Bot,
  Settings,
  Menu,
  X,
  ArrowRight,
  Star,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Sun,
  Moon,
  Search,
  DraftingCompass,
  TestTube2,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import React from "react"

interface AnimatedStatProps {
  value: number;
  label: string;
  delay: number;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({ value, label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      if (start === end) return

      const duration = 2000 // 2 segundos para a animação
      const frameRate = 60 // 60fps
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
      return `+${(num / 1000000).toFixed(0)}M`
    }
    return `+${num}`
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-700 w-48 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-5xl lg:text-6xl font-bold">
        {inView ? formatNumber(count) : "+0"}
      </p>
      <p className="text-lg mt-2 text-gray-300">{label}</p>
    </div>
  )
}

export default function VertiumLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Full Stack",
      description: "Soluções completas de front-end e back-end com as tecnologias mais modernas do mercado.",
    },
    {
      icon: Zap,
      title: "APIs & Integrações",
      description: "Desenvolvimento de APIs robustas e integrações seamless entre sistemas e plataformas.",
    },
    {
      icon: Bot,
      title: "Automações & IA",
      description: "Implementação de automações inteligentes e soluções com inteligência artificial.",
    },
    {
      icon: Settings,
      title: "Consultoria Técnica",
      description: "Orientação especializada para otimização de processos e arquitetura de software.",
    },
  ]

  const process = [
    {
      icon: Search,
      title: "Levantamento",
      description: "Análise profunda de requisitos e objetivos para garantir o alinhamento total com sua visão.",
    },
    {
      icon: DraftingCompass,
      title: "Protótipo",
      description: "Criação de designs de UI/UX e protótipos interativos para validar a experiência do usuário.",
    },
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Codificação da solução com tecnologias modernas, seguindo as melhores práticas de mercado.",
    },
    {
      icon: TestTube2,
      title: "Testes",
      description: "Execução de testes rigorosos para assegurar a qualidade, performance e segurança da aplicação.",
    },
    {
      icon: Rocket,
      title: "Entrega",
      description: "Lançamento do projeto, com suporte contínuo e planos para futuras evoluções.",
    },
  ]

  const stats = [
    {
      value: 110,
      label: "Projetos Entregues",
    },
    {
      value: 40,
      label: "Clientes Satisfeitos",
    },
    {
      value: 1000000,
      label: "Usuários Impactados",
    },
  ]

  return (
    <div
      className={`min-h-screen bg-black text-white overflow-x-hidden`}
    >
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? `bg-black/95 backdrop-blur-xl shadow-lg border-b border-neutral-800`
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/vertium-logo.png"
                  alt="Vertium Co."
                  width={40}
                  height={40}
                  className="w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
              </div>
              <span
                className={`text-xl lg:text-2xl font-bold transition-all duration-300 group-hover:tracking-wider text-white`}
              >
                Vertium Co.
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "Serviços", "Processo", "Sobre", "Contato"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("ç", "c")}`}
                  className={`relative font-medium transition-all duration-300 group text-gray-300 hover:text-white`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-lime-accent`}
                  />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative overflow-hidden group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-neutral-950 border-t border-neutral-800 py-4">
              <nav className="space-y-2">
                {["Home", "Serviços", "Processo", "Sobre", "Contato"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace("ç", "c")}`}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-neutral-900 transition-all duration-300 rounded-lg mx-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className={`relative min-h-screen flex items-center justify-center bg-black`}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/hero_background.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay para garantir a legibilidade do texto */}

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Animated Badge */}
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Badge
                variant="outline"
                className="mb-6 text-sm md:text-base cursor-pointer hover:bg-lime-accent/10 border-white/30 hover:border-lime-accent/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-lime-accent"></span>
                Tecnologia que move o mundo
              </Badge>
            </div>

            {/* Main Title with Stagger Animation */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                  Soluções
                </span>{" "}
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: "600ms" }}>
                  digitais
                </span>
                <br />
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: "800ms" }}>
                  inovadoras
                </span>{" "}
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
                  e sob medida
                </span>
              </h1>
            </div>

            {/* Separator */}
            <div className="animate-fade-in-up" style={{ animationDelay: "1200ms" }}>
              <Separator className="w-24 mx-auto bg-lime-accent" />
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in-up mt-8" style={{ animationDelay: "1300ms" }}>
              <p className="mb-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                Projetamos e implementamos soluções digitais que geram impacto real e duradouro.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex justify-center animate-fade-in-up mt-8"
              style={{ animationDelay: "1400ms" }}
            >
              <Button
                size="lg"
                className={`px-8 py-6 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                    bg-white text-black hover:bg-gray-200`}
                onClick={handleScrollToContact}
              >
                Solicite um orçamento
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-lime-accent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className={`py-20 lg:py-32 bg-neutral-950`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 cursor-pointer hover:bg-lime-accent/10 border-white/30 hover:border-lime-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-lime-accent"></span>
              Nossos Serviços
            </Badge>
            <h2 className={`text-4xl lg:text-6xl font-bold mb-8 text-white`}>
              Expertise em tecnologia
            </h2>
            <Separator className="w-24 mx-auto mb-8 bg-lime-accent" />
            <p
              className={`text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto`}
            >
              Oferecemos soluções completas em desenvolvimento de software, desde a concepção até a implementação e
              manutenção.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 
                    bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 
                        bg-white/10`}
                    >
                      <service.icon
                        className={`h-8 w-8 transition-all duration-500 text-lime-accent`}
                      />
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 text-white`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`leading-relaxed flex-grow transition-colors duration-300 text-gray-300`}
                  >
                    {service.description}
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 cursor-pointer hover:bg-lime-accent/10 border-white/30 hover:border-lime-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-lime-accent"></span>
              Nossa Abordagem
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">Um Processo Claro e Eficiente</h2>
            <Separator className="w-24 mx-auto mb-8 bg-lime-accent" />
            <p className="text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
              Da ideia ao lançamento, seguimos um caminho estruturado para garantir a excelência do seu projeto.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-neutral-800" />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
              {process.map((step, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.1,
                })

                return (
                  <div
                    ref={ref}
                    key={index}
                    className={`flex flex-col items-center text-center transition-all duration-700 ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center bg-black border-2 border-lime-accent mb-6 transition-all duration-300 transform group-hover:scale-110">
                      <step.icon className="h-10 w-10 text-lime-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className={`py-20 lg:py-32 bg-black`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-lime-accent/10 border-white/30 hover:border-lime-accent/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2 h-2 w-2 rounded-full bg-lime-accent"></span>
                Sobre a Vertium Co.
              </Badge>
              <h2
                className={`text-4xl lg:text-6xl font-bold leading-tight text-white`}
              >
                Conectando ideias à{" "}
                <span className="relative inline-block group">
                  <span className="relative z-10">realidade digital</span>
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-lime-accent/30 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                </span>
              </h2>
              <Separator className="w-16 bg-lime-accent" />
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="transform transition-all duration-300 hover:translate-x-2">
                  Na Vertium Co., acreditamos que a tecnologia é a ponte entre o presente e o futuro. Nossa missão é
                  transformar visões empresariais em soluções digitais robustas e escaláveis.
                </p>
                <p className="transform transition-all duration-300 hover:translate-x-2">
                  Com expertise em desenvolvimento full stack, integrações avançadas e automações inteligentes,
                  oferecemos consultoria técnica especializada para empresas que buscam inovação e excelência.
                </p>
                <p className="transform transition-all duration-300 hover:translate-x-2">
                  Nossos valores fundamentais incluem transparência, qualidade técnica e parceria estratégica com nossos
                  clientes, garantindo resultados que superam expectativas.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 flex items-center justify-center transition-all duration-500 group-hover:rotate-3 group-hover:scale-105">
                <Image
                  src="/images/vertium-logo-alt.png"
                  alt="Vertium Co. Logo"
                  width={200}
                  height={200}
                  className="w-48 h-48 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 lg:py-32 bg-neutral-950`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 cursor-pointer hover:bg-lime-accent/10 border-white/30 hover:border-lime-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-lime-accent"></span>
              Resultados em Números
            </Badge>
            <h2 className={`text-4xl lg:text-6xl font-bold mb-8 text-white`}>
              Nosso Impacto no Mercado
            </h2>
            <Separator className="w-24 mx-auto mb-8 bg-lime-accent" />
            <p
              className={`text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto`}
            >
              A confiança e o sucesso dos nossos clientes, traduzidos em dados que falam por si.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-8 md:space-x-16">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <AnimatedStat
                  value={stat.value}
                  label={stat.label}
                  delay={index * 200}
                />
                {index < stats.length - 1 && (
                  <Separator orientation="vertical" className="h-24 hidden md:block bg-white/20" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 cursor-pointer hover:bg-lime-accent/10 border-white/30 hover:border-lime-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2 h-2 w-2 rounded-full bg-lime-accent"></span>
              Entre em Contato
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Vamos construir algo incrível juntos</h2>
            <Separator className="w-24 mx-auto mb-8 bg-lime-accent" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para transformar sua ideia em realidade? Entre em contato conosco e descubra como podemos ajudar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", content: "contato@vertium.co", href: "mailto:contato@vertium.co" },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  content: "linkedin.com/company/vertiumcompany",
                  href: "https://www.linkedin.com/company/107886907",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  content: "github.com/Vertium-Co",
                  href: "https://github.com/Vertium-Co",
                },
              ].map((contact, index) => (
                <a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-6 group transform transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-14 h-14 bg-white text-black rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <contact.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 transition-all duration-300 group-hover:tracking-wide">
                      {contact.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contact.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 text-gray-300">Envie uma mensagem</h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-accent focus:border-transparent transition-all duration-300 hover:bg-white/15"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-accent focus:border-transparent transition-all duration-300 hover:bg-white/15"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-accent focus:border-transparent transition-all duration-300 hover:bg-white/15 resize-none"
                      placeholder="Conte-nos sobre seu projeto..."
                    />
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-gray-200 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                    Enviar mensagem
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 group cursor-pointer">
              <Image
                src="/images/vertium-logo-alt.png"
                alt="Vertium Co."
                width={32}
                height={32}
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <span className="text-xl font-bold text-white transition-all duration-300 group-hover:tracking-wider">
                Vertium Co.
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right transition-colors duration-300 hover:text-gray-300">
              © 2022 Vertium Co. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
