# Shourya Mupparapu — Portfolio

Personal portfolio site, live at [shouryamup.github.io](https://shouryamup.github.io/).

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Vitest](https://vitest.dev/) + Testing Library for tests

## Development

```sh
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run the test suite |
| `npm run preview` | Preview the production build locally |

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow can also be run manually from the Actions tab to choose which version of the site to deploy.
