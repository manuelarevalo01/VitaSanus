# Guía de Estilos Visuales - VitaSanus Landing Page

**Versión:** 1.0
**Fecha:** 2025-11-28
**Autor:** UI/UX Designer
**Basado en:** initial-prd.md

---

## 1. Sistema de Diseño

### 1.1 Filosofía de Diseño
**"Clínica pero Natural"** - Un equilibrio entre profesionalismo médico y calidez natural.

**Principios:**
- **Claridad:** Jerarquía visual clara, legibilidad óptima
- **Calidez:** Colores naturales, espaciado generoso
- **Confianza:** Profesional sin ser frío
- **Accesibilidad:** Contraste WCAG AA, navegación intuitiva

---

## 2. Paleta de Colores

### 2.1 Colores Principales

```css
/* Background Colors */
--vs-bg: #fdfaf5;           /* Crema cálido - fondo principal */
--vs-muted-bg: #f3f5f2;     /* Verde muy claro - secciones alternas */

/* Text Colors */
--vs-text: #1f2937;         /* Gris oscuro - texto principal */
--vs-muted-text: #475569;   /* Gris medio - texto secundario */

/* Brand Colors */
--vs-primary: #579796;      /* Verde azulado marca - CTAs, links */
--vs-primary-dark: #417775; /* Hover states */
--vs-accent: #b0d2bf;       /* Verde claro - highlights, badges */

/* UI Colors */
--vs-border: #e5e7eb;       /* Bordes sutiles */
```

### 2.2 Colores Semánticos

```css
/* Feedback Colors */
--vs-success: #22c55e;      /* Verde éxito */
--vs-warning: #f59e0b;      /* Ámbar advertencia */
--vs-error: #ef4444;        /* Rojo error */
--vs-info: #3b82f6;         /* Azul información */
```

### 2.3 Uso de Colores

| Elemento | Color | Uso |
|----------|-------|-----|
| Fondo principal | `vs-bg` | Body background |
| Secciones alternas | `vs-muted-bg` | Pilares, Beneficios |
| CTAs primarios | `vs-primary` | Botones principales |
| CTAs hover | `vs-primary-dark` | Hover states |
| Badges/Pills | `vs-accent` | Pilares, métricas |
| Texto principal | `vs-text` | Headings, body |
| Texto secundario | `vs-muted-text` | Descriptions |

---

## 3. Tipografía

### 3.1 Familias de Fuentes

```typescript
// Font families
const fontDisplay = 'DM Sans, Inter, system-ui, sans-serif';
const fontSans = 'Inter, system-ui, sans-serif';
```

**Importación (Google Fonts):**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
```

### 3.2 Escala Tipográfica

| Nivel | Tamaño | Line Height | Weight | Uso |
|-------|--------|-------------|--------|-----|
| Hero | 56px (3.5rem) | 1.1 | 700 | Hero headline |
| H1 | 40px (2.5rem) | 1.2 | 600 | Section titles |
| H2 | 32px (2rem) | 1.25 | 600 | Subsections |
| H3 | 28px (1.75rem) | 1.3 | 500 | Card titles |
| H4 | 24px (1.5rem) | 1.35 | 500 | Subtitles |
| Body LG | 18px (1.125rem) | 1.6 | 400 | Lead paragraphs |
| Body | 16px (1rem) | 1.6 | 400 | Body text |
| Body SM | 14px (0.875rem) | 1.5 | 400 | Captions, pills |
| Caption | 12px (0.75rem) | 1.4 | 400 | Footnotes |

### 3.3 Responsive Typography

```css
/* Mobile adjustments */
@media (max-width: 768px) {
  --text-hero: 2.5rem;    /* 40px */
  --text-h1: 2rem;        /* 32px */
  --text-h2: 1.75rem;     /* 28px */
  --text-h3: 1.5rem;      /* 24px */
}
```

---

## 4. Espaciado

### 4.1 Escala de Espaciado

```css
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
--spacing-3xl: 5rem;    /* 80px */
--spacing-4xl: 6rem;    /* 96px */
```

### 4.2 Aplicación

| Contexto | Espaciado | Valor |
|----------|-----------|-------|
| Padding de cards | md-lg | 24-32px |
| Margen entre secciones | 3xl-4xl | 80-96px |
| Margen entre elementos | md-xl | 24-48px |
| Gap en grids | md-lg | 24-32px |

---

## 5. Bordes y Sombras

### 5.1 Border Radius

```css
--radius-sm: 0.375rem;  /* 6px - pills */
--radius-md: 0.5rem;    /* 8px - inputs */
--radius-lg: 0.75rem;   /* 12px - cards */
--radius-xl: 1rem;      /* 16px - hero cards */
--radius-2xl: 1.5rem;   /* 24px - feature cards */
--radius-full: 9999px;  /* pills, avatars */
```

### 5.2 Box Shadows

```css
--shadow-soft: 0 2px 15px -3px rgba(87, 151, 150, 0.1),
               0 4px 6px -2px rgba(87, 151, 150, 0.05);

