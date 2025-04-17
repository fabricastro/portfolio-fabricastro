'use client'

import { Mail, Phone, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export const Contact = () => {
    return (
        <section id="contacto" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Contáctame
            </motion.h2>

            <motion.div
                className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Email */}
                <a
                    href="mailto:fabricastrook@gmail.com"
                    className="flex items-center gap-3 hover:text-green-400 transition"
                >
                    <Mail className="w-5 h-5" />
                    fabricastrook@gmail.com
                </a>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/5492644412511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-400 transition"
                >
                    <Phone className="w-5 h-5" />
                    +54 9 54 2644 412 2511
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/fabricio-castrodev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-400 transition"
                >
                    <Linkedin className="w-5 h-5" />
                    /in/fabricastrodev
                </a>
            </motion.div>
        </section>
    )
}
