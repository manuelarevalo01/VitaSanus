# Product Requirements Document (PRD)
## VitaSanus - Landing Page

**Versión:** 1.0
**Fecha:** 2025-11-28
**Autor:** Product Manager
**Estado:** Draft - Pendiente Revisión UX/UI

---

## 1. Visión General

### 1.1 Objetivo del Producto
Crear una landing page de alto impacto para VitaSanus que eduque, inspire y convierta visitantes en leads cualificados interesados en mejorar su salud a través de hábitos sostenibles y comida real.

### 1.2 Propuesta de Valor
VitaSanus ofrece un enfoque holístico y basado en evidencia para transformar la salud mediante alimentación consciente, educación clara y hábitos sostenibles. A diferencia de dietas restrictivas, promovemos un estilo de vida sanador y duradero.

### 1.3 Audiencia Objetivo
- **Primaria:** Personas de 25-55 años que buscan mejorar su salud de forma sostenible
- **Secundaria:** Profesionales que sufren de fatiga, estrés y problemas metabólicos
- **Terciaria:** Personas que han intentado dietas sin éxito y buscan un cambio real

### 1.4 Referencias de Conversión
- **Estructura de funnel:** Inspirado en `doctorbayter.com` para optimización de conversión
- **Identidad visual:** Paleta "Clínica pero Natural" de VitaSanus
- **Tono:** Informativo, profesional, cercano, con experiencia y buen estilo de vida

---

## 2. Tech Stack

### 2.1 Framework & Librerías
- **Framework:** Next.js 14+ (App Router)
- **UI Library:** React 18+
- **Styling:** Tailwind CSS 3.x
- **Icons:** Lucide React
- **Components:** Shadcn/ui
- **Animations:** Framer Motion (opcional, para micro-interacciones)
- **Forms:** React Hook Form + Zod (validación)

### 2.2 Deployment
- **Hosting:** Vercel (recomendado para Next.js)
- **Analytics:** Google Analytics 4 / Plausible
- **Performance:** Core Web Vitals optimization

---

## 3. Arquitectura de Contenido

### 3.1 Navegación Principal

**⚠️ REQUISITO CRÍTICO - Navegación Simplificada:**

El menú de navegación superior debe contener **ÚNICAMENTE** estas 3 opciones:

1. **Inicio** - Scroll a la sección Hero
2. **Recetas** - Link a sección de recetas (futura) o página externa
3. **Sobre Mí** - Scroll a la sección "¿Quién es VitaSanus?"

**Diseño del Navbar:**
- Posición: Fixed top (sticky)
- Fondo: Semi-transparente con backdrop blur (`bg-white/95 backdrop-blur-md`)
- Logo: VitaSanus (izquierda)
- Links de navegación: Centro (desktop) / Hamburger menu (mobile)
- Sin CTAs en navbar (simplicidad máxima)

### 3.2 Estructura de Secciones (Orden AIDA)

```
1. Navbar (Fixed) - 3 links únicamente
2. Hero Section
3. Pilares/Esenciales (Pills)
4. Quiénes Somos (Sobre Mí)
5. Beneficios (Grid 4 items)
6. Prueba Social (Testimonios)
7. CTA Final + Footer
```

---

## 4. Especificaciones por Sección

### 4.0 Navbar (Navegación Superior)

**⚠️ ESPECIFICACIÓN ESTRICTA - Solo 3 Links**

**Objetivo:** Proporcionar navegación mínima y limpia sin distracciones.

**Estructura:**
```html
<nav class="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-vs-border z-50">
  <div class="container flex items-center justify-between h-16">
    <!-- Logo -->
    <Logo>VitaSanus</Logo>

    <!-- Desktop Navigation (3 links únicamente) -->
    <ul class="hidden md:flex gap-8">
      <li><a href="#hero">Inicio</a></li>
      <li><a href="/recetas">Recetas</a></li>
      <li><a href="#sobre-mi">Sobre Mí</a></li>
    </ul>

    <!-- Mobile Hamburger -->
    <button class="md:hidden">☰</button>
  </div>
</nav>
```

**Diseño:**
- **Altura:** 64px (h-16)
- **Fondo:** Blanco semi-transparente con blur (`bg-white/95 backdrop-blur-md`)
- **Borde inferior:** Sutil (`border-b border-vs-border`)
- **Z-index:** 50 (siempre visible)
- **Logo:** Izquierda, tipografía DM Sans Bold, color `vs-text`
- **Links:**
  - Color: `vs-muted-text`
  - Hover: `vs-primary`
  - Font-size: `body-sm` (14px)
  - Transition: `transition-colors`

**Componentes Shadcn/ui:**
- NavigationMenu (simplificado)
- Sheet (para mobile menu)