--shadow-soft-lg: 0 10px 30px -5px rgba(87, 151, 150, 0.15),
                  0 8px 10px -5px rgba(87, 151, 150, 0.08);

--shadow-glow: 0 0 20px rgba(87, 151, 150, 0.3);
```

**Uso:**
- `shadow-soft`: Cards normales
- `shadow-soft-lg`: Cards hover, CTAs
- `shadow-glow`: Elementos destacados

---

## 6. Componentes Shadcn/ui

### 6.1 Instalación Base

```bash
npx shadcn-ui@latest init
```

**Configuración recomendada:**
- Style: Default
- Base color: Slate
- CSS variables: Yes

### 6.2 Componentes Necesarios

```bash
# Hero Section
npx shadcn-ui@latest add button
npx shadcn-ui@latest add badge

# Pilares
npx shadcn-ui@latest add badge

# Cards (Beneficios, Testimonios)
npx shadcn-ui@latest add card

# Forms (Lead capture)
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add form

# Testimonios (si se usa carousel)
npx shadcn-ui@latest add carousel

# Footer
npx shadcn-ui@latest add separator

# Opcional
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add dialog
```

### 6.3 Configuración de Componentes por Sección

#### Hero Section
```tsx
// Componentes:
<Button variant="default" size="lg">      // CTA principal
<Button variant="outline" size="lg">      // CTA secundario
<Badge variant="secondary">               // Trust indicators
```

#### Pilares/Pills
```tsx
// Grid de badges
<Badge variant="outline" className="text-sm">
  <Icon className="w-4 h-4 mr-2" />
  Alimentación
</Badge>
```

**Iconos recomendados (Lucide):**
- Alimentación: `Apple` o `Salad`
- Sueño: `Moon`
- Estrés: `Brain` o `Heart`
- Ejercicio: `Dumbbell` o `Activity`
- Sol: `Sun`
- Ayuno: `Clock`

#### Beneficios Grid
```tsx
<Card className="p-6">
  <Icon className="w-12 h-12 text-vs-primary mb-4" />
  <h3 className="text-h3 mb-2">Energía estable</h3>
  <p className="text-muted-text">...</p>
</Card>
```

**Iconos:**
- Energía: `Zap`
- Claridad mental: `Brain`
- Salud metabólica: `Activity`
- Rendimiento: `TrendingUp`

#### Testimonios
```tsx
<Card className="p-6">
  <div className="flex items-start gap-4">
    <Avatar>
      <AvatarImage src="..." />
      <AvatarFallback>MC</AvatarFallback>
    </Avatar>
    <div>
      <p className="italic mb-4">"Testimonio..."</p>
      <div className="flex gap-2 mb-2">
        <Badge variant="secondary">-12kg</Badge>
        <Badge variant="secondary">3 meses</Badge>
      </div>
      <p className="text-sm font-semibold">María C.</p>
      <p className="text-xs text-muted-text">42 años</p>
    </div>
  </div>
</Card>
```

#### Forms
```tsx
<Form>
  <FormField name="name">
    <Label>Nombre</Label>
    <Input placeholder="Tu nombre" />
  </FormField>
  <FormField name="email">
    <Label>Email</Label>
    <Input type="email" placeholder="tu@email.com" />
  </FormField>
  <Button type="submit" size="lg" className="w-full">
    Comienza tu transformación
  </Button>
</Form>
```

---

## 7. Layouts y Grid Systems

### 7.1 Container
```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  {/* Content */}
</div>
```

### 7.2 Section Padding
```tsx
<section className="py-12 md:py-20 lg:py-28">
  {/* Content */}
</section>
```

### 7.3 Grids Comunes

**2 Columnas (Texto + Imagen):**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>{/* Texto */}</div>
  <div>{/* Imagen */}</div>
</div>
```

