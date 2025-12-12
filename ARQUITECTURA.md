# 🏗️ Arquitectura del Proyecto

## Estructura de Carpetas

```
Gruber-Landing/
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.jsx           # Layout principal con metadata SEO
│   │   ├── page.jsx             # Página home (orquesta componentes)
│   │   └── globals.css          # Estilos globales + Tailwind
│   │
│   ├── components/              # Componentes React (UI)
│   │   ├── Header.jsx          # Navegación fija
│   │   ├── Hero.jsx            # Hero con logo circular
│   │   ├── Services.jsx        # Grid de servicios
│   │   ├── Projects.jsx        # Galería de proyectos
│   │   ├── WhyUs.jsx           # Ventajas competitivas
│   │   ├── FAQ.jsx             # Preguntas frecuentes
│   │   ├── CTA.jsx             # Call to action
│   │   ├── Contact.jsx         # Formulario de contacto
│   │   └── Footer.jsx          # Pie de página
│   │
│   └── lib/                     # Lógica de negocio
│       ├── constants/
│       │   └── index.js        # Datos centralizados (servicios, FAQs, etc)
│       └── utils/
│           └── index.js        # Funciones reutilizables (validaciones, scroll)
│
├── public/                      # Archivos estáticos
│   ├── favicon.ico
│   └── robots.txt
│
├── scripts/
│   └── pre-deploy.js           # Validaciones pre-deploy
│
├── firebase.json               # Configuración Firebase Hosting
├── next.config.mjs             # Next.js config (static export)
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.mjs          # PostCSS + Tailwind 4
└── package.json                # Dependencias
```

## Flujo de Datos

```
Usuario → page.jsx → Componentes → lib/constants → Renderizado
                         ↓
                   lib/utils (validaciones, scroll)
```

## Capa de Presentación (src/components/)

### Header.jsx
- **Responsabilidad**: Navegación principal
- **Estado**: isMenuOpen (menú móvil)
- **Funciones**: scrollTo() para navegación suave
- **Datos**: Usa NAV_ITEMS de constants

### Hero.jsx
- **Responsabilidad**: Sección principal con logo circular
- **Datos**: COMPANY_INFO, STATS de constants
- **Funciones**: scrollTo() para CTAs
- **Diseño**: Replica tarjetas de presentación del cliente

### Services.jsx
- **Responsabilidad**: Mostrar servicios ofrecidos
- **Datos**: SERVICES array de constants
- **Diseño**: Grid responsive 3 columnas

### Projects.jsx
- **Responsabilidad**: Galería de proyectos realizados
- **Datos**: Hardcoded (futuro: CMS o API)
- **Diseño**: Cards con hover effects

### WhyUs.jsx
- **Responsabilidad**: Ventajas competitivas
- **Datos**: Hardcoded
- **Diseño**: Grid 4 columnas + sección Misión/Visión

### FAQ.jsx
- **Responsabilidad**: Preguntas frecuentes con acordeón
- **Datos**: FAQS array de constants
- **Estado**: openIndex para acordeón

### CTA.jsx
- **Responsabilidad**: Call-to-action principal
- **Funciones**: scrollTo("contacto")
- **Diseño**: Fondo oscuro con contraste

### Contact.jsx
- **Responsabilidad**: Formulario de contacto
- **Estado**: formData (nombre, email, teléfono, servicio, mensaje)
- **Validación**: isValidEmail, isValidPhone de utils
- **Datos**: COMPANY_INFO de constants

### Footer.jsx
- **Responsabilidad**: Información de pie de página
- **Datos**: COMPANY_INFO de constants
- **Funciones**: scrollTo() para navegación

## Capa de Datos (src/lib/constants/)

### index.js
Centraliza TODOS los datos del proyecto:

- **COMPANY_INFO**: Información de la empresa
  - name, phone, email, location, schedule
  
- **SERVICES**: Array de servicios (6 elementos)
  - id, icon, title, description, features[]
  
