export interface MethodologyPhase {
  step: string;
  badge: string;
  title: string;
  duration: string;
  summary: string;
  activities: string[];
  deliverable: {
    title: string;
    description: string;
    format: string;
  };
  clientBenefit: string;
  icon: string;
}

export interface ScopeChecklistItem {
  category: string;
  items: string[];
}

export const methodologyPhases: MethodologyPhase[] = [
  {
    step: "01",
    badge: "Fase de Diagnóstico",
    title: "Descubrimiento, Requerimientos & Alcance Estricto",
    duration: "3 a 5 Días Laborales",
    summary: "Analizamos a fondo los cuellos de botella de tu negocio y definimos con precisión matemática qué se construirá, evitando sobrecostos y retrasos.",
    activities: [
      "Sesión de inmersión técnica con los líderes de tu empresa para identificar necesidades críticas.",
      "Definición de KPIs cuantitativos de éxito (tiempos de carga, tasa de conversión, disponibilidad).",
      "Delimitación estricta de alcance (In-Scope vs. Out-of-Scope) para garantizar fechas exactas de entrega.",
      "Cálculo de arquitectura requerida y presupuesto cerrado sin cargos sorpresa posteriores."
    ],
    deliverable: {
      title: "Documento de Alcance y Especificación Técnica (SOW)",
      description: "Contrato de ingeniería con requerimientos funcionales, cronograma por hitos y criterios de aceptación firmados.",
      format: "PDF Ejecutivo + Acta de Inicio"
    },
    clientBenefit: "Claridad total desde el primer día: sabes exactamente qué recibirás, cuándo se entregará y el valor de cada módulo.",
    icon: "clipboard"
  },
  {
    step: "02",
    badge: "Fase de Diseño",
    title: "Arquitectura de Software & Prototipado Interactivo",
    duration: "1 Semana",
    summary: "Diseñamos la estructura técnica, los flujos de datos y la interfaz gráfica interactiva antes de programar para validar la experiencia.",
    activities: [
      "Selección del stack tecnológico óptimo según el caso de uso (Astro, React, Node.js, Python, SQLite/PostgreSQL).",
      "Modelado de datos relacionales con índices optimizados y diseño de contratos de APIs REST/Webhooks.",
      "Definición de guardrails defensivos para agentes de IA (prevención de alucinaciones y limitación de contexto).",
      "Creación de prototipos visuales interactivos en alta fidelidad para validar la navegación y conversión."
    ],
    deliverable: {
      title: "Prototipo Interactivo Aprobado & Plano de Arquitectura",
      description: "Navegación visual interactiva validada por tu equipo y diagrama de flujo de datos de servicios.",
      format: "Enlace Interactivo + Diagrama de Arquitectura"
    },
    clientBenefit: "Validación sin riesgos: pruebas visualmente cómo funcionará tu sistema antes de que se escriba una sola línea de código.",
    icon: "layers"
  },
  {
    step: "03",
    badge: "Fase de Construcción",
    title: "Desarrollo Modular Ágil & Pruebas Continuas (QA)",
    duration: "1 a 3 Semanas (por Sprints)",
    summary: "Construimos tu plataforma mediante componentes desacoplados de alto rendimiento, reportando avances funcionales cada semana.",
    activities: [
      "Desarrollo frontend con arquitectura de componentes reutilizables y carga de cero scripts innecesarios.",
      "Integración de lógica de negocio en backend, agentes de IA, pasarelas de pago y sincronización de APIs.",
      "Pruebas continuas de estrés (carga de peticiones, validación de webhooks y compatibilidad con dispositivos móviles).",
      "Revisión de avances semanales en videollamada para alinear ajustes operacionales en tiempo real."
    ],
    deliverable: {
      title: "Acceso a Servidor Privado de Pruebas (Staging Environment)",
      description: "Una URL privada protegida donde tu equipo puede interactuar en vivo con el sistema y datos de prueba.",
      format: "URL Privada Staging + Demo Semanal"
    },
    clientBenefit: "Transparencia absoluta: ves tu sistema crecer semana a semana sin sorpresas al final del camino.",
    icon: "code"
  },
  {
    step: "04",
    badge: "Fase de Lanzamiento",
    title: "Despliegue a Producción, Hardening & Optimización",
    duration: "3 a 5 Días Laborales",
    summary: "Desplegamos la solución en servidores de producción de alta disponibilidad, asegurando máxima velocidad y blindaje de seguridad.",
    activities: [
      "Aprovisionamiento de servidores en la nube (Docker Compose o Edge CDN global) según los requerimientos del proyecto.",
      "Configuración de certificados de seguridad SSL/TLS automáticos y aislamiento criptográfico de llaves de entorno.",
      "Implementación de mecanismos de protección contra saturación (Rate Limiting y filtros antibot).",
      "Calibración de Core Web Vitals para garantizar tiempos de carga inferiores a 1 segundo en redes móviles 4G."
    ],
    deliverable: {
      title: "Puesta en Producción Oficial & Auditoría de Desempeño",
      description: "Sistema 100% activo en tu dominio corporativo con informe de velocidad y seguridad certificado.",
      format: "Sistema en Vivo + Certificado Lighthouse 95-100"
    },
    clientBenefit: "Puesta en marcha impecable: tu plataforma entra a competir en el mercado con velocidad instantánea y máxima protección.",
    icon: "rocket"
  },
  {
    step: "05",
    badge: "Fase de Entrega",
    title: "Capacitación Operativa, Entrega de Código & Garantía SLA",
    duration: "Soporte Continuo (30-60 Días de Cobertura)",
    summary: "Capacitamos a tu equipo, te entregamos la propiedad absoluta de todo el código fuente y respaldamos el sistema con garantía formal.",
    activities: [
      "Sesión de capacitación práctica grabada en video para que tu personal domine el uso de paneles y funciones.",
      "Transferencia de repositorios Git completos, credenciales maestras y documentación técnica de arquitectura.",
      "Activación del período de garantía SLA de 30 a 60 días para resolver cualquier anomalía operativa sin costo.",
      "Opción de planes de soporte preventivo, actualización de agentes de IA y nuevas funcionalidades bajo demanda."
    ],
    deliverable: {
      title: "Kit Enterprise de Cierre & Código Fuente Completo",
      description: "Repositorio privado transferido + Manual Técnico de Operación en PDF + Grabación de capacitación.",
      format: "Repositorio Git + Manual PDF + Soporte SLA Activo"
    },
    clientBenefit: "Independencia y tranquilidad: eres dueño al 100% de tu tecnología y cuentas con nuestro respaldo técnico permanente.",
    icon: "shield-check"
  }
];

