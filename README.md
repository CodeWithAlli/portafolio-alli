# Portafolio — Allison More

Portafolio personal de **Allison More**, desarrolladora de software especializada en frontend y backend. Sitio bilingüe (español/inglés), con diseño responsivo y animaciones, construido con React + TypeScript.

🔗 **Sitio en vivo:** https://codewithalli.github.io/portafolio-alli/

## Proyectos destacados

- ⭐ [**Sistema de Acceso Facial**](https://acceso-facial.vercel.app/) — kiosco de asistencia con reconocimiento facial en tiempo real, detección de parpadeo (liveness check), y dashboard admin con cálculo automático de faltas/descuentos. Backend en Flask + OpenCV, frontend en React, base de datos y storage en Supabase, desplegado en Render + Vercel. → [código](https://github.com/CodeWithAlli/Acceso_Facial)
- [Sistema de Gestión Electoral ONPE](https://onpe-votaciones.vercel.app/votar) — plataforma de administración de procesos electorales con Supabase y Edge Functions.
- [AUTOLAND](https://autoland-bice.vercel.app/login) — panel de gestión para concesionaria de autos, con seguridad por roles y tablero Kanban.
- Ver el resto en la sección [Proyectos](https://codewithalli.github.io/portafolio-alli/#proyectos) del sitio.

## Stack técnico

- **Core:** React 18, TypeScript, Vite
- **UI:** Tailwind CSS, shadcn/ui (Radix UI), Framer Motion (animaciones), lucide-react (íconos)
- **Formularios y datos:** React Hook Form + Zod, TanStack Query, Recharts
- **Otros:** react-router-dom, next-themes (modo claro/oscuro), i18n propio (contexto de idioma en `src/context`)

## Cómo correrlo en local

\`\`\`bash
git clone https://github.com/CodeWithAlli/portafolio-alli.git
cd portafolio-alli
npm install
npm run dev
\`\`\`

Abre `http://localhost:8080`.

## Scripts disponibles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción (sale a `docs/`, no a `dist/`) |
| `npm run lint` | Linter (ESLint) |
| `npm run test` | Corre los tests (Vitest) |
| `npm run deploy` | Build + publica `docs/` a GitHub Pages |

## Estructura del proyecto

\`\`\`
src/
├── assets/          # Imágenes de perfil y de proyectos
├── components/      # Secciones del sitio (Hero, About, Projects, etc.)
├── context/          # Contexto de idioma (ES/EN)
├── hooks/            # Hooks propios
├── pages/            # Páginas (Index, NotFound)
├── translations.ts   # Todos los textos ES/EN en un solo archivo
└── main.tsx           # Entry point
\`\`\`

## Despliegue

El sitio se publica en GitHub Pages desde la carpeta `docs/` (configurado en `vite.config.ts`). Para publicar cambios nuevos:

\`\`\`bash
npm run deploy
\`\`\`

Esto corre el build y sube el contenido de `docs/` automáticamente a la rama de GitHub Pages.

## Contacto

CV descargable disponible en el sitio, sección de contacto con enlaces a GitHub y LinkedIn.
