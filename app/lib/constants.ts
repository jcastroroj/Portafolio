
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiLayers,
    FiDatabase,
    FiCpu,
    FiCode,
    FiAward,
    FiBarChart2,
    FiServer
} from 'react-icons/fi'

import {
    FaPython,
    FaFileExcel,
} from 'react-icons/fa'

// 🔹 NAV
export const navLinks = [
    { name: 'Inicio', href: 'home' },
    { name: 'Sobre mí', href: 'about' },
    { name: 'Proyectos', href: 'projects' },
    { name: 'Servicios', href: 'services' },
    { name: 'Contacto', href: 'contact' },
];

// 🔹 REDES
export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/jcastroroj', icon: FiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jorgeluiscastrorojas', icon: FiLinkedin },
    { name: 'Email', url: 'mailto:luisjcr.1801@gmail.com', icon: FiMail },
]

// 🔹 SKILLS (Enfocado en Datos y BI)
export const skills = [
    { name: 'SQL Server', icon: FiDatabase },
    { name: 'T-SQL', icon: FiDatabase },
    { name: 'SSIS (ETL)', icon: FiServer },
    { name: 'Power BI', icon: FiBarChart2 },
    { name: 'DAX & Modelado', icon: FiBarChart2 },
    { name: 'Excel Avanzado', icon: FaFileExcel },
    { name: 'Python', icon: FaPython },
]

// 🔹 PROYECTOS (Orientados a bases de datos y analítica)
export const projects = [
    {
        name: 'Analytics de Recontactabilidad y Volumetría por ANI',
        image: '/images/Dasboard_Recontacto_Volumetria.png',
        url: null,
        description: [
            '• El Reto: Falta de visibilidad y control sobre la recurrencia de llamadas (recontactos) y la intensidad por número de origen (ANI) o skill en la operación de contact center.',
            '• Acción: Procesamiento y modelado de un alto volumen de datos transaccionales (+128k comunicaciones y 81k ANIs únicos) para estructurar un dashboard interactivo en Power BI con métricas de velocidad a 1, 3, 7 y 30 días.',
            '• Resultado: Control analítico preciso de la relación entre intensidad y recontacto, permitiendo segmentar el rendimiento operativo por skill para la toma de decisiones gerenciales.'
        ],
        technologies: ['Power BI', 'SQL Server', 'T-SQL', 'DAX', 'Modelado de Datos'],
        githubUrl: null,
        liveUrl: '#'
    },
    {
        name: 'Executive Sales & Profit Dashboard',
        image: '/images/dashboard_Gerencial.png',
        url: null,
        description: 'Reporte gerencial interactivo de rendimiento financiero, ingresos globales, márgenes de ganancia y análisis de rentabilidad por producto y región.',
        technologies: ['Power BI', 'DAX Avanzado', 'Modelado Dimensional', 'KPIs','SQL Server'],
        githubUrl: null,
        liveUrl: '#'
    },
    {
        name: 'Dashboard Operativo de Contact Center',
        image: '/images/dashboard-contact-center.png',
        url: null,
        description: 'Panel de control analítico para la gestión y monitoreo de canales de atención (Telefonía, Chat, Redes Sociales, Mail y Outbound), optimizando niveles de servicio, TMO y satisfacción del cliente (CSAT).',
        technologies: ['Power BI', 'DAX', 'Modelado Dimensional', 'KPIs Operativos','SQL Server'],
        githubUrl: null,
        liveUrl: '#'
    },
    {
        name: 'Dashboard de Control Operativo - Redes Sociales',
        image: '/images/Dasboard_Control_Operativo_RedesSociales.png',
        url: null,
        description: 'Panel de control analítico enfocado en la gestión y monitoreo de la atención por canales digitales (Facebook e Instagram), optimizando niveles de servicio (SLA), tiempos de respuesta, volumetría de interacciones y calidad de servicio.',
        technologies: ['Power BI', 'DAX', 'Modelado Dimensional', 'KPIs Operativos', 'SQL Server'],
        githubUrl: null,
        liveUrl: '#'
    },
]


// 🔹 SERVICIOS (Enfocados en analítica y bases de datos)
export const services = [
    {
        title: 'Business Intelligence & Power BI',
        description: 'Creación de dashboards interactivos, modelos de datos optimizados y reportes gerenciales en Power BI mediante DAX.',
        icon: FiBarChart2
    },
    {
        title: 'Optimización de Bases de Datos',
        description: 'Diseño, modelado relacional, consultas avanzadas en T-SQL y optimización de rendimiento en SQL Server.',
        icon: FiDatabase
    },
    {
        title: 'Automatización de Procesos (ETL)',
        description: 'Construcción de flujos ETL robustos con SSIS y scripts en Python para la limpieza, transformación y carga masiva de datos.',
        icon: FiServer
    },
    {
        title: 'Análisis de Datos y Reporting',
        description: 'Procesamiento de grandes volúmenes de datos transaccionales para la detección de anomalías y apoyo en la toma de decisiones.',
        icon: FiCpu
    }
]


// 🔹 CERTIFICACIONES
export const certificates = [

    {
        name: 'Power BI Intermedio',
        issuer: 'Coordinación Académica (Jhon Velasque D.)',
        date: '20 de marzo del 2026',
        pdfUrl: '/certificates/CERTIFICADO - POWER BI INTERMEDIO.pdf',
        icon: FiAward
    },
    {
        name: 'Data Analytics Essentials',
        issuer: 'Instituto Superior SISE / Cisco Networking Academy',
        date: '02 Abr 2025',
        pdfUrl: '/certificates/CERTIFICADO - Fundamentos del análisis de datos.pdf',
        icon: FiAward
    },
    {
        name: 'PCAP: Programming Essentials in Python',
        issuer: 'Cisco Networking Academy / OpenEDG Python Institute',
        date: '5 Abr 2024',
        pdfUrl: '/certificates/CERTIFICADO - Fundamentos de programación en Python.pdf',
        icon: FiAward
    },
]
 


