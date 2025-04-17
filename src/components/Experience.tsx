'use client'

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

type ExperienceItem = {
    title: string
    company: string
    date: string
    description: string
}

const experiences: ExperienceItem[] = [
    {
        title: "Frontend Developer",
        company: "Gobierno Digital - Gobierno de San Juan",
        date: "Enero 2023 - Actualidad",
        description:
            "Desarrollo de interfaces modernas con React, Vue, Next.js, integración con APIs, diseño responsivo y optimización de performance. Stack: React, Tailwind, Docker.",
    },
    {
        title: "Desarrollador Full Stack",
        company: "Agencia Technodevs",
        date: "Marzo 2022 - Marzo 2025",
        description:
            "Construcción de sistemas internos para clientes. Participación en proyectos de e-commerce, diseño de bases de datos y despliegue en servidores Linux.",
    },
    {
        title: "Diseñador Web y Full Stack",
        company: "Tacu Sistemas",
        date: "Febrero 2024 - Febrero 2025",
        description:
            "Desarrollo y mantenimiento de sitios web y aplicaciones. Implementación de soluciones personalizadas para clientes, optimización de rendimiento y SEO. Creación de CRM para clientes.",
    },
]

export const Experience = () => {
    return (
        <section id="experiencia" className="px-6 max-w-4xl mx-auto">
            <motion.h2
                className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-left mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Briefcase size={34} /> Mi experiencia
            </motion.h2>

            <div className="relative pl-6">
                <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="absolute left-0 top-0 w-[2px] bg-gray-700"
                ></motion.div>

                <div className="space-y-10">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg" />
                            <div className="bg-[rgba(255,255,255,0.05)] border border-gray-700 p-6 rounded-lg backdrop-blur-md shadow-md">
                                <h3 className="text-xl font-semibold text-green-500">
                                    {exp.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-1">{exp.company}</p>
                                <p className="text-xs text-gray-500 italic mb-3">{exp.date}</p>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
