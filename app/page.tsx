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
} from "lucide-react"
import Image from "next/image"

export default function VertiumLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

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

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart Ltda",
      content: "A Vertium Co. transformou nossa visão em realidade. Entrega excepcional e suporte técnico de primeira.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      company: "Inovação Digital",
      content: "Profissionalismo e expertise técnica incomparáveis. Recomendo para qualquer projeto de software.",
      rating: 5,
    },
    {
      name: "Roberto Mendes",
      company: "Future Systems",
      content: "Parceria estratégica que nos levou ao próximo nível. Soluções inovadoras e resultados concretos.",
      rating: 5,
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} overflow-x-hidden`}
    >
      {/* Cursor personalizado */}
      <div
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isScrolled ? 1.5 : 1})`,
        }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? `${isDarkMode ? "bg-black/95" : "bg-white/95"} backdrop-blur-xl shadow-lg border-b ${isDarkMode ? "border-neutral-800" : "border-gray-100"}`
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
                className={`text-xl lg:text-2xl font-bold transition-all duration-300 group-hover:tracking-wider ${isDarkMode ? "text-white" : "text-black"}`}
              >
                Vertium Co.
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Home", "Serviços", "Sobre", "Contato"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("ç", "c")}`}
                  className={`relative font-medium transition-all duration-300 group ${
                    isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hidden md:flex ml-4 relative overflow-hidden group hover:scale-110 transition-all duration-300"
            >
              <Sun
                className={`h-5 w-5 transition-all duration-500 ${isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
              />
              <Moon
                className={`absolute h-5 w-5 transition-all duration-500 ${isDarkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
              />
            </Button>

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
            <div className="bg-white border-t border-gray-100 py-4">
              <nav className="space-y-2">
                {["Home", "Serviços", "Sobre", "Contato"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace("ç", "c")}`}
                    className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300 rounded-lg mx-2"
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
            <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full justify-start"
              >
                {isDarkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {isDarkMode ? "Modo Claro" : "Modo Escuro"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className={`relative min-h-screen flex items-center justify-center ${isDarkMode ? "bg-black" : "bg-white"}`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, black 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Animated Badge */}
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Badge variant="outline" className="mb-6 text-sm md:text-base cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
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

            {/* Subtitle */}
            <div className="animate-fade-in-up" style={{ animationDelay: "1200ms" }}>
              <p className="-mt-2 mb-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Projetamos e implementamos soluções digitais que geram impacto real e duradouro.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex justify-center animate-fade-in-up"
              style={{ animationDelay: "1400ms" }}
            >
              <Button
                size="lg"
                className={`px-8 py-6 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
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
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className={`py-20 lg:py-32 ${isDarkMode ? "bg-neutral-950" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Nossos Serviços
            </Badge>
            <h2 className={`text-4xl lg:text-6xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
              Expertise em tecnologia
            </h2>
            <Separator className="w-24 mx-auto mb-8 bg-black" />
            <p
              className={`text-xl leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              Oferecemos soluções completas em desenvolvimento de software, desde a concepção até a implementação e
              manutenção.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10"
                    : "bg-white border-0 shadow-lg hover:bg-black hover:text-white"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 ${
                        isDarkMode ? "bg-white/10" : "bg-gray-100 group-hover:bg-white"
                      }`}
                    >
                      <service.icon
                        className={`h-8 w-8 transition-all duration-500 ${
                          isDarkMode ? "text-white" : "text-black"
                        }`}
                      />
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : ""
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`leading-relaxed flex-grow transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600 group-hover:text-gray-300"
                    }`}
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

      {/* About Section */}
      <section id="sobre" className={`py-20 lg:py-32 ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Sobre a Vertium Co.
              </Badge>
              <h2
                className={`text-4xl lg:text-6xl font-bold leading-tight ${isDarkMode ? "text-white" : "text-black"}`}
              >
                Conectando ideias à{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">realidade digital</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-gray-200 -z-10 transform scale-x-0 origin-left transition-transform duration-1000 hover:scale-x-100" />
                </span>
              </h2>
              <Separator className="w-16 bg-black" />
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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

      {/* Testimonials Section */}
      <section className={`py-20 lg:py-32 ${isDarkMode ? "bg-neutral-950" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Depoimentos
            </Badge>
            <h2 className={`text-4xl lg:text-6xl font-bold mb-8 ${isDarkMode ? "text-white" : "text-black"}`}>
              O que nossos clientes dizem
            </h2>
            <Separator className="w-24 mx-auto mb-8 bg-black" />
            <p
              className={`text-xl leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}
            >
              A confiança dos nossos parceiros é o reflexo da qualidade e dedicação em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10"
                    : "border-0 shadow-lg"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex mb-6 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current transition-all duration-300 group-hover:scale-110"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 italic leading-relaxed flex-grow transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-100">
                    "{testimonial.content}"
                  </p>
                  <Separator className="mb-6 bg-gray-200 dark:bg-gray-800 group-hover:bg-black dark:group-hover:bg-gray-600 transition-colors duration-300" />
                  <div>
                    <p className="font-bold text-black dark:text-white transition-all duration-300 group-hover:tracking-wide">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
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
              className="mb-6 cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Entre em Contato
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Vamos construir algo incrível juntos</h2>
            <Separator className="w-24 mx-auto mb-8 bg-white" />
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
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 hover:bg-white/15"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 hover:bg-white/15"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 hover:bg-white/15 resize-none"
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
