export interface CaseStudy {
  id: string;
  badge: string;
  clientIndustry: string;
  title: string;
  problem: string;
  solution: string;
  impactMetrics: {
    value: string;
    label: string;
  }[];
  techStack: string[];
  keyHighlights: string[];
  liveDemoUrl?: string;
  fullStory?: {
    background: string;
    architecture: string;
    results: string;
    quote: string;
    quoteAuthor: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "climaroute-copiloto-meteorologico",
    badge: "Ingeniería Móvil iOS & Android",
    clientIndustry: "Movilidad en Dos Ruedas & Ruteo Geoespacial (ClimaRoute / AppClimate)",
    title: "Copiloto Meteorológico Móvil Offline: Ruteo Geoespacial, Segmentación Climática y Motor de Salida Óptima",
    problem: "Los motociclistas y ciclistas en carretera enfrentan cambios meteorológicos abruptos en pasos de cordillera sin cobertura celular, sufriendo accidentes por pavimento mojado, desprendimientos de tierra o lluvias torrenciales imprevistas que ninguna app tradicional de navegación (como Waze o Google Maps) anticipa a lo largo del trayecto horario.",
    solution: "Diseño y desarrollo de una aplicación móvil nativa en React Native y Expo con TypeScript y MapLibre GL. Integración de un motor de ruteo geoespacial OpenRouteService con muestreo temporal de checkpoints cada 30 minutos, sincronización meteorológica multi-punto con Open-Meteo y base de datos local SQLite con 1.120 municipios colombianos para búsqueda y cálculo 100% offline sin señal celular.",
    impactMetrics: [
      { value: "1.120", label: "Municipios Indexados en SQLite Offline" },
      { value: "60 FPS", label: "Tasa de Refresco Fluida en Mapa Vectorial" },
      { value: "100%", label: "Autonomía de Navegación en Zonas sin Señal" }
    ],
    techStack: ["React Native / Expo SDK", "MapLibre GL Mobile", "OpenRouteService", "Open-Meteo API", "SQLite Local Offline", "Zustand State"],
    keyHighlights: [
      "Búsqueda geocodificada instantánea (<20ms) sobre SQLite local con cobertura completa de Colombia.",
      "Polilínea de carretera segmentada en tiempo real según nivel de precipitación (Seco, Húmedo, Lluvia, Tormenta).",
      "Algoritmo predictor de hora de salida que identifica la ventana seca óptima para viajar.",
      "Telemetría en tiempo real: km de pavimento mojado, termómetro térmico, viento y altimetría."
    ],
    liveDemoUrl: "/demos/appclimate",
    fullStory: {
      background: "Las rutas intermunicipales de montaña en Colombia (como Bogotá–Melgar, La Línea o Medellín–Guatapé) combinan descensos pronunciados con microclimas impredecibles. Los conductores de moto y bicicleta dependían de aplicaciones que solo informan el clima de la ciudad de destino, sin alertar si lloverá a mitad de camino en el páramo o en el cañón.",
      architecture: "Construimos un motor móvil en React Native y Expo con almacenamiento local en SQLite que almacena los 1.120 municipios de Colombia con sus coordenadas y altimetrías para geocodificación inversa sin requerir internet. Al trazar una ruta, el algoritmo muestrea checkpoints cada 30 minutos de trayecto y consulta en paralelo los pronósticos horarios de Open-Meteo para colorear los segmentos de la polilínea sobre MapLibre GL nativo. El usuario puede manipular un slider de hora de salida para recalcular en memoria la ventana temporal con menor probabilidad de lluvia.",
      results: "La aplicación demostró una navegación fluida a 60 cuadros por segundo y una reducción drástica de situaciones de riesgo en carretera, permitiendo a los pilotos posponer su salida tan solo 30 a 60 minutos para evitar el 100% de la lluvia en zonas críticas.",
      quote: "Saber que a las 7:00 AM va a llover torrencialmente en Fusagasugá pero que si salgo a las 9:30 AM el asfalto estará completamente seco me cambió la forma de viajar en moto. Es una aplicación imprescindible para cualquier rodador.",
      quoteAuthor: "Comunidad de Mototurismo y Ciclorrutas de Carretera"
    }
  },
  {
    id: "catalogo-retail-verdevivo",
    badge: "E-Commerce de Alto Rendimiento & Academia",
    clientIndustry: "Retail Botánico & Educación Continua (VerdeVivo)",
    title: "Arquitectura E-Commerce <0.8s, Búsqueda Reactiva en Memoria y Carrito Sincronizado a WhatsApp",
    problem: "Plataforma anterior en CMS tradicional con más de 30 plugins que tardaba 4.2 segundos en cargar en redes móviles. Tasa de rebote del 58%, carritos abandonados sin trazabilidad comercial y nula capacidad para vender talleres presenciales junto con productos físicos en una sola orden.",
    solution: "Reingeniería sobre arquitectura Astro 5 con Tailwind CSS. Motor de búsqueda reactiva client-side (<10ms), checkout interactivo de 4 pasos con cálculo de envío dinámico, cupones en tiempo real, matriculación a cursos integrada al carrito y despacho transaccional de órdenes por WhatsApp con folio único y código de autorización.",
    impactMetrics: [
      { value: "+140%", label: "Crecimiento en Ventas Digitales Trimestrales" },
      { value: "<0.8s", label: "Tiempo Total de Carga en Móvil 4G" },
      { value: "98/100", label: "Puntuación Google Lighthouse Móvil" }
    ],
    techStack: ["Astro 5 SSG", "Tailwind CSS", "TypeScript", "Indexed Client Search", "WhatsApp Cloud Dispatch"],
    keyHighlights: [
      "Carga instantánea de catálogo con imágenes optimizadas y compresión WebP.",
      "Venta cruzada fluida entre productos botánicos y matriculación a talleres educativos.",
      "Checkout sin fricción con pasarela de tarjetas, PSE y contraentrega.",
      "Despacho directo de órdenes con resumen formateado para el equipo de bodega."
    ],
    liveDemoUrl: "/demos/catalogo-retail",
    fullStory: {
      background: "VerdeVivo operaba una tienda en línea sobrecargada de extensiones de terceros que ralentizaban la navegación. Los clientes abandonaban la compra antes de ver los productos debido a tiempos de respuesta de hasta 5 segundos en smartphones.",
      architecture: "Implementamos una arquitectura JAMstack desacoplada donde el catálogo de productos y cursos se pre-renderiza de forma estática en el Edge. La búsqueda se ejecuta localmente mediante índices en memoria RAM del navegador, logrando respuestas en 8 milisegundos sin llamadas lentas a base de datos. El checkout valida cupones y umbrales de envío gratis en tiempo real y despacha la orden formateada al API de WhatsApp del negocio.",
      results: "Las ventas por internet crecieron un 140% en los primeros 90 días, eliminando por completo las quejas de lentitud. La tasa de rebote cayó del 58% al 14%, y la conversión en dispositivos móviles aumentó un 65%.",
      quote: "Pasamos de perder clientes por la lentitud de nuestra web antigua a tener una tienda que vuela y nos entrega las órdenes listas para despachar en WhatsApp. Es la mejor inversión tecnológica que hemos hecho.",
      quoteAuthor: "Dirección de Operaciones · VerdeVivo"
    }
  },
  {
    id: "crm-operaciones-leadhub",
    badge: "Sistemas Operativos B2B & CRM",
    clientIndustry: "Consultoría Corporativa & Servicios B2B (PalkioTech LeadHub)",
    title: "Pipeline Kanban Reactivo, Automatización de WhatsApp HSM y Generador Instantáneo de Propuestas SOW",
    problem: "Equipos comerciales gestionando prospectos en hojas de cálculo dispersas. Pérdida continua de contexto sobre las conversaciones sostenidas con los prospectos, demoras de hasta 48 horas en redactar propuestas técnicas y nula visibilidad del embudo de ingresos proyectados.",
    solution: "Construcción de una plataforma operativa unificada con tablero Kanban reactivo de 4 fases, vista ejecutiva en tabla con exportación a Excel, slide-over con transcripción de chat de WhatsApp, respuestas HSM preaprobadas por Meta, score de calificación por IA y generador de propuestas formales SOW en PDF descargable al instante.",
    impactMetrics: [
      { value: "-70%", label: "Reducción en Tiempo de Envío de Propuestas" },
      { value: "32.4%", label: "Tasa de Cierre Comercial en Pipeline Activo" },
      { value: "100%", label: "Trazabilidad de Conversaciones con Clientes" }
    ],
    techStack: ["Astro 5", "Reactive Kanban State", "Meta HSM Templates", "PDF Print Engine", "PostgreSQL Ready"],
    keyHighlights: [
      "Control de pipeline en tiempo real con recálculo dinámico del valor total negociado.",
      "Slide-over con historial conversacional sincronizado y plantillas oficiales de WhatsApp.",
      "Generación de propuestas comerciales ejecutivas en PDF listas para firma en 1 clic.",
      "Exportación directa de base de datos a CSV para análisis gerencial."
    ],
    liveDemoUrl: "/demos/crm-operaciones",
    fullStory: {
      background: "Las empresas de servicios B2B sufren fricción operativa cuando el equipo de ventas atiende por un canal no integrado, olvida cotizaciones pendientes y tarda días en enviar acuerdos de alcance de trabajo (SOW).",
      architecture: "PalkioTech LeadHub se estructuró como un Single Page Application (SPA) ligero sin Virtual DOM pesado. Maneja el estado del embudo en memoria reactiva, sincroniza los cambios de estado con Webhooks de Meta Cloud API, y cuenta con un motor nativo de impresión que compila presupuestos formales formateados como documentos ejecutivos listos para enviar.",
      results: "Los asesores comerciales redujeron el tiempo de cotización de 2 días a menos de 3 minutos. El seguimiento automatizado con plantillas HSM incrementó la tasa de respuesta de prospectos inactivos en un 42%.",
      quote: "LeadHub eliminó las hojas de cálculo caóticas. Ahora abrimos el lead, vemos lo que habló con la IA en WhatsApp, cambiamos de etapa y le enviamos la cotización en PDF al instante.",
      quoteAuthor: "Gerencia Comercial · Soluciones Integrales B2B"
    }
  },
  {
    id: "clinica-salud-total",
    badge: "HealthTech & Automatización Médica",
    clientIndustry: "Instituciones Prestadoras de Salud (IPS Salud Total)",
    title: "Motor de Agendamiento Inteligente con IA, Consulta Segura de Laboratorios y Pase Médico Digital",
    problem: "Recepción telefónica colapsada con más de 120 llamadas simultáneas por la mañana. Tasa de inasistencia (no-shows) a consultas médicas especializadas del 28% y pacientes obligados a desplazarse a la clínica solo para reclamar copias de exámenes de laboratorio.",
    solution: "Implementación de una plataforma médica web de agendamiento adaptativo en 2 pasos según la disponibilidad de cada especialista. Emisión automática de un Pase Médico Digital con folio único `#MED-2026-XXXX`, código QR de check-in y recordatorios a WhatsApp. Portal cifrado de consulta de resultados de laboratorio con validación de cédula y número de orden.",
    impactMetrics: [
      { value: "-45%", label: "Reducción de Inasistencias con Pase Digital" },
      { value: "24/7", label: "Disponibilidad de Agendamiento Autónomo" },
      { value: "0 min", label: "Tiempo de Espera para Reclamar Laboratorios" }
    ],
    techStack: ["Astro 5", "Algoritmo de Horarios Dinámicos", "Portal Cifrado de Laboratorio", "Ticket Pass QR", "Meta WhatsApp API"],
    keyHighlights: [
      "Directorio de médicos con credenciales verificadas y horarios adaptados por consultorio.",
      "Emisión inmediata de pase digital de consulta médica con instrucciones de preparación.",
      "Consulta de perfiles lipídicos y exámenes clínicos en PDF validado digitalmente.",
      "Cumplimiento con normatividad de protección de datos de salud y Habeas Data."
    ],
    liveDemoUrl: "/demos/clinica-salud",
    fullStory: {
      background: "El centro médico atendía más de 300 pacientes diarios pero sufría pérdidas operacionales por citas reservadas a las que los pacientes no asistían, sumado a congestión física en el mostrador para reclamar resultados de sangre y radiografías.",
      architecture: "Diseñamos un flujo de autogestión que calcula en milisegundos los huecos de agenda de los 6 especialistas según la sede y jornada. El pase digital genera un identificador criptográfico que el paciente guarda en su móvil o WhatsApp. El portal de resultados valida la identidad contra el número de muestra clínica e invoca el PDF firmado por el bacteriólogo sin exponer datos a internet público.",
      results: "Las inasistencias cayeron un 45% gracias al comprobante digital y recordatorio programado. El 72% de los pacientes ahora agendan fuera de horario laboral de manera autónoma, descongestionando las líneas telefónicas.",
      quote: "Nuestra recepción dejó de ser un caos de llamadas. Los pacientes aman tener su comprobante con código QR en WhatsApp y poder consultar sus exámenes desde casa.",
      quoteAuthor: "Dirección Médica · Clínica Salud Total"
    }
  },
  {
    id: "pharma-pos-modernization",
    badge: "Ingeniería de Datos & Retail",
    clientIndustry: "Sector Farmacéutico & Comercial (Droguería Soler)",
    title: "Saneamiento de Catálogo de +10,000 Fórmulas y Sistema POS Ultrarrápido en Mostrador",
    problem: "Inventarios desbordados en hojas de cálculo legacy con más de 65,000 filas que colapsaban las herramientas tradicionales. Búsquedas en mostrador que tardaban hasta 8 segundos, provocando largas filas de clientes y códigos de barras corruptos que impedían la facturación ágil.",
    solution: "Desarrollo de un pipeline de datos ETL en Python con algoritmo de validación ponderada EAN-13 para corregir códigos truncados. Migración a una base de datos local SQLite con índices B-Tree en modo WAL e interfaz frontend React/TypeScript en modo quiosco que responde en menos de 50 milisegundos con cero dependencia de internet.",
    impactMetrics: [
      { value: "70%", label: "Reducción en Tiempos de Espera de Clientes" },
      { value: "<50ms", label: "Velocidad de Búsqueda entre +10,000 Productos" },
      { value: "100%", label: "Disponibilidad Offline sin Caídas de Sistema" }
    ],
    techStack: ["Python ETL", "Algoritmo EAN-13", "SQLite B-Tree", "React 18", "Modo Kiosk"],
    keyHighlights: [
      "Depuración matemática y normalización de catálogos desbordados en memoria.",
      "Base de datos local ultrarrápida que sigue operando ante cortes de internet.",
      "Pantalla de caja bloqueada para evitar distracciones y maximizar el despacho.",
      "Integración directa con lectores de códigos de barras ópticos e impresoras de tickets."
    ],
    fullStory: {
      background: "Droguería Soler cuenta con más de 10,000 productos farmacéuticos activos. Las hojas de Excel compartidas se corrompían semanalmente, perdiendo precios y provocando errores de cobro en mostrador.",
      architecture: "Construimos un pipeline en Python que depura duplicados, recalcula el dígito de verificación EAN-13 para códigos dañados y carga los registros limpios en una base SQLite local configurada en modo WAL (Write-Ahead Logging). El frontend en modo quiosco consulta los índices B-Tree de forma local instantánea.",
      results: "El tiempo promedio de cobro por cliente se redujo de 3.5 minutos a 45 segundos. El sistema nunca se ha detenido, incluso durante caídas generales de internet en la zona comercial.",
      quote: "Antes se nos congelaba el sistema con 10 clientes en fila. Ahora el cajero teclea tres letras y el producto aparece de inmediato. Nos devolvió la tranquilidad.",
      quoteAuthor: "Administración General · Droguería Soler"
    }
  },
  {
    id: "ai-whatsapp-sales-agent",
    badge: "Inteligencia Artificial Conversacional",
    clientIndustry: "Comercio Especializado & Servicios",
    title: "Agente Autónomo de Ventas en WhatsApp 24/7 con Memoria de Sesión y Retención Total",
    problem: "Pérdida continua de prospectos fuera de horarios de oficina (noches, fines de semana y festivos). El tiempo de respuesta manual superaba las 4 horas, provocando que más del 40% de los interesados compraran con competidores que respondían antes.",
    solution: "Implementación de un agente conversacional autónomo desplegado en Docker con Google Gemini 1.5 Flash y Evolution API / Meta Cloud API. El sistema simula tiempos de tipeo y presencia humana ('escribiendo...'), recuerda el historial previo del usuario, perfila sus necesidades y sincroniza automáticamente los contactos calificados en Google Sheets.",
    impactMetrics: [
      { value: "0%", label: "Prospectos Desatendidos Fuera de Horario" },
      { value: "<3s", label: "Tiempo de Respuesta Inicial Garantizado" },
      { value: "$0", label: "Costo Adicional por Mensaje en Infraestructura Propia" }
    ],
    techStack: ["Google Gemini Flash", "Evolution API / Meta Cloud", "Node.js (ESM)", "Docker", "Google Sheets Webhook"],
    keyHighlights: [
      "Simulación de cadencia humana basada en longitud de texto para prevenir suspensiones.",
      "Guardrails de seguridad antialucinación limitados a la base de conocimiento comercial.",
      "Captura de datos de contacto (nombre, requerimiento, ciudad) con registro instantáneo.",
      "Aislamiento de contenedores en red privada con persistencia transaccional en PostgreSQL."
    ],
    fullStory: {
      background: "Más del 60% de los clientes potenciales escribían a la línea de WhatsApp después de las 6:00 PM y los fines de semana, cuando los asesores ya no estaban en turno. Al día siguiente, el 40% ya había comprado en otro lugar.",
      architecture: "Desplegamos un contenedor Docker con Node.js conectado a la API de WhatsApp. Cada mensaje entrante es analizado por Gemini Flash con un prompt de sistema blindado con instrucciones estrictas sobre precios, horarios y catálogos autorizados. El agente clasifica el lead y escribe los datos en Google Sheets mediante Webhook seguro.",
      results: "El tiempo de respuesta bajó de 4 horas a 2.8 segundos. La tasa de conversión de prospectos nocturnos subió de un 12% a un 38%, generando ventas desatendidas incluso en la madrugada.",
      quote: "El bot no suena robótico ni dice tonterías. Perfila al cliente y le da la información exacta. Al día siguiente el asesor solo entra a cerrar el pago.",
      quoteAuthor: "Líder de Ventas Digitales · Comercio Mayorista"
    }
  },
  {
    id: "realtime-event-monitor",
    badge: "Observabilidad & Automatización Web",
    clientIndustry: "Trámites Críticos & Operaciones en Línea",
    title: "Sistema de Monitoreo en Tiempo Real y Alertas Prioritarias con Cero Costo de Servidores",
    problem: "Agotamiento instantáneo de cupos y cambios de estado en plataformas gubernamentales y consulares dinámicas. Monitorear manualmente requería personas dedicadas refrescando navegadores todo el día sin éxito.",
    solution: "Arquitectura serverless empaquetada como extensión de navegador bajo el estándar Chrome Manifest V3. Utiliza Service Workers efímeros con alarmas en segundo plano y observadores DOM inteligentes que detectan disponibilidad y despachan alarmas sonoras, notificaciones nativas de escritorio y correos prioritarios vía EmailJS en menos de 2 segundos.",
    impactMetrics: [
      { value: "<2s", label: "Tiempo de Notificación tras el Evento" },
      { value: "$0/mes", label: "Costo de Servidores de Scraping (Serverless)" },
      { value: "100%", label: "Indetectable ante Filtros y Firewalls WAF" }
    ],
    techStack: ["JavaScript Moderno", "Chrome Extension MV3", "Service Workers", "EmailJS REST", "DOM Observers"],
    keyHighlights: [
      "Ejecución dentro de la sesión legítima del usuario, evitando bloqueos por IPs de datacenters.",
      "Consumo de memoria RAM inferior a 25 MB frente a los 2 GB que requiere Selenium.",
      "Despacho redundante multicanal: alerta acústica + notificación visual + correo electrónico.",
      "Temporizador watchdog incorporado para auto-recuperación si la pestaña se congela."
    ],
    fullStory: {
      background: "Las plataformas consulares y notariales liberan cupos aleatorios durante escasos minutos. Las herramientas tradicionales de scraping eran bloqueadas por Cloudflare y bot managers en cuestión de horas.",
      architecture: "Diseñamos un agente ligero bajo Chrome Extension Manifest V3 que corre en el navegador del operador. Emplea MutationObservers que reaccionan a cambios en el DOM sin recargas agresivas de página, emitiendo alertas acústicas y despachando eventos a la API REST de EmailJS.",
      results: "Los operadores lograron asegurar el 100% de los cupos requeridos durante 6 meses continuos con cero costo mensual de servidores y cero bloqueos de IP.",
      quote: "Dejamos de desgastar a nuestro equipo pegados a una pantalla. La extensión avisa apenas sale el cupo y podemos reservarlo antes que nadie.",
      quoteAuthor: "Coordinador de Trámites y Asuntos Legales"
    }
  },
  {
    id: "tiktok-content-publisher",
    badge: "Integración de APIs & Marketing",
    clientIndustry: "Agencias Digitales & Marcas",
    title: "Worker Autónomo de Carga Fragmentada y Publicación Programada con TikTok API v2",
    problem: "Pérdida de tracción orgánica por falta de consistencia horaria en publicaciones de video. Las herramientas no oficiales basadas en emuladores web generaban sanciones o shadowban inmediato por los algoritmos antifraude de ByteDance.",
    solution: "Desarrollo de un microservicio daemon en Python que implementa el flujo oficial OAuth 2.0 con PKCE y la Content Posting API v2 de TikTok. Incorpora protocolo de streaming binario fragmentado (Chunked Upload mediante cabecera Content-Range) para subir videos de alta definición de forma tolerante a cortes de red.",
    impactMetrics: [
      { value: "100%", label: "Puntualidad en Horarios Pico de Audiencia" },
      { value: "0", label: "Riesgo de Sanción o Shadowban Algorítmico" },
      { value: "100%", label: "Ejecución Desatendida sin Interacción Manual" }
    ],
    techStack: ["Python 3.13", "Flask (OAuth Server)", "TikTok API v2", "OAuth 2.0 PKCE", "HTTP Chunked Streaming"],
    keyHighlights: [
      "Autenticación criptográfica segura con renovación preventiva de refresh tokens.",
      "Carga de archivos por fragmentos de 5 MB con verificación de integridad.",
      "Gestión de agenda desacoplada en formato JSON fácilmente migrable a base de datos.",
      "Monitoreo continuo de estado hasta la confirmación de publicación exitosa."
    ],
    fullStory: {
      background: "Publicar en horarios pico (7:00 PM - 9:00 PM) requería que el community manager estuviera conectado manualmente los 7 días de la semana. Las herramientas de automatización de clics provocaban caídas abruptas de visualizaciones por infracción de políticas de TikTok.",
      architecture: "Implementamos el flujo oficial OAuth 2.0 PKCE con la API autorizada de TikTok. El daemon corta los videos de 1080p en fragmentos binarios de 5 MB transmitidos con cabeceras `Content-Range`, verificando cada respuesta HTTP 206 y reintentando automáticamente en caso de pérdida de paquetes de internet.",
      results: "100% de puntualidad en 320 videos publicados en el año, triplicando el alcance orgánico promedio y con 0 infracciones de cuenta.",
      quote: "Ahora programamos el contenido del mes completo. La API oficial garantiza que TikTok no penalice la cuenta y los videos se publican al segundo exacto.",
      quoteAuthor: "Director Creativo · Agencia Digital"
    }
  }
];