- **STATS**: Estadísticas (3 elementos)
  - value, label
  
- **NAV_ITEMS**: Items de navegación (3 elementos)
  - id, label
  
- **FAQS**: Preguntas frecuentes (6 elementos)
  - question, answer

## Capa de Utilidades (src/lib/utils/)

### index.js
Funciones reutilizables:

- **scrollToSection(id)**: Scroll suave a sección
- **isValidEmail(email)**: Validación de email
- **isValidPhone(phone)**: Validación de teléfono español
- **formatPhone(phone)**: Formateo de teléfono

## Capa de Aplicación (src/app/)

### layout.jsx
- **Responsabilidad**: Layout raíz
- **Metadata**: SEO, Open Graph, Twitter Cards
- **HTML**: lang="es"
- **Body**: Contenedor de toda la app

### page.jsx
- **Responsabilidad**: Orquestar componentes
- **Composición**:
  ```jsx
  <main>
    <Header />
    <Hero />
    <Services />
    <Projects />
    <WhyUs />
    <FAQ />
    <CTA />
    <Contact />
    <Footer />
  </main>
  ```

### globals.css
- **Responsabilidad**: Estilos globales
- **Contenido**:
  - Reset CSS
  - Variables CSS (:root)
  - Animaciones (@keyframes)
  - Clases de utilidad
  - Tailwind directives

## Principios de Arquitectura Aplicados

### ✅ Separación de Responsabilidades (SoC)
- **Presentación**: src/components/
- **Datos**: src/lib/constants/
- **Lógica**: src/lib/utils/
- **Configuración**: Archivos raíz

### ✅ Single Source of Truth (SSOT)
- Todos los datos en `src/lib/constants/index.js`
- No hay duplicación de información
- Fácil mantenimiento y actualización

### ✅ DRY (Don't Repeat Yourself)
- Funciones reutilizables en `src/lib/utils/`
- Componentes modulares y reutilizables
- Estilos consistentes con Tailwind

### ✅ Componentes Puros
- Componentes reciben props
- No hay lógica de negocio compleja en componentes
- Fácil testing y debugging

### ✅ Convención sobre Configuración
- Estructura de carpetas estándar de Next.js
- Nombres descriptivos y consistentes
- Imports con alias `@/` para claridad

## Flujo de Desarrollo

1. **Desarrollo Local**
   ```bash
   npm run dev  # localhost:3000
   ```

2. **Modificar Datos**
   - Editar `src/lib/constants/index.js`
   - No tocar componentes

3. **Agregar Utilidad**
   - Agregar función en `src/lib/utils/index.js`
   - Exportar y usar en componentes

4. **Nuevo Componente**
   - Crear en `src/components/`
   - Importar en `src/app/page.jsx`
   - Usar datos de constants

5. **Build de Producción**
   ```bash
   npm run build  # Genera /out
   ```

6. **Deploy**
   ```bash
   npm run deploy  # Build + Firebase deploy
   ```

## Ventajas de esta Arquitectura

✅ **Mantenibilidad**: Fácil encontrar y modificar código
✅ **Escalabilidad**: Agregar componentes/utilidades sin complejidad
✅ **Testabilidad**: Componentes y funciones aislados
✅ **Performance**: Static export, sin server-side logic
✅ **SEO**: Metadata optimizada, HTML semántico
✅ **DX (Developer Experience)**: Estructura clara y predecible

## Próximas Mejoras (Opcional)

- [ ] Agregar TypeScript para type safety
- [ ] Integrar CMS (Contentful/Sanity) para proyectos
- [ ] Agregar Analytics (Google Analytics 4)
- [ ] Implementar i18n (español/inglés)
- [ ] Agregar tests (Jest + React Testing Library)
- [ ] Optimizar imágenes con next/image
- [ ] Agregar PWA (Service Worker)

---

**Última actualización**: Diciembre 2025