**Comportamiento:**
- **Desktop:** Links horizontales centrados
- **Mobile:** Hamburger menu que abre Sheet lateral
- **Sticky:** Siempre fijo en top con efecto de blur
- **Active state:** Underline sutil en link activo

**Restricciones:**
- ❌ NO incluir más de 3 links
- ❌ NO incluir CTAs en navbar
- ❌ NO incluir dropdown menus
- ✅ Mantener diseño minimalista

---

### 4.1 Hero Section

**Objetivo:** Capturar atención y comunicar la propuesta de valor en los primeros 3 segundos.

**Contenido Obligatorio:**
- **Headline (H1):** "Alimenta tu vida: hábitos simples para un bienestar real"
- **Subheadline (H2):** "Manual Práctico para Mejorar tu Salud a través de Comida Real, Hábitos Conscientes y Bienestar Duradero."
- **Descripción (Párrafo):** "Explora cómo optimizar tu bienestar centrándote en la comida genuina y hábitos conscientes que fomenten un modo de vida sostenible."
- **CTA Principal:** "Comienza tu transformación" (button primary)
- **CTA Secundario:** "Conocer el Método" (button outline)

**Elementos Visuales:**
- Imagen hero: Persona saludable disfrutando comida real (lifestyle shot)
- Gradiente de fondo: `from-vs-bg via-white to-accent-50`
- Badges de confianza: "10k+ Personas Transformadas", "98% Satisfacción"

**Componentes Shadcn/ui:**
- Typography (H1, H2, P)
- Button (variant: default, outline)
- Badge (para trust indicators)

---

### 4.2 Pilares/Esenciales Section

**Objetivo:** Educar sobre los pilares del método VitaSanus de forma visual y escaneable.

**Contenido Obligatorio:**
- **Título (H2):** "Esenciales para lograr un bienestar integral a través de buenos hábitos."
- **Items (Pills/Badges):**
  1. Alimentación
  2. Sueño
  3. Estrés
  4. Ejercicio
  5. Sol
  6. Ayuno y ritmos circadianos

**Diseño:**
- Layout: Grid responsive de pills/badges
- Cada pill: icono + texto
- Hover state: subtle scale + color shift

**Componentes Shadcn/ui:**
- Badge (variant: outline o secondary)
- Icons de Lucide React para cada pilar

---

### 4.3 Quiénes Somos Section

**Objetivo:** Establecer credibilidad y conexión emocional con la marca.

**Contenido Obligatorio:**
- **Título (H2):** "¿Quién es VitaSanus?"
- **Texto Explicativo:** "Una iniciativa dedicada a enseñar un estilo de vida sanador, con enfoque en comida real, educación clara y hábitos que sí se sostienen. Acompañamos procesos, celebramos avances y compartimos herramientas basadas en evidencia."
- **CTA:** "Tu guía para sanar" (button)

**Elementos Visuales:**
- Imagen: Equipo o fundador(es) en entorno natural/saludable
- Background: `bg-vs-muted-bg`
- Layout: 2 columnas (texto + imagen)

**Componentes Shadcn/ui:**
- Card (opcional, para enmarcar contenido)
- Button

---

### 4.4 Beneficios Section

**Objetivo:** Mostrar los resultados tangibles del método mediante un grid visual.

**Contenido Obligatorio:**
- **Título (H2):** "Transforma Tu Salud" (sugerido, o título del wireframe)
- **4 Beneficios:**
  1. **Energía estable todo el día** - Icono: Zap
  2. **Claridad mental** - Icono: Brain
  3. **Mejor salud metabólica** - Icono: Activity
  4. **Rendimiento físico** - Icono: TrendingUp

**Diseño:**
- Grid: 2x2 en desktop, 1 columna en mobile
- Cards con icono grande, título, descripción breve
- Iconos en color `--primary`

**Componentes Shadcn/ui:**
- Card
- Lucide Icons

---

### 4.5 Prueba Social (Testimonios)

**Objetivo:** Generar confianza mediante historias reales de transformación.

**Contenido Obligatorio:**
- **Título (H2):** "#HistoriasVitaSanus"
- **Subtítulo:** "Gente real con procesos reales que mejoraron su salud y energía."
- **Testimonios (mínimo 3-6):**
  - Formato: Foto + Nombre + Resultado destacado + Testimonial
  - Ejemplo: "Bajé 12kg en 3 meses y recuperé mi energía" - María, 42 años

**Diseño:**
- Carousel o Grid de cards
- Cada card: Avatar/foto, quote, métricas destacadas (badges), nombre + verificación

**Componentes Shadcn/ui:**
- Card
- Carousel (si hay muchos testimonios)
- Avatar
- Badge (para métricas)

---

### 4.6 CTA Final + Footer

**Objetivo:** Última oportunidad de conversión antes de que el usuario abandone la página.

