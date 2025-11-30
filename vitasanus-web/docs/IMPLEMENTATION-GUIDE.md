# Guía de Implementación - VitaSanus Landing Page

**Autor:** UI/UX Designer + Product Manager
**Fecha:** 2025-11-28
**Para:** Frontend Developer

---

## 📋 Resumen Ejecutivo

Esta guía te llevará paso a paso desde la configuración inicial hasta el deployment de la Landing Page de VitaSanus. Sigue los pasos en orden para garantizar una implementación correcta.

**Documentos de referencia:**
- `initial-prd.md` - Especificaciones funcionales y de contenido
- `style-guide.md` - Guía completa de estilos visuales
- `tailwind.config.reference.ts` - Configuración de Tailwind CSS
- `globals.css.reference` - Estilos globales y variables CSS

---

## ✅ Pre-requisitos

Antes de comenzar, asegúrate de tener instalado:

```bash
node >= 18.17.0
npm >= 9.6.7
# O pnpm >= 8.0.0 (recomendado para Next.js 14+)
```

---

## 🚀 Fase 1: Setup del Proyecto

### Paso 1.1: Crear Proyecto Next.js

```bash
# Opción A: Con create-next-app (recomendado)
npx create-next-app@latest vitasanus-landing --typescript --tailwind --app

# Cuando te pregunte:
# ✓ Would you like to use TypeScript? Yes
# ✓ Would you like to use ESLint? Yes
# ✓ Would you like to use Tailwind CSS? Yes
# ✓ Would you like to use `src/` directory? No
# ✓ Would you like to use App Router? Yes
# ✓ Would you like to customize the default import alias? No

cd vitasanus-landing
```

### Paso 1.2: Instalar Dependencias Adicionales

```bash
# Shadcn/ui setup
npx shadcn-ui@latest init

# Cuando te pregunte:
# ✓ Which style would you like to use? Default
# ✓ Which color would you like to use as base color? Slate
# ✓ Would you like to use CSS variables for colors? Yes

# Instalar componentes Shadcn/ui necesarios
npx shadcn-ui@latest add button
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add form
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add carousel

# Instalar Lucide React para iconos
npm install lucide-react

# Instalar React Hook Form + Zod (para formularios)
npm install react-hook-form zod @hookform/resolvers

# Opcional: Framer Motion para animaciones
npm install framer-motion
```

---

## 🎨 Fase 2: Configuración de Estilos

### Paso 2.1: Reemplazar `tailwind.config.ts`

```bash
# Hacer backup del original
cp tailwind.config.ts tailwind.config.ts.backup

# Copiar la configuración de VitaSanus
cp docs/tailwind.config.reference.ts tailwind.config.ts
```

**Importante:** Asegúrate de que el plugin `tailwindcss-animate` esté instalado:

```bash
npm install -D tailwindcss-animate
```

### Paso 2.2: Actualizar `app/globals.css`

```bash
# Hacer backup del original
cp app/globals.css app/globals.css.backup

# Copiar los estilos globales de VitaSanus
cp docs/globals.css.reference app/globals.css
```

### Paso 2.3: Verificar Importación de Fuentes

Asegúrate de que `app/layout.tsx` tenga las fuentes correctas:

```tsx
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🏗️ Fase 3: Estructura de Componentes

### Paso 3.1: Crear Estructura de Carpetas

```bash
# Crear estructura de componentes
mkdir -p components/sections
mkdir -p components/ui
mkdir -p lib
mkdir -p public/images

# Componentes Shadcn/ui ya estarán en components/ui
# Vamos a crear las secciones
```

### Paso 3.2: Arquitectura de Componentes Recomendada

```
app/
  ├── layout.tsx           # Layout principal con fuentes
  ├── page.tsx             # Landing page (importa todas las secciones)
  └── globals.css          # Estilos globales

components/
  ├── sections/
  │   ├── hero.tsx         # Sección Hero
  │   ├── pilares.tsx      # Sección Pilares/Esenciales
  │   ├── quienes-somos.tsx # Sección Quiénes Somos
  │   ├── beneficios.tsx   # Sección Beneficios (grid)
  │   ├── testimonios.tsx  # Sección Testimonios
  │   ├── cta-final.tsx    # CTA Final
  │   └── footer.tsx       # Footer
  │
  └── ui/                  # Componentes Shadcn/ui (ya generados)
      ├── button.tsx
      ├── badge.tsx
      ├── card.tsx
      ├── input.tsx
      └── ...

lib/
  └── utils.ts             # Utilidades (cn(), etc.)

