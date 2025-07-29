'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link href="#home">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 group cursor-pointer">
              <Image
                src="/images/logo-vertium-dark.png"
                alt="Vertium Co."
                width={32}
                height={32}
                className="size-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <span className="text-xl font-bold text-white transition-all duration-300 group-hover:tracking-wider">
                Vertium Co.
              </span>
            </div>
          </Link>
          <p className="text-center text-gray-400 transition-colors duration-300 hover:text-gray-300 md:text-right">
            © {new Date().getFullYear()} Vertium Co. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 