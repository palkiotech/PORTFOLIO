export interface TeamMember {
  role: string;
  specialty: string;
  focus: string;
  icon: string;
}

export interface CompanyData {
  name: string;
  brandTag: string;
  legalType: string;
  tagline: string;
  subheadline: string;
  description: string;
  email: string;
  contactEmail?: string;
  whatsappNumber: string; // Ej: "573XXXXXXXXX"
  phoneDisplay?: string;
  googleSheetsWebhookUrl?: string; // URL del Apps Script de Google Sheets para recibir citas
  meetingRoomUrl?: string; // Enlace permanente real de Google Meet (ej: https://meet.google.com/xxx-yyyy-zzz) o Zoom
  location: string;
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
  team: TeamMember[];
  coreValues: {
    title: string;
    description: string;
    badge: string;
  }[];
}

export const companyData: CompanyData = {
  name: "PalkioTech",
  brandTag: "PALKIOTECH",
  legalType: "Software Engineering & AI Solutions Studio",
  tagline: "Sistemas Web de Alto Rendimiento, Inteligencia Artificial & Automatización B2B",
  subheadline: "Desarrollamos la infraestructura digital que escala tu empresa: plataformas web que cargan en menos de un segundo, agentes de IA que atienden y venden 24/7 en WhatsApp, y sistemas operativos a medida libres de comisiones.",
  description: "En PalkioTech combinamos arquitectura de software de nivel industrial, ingeniería de datos y modelos de lenguaje de última generación para construir soluciones que transforman la operativa y rentabilidad de tu negocio.",
  email: "palkiotech@gmail.com",
  contactEmail: "palkiotech@gmail.com",
  whatsappNumber: "573132939656",
  phoneDisplay: "+57 313 293 9656",
  googleSheetsWebhookUrl: "https://script.google.com/macros/s/AKfycbwh3nRAavKWGubqdF66a7QMaERDIkwuqe-M8vmI8qHuCB41kNJbJtLzQVAUoaXbwM21Hw/exec",
  meetingRoomUrl: "https://meet.google.com/guy-guip-euv", // Enlace permanente oficial de Google Meet
  location: "Bogotá, Colombia · Cobertura Global (Remoto)",
  metrics: [
    {
      value: "<0.8s",
      label: "Velocidad de Carga",
      description: "Puntuación de 98-100 en Google Lighthouse para máxima conversión."
    },
    {
      value: "24/7",
      label: "Disponibilidad de Ventas",
      description: "Agentes autónomos de IA que atienden sin descanso ni pérdida de prospectos."
    },
    {
      value: "+10k",
      label: "Registros en Tiempo Real",
      description: "Consultas indexadas en bases de datos con respuestas en menos de 50ms."
    },
    {
      value: "100%",
      label: "Propiedad del Código",
      description: "Entrega total de repositorios sin ataduras ni costos de licencia ocultos."
    }
  ],
  team: [
    {
      role: "Dirección de Arquitectura & Cloud Infrastructure",
      specialty: "Sistemas Distribuidos & Edge Computing",
      focus: "Diseño de infraestructuras desacopladas en Docker, redes perimetrales globales (Edge CDN), escalabilidad y tolerancia a fallos.",
      icon: "cloud"
    },
    {
      role: "Ingeniería de Inteligencia Artificial & Automatizaciones",
      specialty: "Agentes Autónomos LLM & Protocolos de Mensajería",
      focus: "Modelos LLM (Gemini / OpenAI), RAG contextual, guardrails defensivos y gateways oficiales de WhatsApp Cloud API y Evolution API.",
      icon: "cpu"
    },
    {
      role: "Desarrollo Frontend & Experiencia de Usuario (UI/UX)",
      specialty: "Astro, React, TypeScript & Microinteracciones",
      focus: "Arquitectura de islas (Zero JavaScript residual), interfaces ágiles en modo quiosco y paneles de control intuitivos para operadores de negocio.",
      icon: "layout"
    },
    {
      role: "Ingeniería de Datos, Seguridad & Control de Calidad (QA)",
      specialty: "Pipelines ETL, Optimización SQL & Hardening",
      focus: "Saneamiento y normalización de inventarios masivos, bases de datos SQLite/PostgreSQL indexadas, auditoría y pruebas de estrés.",
      icon: "shield"
    },
    {
      role: "Ingeniería de Hardware Phygital, NFC & QR Dinámicos",
      specialty: "Microchips NTAG216, Acrílico & Enlaces en la Nube",
      focus: "Diseño, grabado e integración de stands acrílicos Google 5★, tarjetas PVC inteligentes y placas de mesa con chips NFC programados y códigos QR dinámicos redirigibles.",
      icon: "wifi"
    },
    {
      role: "Consultoría & Asesoría Financiera Estratégica",
      specialty: "Finanzas para Negocios, Costos & Viabilidad Comercial",
      focus: "Evaluación de rentabilidad, análisis de márgenes operativos, optimización de estructura de costos e inversión tecnológica para maximizar el retorno de capital en tu negocio.",
      icon: "trending-up"
    }
  ],
  coreValues: [
    {
      title: "Rendimiento sin Bloatware",
      description: "No usamos plantillas lentas ni plugins pesados que ralentizan tu web. Cada línea de código está optimizada para la máxima velocidad.",
      badge: "Velocidad Extrema"
    },
    {
      title: "Sistemas Desacoplados y Resilientes",
      description: "Arquitecturas que no se caen ante picos de tráfico ni generan bloqueos, con respaldo local y persistencia transaccional.",
      badge: "Alta Disponibilidad"
    },
    {
      title: "Protección Total de Propiedad Intelectual",
      description: "Tu software es tuyo. Entregamos repositorios limpios y documentados sin plataformas propietarias que secuestren tu negocio.",
      badge: "Libertad Absoluta"
    }
  ]
};
