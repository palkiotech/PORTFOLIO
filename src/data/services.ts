export interface ServicePackage {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  techStack: string[];
  timeline: string;
  featured: boolean;
}

export const servicesData: ServicePackage[] = [
  {
    id: "web-high-performance",
    badge: "Plataformas Web B2B",
    title: "Desarrollo Web & Landing Pages de Alta Conversión",
    subtitle: "Páginas corporativas ultrarrápidas (<0.8s), optimizadas para buscadores y diseñadas para capturar clientes.",
    description: "Desarrollamos la presencia digital de tu empresa con arquitectura de islas moderna (Astro 5 + Tailwind). Cero bloatware de WordPress, tiempos de carga instantáneos en móviles, SEO técnico avanzado y llamadas a la acción preparadas para disparar contactos calificados.",
    idealFor: "Empresas de servicios, consultoras, clínicas, constructoras y marcas que pierden clientes por tener páginas web lentas o anticuadas.",
    deliverables: [
      "Sitio web corporativo o Landing Page en Astro con 100/100 en Google Lighthouse",
      "Diseño responsivo adaptado a dispositivos móviles, tablets y pantallas 4K",
      "Formularios inteligentes conectados directamente con WhatsApp y correo corporativo",
      "Optimización SEO semántica para posicionamiento en Google y redes sociales",
      "Alojamiento en redes perimetrales globales (Edge CDN) con certificado SSL vitalicio"
    ],
    techStack: ["Astro 5", "Tailwind CSS", "TypeScript", "Edge CDN", "Vercel / Cloudflare"],
    timeline: "1 a 2 Semanas",
    featured: false
  },
  {
    id: "ai-whatsapp-agents",
    badge: "Inteligencia Artificial Aplicada",
    title: "Agentes Autónomos de IA & Ventas en WhatsApp 24/7",
    subtitle: "Asistentes conversacionales inteligentes que atienden, perfilan clientes y cierran ventas de día y de noche.",
    description: "Implementamos agentes inteligentes que atienden a tus prospectos en el canal donde ya están: WhatsApp. Respaldados por modelos LLM con instrucciones comerciales defensivas, simulación de escritura humana para evitar bloqueos y sincronización automática de contactos calificados con tu CRM o Google Sheets.",
    idealFor: "Negocios que reciben decenas de mensajes al día y pierden ventas los fines de semana, noches o por tardar más de 10 minutos en responder.",
    deliverables: [
      "Agente conversacional autónomo entrenado con el catálogo y preguntas frecuentes de tu negocio",
      "Conexión con Evolution API (Docker propio sin costos por mensaje) o Meta WhatsApp Cloud API oficial",
      "Algoritmo de simulación de cadencia humana ('escribiendo...') y guardrails defensivos antialucinación",
      "Sincronización de leads capturados en tiempo real hacia Google Sheets, CRM o base de datos",
      "Despliegue en contenedor Docker privado con respaldo persistente de sesiones"
    ],
    techStack: ["Google Gemini / OpenAI", "Node.js (ESM)", "Docker", "Evolution API / Meta Cloud", "Google Sheets API"],
    timeline: "2 a 3 Semanas",
    featured: true
  },
  {
    id: "mini-crm-systems",
    badge: "Sistemas & Operaciones",
    title: "Mini-CRM, Paneles de Gestión & Catálogos Ultrarrápidos",
    subtitle: "Paneles administrativos a medida, visualización de ventas tipo Kanban y modernización de catálogos masivos.",
    description: "Transformamos hojas de cálculo desordenadas y procesos manuales en aplicaciones web privadas de alto rendimiento. Te entregamos un panel de control intuitivo para gestionar prospectos en columnas Kanban, buscar productos entre miles de referencias en milisegundos y despachar pedidos por WhatsApp.",
    idealFor: "Pymes, farmacias, comercializadoras y negocios en crecimiento que ya no caben en Excel y necesitan orden en su equipo comercial.",
    deliverables: [
      "Panel web privado (Dashboard administrativo) con autenticación segura y roles",
      "Pipeline tipo Kanban interactivo para mover prospectos de 'Nuevo' a 'Cotizado' y 'Vendido'",
      "Buscador de productos instantáneo (<50ms) con capacidad para catálogos de más de 10,000 referencias",
      "Botón de despacho de órdenes formateadas directo a WhatsApp o impresoras de mostrador",
      "Base de datos relacional (PostgreSQL / SQLite B-Tree) con copias de seguridad automáticas"
    ],
    techStack: ["React / Vite", "TypeScript", "PostgreSQL / SQLite WAL", "Tailwind CSS", "Docker"],
    timeline: "2 a 4 Semanas",
    featured: true
  },
  {
    id: "web-automation-apis",
    badge: "Ingeniería de Automatización",
    title: "Automatización Web, Conectores de APIs & Extensiones",
    subtitle: "Microservicios en la nube y extensiones de navegador que eliminan horas de tareas repetitivas en tu equipo.",
    description: "Desarrollamos software de supervisión de eventos en tiempo real, conectores de APIs oficiales (redes sociales, pasarelas de pago, bases de datos gubernamentales) y extensiones de navegador (Manifest V3) que automatizan la recolección y sincronización de datos sin costo de servidores.",
    idealFor: "Agencias, departamentos de operaciones y equipos que pierden horas diarias copiando datos o esperando cambios de estado en portales web.",
    deliverables: [
      "Workers automatizados en Python o Node.js para procesamiento por lotes o calendarización",
      "Extensiones de Google Chrome personalizadas para automatizar flujos de trabajo en plataformas web",
      "Integración de pasarelas de pago, facturación electrónica o sincronización de redes sociales",
      "Monitoreo desatendido con alertas sonoras, de escritorio y correos prioritarios",
      "Manual de operación y despliegue autónomo supervisado"
    ],
    techStack: ["Python (Flask / Schedule)", "Chrome Extensions MV3", "REST APIs", "OAuth 2.0 PKCE", "Task Daemons"],
    timeline: "1 a 3 Semanas",
    featured: false
  },
  {
    id: "mobile-apps-development",
    badge: "Desarrollo Móvil iOS & Android",
    title: "Desarrollo de Aplicaciones Móviles Nativas & Híbridas",
    subtitle: "Apps móviles fluidas a 60 FPS con arquitectura offline-first, geolocalización, sensores IoT y notificaciones push.",
    description: "Diseñamos y programamos aplicaciones móviles de alto rendimiento para iOS y Android utilizando React Native y Flutter. Conectadas a APIs en tiempo real, con persistencia de datos local (SQLite / WatermelonDB) para operar sin cobertura de internet, lectura de sensores (GPS, clima, biometría, Bluetooth) y listas para ser publicadas en Google Play Store y Apple App Store.",
    idealFor: "Empresas con equipos en campo, plataformas de monitoreo, logística, agro-tecnología, retail móvil y startups que requieren una presencia nativa en los bolsillos de sus clientes.",
    deliverables: [
      "Aplicación móvil compilada para iOS (iPhone) y Android con rendimiento nativo a 60 FPS",
      "Arquitectura Offline-First con sincronización en segundo plano al recuperar conexión",
      "Integración de hardware: Geolocalización GPS, cámara, escáner QR, Bluetooth y biometría",
      "Sistema de notificaciones push segmentadas y alertas críticas en tiempo real",
      "Gestión completa de despliegue y homologación en Apple App Store y Google Play Store"
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "SQLite Offline", "Firebase Cloud Messaging", "Fastlane"],
    timeline: "3 a 6 Semanas",
    featured: true
  },
  {
    id: "nfc-qr-smart-solutions",
    badge: "PalkioTag™ Phygital Hardware",
    title: "PalkioTag™: Stands One-Tap Google Review 5★ & Tarjetas Inteligentes NFC",
    subtitle: "Multiplica tus reseñas de 5 estrellas en Google Maps y digitaliza tu presencia física en un solo toque con hardware inteligente NFC y códigos QR.",
    description: "Diseñamos, programamos y producimos la línea PalkioTag™ de hardware inteligente NFC y códigos QR dinámicos para empresas y profesionales. Desde stands acrílicos de mostrador con sistema One-Tap Review para multiplicar tus calificaciones de 5 estrellas en Google Maps, hasta tarjetas en PVC con doble propósito (chip NFC al frente y código QR dinámico al reverso), 100% personalizables para lo que se quiera sin necesidad de apps para quien las escanea.",
    idealFor: "Restaurantes, hoteles, clínicas, inmobiliarias, consultores, profesionales independientes, tiendas físicas, eventos corporativos y marcas que buscan proyectar modernidad y capturar clientes al instante en el punto de contacto físico.",
    deliverables: [
      "Tarjetas inteligentes NFC en PVC con doble propósito (NFC al frente + QR al reverso) y 100% personalizables a lo que se quiera (vCard, redes, catálogo, pagos o acceso)",
      "Stands acrílicos y placas inteligentes de mostrador con chip NFC + QR dinámico de alta resolución",
      "Sistema One-Tap Google Review: tus clientes dejan calificación 5 estrellas acercando su teléfono al stand",
      "Panel de control web para Códigos QR Dinámicos 100% personalizables para menús de restaurantes, cartas digitales o redes sociales (Instagram, TikTok, WhatsApp)",
      "Tags, stickers y pulseras NFC de alta durabilidad para inventarios, Wi-Fi de cortesía y control de acceso",
      "Métricas de interacción y analítica de escaneos en tiempo real (dispositivos, horarios y ubicaciones)"
    ],
    techStack: ["Chips NTAG213 / NTAG215 / NTAG216", "Códigos QR Vectoriales Dinámicos", "Plataforma vCard & Micro-landing", "Redirecciones Cloud en Edge", "Impresión & Acabados Personalizados"],
    timeline: "3 a 7 Días Hábiles",
    featured: true
  }
];