**Contenido Obligatorio:**
- **CTA Final (Hero-style):** "¡Descubre el secreto para transformar tu vida hoy mismo! ¿Te atreves a dar el primer paso hacia un futuro mejor? Contáctanos y comienza el cambio."
- **Button:** "Agendar Consulta Gratis" o "Descargar Guía Gratuita"
- **Sección "Sígueme":** Iconos de redes sociales (Instagram, Facebook, YouTube, LinkedIn)
- **Footer Links:** Política de Privacidad, Términos de Servicio, Contacto

**Diseño:**
- Background gradient: `from-vs-primary to-primary-700`
- Texto en blanco
- Iconos de redes con hover effect

**Componentes Shadcn/ui:**
- Button (size: lg)
- Separator
- Footer layout con links

---

## 5. Funcionalidades Clave

### 5.1 Lead Capture
- **Form de contacto/newsletter:** Nombre + Email mínimo
- Validación con Zod
- Integración con CRM (futuro: HubSpot, Mailchimp, etc.)

### 5.2 Navegación Smooth Scroll
- Navbar sticky (opcional si se añade)
- Smooth scroll a secciones con `scroll-behavior: smooth`

### 5.3 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### 5.4 Performance
- Lazy loading de imágenes
- Next.js Image optimization
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

### 5.5 SEO
- Meta tags (title, description, og:image)
- Structured data (JSON-LD para Organization)
- Sitemap.xml

---

## 6. Diseño Visual

### 6.1 Paleta de Colores (CSS Variables)
```css
--bg: #fdfaf5;           /* Crema cálido - fondo principal */
--text: #1f2937;         /* Gris oscuro - texto principal */
--muted-text: #475569;   /* Gris medio - texto secundario */
--primary: #579796;      /* Verde azulado - CTAs, links */
--primary-dark: #417775; /* Hover states */
--accent: #b0d2bf;       /* Verde claro - highlights, badges */
--highlight: #579796;    /* Mismo que primary */
--border: #e5e7eb;       /* Bordes sutiles */
--muted-bg: #f3f5f2;     /* Verde muy claro - secciones alternas */
```

### 6.2 Tipografía
- **Headings:** DM Sans (font-display)
- **Body:** Inter (font-sans)
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### 6.3 Estilo Visual
- **Descriptores:** Informativo, con experiencia, buen estilo de vida, natural, profesional
- **Tono:** Cálido pero clínico, científico pero accesible
- **Referencias:** Marcas de bienestar premium (Headspace, Calm, pero con enfoque nutricional)

---

## 7. Métricas de Éxito

### 7.1 KPIs Principales
- **Tasa de conversión:** > 3% de visitantes a leads
- **Tiempo en página:** > 2 minutos
- **Bounce rate:** < 50%
- **Form submissions:** 100+ leads/mes (objetivo inicial)

### 7.2 A/B Testing (Futuro)
- Headlines diferentes
- CTAs (texto y color)
- Posición de formularios

---

## 8. Roadmap de Desarrollo

### Fase 1: MVP (2 semanas)
- [ ] Setup Next.js + Tailwind + Shadcn/ui
- [ ] Hero Section
- [ ] Pilares Section
- [ ] Quiénes Somos
- [ ] Beneficios Grid
- [ ] Testimonios
- [ ] CTA Final + Footer
- [ ] Form básico (contacto)
- [ ] Responsive design
- [ ] Deploy a Vercel

### Fase 2: Optimización (1 semana)
- [ ] Animaciones (Framer Motion)
- [ ] Optimización de imágenes
- [ ] SEO completo
- [ ] Analytics integration
- [ ] Performance tuning

### Fase 3: Expansión (Futuro)
- [ ] Blog section
- [ ] Recursos descargables
- [ ] Calculadora de IMC/salud
- [ ] Integración con CRM

---

## 9. Requerimientos Técnicos Adicionales

### 9.1 Accesibilidad
- WCAG 2.1 Level AA compliance
- Semantic HTML
- Keyboard navigation
- Screen reader friendly

### 9.2 Browser Support
- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

---

## 10. Notas Finales

Este PRD define el MVP de la landing page de VitaSanus. El enfoque es crear una experiencia que:
1. **Eduque** sobre el método VitaSanus
2. **Inspire** mediante historias reales
3. **Convierta** visitantes en leads cualificados

La estructura sigue principios de AIDA (Atención, Interés, Deseo, Acción) optimizada para conversión, inspirada en `doctorbayter.com` pero adaptada a la identidad única de VitaSanus.

---

## Próximo Paso

**@ui-ux-designer** - Por favor procede a crear:
1. Configuración de `tailwind.config.js` con las variables CSS
2. Guía de componentes Shadcn/ui específicos para cada sección
3. Mockups de alta fidelidad (opcional)
4. Guía de estilos visual (spacing, shadows, border-radius, etc.)
