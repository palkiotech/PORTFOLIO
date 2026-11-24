export interface KanbanLead {
  id: string;
  name: string;
  company: string;
  service: string;
  channel: "WhatsApp" | "Web Form" | "Meta Cloud";
  estimatedValue: string;
  stage: "nuevo" | "contactado" | "propuesta" | "cerrado";
  date: string;
}

export const initialKanbanLeads: KanbanLead[] = [
  {
    id: "lead-01",
    name: "Dr. Carlos Mendoza",
    company: "Clínica Odontológica Integral",
    service: "Web + Agendamiento con IA",
    channel: "WhatsApp",
    estimatedValue: "$1,850 USD",
    stage: "nuevo",
    date: "Hace 12 min"
  },
  {
    id: "lead-02",
    name: "Mariana Restrepo",
    company: "Boutique & Deco Hogar",
    service: "Catálogo Rápido + Carrito WhatsApp",
    channel: "Web Form",
    estimatedValue: "$1,200 USD",
    stage: "contactado",
    date: "Hace 2 horas"
  },
  {
    id: "lead-03",
    name: "Ing. Roberto Salazar",
    company: "Distribuidora Farmacéutica del Valle",
    service: "Modernización POS + Pipeline ETL",
    channel: "WhatsApp",
    estimatedValue: "$3,400 USD",
    stage: "propuesta",
    date: "Ayer"
  },
  {
    id: "lead-04",
    name: "Camila Duarte",
    company: "Agencia de Marketing Digital Nova",
    service: "Worker Automatización de APIs",
    channel: "Meta Cloud",
    estimatedValue: "$1,500 USD",
    stage: "cerrado",
    date: "Esta semana"
  }
];

export interface CatalogProduct {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  badge?: string;
}

export const sampleCatalog: CatalogProduct[] = [
  { id: "p1", sku: "FARM-8421", name: "Amoxicilina + Ácido Clavulánico 875mg", category: "Antibióticos", price: 18.5, stock: 45, badge: "Alta Demanda" },
  { id: "p2", sku: "FARM-1092", name: "Ibuprofeno Suspensión 100mg/5ml", category: "Analgésicos", price: 8.2, stock: 120 },
  { id: "p3", sku: "FARM-3310", name: "Vitamina C + Zinc Efervescente 1000mg", category: "Suplementos", price: 12.0, stock: 80, badge: "Más Vendido" },
  { id: "p4", sku: "FARM-9941", name: "Omeprazol Cápsulas 20mg Caja x 28", category: "Gastroenterología", price: 14.5, stock: 65 },
  { id: "p5", sku: "FARM-5120", name: "Suero de Rehidratación Oral Electrolitos", category: "Hidratación", price: 4.8, stock: 210 },
  { id: "p6", sku: "FARM-7729", name: "Loratadina Antialérgico 10mg x 10", category: "Antihistamínicos", price: 6.5, stock: 95 }
];

export interface ChatScenario {
  id: string;
  name: string;
  icon: string;
  context: string;
  initialMessage: string;
  suggestedQuestions: string[];
  responses: Record<string, string>;
}

export const chatScenarios: ChatScenario[] = [
  {
    id: "clinic",
    name: "Clínica & Salud",
    icon: "stethoscope",
    context: "Agente entrenado para agendar citas médicas, explicar tratamientos y responder disponibilidad.",
    initialMessage: "¡Hola! Bienvenido a Clínica Salud Total. Soy el asistente inteligente de atención. ¿En qué podemos ayudarte hoy? (Puedes agendar una cita o consultar disponibilidad médica).",
    suggestedQuestions: [
      "¿Tienen citas disponibles para esta semana?",
      "¿Qué horarios manejan y dónde están ubicados?",
      "Quiero agendar una consulta de valoración"
    ],
    responses: {
      "citas": "Tenemos disponibilidad para consulta general y odontología este jueves a las 10:00 AM y viernes a las 3:30 PM. ¿Te gustaría apartar uno de estos horarios con tu nombre y teléfono?",
      "horarios": "Atendemos de Lunes a Sábado de 7:30 AM a 7:00 PM en nuestra sede central. Sin embargo, nuestro sistema y canal de WhatsApp están disponibles las 24 horas para agendar tu espacio.",
      "agendar": "¡Con gusto! Para registrar tu turno en nuestro sistema en tiempo real, indícame por favor: 1. Tu nombre completo, 2. Especialidad requerida, 3. Día de tu preferencia."
    }
  },
  {
    id: "retail",
    name: "Comercio & Retail",
    icon: "shopping-bag",
    context: "Agente enfocado en responder dudas de productos, verificar existencias y enviar enlace de compra.",
    initialMessage: "¡Hola! Gracias por escribir a Estudio Botánico & Decoración. ¿Buscas alguna planta, maceta o asesoría para ambientar tu espacio hoy?",
    suggestedQuestions: [
      "¿Tienen plantas para interiores con poca luz?",
      "¿Cómo es el proceso de entrega a domicilio?",
      "Quiero ver su catálogo de promociones"
    ],
    responses: {
      "plantas": "¡Excelente elección! Para interiores con luz moderada te recomendamos la Sansevieria (Espada de San Jorge) o el Ficus Lyrata en maceta cerámica. Ambas son purificadoras y requieren riego cada 10 días. ¿Deseas ver una foto y precio?",
      "entrega": "Realizamos despachos urbanos con entregas el mismo día para pedidos confirmados antes de las 2:00 PM, empacados con protección especializada para plantas vivas.",
      "catálogo": "Puedes explorar nuestro catálogo digital completo con búsqueda instantánea aquí: [Ver Catálogo PalkioTech Retail]. Si seleccionas tus productos, tu pedido nos llegará de inmediato por este mismo chat."
    }
  },
  {
    id: "b2b",
    name: "Servicios B2B & Consultoría",
    icon: "briefcase",
    context: "Agente de calificación comercial para agendar diagnósticos técnicos con tomadores de decisiones.",
    initialMessage: "Hola, te habla el asistente de consultoría tecnológica de PalkioTech. ¿En qué tipo de solución está interesado tu equipo para este trimestre?",
    suggestedQuestions: [
      "¿Cuánto tiempo toma desarrollar una web corporativa?",
      "¿Cómo se integra el bot con nuestro WhatsApp actual?",
      "Quiero agendar un diagnóstico técnico con su equipo"
    ],
    responses: {
      "tiempo": "Nuestros proyectos web con arquitectura de islas (Astro 5) se completan en un promedio de 1 a 2 semanas, siguiendo nuestra metodología de 5 fases con entregables semanales y garantía de velocidad <0.8s.",
      "bot": "Podemos conectarlo mediante la API oficial de Meta Cloud (con soporte para sello verde) o mediante Evolution API sobre contenedores Docker en tus propios servidores, sin cobrarte comisiones por mensaje recibido.",
      "diagnóstico": "¡Perfecto! Un ingeniero senior de nuestro equipo revisará tus requerimientos. ¿Qué día de esta semana te queda más cómodo para una videollamada de 20 minutos (mañana o tarde)?"
    }
  }
];
