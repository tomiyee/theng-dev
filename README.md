# theng.dev

Personal portfolio site built with React 19, TypeScript, and MUI, deployed to GitHub Pages at [theng.dev](https://theng.dev).

## Tech Stack

- **React 19** + **TypeScript 6** via Vite
- **MUI v5** for components and theming
- **React Router v6** for client-side routing
- **ESLint v9** + **Prettier** for linting and formatting

## Development

```bash
yarn              # Install dependencies
yarn dev          # Start dev server with HMR at localhost:5173
yarn build        # Type-check with tsc, then bundle with Vite (output: build/)
yarn lint         # ESLint on .ts/.tsx — zero warnings allowed
yarn lint-fix     # ESLint with auto-fix
yarn style        # Prettier write
```

Pre-commit hooks run `lint` and `style-check` automatically before every commit.

### Workflow

1. Create a branch for the feature.
2. Make scoped changes and verify with `npm run dev`.
3. Open a PR with a brief description of the changes.
4. Review, then squash and merge using semantic commit conventions.

## Project Structure

```
src/
├── assets/          # Static assets and project-data.json (portfolio source of truth)
├── layout/
│   ├── Banner/      # Canvas-based boid flocking simulation (home page only)
│   └── MainLayout   # Navbar + Footer shell shared by all pages
├── routes/          # React Router config — HomeRoute and MainRoutes
├── theme/           # MUI ThemeProvider palette and typography
└── pages/           # Home, Projects, Foundry, and 404
```

**Project data** — `src/assets/project-data.json` controls what appears on the site. Set `featured: true` for items shown on the home page; all entries appear on `/projects`.

## Deployment

Merge to `main`, then run:

```bash
npm run deploy
```

This builds the site and publishes `build/` to GitHub Pages. Changes may take a few minutes to propagate to [theng.dev](https://theng.dev).
