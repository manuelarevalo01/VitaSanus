# VitaSanus Web

A modern, scalable Angular application built with TypeScript 5.9, implementing best practices for enterprise-level frontend development in the health technology sector.

**Now featuring**: Modern architecture with feature-first organization, Angular Signals + RxJS state management, and a complete design system with Tailwind CSS + PrimeNG components.

## Features

- **Modern Stack**: Angular 20 + TypeScript 5.9 + Angular CLI
- **State Management**: Angular Signals for reactive UI state, RxJS for complex async operations
- **Styling**: Tailwind CSS with custom design system
- **Components**: PrimeNG UI component library with customization
- **Architecture**: Feature-first, modular, and scalable
- **Type Safety**: Strict TypeScript with comprehensive type checking
- **Animations**: GSAP for advanced animations + Angular Animations
- **Performance**: Lazy loading, code splitting, optimized bundling
- **Interactive Elements**: Lottie-web for rich vector animations
- **MCP Integration**: Chrome DevTools MCP, Shadcn MCP, and Context7 MCP support

## Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm (or bun as alternative)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project
cd vitasanus-web

# Install dependencies
npm install

# Create environment file
cp src/environments/environment.example.ts src/environments/environment.ts

# Start development server
npm run dev
```

The application will be available at `http://localhost:4200`

## Available Scripts

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm run test          # Run unit tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting
```

## Project Structure

```
src/
├── app/
│   ├── core/           # Singleton services, guards, interceptors
│   │   ├── services/   # Core services (HTTP, Auth, etc.)
│   │   ├── guards/     # Route guards
│   │   ├── interceptors/ # HTTP interceptors
│   │   └── config/     # Core configuration
│   │
│   ├── features/       # Feature modules
│   │   └── auth/       # Example: Authentication feature
│   │       ├── components/ # Feature components
│   │       ├── services/   # Feature services
│   │       ├── guards/     # Feature guards
│   │       └── models/     # Feature models
│   │
│   ├── shared/         # Shared code across features
│   │   ├── components/ # Reusable components
│   │   │   ├── ui/         # Base UI (Button, Card, Input)
│   │   │   ├── layout/     # Layout components
│   │   │   └── feedback/   # Loading, Error components
│   │   ├── services/   # Shared services
│   │   ├── pipes/      # Custom pipes
│   │   ├── directives/ # Custom directives
│   │   ├── models/     # Shared TypeScript types
│   │   └── utils/      # Utility functions
│   │
│   ├── config/         # Application configuration
│   └── app.component.ts # Root component
│
├── assets/             # Static assets (images, fonts)
├── environments/       # Environment configurations
└── styles.scss         # Global styles
```

For detailed architecture documentation, see [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)

## Flujo MCP para Desarrollo Frontend

Esta sección adapta el enfoque del "Chrome DevTools MCP - Practical Guide" para el proyecto Angular de VitaSanus y añade Shadcn MCP y Context7 MCP.

### Chrome DevTools MCP

Uso principal: inspección del DOM, eventos, consola y red directamente desde tu cliente MCP (ideal para depurar formularios, HTTP requests, CORS, etc.).

- Instalación (Claude Code – local):
```bash
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```
- Reinicia tu cliente MCP y verifica `/mcp`.
- Herramientas disponibles típicas: `take_snapshot`, `list_console_messages`, `list_network_requests`, `navigate_page`, `click`, etc.

Ejemplo de flujo de depuración (adaptado al frontend):
1. Abrir tu página local (`http://localhost:4200`) con `navigate_page`.
2. Capturar el DOM con `take_snapshot` y simular interacciones con `click`.
3. Revisar errores con `list_console_messages`.
4. Analizar peticiones con `list_network_requests` y `get_network_request`.
5. Ajustar la UI o los servicios según hallazgos (query params, headers, CORS).

Referencia: `https://github.com/joefavergel/chrome-dev-tools-mcp-guide`

### Shadcn MCP (UI)

Uso principal: construir componentes y pantallas coherentes, acelerar la composición de UI y evitar inconsistencias creadas por agentes de IA.

- Recurso principal (tutorial): `https://www.youtube.com/watch?v=V8rGgwQ-VJ0`
- Integra conceptos de Shadcn UI en tu proyecto Angular con PrimeNG y usa el MCP de Shadcn para:
  - Explorar patrones de componentes disponibles y sus variantes.
  - Generar bloques de UI consistentes.
  - Iterar con un agente sobre diseño, estados y accesibilidad.

Sugerencias prácticas:
- Define un theme base (colores, tipografía) en `src/styles.scss` y `tailwind.config.js`.
- Crea componentes en `src/app/shared/components/ui` y estandariza botones, inputs, cards y modals.
- Usa el MCP de Shadcn para obtener demos y bloques quickly-editables según tu diseño.

