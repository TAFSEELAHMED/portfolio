# Tafsil — AI Developer & Researcher Portfolio

A cinematic, dark-mode portfolio for **Tafseel Ur Rehman**, showcasing AI engineering, research, computer vision, LLM systems, and full-stack projects. The interface pairs a restrained luxury aesthetic with a real-time Three.js spatial environment.

## Highlights

- Immersive Three.js background with polyhedra, neural-synapse lattice, gyroscopic rings, and a 2,200+ particle starfield
- Fluid pointer-driven camera motion that preserves normal text selection and page interaction
- Custom contextual cursor that adapts its label across portfolio sections
- Project gallery with categories, technology tags, metrics, external links, and detailed modal views
- Interactive AI Lab for browser-based inference and benchmark demonstrations
- Experience, education, skills, achievements, contact, and resume-viewer sections
- Fully typed portfolio content managed from one data module

## Technology

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **3D graphics:** Three.js
- **Animation:** Motion (`motion/react`)
- **Icons:** Lucide React

## Design system

The portfolio uses an obsidian-dark canvas with restrained charcoal surfaces and warm gold accents:

- Canvas: `#050505`
- Primary gold: `#D4AF37`
- Highlight gold: `#F5D061`
- Deep amber: `#CA8A04`

Typography combines **Playfair Display** for editorial display moments, **Inter** for interface copy, and **JetBrains Mono** for technical details.

## Project structure

```text
.
├── index.html                 # App shell, page metadata, font imports
├── metadata.json              # Platform/application metadata
├── package.json               # Scripts and dependencies
├── vite.config.ts             # Vite and Tailwind configuration
└── src
    ├── App.tsx                # Page composition and overlays
    ├── index.css              # Global design tokens and visual utilities
    ├── types.ts               # Shared TypeScript data models
    ├── data
    │   └── portfolioData.ts   # Single source of truth for portfolio content
    └── components
        ├── Spatial3DBackground.tsx
        ├── CustomCursor.tsx
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── SkillsEcosystem.tsx
        ├── Projects.tsx
        ├── AiLab.tsx
        ├── Experience.tsx
        ├── Education.tsx
        ├── Achievements.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        └── ResumeModal.tsx
```

## Getting started

### Prerequisites

- Node.js 18 or later
- npm, pnpm, or another compatible package manager

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

## Customizing the portfolio

Most site copy and content lives in `src/data/portfolioData.ts`. Update that file to change:

- Profile identity, bio, availability, contact details, and social links
- Hero statistics
- Skills and domain groupings
- Project cards, architecture notes, metrics, images, and demo/repository URLs
- Experience, education, and achievements

Shared data shapes are defined in `src/types.ts`, which makes it straightforward to extend content while retaining type safety.

For visual changes, start with `src/index.css` for global colors, textures, scrollbar behavior, selection styling, and the radial technology grid. The 3D scene is isolated in `src/components/Spatial3DBackground.tsx`.

## Key interactive components

| Component | Purpose |
| --- | --- |
| `Spatial3DBackground` | Renders the interactive neural/cosmic Three.js scene. |
| `CustomCursor` | Tracks pointer state and exposes section-aware labels. |
| `Projects` | Provides filtering and detailed project-modal experiences. |
| `AiLab` | Hosts interactive in-browser AI demonstrations. |
| `ResumeModal` | Lets visitors preview and download the resume. |

## Accessibility and performance notes

- Keep text and interactive controls independent from the WebGL canvas.
- Respect `prefers-reduced-motion` when adding new motion-heavy interactions.
- Optimize large media assets before adding them to project cards.
- Preserve clear focus states and descriptive labels for links, CTAs, and modal controls.

## License

This portfolio is personal work by Tafsil. Add an explicit license before redistributing or reusing the source.