public/
  └── images/              # Imágenes optimizadas
      ├── hero-image.webp
      ├── team-photo.webp
      └── ...
```

---

## 📝 Fase 4: Implementación Sección por Sección

### Paso 4.1: Crear `app/page.tsx` (Layout Principal)

```tsx
import Navbar from '@/components/sections/navbar';
import Hero from '@/components/sections/hero';
import Pilares from '@/components/sections/pilares';
import QuienesSomos from '@/components/sections/quienes-somos';
import Beneficios from '@/components/sections/beneficios';
import Testimonios from '@/components/sections/testimonios';
import CtaFinal from '@/components/sections/cta-final';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Pilares />
        <QuienesSomos />
        <Beneficios />
        <Testimonios />
        <CtaFinal />
        <Footer />
      </main>
    </>
  );
}
```

### Paso 4.2: Implementar Navbar (Navegación Simplificada)

**⚠️ REQUISITO CRÍTICO: Solo 3 links - Inicio, Recetas, Sobre Mí**

**Crear:** `components/sections/navbar.tsx`

```tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '/recetas', label: 'Recetas' },
    { href: '#sobre-mi', label: 'Sobre Mí' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-vs-border z-50 transition-all duration-300">
      <div className="container-vs">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-h4 font-display font-bold text-vs-text">
              VitaSanus
            </span>
          </Link>

          {/* Desktop Navigation - Solo 3 links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body-sm font-medium text-vs-muted-text hover:text-vs-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 rounded-lg hover:bg-vs-muted-bg transition-colors">
                <Menu className="w-6 h-6 text-vs-text" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-body font-medium text-vs-text hover:text-vs-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
```

**Componentes necesarios:**
```bash
npx shadcn-ui@latest add sheet
```

### Paso 4.2: Implementar Hero Section

**Crear:** `components/sections/hero.tsx`

```tsx
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-vs-bg via-white to-accent-50 relative overflow-hidden section-vs">
      <div className="container-vs relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Trust Badge */}
            <Badge variant="secondary" className="mb-6 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Más de 10,000 personas transformadas
            </Badge>

            {/* Headline */}
            <h1 className="text-hero font-display font-bold mb-6 text-vs-text animate-fade-in-up leading-tight">
              Alimenta tu vida: hábitos simples para un{' '}
              <span className="gradient-text-primary">bienestar real</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-h4 text-vs-muted-text mb-8 leading-relaxed">
              Manual Práctico para Mejorar tu Salud a través de Comida Real, Hábitos Conscientes y Bienestar Duradero.
            </h2>

            {/* Description */}
            <p className="text-body-lg text-vs-muted-text mb-8 leading-relaxed">
              Explora cómo optimizar tu bienestar centrándote en la comida genuina y hábitos conscientes que fomenten un modo de vida sostenible.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="shadow-2xl hover:shadow-soft-lg transform hover:-translate-y-1">
                Comienza tu transformación
              </Button>
              <Button variant="outline" size="lg">
                Conocer el Método
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-body-sm text-vs-muted-text">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-vs-primary" />
                <span>10k+ Personas</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-vs-primary" />
                <span>98% Satisfacción</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50 rounded-3xl overflow-hidden shadow-2xl">
              {/* TODO: Reemplazar con imagen real */}
              <div className="w-full h-full flex items-center justify-center text-vs-primary/30">
                [Imagen Hero - Lifestyle]
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
```

### Paso 4.3: Implementar Pilares Section

**Crear:** `components/sections/pilares.tsx`

```tsx
import { Badge } from '@/components/ui/badge';
import { Apple, Moon, Brain, Dumbbell, Sun, Clock } from 'lucide-react';

const pilares = [
  { icon: Apple, label: 'Alimentación' },
  { icon: Moon, label: 'Sueño' },
  { icon: Brain, label: 'Estrés' },
  { icon: Dumbbell, label: 'Ejercicio' },
  { icon: Sun, label: 'Sol' },
  { icon: Clock, label: 'Ayuno y ritmos circadianos' },
];

export default function Pilares() {
  return (
    <section className="section-vs bg-vs-muted-bg">
      <div className="container-vs">
        <h2 className="section-title">
          Esenciales para lograr un bienestar integral a través de buenos hábitos.
        </h2>

        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {pilares.map((pilar) => (
            <Badge
              key={pilar.label}
              variant="outline"
              className="text-sm px-4 py-2 hover:bg-vs-accent hover:border-vs-accent transition-colors cursor-pointer"
            >
              <pilar.icon className="w-4 h-4 mr-2" />
              {pilar.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Paso 4.4: Implementar Quiénes Somos Section

**Crear:** `components/sections/quienes-somos.tsx`

```tsx
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function QuienesSomos() {
  return (
    <section className="section-vs bg-white">
      <div className="container-vs">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Text Column */}
          <div>
            <h2 className="text-h1 mb-6">¿Quién es VitaSanus?</h2>
            <p className="text-body-lg text-vs-muted-text mb-8 leading-relaxed">
              Una iniciativa dedicada a enseñar un estilo de vida sanador, con enfoque en comida real, educación clara y hábitos que sí se sostienen. Acompañamos procesos, celebramos avances y compartimos herramientas basadas en evidencia.
            </p>
            <Button size="lg">Tu guía para sanar</Button>
          </div>

          {/* Image Column */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-accent-100 to-primary-50 rounded-2xl overflow-hidden shadow-soft-lg">
            {/* TODO: Reemplazar con imagen real */}
            <div className="w-full h-full flex items-center justify-center text-vs-primary/30">
              [Imagen Equipo/Fundador]
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
```

### Paso 4.5: Implementar Beneficios Section

**Crear:** `components/sections/beneficios.tsx`

```tsx
import { Card } from '@/components/ui/card';
import { Zap, Brain, Activity, TrendingUp } from 'lucide-react';

const beneficios = [
  {
    icon: Zap,
    title: 'Energía estable todo el día',
    description: 'Mantén niveles de energía constantes sin picos y caídas.',
  },
  {
    icon: Brain,
    title: 'Claridad mental',
    description: 'Mejora tu concentración y función cognitiva.',
  },
  {
    icon: Activity,
    title: 'Mejor salud metabólica',
    description: 'Optimiza tu metabolismo y control de glucosa.',
  },
  {
    icon: TrendingUp,
    title: 'Rendimiento físico',
    description: 'Aumenta tu capacidad física y recuperación.',
  },
];

export default function Beneficios() {
  return (
    <section className="section-vs bg-vs-muted-bg">
      <div className="container-vs">
        <h2 className="section-title">Transforma Tu Salud</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {beneficios.map((beneficio) => (
            <Card
              key={beneficio.title}
              className="p-6 hover:-translate-y-2 transition-transform"
            >
              <beneficio.icon className="w-12 h-12 text-vs-primary mb-4" />
              <h3 className="text-h4 mb-2">{beneficio.title}</h3>
              <p className="text-body-sm text-vs-muted-text">
                {beneficio.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Paso 4.6: Implementar Testimonios Section

**Crear:** `components/sections/testimonios.tsx`

```tsx
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

const testimonios = [
  {
    name: 'María C.',
    age: '42 años',
    avatar: 'MC',
    quote: 'Bajé 12kg en 3 meses y recuperé mi energía. Ahora me siento mejor que nunca.',
    metrics: ['-12kg', '3 meses'],
  },
  // Añade más testimonios según el PRD
];

export default function Testimonios() {
  return (
    <section className="section-vs bg-white">
      <div className="container-vs">
        <div className="text-center mb-12">
          <h2 className="section-title">#HistoriasVitaSanus</h2>
          <p className="section-subtitle">
            Gente real con procesos reales que mejoraron su salud y energía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonios.map((testimonio) => (
            <Card key={testimonio.name} className="p-6">
              <Quote className="w-8 h-8 text-vs-accent mb-4" />
              <p className="italic mb-4 text-vs-text">"{testimonio.quote}"</p>

              <div className="flex gap-2 mb-4">
                {testimonio.metrics.map((metric) => (
                  <Badge key={metric} variant="secondary">
                    {metric}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{testimonio.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonio.name}</p>
                  <p className="text-xs text-vs-muted-text">{testimonio.age}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Paso 4.7: Implementar CTA Final Section

**Crear:** `components/sections/cta-final.tsx`

```tsx
import { Button } from '@/components/ui/button';

export default function CtaFinal() {
  return (
    <section className="section-vs bg-gradient-to-br from-vs-primary to-primary-700 text-white">
      <div className="container-vs text-center max-w-4xl mx-auto">
        <h2 className="text-h1 mb-6 text-white">
          ¡Descubre el secreto para transformar tu vida hoy mismo!
        </h2>
        <p className="text-xl mb-8 text-white/90">
          ¿Te atreves a dar el primer paso hacia un futuro mejor? Contáctanos y comienza el cambio.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-vs-primary hover:bg-white/90">
          Agendar Consulta Gratis
        </Button>
      </div>
    </section>
  );
}
```

### Paso 4.8: Implementar Footer

**Crear:** `components/sections/footer.tsx`

```tsx
import { Separator } from '@/components/ui/separator';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-vs-muted-bg py-12">
      <div className="container-vs">
        {/* Social Section */}
        <div className="text-center mb-8">
          <h3 className="text-h3 mb-4">Sígueme</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-vs-primary hover:text-vs-primary-dark transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-vs-primary hover:text-vs-primary-dark transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-vs-primary hover:text-vs-primary-dark transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-vs-primary hover:text-vs-primary-dark transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-6 text-body-sm text-vs-muted-text">
          <a href="#" className="hover:text-vs-primary">Política de Privacidad</a>
          <a href="#" className="hover:text-vs-primary">Términos de Servicio</a>
          <a href="#" className="hover:text-vs-primary">Contacto</a>
        </div>

        <p className="text-center text-body-sm text-vs-muted-text mt-6">
          © {new Date().getFullYear()} VitaSanus. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
```

---

## 🧪 Fase 5: Testing y Optimización

### Paso 5.1: Testing Local

```bash
npm run dev
# Abrir http://localhost:3000
```

**Checklist de Testing:**
- [ ] Todas las secciones se renderizan correctamente
- [ ] Responsive en mobile, tablet, desktop
- [ ] Botones y links funcionan
- [ ] Animaciones suaves (si usas Framer Motion)
- [ ] Performance: LCP < 2.5s, CLS < 0.1

### Paso 5.2: Optimización de Imágenes

```bash
# Convertir imágenes a WebP
# Usar Next.js Image component siempre
# Lazy loading habilitado por defecto
```

### Paso 5.3: SEO Básico

**Actualizar `app/layout.tsx`:**

```tsx
export const metadata = {
  title: 'VitaSanus - Alimenta tu vida con hábitos simples',
  description: 'Manual práctico para mejorar tu salud a través de comida real, hábitos conscientes y bienestar duradero. 10k+ personas transformadas.',
  openGraph: {
    title: 'VitaSanus - Transforma tu salud',
    description: 'Comida real, hábitos conscientes, bienestar duradero.',
    images: ['/og-image.jpg'],
  },
};
```

---

## 🚢 Fase 6: Deployment

### Paso 6.1: Deploy a Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

**Alternativa: GitHub + Vercel UI**
1. Push a GitHub
2. Conectar repo en vercel.com
3. Deploy automático en cada push

### Paso 6.2: Configuración de Dominio

1. En Vercel Dashboard → Settings → Domains
2. Añadir dominio personalizado
3. Configurar DNS según instrucciones

---

## 📊 Fase 7: Analytics (Post-Launch)

```bash
# Google Analytics 4
npm install @next/third-parties

# O Plausible (alternativa privacy-friendly)
# Añadir script en layout.tsx
```

---

## 🎯 Checklist Final

### Funcionalidad
- [ ] Todas las secciones implementadas según PRD
- [ ] Formulario de contacto funcional
- [ ] Links de navegación funcionan
- [ ] CTAs clickeables

### Diseño
- [ ] Colores según paleta VitaSanus
- [ ] Tipografía correcta (DM Sans + Inter)
- [ ] Espaciado consistente
- [ ] Sombras y bordes según style guide

### Performance
- [ ] Core Web Vitals en verde (Lighthouse)
- [ ] Imágenes optimizadas (WebP)
- [ ] Lazy loading habilitado
- [ ] Bundle size < 500KB

### SEO
- [ ] Meta tags configurados
- [ ] Sitemap.xml generado
- [ ] robots.txt configurado
- [ ] Structured data (JSON-LD)

### Accesibilidad
- [ ] Contraste WCAG AA
- [ ] Navegación por teclado
- [ ] Aria labels donde necesario
- [ ] Alt text en imágenes

### Responsive
- [ ] Mobile (< 768px) ✓
- [ ] Tablet (768px - 1024px) ✓
- [ ] Desktop (> 1024px) ✓

---

## 🆘 Troubleshooting

**Problema:** Shadcn/ui components no se ven bien
**Solución:** Asegúrate de que `globals.css` tiene las variables CSS correctas

**Problema:** Fuentes no se cargan
**Solución:** Verifica que las variables `--font-sans` y `--font-display` estén en el HTML

**Problema:** Colores incorrectos
**Solución:** Revisa que `tailwind.config.ts` tiene la paleta VitaSanus

---

## 📚 Recursos Adicionales

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Docs](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

---

## ✉️ Soporte

Si tienes dudas durante la implementación:
1. Revisa `initial-prd.md` para especificaciones
2. Consulta `style-guide.md` para detalles de diseño
3. Verifica el código de ejemplo en esta guía

**¡Éxito con la implementación!** 🚀
