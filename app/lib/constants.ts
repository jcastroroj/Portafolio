
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
            "• Reto: Ineficiencia operativa por falta de visibilidad en +128k comunicaciones y su recurrencia.",
            "• Acción: Lógica en T-SQL para cálculo de reincidencias (1, 3, 7, 30 días) y modelado (copo de nieve) en Power BI con medidas DAX.",
            "• Resultado: Interfaz bajo patrón Z que agiliza la detección de fallas mediante el análisis preciso de recontactabilidad."
        ],
        technologies: ['Power BI', 'SQL Server', 'T-SQL', 'DAX', 'Modelado Dimensional'],
        githubUrl: null,
        liveUrl: '#'
    },
   {
        name: 'Executive Sales & Profit Dashboard',
        image: '/images/dashboard_Gerencial.png',
        url: null,
        description: [
            "• Reto: Dispersión de múltiples fuentes Excel impedía una visión consolidada de rentabilidad y márgenes financieros.",
            "• Acción: Procesamiento ETL en Power Query, modelado dimensional (copo de nieve) y medidas DAX avanzadas para KPIs financieros.",
            "• Resultado: Dashboard bajo patrón Z que automatiza el reporte y acelera la toma de decisiones mediante insights de rentabilidad y comparativas LY (Year-over-Year)."
        ],
        technologies: ['Power BI', 'DAX Avanzado', 'Modelado Dimensional', 'Power Query', 'Excel Avanzado'],
        githubUrl: null,
        liveUrl: '#'
    },
    {
        name: 'Dashboard Operativo de Contact Center',
        image: '/images/dashboard-contact-center.png',
        url: null,
        description: [
            "• Reto: Inexistencia de visibilidad omnicanal en volúmenes masivos (+1M de registros) para la gestión efectiva del SLA.",
            "• Acción: Procesamiento, limpieza y lógica avanzada en SQL Server (ETL) con modelado dimensional (copo de nieve)  y medidas DAX en Power BI.",
            "• Resultado: Centralización operativa de todos los canales (Telefonía, Chat, RRSS, Mail, Outbound) facilitando la toma de decisiones basada en KPIs críticos como SLA, TMO y TRAFICO."
        ],
        technologies: ['Power BI', 'SQL Server', 'T-SQL', 'Modelado Dimensional', 'KPIs Operativos'],
        githubUrl: null,
        liveUrl: '#'
    },
    {
        name: 'Dashboard de Control Operativo - Redes Sociales',
        image: '/images/Dasboard_Control_Operativo_RedesSociales.png',
        url: null,
        description: [
            "• Reto: Falta de visibilidad consolidada en la atención de canales escritos (Facebook e Instagram) por país.",
            "• Acción: Procesamiento y lógica en SQL Server, integrando modelado dimensional (copo de nieve) y medidas DAX en Power BI.",
            "• Resultado: Panel analítico bajo patrón Z que optimiza el monitoreo multi-país de SLAs, volumetría y calidad de atención."
        ],
        technologies: ['Power BI', 'SQL Server', 'T-SQL', 'DAX', 'Modelado Dimensional'],
        githubUrl: null,
        liveUrl: '#'
    },
    {
        title: "Proyecto Retail SQL Analytics",
        description: "Análisis integral de datos de retail utilizando consultas SQL avanzadas, modelado relacional y optimización de procesos de extracción para la toma de decisiones comerciales.",
        tags: ["SQL Server", "T-SQL", "Análisis de Datos", "ETL"],
        imageUrl: "/images/retail-analytics.png", 
        links: {
        github: "https://github.com/jcastroroj/Proyecto-Retail-SQL-Analytics",
        live: "" 
        }
    }   
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
 


