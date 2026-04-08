# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal "link-in-bio" page for Calicchia Design (Federico Calicchia). Displays profile info and categorized links with an animated particle background, glassmorphism card design, and light/dark theme support. Italian-language UI.

## Commands

- `npm run dev` — Start dev server on port 8080
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build
- `npm run test` — Run all tests (vitest, jsdom environment)
- `npm run test:watch` — Watch mode tests
- Tests live in `src/**/*.{test,spec}.{ts,tsx}`, setup in `src/test/setup.ts`

## Architecture

**Stack**: Preact + TypeScript + Vite + Tailwind CSS 3

**Path alias**: `@` maps to `./src`

**Preact setup**: Uses `@preact/preset-vite` for build-time aliasing. `react`/`react-dom` imports are aliased to `preact/compat` (both in Vite and tsconfig paths), so libraries like `lucide-react` work transparently. Own components import directly from `preact` and `preact/hooks`.

**Key design decisions**:

- **Data-driven links**: All links and profile info are defined in `src/data/links.ts`. The `LinkItem` and `LinkSection` interfaces support emojis or remote icon URLs. To add/edit links, only modify this file.
- **Custom ThemeProvider** (`src/components/ThemeProvider.tsx`): Manages light/dark/system themes via class-based toggling on `<html>`, persisted to localStorage. Consumed via `useTheme()` hook.
- **Canvas 2D particle background** (`src/components/ParticleBackground.tsx`): Vanilla Canvas 2D animation with floating particles. Observes the `dark` class on `<html>` via MutationObserver to adapt colors. Uses a ref to avoid re-creating the animation loop on theme change.
- **Glassmorphism link cards** (`src/components/LinkCard.tsx`): Styled via `.link-card` CSS class in `src/index.css` with backdrop-filter blur, gradient backgrounds, and ripple click effect.
- **Fonts**: Funnel Display (headings, `font-heading`) and Montserrat (body, `font-body`), loaded locally from `public/fonts/` via `@font-face` in `src/index.css`.
- **Theme colors**: Defined as HSL CSS variables in `src/index.css` (`:root` for light, `.dark` for dark). Primary is orange (`22 90% 62%`), accent is purple (`258 50% 58%`).

**No router**: Single-page app, no client-side routing.
