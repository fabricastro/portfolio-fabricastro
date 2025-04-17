'use client'

import { useEffect, useState } from 'react'

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!scrolled) {
        return (
            <nav className="fixed top-5 inset-x-0 z-20 flex justify-center transition-all duration-300">
                <ul className="flex gap-6 px-6 py-3 rounded-lg text-white font-medium text-sm md:text-base transition-all duration-300 bg-transparent">
                    {[
                        { href: '#experiencia', label: 'Experiencia' },
                        { href: '#proyectos', label: 'Proyectos' },
                        { href: '#sobremi', label: 'Sobre mí' },
                        { href: '#contacto', label: 'Contacto' },
                    ].map(({ href, label }) => (
                        <li key={href} className="relative group">
                            <a
                                href={href}
                                className="transition-colors duration-200 group-hover:text-green-500"
                            >
                                {label}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }

    return (
        <nav className="fixed top-5 inset-x-0 z-20 flex justify-center transition-all duration-300">
            <span className="relative inline-flex overflow-hidden rounded-lg p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#0f766e_50%,#22d3ee_100%)]" />
                <ul className="relative z-10 flex gap-6 px-6 py-3 rounded-lg text-white font-medium text-sm md:text-base backdrop-blur-3xl bg-[rgba(0,0,0,0.8)] shadow-lg transition-all duration-300">
                    {[
                        { href: '#experiencia', label: 'Experiencia' },
                        { href: '#proyectos', label: 'Proyectos' },
                        { href: '#sobremi', label: 'Sobre mí' },
                        { href: '#contacto', label: 'Contacto' },
                    ].map(({ href, label }) => (
                        <li key={href} className="relative group">
                            <a
                                href={href}
                                className="transition-colors duration-200 group-hover:text-green-500"
                            >
                                {label}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                            </a>
                        </li>
                    ))}
                </ul>
            </span>
        </nav>
    )
}
