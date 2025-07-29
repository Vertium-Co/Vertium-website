'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navItems = ['Home', 'Serviços', 'Processo', 'Sobre', 'Contato']

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? `bg-black/80 backdrop-blur-xl shadow-lg`
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="#home" onClick={(e) => handleLinkClick(e, '#home')}>
            <div className="group flex cursor-pointer items-center space-x-3">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/vertium-logo.png"
                  alt="Vertium Co."
                  width={40}
                  height={40}
                  className="size-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 lg:size-10"
                />
              </div>
              <span
                className={`text-xl font-bold text-white transition-all duration-300 group-hover:tracking-wider lg:text-2xl`}
              >
                Vertium Co.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('ç', 'c')}`}
                onClick={(e) => handleLinkClick(e, `#${item.toLowerCase().replace('ç', 'c')}`)}
                className={`group relative font-medium text-gray-300 transition-all duration-300 hover:text-white`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 bg-lime-accent transition-all duration-300 group-hover:w-full`}
                />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="group relative overflow-hidden md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative size-6">
              <Menu
                size={24}
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <X
                size={24}
                className={`absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-neutral-800 bg-neutral-950 py-4">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace('ç', 'c')}`}
                  className="mx-2 block rounded-lg px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-neutral-900 hover:text-white"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                  onClick={(e) => handleLinkClick(e, `#${item.toLowerCase().replace('ç', 'c')}`)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
} 