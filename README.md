# PalkioTech — Plataforma Web Empresarial B2B

Plataforma corporativa desarrollada para **PalkioTech**, firma de ingeniería de software, arquitectura web de alta velocidad y soluciones de Inteligencia Artificial para empresas.

---

## 🚀 Arquitectura & Stack Tecnológico

- **Framework Web:** Astro 5 (Arquitectura de Islas · Zero JavaScript residual por defecto).
- **Estilos & Diseño:** Tailwind CSS 3.4 (Modo oscuro técnico, paleta Slate / Emerald / Cyan).
- **Tipado & Lógica:** TypeScript 5.x.
- **Rendimiento:** Optimizado para puntuaciones 95-100 en Google Lighthouse y tiempos de carga <0.8s en dispositivos móviles.

---

## 📂 Estructura del Proyecto

```
AI BUSINESS/
├── public/
│   └── favicon.svg                  # Isotipo oficial de PalkioTech
├── src/
│   ├── components/
│   │   ├── Navbar.astro             # Navegación con branding corporativo
│   │   ├── Hero.astro               # Propuesta de valor B2B y barra de métricas
│   │   ├── InteractiveDemos.astro   # Showroom de 4 demos en vivo (CRM, IA, Catálogo, ROI)
│   │   ├── MethodologySection.astro # Marco metodológico de 5 fases + Checklist de alcance
│   │   ├── ServicesSection.astro    # Servicios y paquetes empaquetados
│   │   ├── CaseStudiesSection.astro # Casos de éxito reales con impacto cuantitativo
│   │   ├── TeamSection.astro        # Equipo multidisciplinario de PalkioTech
│   │   ├── GuaranteesSection.astro  # Garantías SLA, código propio y cero dependencias
│   │   ├── FaqSection.astro         # Acordeón de preguntas frecuentes empresariales
│   │   ├── ContactSection.astro     # Formulario calificador con despacho a WhatsApp/Email
│   │   └── Footer.astro             # Pie de página corporativo
│   ├── data/
│   │   ├── company.ts               # Identidad, métricas, valores y roles del equipo
│   │   ├── methodology.ts           # Definición de las 5 fases, entregables y checklist
│   │   ├── services.ts              # Catálogo de servicios B2B
│   │   ├── caseStudies.ts           # Casos de éxito (Pharma POS, Bot WhatsApp, Monitor, TikTok)
│   │   └── demos.ts                 # Datos para las 4 demos interactivas
│   ├── layouts/
│   │   └── Layout.astro             # Plantilla HTML con SEO, OpenGraph y estilos globales
│   └── pages/
│       └── index.astro              # Ensamblado principal de la web
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🛠️ Comandos de Ejecución

Para iniciar el servidor de desarrollo local:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:4321`.

Para compilar la versión optimizada de producción:
```bash
npm run build
```

Para previsualizar la compilación de producción:
```bash
npm run preview
```

---

## ⚙️ Personalización Rápida de Datos Comerciales

1. **Número de WhatsApp de la Empresa:**
   - Abre `src/data/company.ts` y configura tu número comercial en `whatsappNumber` (ej: `"573001234567"`).
2. **Precios y Servicios:**
   - Modifica `src/data/services.ts` para ajustar los entregables o añadir nuevos paquetes.
3. **Casos de Estudio:**
   - Edita `src/data/caseStudies.ts` para incorporar nuevos clientes o métricas a medida que crezca tu cartera.
