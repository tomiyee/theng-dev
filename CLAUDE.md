# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server with HMR
npm run build        # Type-check with tsc, then bundle with Vite (output: build/)
npm run lint         # ESLint on .ts/.tsx, zero warnings allowed
npm run lint-fix     # ESLint with auto-fix
npm run style        # Prettier write
npm run style-check  # Prettier check (runs in pre-commit)
npm run deploy       # Build and push to GitHub Pages via gh-pages
```

Pre-commit hooks run `lint` and `style-check` automatically before every commit.

## Architecture

This is a single-page React portfolio site built with Vite + TypeScript. There are no tests.

**Routing** — `src/routes/index.tsx` composes two route configs via `useRoutes`:

- `HomeRoute` — renders `<Banner>` above `<MainLayout>` with `<Home>` as the child. The Banner is only shown on `/`.
- `MainRoutes` — shares `<MainLayout>` (Navbar + Outlet + Footer) for `/projects`, `/foundry`, and the 404 fallback.

**Layout** — `src/layout/MainLayout.tsx` wraps every page with `<Navbar>` and `<Footer>`. The home page is special: it prepends the full-viewport `<Banner>` before `MainLayout`, so the Banner sits outside the Navbar/Footer shell.

**Banner** — `src/layout/Banner/` is a canvas-based boid flocking simulation. `Boid.ts` and `Vector2D.ts` are pure simulation classes; `Banner.tsx` drives the `requestAnimationFrame` loop and wires up mouse tracking.

**Theming** — MUI `ThemeProvider` is set up in `App.tsx` using the theme defined in `src/theme/index.tsx`. All palette and typography customisation lives there.

**Project data** — `src/assets/project-data.json` is the single source of truth for portfolio projects. Each entry has a `featured` boolean that controls whether it appears on the home page (`ProjectsSection`) vs. the full archive (`/projects`).

**Styling** — MUI `sx` prop and `styled()` are used throughout. Prettier is configured for single quotes (`.prettierrc.json`). ESLint extends `eslint:recommended`, `plugin:react/recommended`, and `plugin:@typescript-eslint/recommended` with camelCase enforcement and no-param-reassign.

## Deployment

Merge to `main`, then run `npm run deploy` from the `main` branch. This builds the site and publishes the `build/` directory to GitHub Pages at `theng.dev`. The deploy may take a few minutes to propagate.
