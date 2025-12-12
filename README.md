# 🏗️ Guilarte & Reformas - Landing Page

Landing page profesional para **Guilarte & Reformas**, empresa especializada en reformas integrales y limpieza profesional en Alicante y Comunidad Valenciana.

## 📋 Descripción

Sitio web estático construido con Next.js 15 y Tailwind CSS 4, optimizado para rendimiento y SEO. Diseño limpio y profesional basado en la imagen corporativa de la empresa.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15.3.3 (App Router + Static Export)
- **React**: 19.0.0
- **Estilos**: Tailwind CSS 4 (@tailwindcss/postcss)
- **Hosting**: Firebase Hosting
- **Rendimiento**: 100% estático pre-renderizado

## 📦 Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+ o 20+
- Yarn o npm

### 1. Instalación de Dependencias
```bash
yarn install
# o
npm install
```

### 2. Desarrollo Local
```bash
yarn dev
# o
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Build de Producción
```bash
yarn build
# o
npm run build
```
Genera la carpeta `out/` con el sitio estático.

### 4. Preview Local del Build
```bash
yarn preview
# o
npm run preview
```

## 🔥 Despliegue en Firebase

### Configuración Inicial (Solo primera vez)
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login en Firebase
firebase login

# Inicializar proyecto (ya configurado)
firebase init hosting
```

### Deploy
```bash
# Build + Deploy en un comando
yarn deploy

# O manualmente
yarn build
firebase deploy
```

**URL de Producción**: Configurada en `.firebaserc`

## 📁 Estructura del Proyecto

```
Gruber-Landing/
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Layout raíz con metadata
│   │   ├── page.jsx            # Página principal
│   │   └── globals.css         # Estilos globales + Tailwind
│   ├── components/
│   │   ├── Header.jsx          # Navegación fija
│   │   ├── Hero.jsx            # Sección principal con logo circular
│   │   ├── Services.jsx        # Grid de servicios
│   │   ├── Projects.jsx        # Galería de proyectos
│   │   ├── WhyUs.jsx           # Ventajas competitivas
│   │   ├── FAQ.jsx             # Preguntas frecuentes
│   │   ├── CTA.jsx             # Call-to-action
│   │   ├── Contact.jsx         # Formulario de contacto
│   │   └── Footer.jsx          # Pie de página
│   └── lib/                    # Utilidades (futuro)
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── scripts/
│   └── pre-deploy.js           # Validación pre-deploy
├── .firebaserc                 # Configuración Firebase
├── firebase.json               # Reglas de hosting
├── next.config.mjs             # Configuración Next.js
├── tailwind.config.js          # Configuración Tailwind
├── postcss.config.mjs          # PostCSS con Tailwind 4
├── jsconfig.json               # Alias de rutas (@/)
└── package.json                # Dependencias y scripts

```

## 🎨 Componentes

### Header
- Navegación fija con scroll
- Logo circular con gradiente dorado
- Menú responsive
- Botón de llamada destacado

### Hero
- Logo circular grande (replica tarjetas de presentación)
- Borde dorado con gradiente
- Información de contacto integrada
- CTAs principales
- Estadísticas de la empresa

### Services
- Grid responsive de servicios
- 6 servicios principales
- Iconos con emojis
- Hover effects

### Projects
- Galería de proyectos realizados
- Cards con información
- Categorías por tipo de servicio

### WhyUs
- 8 razones para elegir Guilarte
- Grid de 4 columnas
- Misión, Visión y Valores

### FAQ
- Acordeón de preguntas frecuentes
- 6 preguntas comunes

### CTA
- Llamada a la acción potente
- Doble CTA (formulario + llamada)
- Fondo oscuro con contraste

### Contact
- Formulario de contacto completo
- Validación de campos
- Cards con datos de contacto
- Grid responsive 1/3 - 2/3

### Footer
- Información de la empresa
- Enlaces de navegación
- Datos de contacto
- Copyright

