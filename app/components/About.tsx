'use client'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/app/lib/animations'
import { skills, certificates } from '@/app/lib/constants'
import { FiExternalLink } from 'react-icons/fi'

export default function About() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pb-20 pt-16"
            id="about"
        >
            {/* Encabezado */}
            <motion.div variants={textVariant()}>
                <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-2">
                    Conócemeee
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Sobre mí
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mb-10" />
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12">

                {/* Texto */}
                <motion.div
                    variants={fadeIn('right', 'spring', 0.1, 1)}
                    className="md:w-1/2 flex flex-col gap-4"
                >
                    <p className="text-slate-300 leading-relaxed">
                        Analista de Datos con sólida experiencia en la gestión, procesamiento y análisis de bases de datos transaccionales, 
                        automatización de flujos ETL y desarrollo de soluciones de Business Intelligence.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Trabajo con tecnologías como SQL Server (T-SQL avanzado, SSIS), Power BI, Excel avanzado y Python, transformando 
                        grandes volúmenes de datos en información estratégica para la toma de decisiones. 
                        
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Mi background incluye experiencia previa como Auditor de Fraude y Analista de Reporting, lo que me otorga un fuerte 
                        enfoque analítico en la detección de anomalías, control de calidad y optimización de procesos operativos.

                    </p>

                    {/* Info adicional */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <p className="text-xs text-slate-500 mb-1">Ubicación</p>
                            <p className="text-sm font-medium text-white">Lima - Perú</p>
                        </div>
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <p className="text-xs text-slate-500 mb-1">Disponibilidad</p>
                            <p className="text-sm font-medium text-emerald-400">Laboral / Proyectos</p>
                        </div>
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <p className="text-xs text-slate-500 mb-1">Enfoque</p>
                            <p className="text-sm font-medium text-white">Data & BI</p>
                        </div>
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <p className="text-xs text-slate-500 mb-1">Estado</p>
                            <p className="text-sm font-medium text-blue-400">Activo</p>
                        </div>
                    </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                    variants={fadeIn('left', 'spring', 0.1, 1)}
                    className="md:w-1/2"
                >
                    <h3 className="text-xl font-semibold mb-6 text-white">
                        Tecnologías y Herramientas
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-4 py-2.5 rounded-xl flex items-center gap-2.5 border border-slate-700/60 bg-slate-900/60 hover:border-blue-500/60 hover:bg-blue-500/5 transition-all duration-200 group"
                            >
                                <skill.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Barra de experiencia por área */}
                    <div className="mt-8 flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                            Áreas de enfoque
                        </h3>
                        {[
                            { label: 'Bases de Datos & SQL (T-SQL / SSIS)', pct: 90 },
                            { label: 'Business Intelligence (Power BI / DAX)', pct: 85 },
                            { label: 'Análisis de Datos y Automatización', pct: 85 },
                        ].map(({ label, pct }) => (
                            <div key={label}>
                                <div className="flex justify-between mb-1.5">
                                    <span className="text-sm text-slate-300">{label}</span>
                                    <span className="text-sm text-blue-400 font-medium">{pct}%</span>
                                </div>
                                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${pct}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Certificaciones */}
            <motion.div
                variants={fadeIn('up', 'spring', 0.2, 1)}
                className="mt-14"
            >
                <h3 className="text-xl font-semibold mb-1 text-amber-400">
                    Certificaciones
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                    Cursos y especializaciones que respaldan mi formación
                </p>

                <div className="flex flex-col gap-3">
                    {certificates.map((cert) => (
                        <a
                            key={cert.name}
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-200"
                        >
                            <div className="flex items-center gap-4 min-w-0">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                    <cert.icon className="w-5 h-5 text-amber-400" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-white truncate">
                                        {cert.name}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {cert.issuer} · {cert.date}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium text-slate-400 group-hover:text-amber-400 transition-colors">
                                Ver PDF
                                <FiExternalLink size={13} />
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    )
}