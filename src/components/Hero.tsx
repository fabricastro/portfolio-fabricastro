'use client'

import { Button } from "./ui/Button"
import { Mail } from "lucide-react"
import { motion } from "framer-motion"

export const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center max-w-6xl md:h-[90vh] text-white gap-12 pt-30 pb-20 px-6 overflow-hidden">
            <motion.div
                className="md:w-1/2 flex flex-col items-start gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold tracking-tight">
                    Hola, soy Fabricio Castro
                </h1>

                <p className="text-xl font-bold tracking-tight max-w-xl text-gray-300">
                    +3 años de experiencia. <span className="text-green-500">Desarrollador de Software</span> de San Juan, Argentina 🇦🇷. Especializado en el desarrollo de aplicaciones web únicas.
                </p>

                <div className="flex items-center justify-start mt-2">
                    <Button
                        variant="green"
                        icon={<Mail />}
                        className="mr-4"
                        onClick={() => window.open("mailto:fabricastrook@gmail.com")}
                    >
                        Contactame
                    </Button>
                    <Button
                        variant="green2"
                        onClick={() => window.open("/assets/CV-FabricioCastro.pdf")}
                    >
                        Ver CV
                    </Button>
                </div>
            </motion.div>

            <motion.div
                className="md:w-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <img
                    src="/assets/yo.jpeg"
                    alt="Foto de Fabricio Castro"
                    className="rounded-full w-36 h-36 md:w-58 md:h-58 bg-blue-900 border-2 border-cyan-400 shadow-md"
                />

                <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                    <a href="https://www.linkedin.com/in/fabricio-castrodev/" target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#0f766e_50%,#22d3ee_100%)]" />
                        <div className="inline-flex items-center justify-center w-full px-4 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap z-10 relative">
                            Disponible para trabajar
                        </div>
                    </a>
                </span>
            </motion.div>
        </section>
    )
}