## 🎯 Características

- ✅ **100% Responsive**: Mobile-first design
- ✅ **SEO Optimizado**: Metadata completa, robots.txt, sitemap
- ✅ **Rendimiento**: Static export para máxima velocidad
- ✅ **Accesibilidad**: Semántica HTML correcta
- ✅ **Smooth Scroll**: Navegación suave entre secciones
- ✅ **Animaciones**: Fade-in y hover effects sutiles
- ✅ **Formularios**: Validación client-side
- ✅ **CTAs Múltiples**: Teléfono, email, formulario

## 🌈 Paleta de Colores

```css
/* Colores principales */
--orange-500: #f97316    /* Primario - CTAs */
--orange-600: #ea580c    /* Hover states */
--amber-400: #fbbf24     /* Acentos dorados */
--amber-500: #f59e0b     /* Gradientes */

/* Colores de fondo */
--gray-50: #f9fafb       /* Fondos claros */
--gray-800: #1f2937      /* Fondos oscuros */
--gray-900: #111827      /* Footer, CTA */

/* Texto */
--gray-600: #4b5563      /* Texto secundario */
--gray-700: #374151      /* Texto principal */
--gray-900: #111827      /* Títulos */
```

## 📱 Información de Contacto

- **Teléfono**: +34 674 30 21 28
- **Email**: gruberhawk@gmail.com
- **Ubicación**: Alicante, Comunidad Valenciana
- **Horario**: Lunes a Viernes 8:00-18:00, Sábado 9:00-14:00

## 🔧 Scripts Disponibles

```json
{
  "dev": "next dev",                    // Desarrollo en localhost:3000
  "build": "next build",                // Build de producción
  "start": "next start",                // Servidor de producción
  "lint": "next lint",                  // Linter ESLint
  "preview": "npx serve@latest out",    // Preview del build
  "predeploy": "node scripts/pre-deploy.js", // Pre-validación
  "deploy": "yarn build && firebase deploy"  // Build + Deploy
}
```

## 🐛 Troubleshooting

### Error: Puerto 3000 ocupado
```bash
lsof -ti:3000 | xargs kill -9
yarn dev
```

### Error: Tailwind CSS no funciona
1. Verificar `postcss.config.mjs` tiene `@tailwindcss/postcss`
2. Verificar `globals.css` tiene directivas `@tailwind`
3. Reiniciar servidor dev

### Error: Build falla
```bash
rm -rf .next out node_modules
yarn install
yarn build
```

### Firebase deploy falla
```bash
# Verificar login
firebase login --reauth

# Verificar proyecto
firebase projects:list

# Deploy con logs
firebase deploy --debug
```

## 📄 Variables de Entorno

Archivo `.env.local` (opcional):
```env
NEXT_PUBLIC_SITE_URL=https://guilarte-reformas.web.app
NEXT_PUBLIC_CONTACT_EMAIL=gruberhawk@gmail.com
NEXT_PUBLIC_PHONE=+34674302128
```

## 🔐 Configuración Firebase

El proyecto está configurado para:
- **Hosting**: Archivos estáticos desde `/out`
- **Rewrites**: SPA fallback a `/index.html`
- **Headers**: Cache y seguridad optimizados
- **Redirects**: www → non-www (si aplica)

Ver `firebase.json` para detalles.

## 📝 Notas de Desarrollo

- **Tailwind CSS 4**: Usa PostCSS plugin, no CLI
- **Next.js 15**: App Router con `output: 'export'`
- **React 19**: Server/Client Components híbrido
- **Imágenes**: Usar Next.js Image optimizado (si hay fotos)
- **Fonts**: System fonts por defecto (performance)

## 🎓 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 📞 Soporte

Para dudas sobre el proyecto:
- **Developer**: Consultar documentación interna
- **Cliente**: gruberhawk@gmail.com / +34 674 30 21 28

---

**Guilarte & Reformas** © 2025 - Construcción y Servicios Profesionales
