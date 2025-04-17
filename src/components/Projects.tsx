'use client'

import { Github, ExternalLink, Rocket } from "lucide-react"
import { motion } from "framer-motion"

type Project = {
    name: string
    description: string
    tech: string[]
    image: string
    link?: string
    repo?: string
}

const projects: Project[] = [
    {
        name: "PediloApp SaaS",
        description:
            "Creador de catálogos online con subdominios personalizados y panel de administración.",
        tech: ["Next.js", "Tailwind", "Prisma", "MySQL", "SaaS"],
        image: "/assets/pediloapp.png",
        link: "https://pediloapp.com",
        repo: "https://github.com/fabricastro/catalog-creator",
    },
    {
        name: "Palta CRM SaaS",
        description:
            "Sistema de Gestion de Clientes y Proyectos con funcionalidades avanzadas para pymes.",
        tech: ["React", "Nest", "Vercel", "CRM", "SaaS"],
        image: "/assets/palta.png",
        link: "https://www.palta.cloud/signup",
        repo: "https://github.com/TechnodevsORG/palta-front",
    },
    {
        name: "DevTest - Test de Perfil IT",
        description:
            "Formulario tipo stepper para realizar test de perfil IT.",
        tech: ["Next.js", "TypeScript", "Vercel", "MySQL"],
        image: "/assets/devtest.png",
        repo: "https://github.com/fabriciocs/devtest",
        link: "https://devtest-nine.vercel.app/",
    },
    {
        name: "Lía de Barbara - Landing Page",	
        description:
            "Landing Page para la sommelier Lía de Barbara, con un diseño atractivo y moderno.",
        tech: ["Astro", "Tailwind", "TypeScript"],
        image: "/assets/lia.png",
        repo: "https://github.com/fabricastro/LandingLia",
        link: "https://liadebarbara.com",
    }
]

export const Projects = () => {
    return (
        <section id="proyectos" className="px-6 max-w-4xl mx-auto py-20">
            <h2 className="text-3xl flex items-center gap-2 md:text-4xl font-bold text-left mb-12">
                <Rocket size={34} /> Proyectos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[rgba(255,255,255,0.05)] cursor-pointer border border-gray-700 rounded-xl overflow-hidden shadow-md backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
                    >
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-green-300 mb-2">
                                {project.name}
                            </h3>

                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-gray-800 text-green-400 px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-300 hover:underline text-sm flex items-center gap-1"
                                    >
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                )}
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:underline text-sm flex items-center gap-1"
                                    >
                                        <Github size={16} /> Código
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