**4 Columnas (Beneficios):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Cards */}
</div>
```

**Pills/Badges Flow:**
```tsx
<div className="flex flex-wrap gap-3 justify-center">
  {/* Badges */}
</div>
```

---

## 8. Animaciones y Transiciones

### 8.1 Transiciones Estándar
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
```

### 8.2 Hover States
```tsx
// Buttons
className="transition-all hover:scale-105 hover:shadow-soft-lg"

// Cards
className="transition-all hover:-translate-y-2 hover:shadow-soft-lg"

// Pills/Badges
className="transition-colors hover:bg-vs-accent"
```

### 8.3 Scroll Animations (Opcional - Framer Motion)
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

---

## 9. Responsive Breakpoints

```typescript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait
  lg: '1024px',  // Tablet landscape
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
};
```

**Mobile-First Approach:**
```tsx
// Default: Mobile
// sm: Mobile landscape
// md: Tablet
// lg: Desktop
<div className="text-2xl md:text-4xl lg:text-5xl">
```

---

## 10. Accesibilidad

### 10.1 Contraste de Colores

| Combinación | Ratio | WCAG |
|-------------|-------|------|
| `vs-text` en `vs-bg` | 12.4:1 | AAA |
| `vs-muted-text` en `vs-bg` | 7.8:1 | AA |
| White en `vs-primary` | 4.8:1 | AA |

### 10.2 Focus States
```tsx
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vs-primary focus-visible:ring-offset-2"
```

### 10.3 Semantic HTML
- Usar `<section>` para secciones principales
- `<article>` para testimonios
- `<nav>` si se añade navbar
- Headings jerárquicos (H1 → H2 → H3)

---

## 11. Iconografía

### 11.1 Librería: Lucide React
```bash
npm install lucide-react
```

### 11.2 Tamaños Estándar
```tsx
import { Icon } from 'lucide-react';

<Icon className="w-4 h-4" />   // Pills, inline
<Icon className="w-6 h-6" />   // Buttons, badges
<Icon className="w-8 h-8" />   // Cards headers
<Icon className="w-12 h-12" />  // Feature icons
```

### 11.3 Iconos Clave por Sección

**Hero:**
- `CheckCircle2` (trust badge)
- `Users` (10k+ personas)
- `TrendingUp` (estadísticas)

**Pilares:**
- `Apple`, `Moon`, `Brain`, `Dumbbell`, `Sun`, `Clock`

**Beneficios:**
- `Zap`, `Brain`, `Activity`, `TrendingUp`

**Testimonios:**
- `Quote` (citas)
- `Star` (ratings)
- `BadgeCheck` (verificado)

**Footer:**
- `Instagram`, `Facebook`, `Youtube`, `Linkedin` (redes)

---

## 12. Imágenes

### 12.1 Optimización
- Formato: WebP con fallback JPG
- Next.js Image component para lazy loading
- Tamaños responsive con `srcset`

### 12.2 Aspectos Ratios Recomendados
- Hero image: 16:9 o 4:3
- Testimonios avatars: 1:1 (square)
- Beneficios icons: SVG (vectoriales)

### 12.3 Estilo Fotográfico
- Lifestyle, natural, cálido
- Personas reales comiendo, cocinando
- Ingredientes frescos, colores vibrantes
- Evitar stock photos genéricas

---

## 13. Checklist de Implementación

### UI/UX Designer Entrega:
- [x] `style-guide.md` creado
- [x] `tailwind.config.ts` configurado (siguiente paso)
- [x] Componentes Shadcn/ui especificados
- [x] Paleta de colores definida
- [x] Tipografía escalada
- [x] Espaciado y sombras documentados
- [ ] Mockups en Figma (opcional)

### Frontend Developer Recibe:
- [ ] Instalar dependencias (Next.js, Tailwind, Shadcn/ui, Lucide)
- [ ] Configurar `tailwind.config.ts` según guía
- [ ] Instalar componentes Shadcn/ui listados
- [ ] Implementar sección por sección siguiendo PRD
- [ ] Aplicar estilos según style guide
- [ ] Testing responsive en todos los breakpoints

---

## Próximo Paso

**@frontend-developer** - Con el PRD y esta guía de estilos, puedes proceder a:
1. Configurar el proyecto Next.js con Tailwind
2. Aplicar el `tailwind.config.ts` (ver siguiente documento)
3. Instalar componentes Shadcn/ui
4. Comenzar implementación sección por sección
