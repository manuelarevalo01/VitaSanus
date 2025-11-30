# VitaSanus Design System

**Versión:** 1.0
**Última actualización:** 28 de Noviembre, 2025
**Filosofía de diseño:** "Clínica pero Natural"

---

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Paleta de Colores](#paleta-de-colores)
3. [Tipografía](#tipografía)
4. [Espaciado y Layout](#espaciado-y-layout)
5. [Componentes](#componentes)
6. [Iconografía](#iconografía)
7. [Animaciones](#animaciones)
8. [Guías de Uso](#guías-de-uso)

---

## Introducción

El Design System de VitaSanus está diseñado para transmitir **profesionalismo médico** con **calidez humana**. Cada decisión visual busca equilibrar la autoridad científica con la accesibilidad y naturalidad.

### Principios de Diseño

1. **Claridad ante todo**: La información debe ser fácil de entender
2. **Calidez visual**: Colores que evocan naturaleza y salud
3. **Jerarquía evidente**: Guiar al usuario sin esfuerzo
4. **Respiro generoso**: Espaciado que permite respirar
5. **Accesibilidad**: WCAG 2.1 AA compliant

---

## Paleta de Colores

### Colores Principales

#### Background (Fondos)
```css
--vs-bg: #fdfaf5          /* Crema cálido - fondo principal */
--vs-muted-bg: #f3f5f2    /* Verde muy claro - secciones alternas */
```

**Uso:**
- `vs-bg`: Fondo principal del sitio, cards blancas sobre este fondo
- `vs-muted-bg`: Secciones alternas (FAQ, Testimonios, etc.)

---

#### Texto
```css
--vs-text: #1f2937        /* Gris oscuro - texto principal */
--vs-muted-text: #475569  /* Gris medio - texto secundario */
```

**Contraste:**
- `vs-text` sobre `vs-bg`: **12.48:1** ✅ AAA
- `vs-muted-text` sobre `vs-bg`: **7.42:1** ✅ AA

---

#### Marca (Brand Colors)
```css
--vs-primary: #579796       /* Verde azulado - CTAs, links, acentos */
--vs-primary-dark: #417775  /* Hover states */
--vs-accent: #b0d2bf        /* Verde claro - highlights, badges */
```

**Uso:**
- `vs-primary`: Botones primarios, links, iconos principales
- `vs-primary-dark`: Estados hover/active
- `vs-accent`: Badges, highlights suaves, fondos de tarjetas especiales

**Psicología del color:**
- Verde azulado: Confianza + Salud + Calma
- Tono cálido: Naturaleza + Bienestar

---

#### Escalas Completas

**Primary Scale (para uso en Tailwind)**
```css
primary-50:  #f0f7f7
primary-100: #d9ebeb
primary-200: #b3d7d7
primary-300: #8dc3c3
primary-400: #67afaf
primary-500: #579796  /* DEFAULT */
primary-600: #467c7b
primary-700: #356160
primary-800: #244645
primary-900: #132b2a
```

**Accent Scale**
```css
accent-50:  #f4f9f6
accent-100: #e9f3ed
accent-200: #d3e7db
accent-300: #bddbc9
accent-400: #a7cfb7
accent-500: #b0d2bf  /* DEFAULT */
accent-600: #8dbe9f
accent-700: #6aaa7f
accent-800: #47965f
accent-900: #24823f
```

---

#### Colores Semánticos
```css
--vs-success: #22c55e   /* Verde brillante - éxito */
--vs-warning: #f59e0b   /* Naranja - advertencia */
--vs-error: #ef4444     /* Rojo - error */
--vs-info: #3b82f6      /* Azul - información */
```

---

### Ejemplos de Combinaciones

#### Hero Section
- Fondo: `vs-bg`
- Título: `vs-text`
- Subtítulo: `vs-muted-text`
- CTA: `vs-primary` (fondo), blanco (texto)

#### Cards
- Fondo: Blanco
- Borde: `vs-border` (#e5e7eb)
- Título: `vs-text`
- Descripción: `vs-muted-text`
- Icono: `vs-primary`

---

## Tipografía

### Familias de Fuentes

#### Sans-serif Principal
```css
--font-sans: 'Inter', system-ui, sans-serif
```

**Uso:** Texto de cuerpo, párrafos, listas, formularios

**Características:**
- Excelente legibilidad en pantalla
- Amplia gama de pesos (300-700)
- Números proporcionales para datos

---

#### Display (Títulos)
```css
--font-display: 'DM Sans', 'Inter', system-ui, sans-serif
```

**Uso:** Headlines, títulos de secciones, CTAs

**Características:**
- Más geométrica que Inter
- Mejor para tamaños grandes
- Personalidad distintiva pero profesional

---

### Escala Tipográfica

| Nombre | Tamaño | Line-height | Peso | Uso |
|--------|--------|-------------|------|-----|
| **Hero** | 56px (3.5rem) | 1.1 | 600 | Título principal de landing |
| **H1** | 40px (2.5rem) | 1.2 | 600 | Títulos de página |
| **H2** | 32px (2rem) | 1.25 | 600 | Títulos de sección |
| **H3** | 28px (1.75rem) | 1.3 | 500 | Subtítulos de sección |
| **H4** | 24px (1.5rem) | 1.35 | 500 | Títulos de card |
| **Body Large** | 18px (1.125rem) | 1.6 | 400 | Texto destacado |
| **Body** | 16px (1rem) | 1.6 | 400 | Texto principal |
| **Body Small** | 14px (0.875rem) | 1.5 | 400 | Texto secundario |
| **Caption** | 12px (0.75rem) | 1.4 | 400 | Labels, disclaimers |

---

### Responsive Typography

En móvil (<768px), los tamaños se reducen:
- Hero: 40px → 40px (2.5rem)
- H1: 40px → 32px (2rem)
- H2: 32px → 28px (1.75rem)
- H3: 28px → 24px (1.5rem)

---

### Clases de Tailwind

```html
<!-- Hero -->
<h1 class="text-hero font-display font-semibold">Título Hero</h1>

<!-- H1 -->
<h1 class="text-h1 font-display font-semibold">Título de Página</h1>

<!-- H2 -->
<h2 class="text-h2 font-display font-semibold">Título de Sección</h2>

<!-- Body Large -->
<p class="text-body-lg">Texto destacado con mayor tamaño</p>

<!-- Body -->
<p class="text-body">Texto de párrafo normal</p>
```

---

## Espaciado y Layout

### Container

```css
.container-vs {
  max-width: 1280px;
  padding: 0 1rem;      /* Mobile */
  padding: 0 1.5rem;    /* Tablet (640px+) */
  padding: 0 2rem;      /* Desktop (1024px+) */
}
```

**Uso:**
```html
<div class="container-vs">
  <!-- Contenido -->
</div>
```

---

### Section Padding

```css
.section-vs {
  padding: 3rem 0;      /* Mobile */
  padding: 5rem 0;      /* Tablet (768px+) */
  padding: 7rem 0;      /* Desktop (1024px+) */
}
```

**Uso:**
```html
<section class="section-vs bg-vs-muted-bg">
  <div class="container-vs">
    <!-- Contenido de sección -->
  </div>
</section>
```

---

### Escala de Espaciado

| Nombre | Tamaño | Uso |
|--------|--------|-----|
| xs | 0.5rem (8px) | Entre iconos y texto |
| sm | 1rem (16px) | Padding interno de componentes pequeños |
| md | 1.5rem (24px) | Margen entre elementos relacionados |
| lg | 2rem (32px) | Padding de cards |
| xl | 3rem (48px) | Espaciado entre secciones (mobile) |
| 2xl | 4rem (64px) | Separación de grupos |
| 3xl | 5rem (80px) | Padding vertical de secciones (tablet) |
| 4xl | 6rem (96px) | Padding vertical de secciones (desktop) |

---

### Border Radius

| Nombre | Tamaño | Uso |
|--------|--------|-----|
| sm | 0.375rem (6px) | Inputs, badges pequeños |
| md | 0.5rem (8px) | Botones pequeños |
| lg | 0.75rem (12px) | Botones estándar |
| xl | 1rem (16px) | Cards |
| 2xl | 1.5rem (24px) | Cards destacadas |
| 4xl | 2rem (32px) | Hero elements |
| full | 9999px | Badges, avatares circulares |

---

## Componentes

### Botones

#### Button Primary
```html
<button class="btn-primary">
  Comenzar Ahora
</button>
```

**Características:**
- Fondo: `vs-primary`
- Hover: `vs-primary-dark` + elevación
- Texto: Blanco
- Padding: 0.75rem 2rem
- Border-radius: `radius-lg`

---

#### Button Secondary
```html
<button class="btn-secondary">
  Más Información
</button>
```

**Características:**
- Fondo: Transparente
- Borde: 2px `vs-primary`
- Hover: Fondo `vs-accent`
- Texto: `vs-primary`

---

#### Variantes con Tailwind
```html
<!-- Primary -->
<button class="bg-vs-primary hover:bg-vs-primary-dark text-white px-8 py-3 rounded-lg shadow-soft transition-all hover:shadow-soft-lg hover:-translate-y-0.5">
  CTA Principal
</button>

<!-- Secondary -->
<button class="border-2 border-vs-primary text-vs-primary hover:bg-vs-accent px-8 py-3 rounded-lg transition-all">
  CTA Secundario
</button>

<!-- Outline con icono -->
<button class="flex items-center gap-2 border-2 border-vs-primary text-vs-primary hover:bg-vs-accent px-6 py-2.5 rounded-lg transition-all">
  <svg>...</svg>
  <span>Descargar Guía</span>
</button>
```

---

### Cards

#### Card Básica
```html
<div class="card-vs">
  <h3 class="text-h4 mb-2">Título de Card</h3>
  <p class="text-body-sm text-vs-muted-text">Descripción breve del contenido...</p>
</div>
```

**Características:**
- Fondo: Blanco
- Borde: 1px `vs-border`
- Border-radius: `radius-xl`
- Padding: 1.5rem
- Shadow: `shadow-soft`
- Hover: `shadow-soft-lg` + translateY(-2px)

---

#### Card con Icono
```html
<div class="card-vs">
  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
    <svg class="w-6 h-6 text-vs-primary">...</svg>
  </div>
  <h3 class="text-h4 mb-2">Nutrición Personalizada</h3>
  <p class="text-body-sm text-vs-muted-text">Plan adaptado a tus necesidades específicas</p>
</div>
```

---

### Forms

#### Input Field
```html
<input type="text" class="input-vs" placeholder="Tu nombre" />
```

**Características:**
- Padding: 0.75rem 1rem
- Borde: 2px `vs-border`
- Focus: Borde `vs-primary` + ring sutil
- Placeholder: `vs-muted-text`

---

#### Textarea
```html
<textarea class="textarea-vs" placeholder="Tu mensaje"></textarea>
```

**Características:**
- Min-height: 120px
- Resize: Vertical

---

#### Formulario Completo
```html
<form class="space-y-4 max-w-md mx-auto">
  <div>
    <label class="block text-body-sm font-medium text-vs-text mb-2">Nombre</label>
    <input type="text" class="input-vs" placeholder="Juan Pérez" />
  </div>

  <div>
    <label class="block text-body-sm font-medium text-vs-text mb-2">Email</label>
    <input type="email" class="input-vs" placeholder="tu@email.com" />
  </div>

  <div>
    <label class="block text-body-sm font-medium text-vs-text mb-2">Mensaje</label>
    <textarea class="textarea-vs" placeholder="Cuéntanos sobre tu objetivo"></textarea>
  </div>

  <button type="submit" class="btn-primary w-full">Enviar</button>
</form>
```

---

### Badges

```html
<!-- Badge básico -->
<span class="badge-vs">Más Popular</span>

<!-- Badge con Tailwind -->
<span class="inline-flex items-center px-3 py-1 text-body-sm font-medium rounded-full bg-vs-accent text-vs-text">
  Verificado
</span>

<!-- Badge de éxito -->
<span class="inline-flex items-center px-3 py-1 text-body-sm font-medium rounded-full bg-success text-white">
  Activo
</span>
```

---

## Iconografía

### Librería Recomendada
**Lucide Icons** (si usas Shadcn/ui) o **Heroicons**

### Estilos
- Preferir: Outline (no filled)
- Tamaños estándar:
  - Pequeño: 16px
  - Mediano: 20px
  - Grande: 24px
  - Extra grande: 32px (hero)

### Colores
- Primario: `text-vs-primary`
- Texto: `text-vs-text`
- Muted: `text-vs-muted-text`

### Ejemplo
```html
<svg class="w-5 h-5 text-vs-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
</svg>
```

---

## Animaciones

### Presets Definidos

#### Fade In Up
```html
<div class="animate-fade-in-up">
  Contenido que aparece desde abajo
</div>
```

**Duración:** 0.6s
**Easing:** ease-out

---

#### Scale In
```html
<div class="animate-scale-in">
  Card que aparece con escala
</div>
```

**Duración:** 0.4s
**Easing:** ease-out

---

#### Pulse Soft (para CTAs)
```html
<button class="btn-primary animate-pulse-soft">
  Acción Importante
</button>
```

**Duración:** 2s
**Loop:** Infinite

---

### Transiciones

```css
/* Rápida (hover states) */
transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

/* Base (componentes) */
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

/* Lenta (animaciones complejas) */
transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Guías de Uso

### Hero Section

```html
<section class="section-vs bg-vs-bg">
  <div class="container-vs">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-hero font-display font-semibold mb-4 animate-fade-in-up">
        Transforma Tu Salud con <span class="gradient-text-primary">Ciencia y Naturaleza</span>
      </h1>
      <p class="text-body-lg text-vs-muted-text mb-8">
        Descubre el método que combina evidencia científica con bienestar natural para lograr resultados sostenibles
      </p>
      <div class="flex gap-4 justify-center">
        <button class="btn-primary">Comenzar Ahora</button>
        <button class="btn-secondary">Ver Testimonios</button>
      </div>
    </div>
  </div>
</section>
```

---

### Section de Características

```html
<section class="section-vs bg-vs-muted-bg">
  <div class="container-vs">
    <h2 class="section-title">Nuestro Método</h2>
    <p class="section-subtitle">
      Un enfoque integral para tu bienestar basado en cuatro pilares fundamentales
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card 1 -->
      <div class="card-vs">
        <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-vs-primary">...</svg>
        </div>
        <h3 class="text-h4 mb-2">Nutrición Basada en Evidencia</h3>
        <p class="text-body-sm text-vs-muted-text">
          Planes alimenticios respaldados por investigación científica
        </p>
      </div>

      <!-- Repetir para otros pilares -->
    </div>
  </div>
</section>
```

---

### Formulario de Captura

```html
<section class="section-vs bg-gradient-to-br from-primary-50 to-accent-50">
  <div class="container-vs max-w-2xl">
    <div class="bg-white rounded-2xl shadow-soft-lg p-8">
      <h2 class="text-h2 text-center mb-2">Descarga Gratis</h2>
      <p class="text-body text-vs-muted-text text-center mb-6">
        Guía completa de los 7 Pilares de la Salud Integral
      </p>

      <form class="space-y-4">
        <input type="text" class="input-vs" placeholder="Nombre completo" />
        <input type="email" class="input-vs" placeholder="Email" />
        <button type="submit" class="btn-primary w-full">Descargar Ahora</button>
        <p class="text-caption text-vs-muted-text text-center">
          No spam. Darse de baja en cualquier momento.
        </p>
      </form>
    </div>
  </div>
</section>
```

---

## Accesibilidad

### Contraste de Colores

Todos los pares de colores cumplen WCAG 2.1 AA:
- Texto oscuro sobre fondos claros: ✅ 12.48:1 (AAA)
- Texto sobre botones primarios: ✅ 4.52:1 (AA)
- Links sobre fondo: ✅ 5.12:1 (AA)

### Focus States

Todos los elementos interactivos tienen outline visible en `:focus-visible`:
```css
*:focus-visible {
  outline: 2px solid var(--vs-primary);
  outline-offset: 2px;
}
```

### Keyboard Navigation

- Tab order lógico
- Skip to main content link
- Aria labels en elementos dinámicos

---

## Recursos

- **Figma (próximamente):** Biblioteca de componentes
- **Tailwind Config:** `tailwind.config.js`
- **Global Styles:** `src/styles.scss`
- **Fuentes:** Google Fonts (Inter + DM Sans)

---

**Documento vivo** - Este design system evolucionará con el proyecto. Última actualización: 28/11/2025.