export const scopeChecklist: ScopeChecklistItem[] = [
  {
    category: "Requerimientos Funcionales Esenciales",
    items: [
      "Definición del público objetivo y flujo del usuario (Customer Journey).",
      "Catálogo de funcionalidades prioritarias clasificadas por impacto (MoSCoW: Must, Should, Could).",
      "Canales de interacción (WhatsApp Oficial, Widget Web, Correo electrónico, Panel Administrativo).",
      "Lógica de validación de datos (reglas comerciales de descuentos, horarios y campos obligatorios)."
    ]
  },
  {
    category: "Criterios Técnicos de Aceptación",
    items: [
      "Tiempo de respuesta web garantizado: < 1.2 segundos en dispositivos móviles.",
      "Rendimiento Google Lighthouse garantizado: > 95/100 en Performance, SEO y Accesibilidad.",
      "Tolerancia a fallos: Respuestas asíncronas de webhooks con ACK < 100ms para evitar reintentos en bucle.",
      "Aislamiento criptográfico: Secretos y tokens protegidos en variables de entorno independientes."
    ]
  },
  {
    category: "Límites del Alcance (Scope Bounds)",
    items: [
      "Delimitación de cuántas pantallas o flujos incluye la entrega inicial.",
      "Definición del volumen de datos a migrar (ej: catálogos de hasta 10,000 registros).",
      "Política de cambios de alcance: Procedimiento ágil para incorporar nuevos requerimientos sin frenar el cronograma.",
      "Condiciones de soporte y cobertura de garantía post-despliegue."
    ]
  }
];
