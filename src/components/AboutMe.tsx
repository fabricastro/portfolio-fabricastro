'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { IdCard } from 'lucide-react'
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiPrisma,
    SiPostgresql,
    SiDocker,
    SiNodedotjs,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiVuedotjs,
} from 'react-icons/si'

const skills = [
    { label: 'JavaScript', icon: SiJavascript },
    { label: 'TypeScript', icon: SiTypescript },
    { label: 'Next.js', icon: SiNextdotjs },
    { label: 'React', icon: SiReact },
    { label: 'Vue.js', icon: SiVuedotjs },
    { label: 'Tailwind CSS', icon: SiTailwindcss },
    { label: 'Prisma', icon: SiPrisma },
    { label: 'PostgreSQL', icon: SiPostgresql },
    { label: 'Docker', icon: SiDocker },
    { label: 'Node.js', icon: SiNodedotjs },
    { label: 'PHP', icon: SiPhp },
    { label: 'MySQL', icon: SiMysql },
    { label: 'MongoDB', icon: SiMongodb },
]


export const AboutMe = () => {
    return (
        <section id="sobremi" className="px-6 max-w-4xl mx-auto">
            <motion.h2
                className="text-3xl flex items-center gap-2 md:text-4xl font-bold text-left mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <IdCard size={34} /> Sobre mí
            </motion.h2>

            <div className="flex flex-col md:flex-row items-center gap-10">
                <motion.div
                    className="md:w-[30%] rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/assets/fabripixar.png"
                        alt="Fabricio estilo Pixar"
                        width={256}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    className="flex-1 text-gray-300 space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg leading-relaxed">
                        Soy <span className="text-green-400 font-medium">Fabricio Castro</span>,
                        desarrollador frontend con enfoque en diseño minimalista, performance y experiencias web modernas.
                        Me encanta llevar ideas al código, construyendo interfaces que conecten con las personas.
                    </p>
                    <p className="text-base text-gray-400">
                        Trabajo con herramientas como <span className="text-green-400">React</span>,
                        <span className="text-green-400"> Next.js</span> y <span className="text-green-400">Tailwind</span>,
                        implementando animaciones, consumo de APIs y diseño adaptativo.
                    </p>
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {skills.map(({ label, icon: Icon }, i) => (
                            <span
                                key={i}
                                className="flex items-center gap-2 text-sm px-4 py-2 bg-[rgba(255,255,255,0.05)] select-none border border-gray-700 rounded-full text-green-300 hover:text-green-500 transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                                {label}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