### Context7 MCP (Docs actualizadas)

Uso principal: traer documentación y ejemplos de código al día para librerías específicas que use el frontend.

Opciones de instalación (Claude Code):
- Remoto:
```bash
claude mcp add --transport http context7 https://mcp.context7.com/mcp --header "CONTEXT7_API_KEY: YOUR_API_KEY"
```
- Local:
```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```

Uso recomendado:
- Solicita ejemplos de API y patrones actualizados para librerías (Angular Router, HttpClient, RxJS, PrimeNG, etc.).
- Mantén tu stack sincronizado con las versiones reales para evitar código obsoleto.

Referencia: `https://github.com/upstash/context7`

---

## Guía PRD Inicial (UI/UX)

Para redactar y mantener un `docs/development/initial-prd.md` enfocado en UI/UX, utiliza la metodología descrita en:
- Video guía: `https://www.youtube.com/watch?v=YKJLpgXTxCo`

Recomendaciones de contenido:
- Objetivos de la interfaz y usuarios clave.
- Flujos principales (mapa de navegación, estados vacíos, errores y loading).
- Principios de accesibilidad (focus, teclado, contraste, ARIA).
- Sistema de diseño (grid, spacing, tokens, componentes base).
- Métricas y criterios de calidad (tiempos de interacción, conversión, tarea completada).

Ubicación recomendada: `docs/development/initial-prd.md`.

---

## Agente UI/UX

Un agente especializado puede acelerar investigaciones, wireframes y validaciones de accesibilidad.

- Plantilla del agente UI/UX: `https://www.aitmpl.com/component/agent/ui-ux-designer`
- Instalación local (Claude Code Templates):
```bash
npx claude-code-templates@latest --agent=development-team/ui-ux-designer --yes
```
- Creación de agente global:
```bash
npx claude-code-templates@latest --create-agent development-team/ui-ux-designer
```
- Uso posterior:
```bash
ui-ux-designer "tu prompt aquí"
```

Sugerencias de prompts:
- "Analiza accesibilidad del layout principal y sugiere mejoras (ARIA, focus)."
- "Genera wireframe para la vista de Dashboard con componentes PrimeNG y estados de carga."
- "Propón lineamientos de microcopy para formularios de pacientes."

---

## Desarrollo Local

- Iniciar dev server:
```bash
npm run dev
```
- Compilar producción:
```bash
npm run build
```
- Ejecutar con modo watch:
```bash
npm run watch
```

## Pruebas y Calidad

- Ejecutar pruebas:
```bash
npm test
```
- Ejecutar con cobertura:
```bash
npm run test:coverage
```
- Lint:
```bash
npm run lint
npm run lint:fix
```
- Formato:
```bash
npm run format
npm run format:check
```

## Tecnologías Principales

- **Angular 20**: Framework principal
- **TypeScript 5.9**: Lenguaje de programación con tipos estáticos
- **RxJS**: Programación reactiva
- **Angular Signals**: Estado reactivo nativo
- **Tailwind CSS**: Framework de utilidades CSS
- **PrimeNG**: Biblioteca de componentes UI
- **GSAP**: Animaciones avanzadas
- **Lottie-web**: Animaciones vectoriales

## Estado del Proyecto

### Completado
- Configuración inicial del proyecto Angular 20
- Estructura de carpetas feature-first
- Configuración de Tailwind CSS
- Instalación de PrimeNG, GSAP, y Lottie-web
- Configuración de ESLint y Prettier
- TypeScript en modo estricto
- Scripts de desarrollo configurados

### Por Implementar
- Componentes base de UI
- Sistema de autenticación
- Dashboard principal
- Funcionalidades específicas de salud
- Integración con backend
- Testing comprehensivo
- Documentación de componentes

## Contribuir

Las contribuciones son bienvenidas. Por favor, sigue las guías de estilo y calidad, mantén consistencia de UI con el sistema de diseño y considera añadir casos de prueba para nuevos componentes.

## Licencia

Consulta el archivo `LICENSE` en la raíz del proyecto.

## Referencias

- Chrome DevTools MCP – Guía práctica: `https://github.com/joefavergel/chrome-dev-tools-mcp-guide`
- Shadcn MCP – Tutorial: `https://www.youtube.com/watch?v=V8rGgwQ-VJ0`
- Context7 MCP: `https://github.com/upstash/context7`
- Guía PRD UI/UX: `https://www.youtube.com/watch?v=YKJLpgXTxCo`
- Agente UI/UX (Claude Code Templates): `https://www.aitmpl.com/component/agent/ui-ux-designer`
- Angular Documentation: `https://angular.dev`
- PrimeNG Documentation: `https://primeng.org`
- Tailwind CSS: `https://tailwindcss.com`
- GSAP: `https://greensock.com/gsap/`
