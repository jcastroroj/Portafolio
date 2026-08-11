
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
            "• El Reto: Falta de visibilidad y control sobre la recurrencia de llamadas y la intensidad por ANI o skill en la operación.",
            "• Acción: Modelado de +128k comunicaciones y 81k ANIs en Power BI con métricas de velocidad a 1, 3, 7 y 30 días.",
            "• Resultado: Control preciso de la relación intensidad-recontacto para segmentar el rendimiento operativo."
        ],
        technologies: ['Power BI', 'SQL Server', 'T-SQL', 'DAX', 'Modelado de Datos'],
        githubUrl: null,
        liveUrl: '#'
    },
    {
        name: 'Executive Sales & Profit Dashboard',
        image: '/images/dashboard_Gerencial.png',
        url: null,
        description: [
            "• El Reto: Dispersión de múltiples archivos Excel que impedía una visión consolidada del rendimiento financiero, márgenes de ganancia y rentabilidad por región y producto.",
            "• Acción: Integración y limpieza de múltiples fuentes Excel mediante técnicas de ETL en Power Query, modelado dimensional y desarrollo de medidas DAX avanzadas para KPIs financieros.",
            "• Resultado: Reporte gerencial de alto impacto que permite identificar al instante productos líderes en rentabilidad y tendencias de mercado, optimizando la toma de decisiones estratégicas."
        ],
        technologies: ['Power BI', 'DAX Avanzado', 'Modelado Dimensional', 'Excel Avanzado', 'Power Query'],
        githubUrl: null,
        liveUrl: '#'
    },
    {
        name: 'Dashboard Operativo de Contact Center',
        image: '/images/dashboard-contact-center.png',
        url: null,
        description: [
            "• El Reto: Inexistencia de visibilidad omnicanal en la atención al cliente, donde la dispersión de datos entre múltiples canales y el manejo de volúmenes masivos (+1M de registros) impedían una gestión efectiva del nivel de servicio y la calidad operativa.",
            "• Acción: Procesamiento, limpieza y estructuración de la lógica de negocio mediante consultas avanzadas en SQL Server, ejecutando el modelado dimensional y diseño visual en Power BI para integrar todos los puntos de contacto.",
            "• Resultado: Panel de control integral que centraliza la gestión y monitoreo de canales (Telefonía, Chat, RRSS, Mail y Outbound), optimizando KPIs críticos como SLA, TMO y CSAT mediante información procesada en tiempo real."
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
            "• El Reto: Carencia de visibilidad consolidada sobre la atención de canales escritos (Facebook e Instagram) gestionados desde diversos países, dificultando el seguimiento a los KPIs, SLAs y tiempos de respuesta en ventanas de 3 meses.",
            "• Acción: Procesamiento y limpieza lógica de los datos transaccionales en SQL Server, implementando un modelado dimensional optimizado y medidas DAX avanzadas en Power BI para la visualización del rendimiento.",
            "• Resultado: Creación de un panel de control analítico multi-país que permite monitorear con precisión la volumetría, niveles de servicio y calidad de atención por canal digital en un periodo determinado."
        ],
        technologies: ['Power BI', 'SQL Server', 'T-SQL', 'DAX', 'Modelado Dimensional'],
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
 


