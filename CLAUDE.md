# CLAUDE.md - Juju Wedding Website

This file provides guidance for AI assistants working in this codebase.

## Project Overview

A Gatsby-based wedding website built on the StartBootstrap Agency template. Content is managed via Markdown files and the site features RSVP functionality, countdown timers, a photo gallery, and password-protected sections.

- **Site URL:** https://jujubaewedding.com
- **Node version:** 16.2 (see `.nvmrc`)
- **Package manager:** Yarn (required — do not use npm)

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Gatsby 4.9.2 |
| UI | React 17, Bootstrap 5, React Bootstrap 2 |
| Styling | SCSS / node-sass |
| Icons | Font Awesome (solid + brands) |
| Content | Markdown via gatsby-transformer-remark |
| Functional utils | Ramda |
| HTTP | Axios |
| Session / cookies | js-cookie |
| Deployment | Docker + Kubernetes |

## Commands

```bash
yarn dev        # Start local development server (hot reload)
yarn build      # Production build into /public
yarn serve      # Serve the production build locally
yarn test       # Run ESLint on ./src (this is the test suite)
yarn testbuild  # yarn test && yarn build
yarn format     # Prettier auto-format src/**/*.{js,jsx}
yarn clean      # Clear Gatsby cache (.cache + public)
```

Always run `yarn test` before committing to catch lint errors early. CI runs `yarn testbuild` on PRs to the `develop` branch.

## Directory Structure

```
├── config/
│   ├── site.js            # Site metadata (title, URL, analytics ID)
│   └── CustomIcons.jsx    # Custom Font Awesome icon definitions
├── content/
│   ├── assets/images/     # Photos used on the site
│   ├── sections/          # Numbered Markdown files — one per page section
│   ├── Top.en.md          # Hero / header content
│   ├── NavBar.en.md       # Navigation items
│   └── Footer.en.md       # Footer content
├── src/
│   ├── pages/
│   │   ├── index.jsx      # Main entry point; GraphQL query + section orchestration
│   │   └── 404.jsx
│   ├── views/
│   │   ├── Top/           # Hero section
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── Sections/      # One subfolder per page section component
│   ├── components/        # Shared, reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Pure utility functions
│   ├── libs/              # Third-party wrappers / adapters
│   ├── style/
│   │   ├── main.scss      # Global styles
│   │   └── core.scss      # Auto-imported via gatsby-config (variables, mixins)
│   └── context/           # React context providers
├── k8s/                   # Kubernetes manifests
├── .github/workflows/     # CI/CD pipelines
├── gatsby-config.js       # Gatsby plugins, fonts, SASS config
├── gatsby-node.js         # Markdown schema + custom field definitions
├── gatsby-browser.js      # Client-side Gatsby APIs
└── babel.config.js        # Module aliases + tree-shaking
```

## Path Aliases

Babel and jsconfig define the following aliases — use them instead of relative paths:

```js
import SEO             from "components/SEO";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import PageSection     from "components/PageSection";
import breakDownAllNodes from "utils/breakDownAllNodes";
// also: "views", "context", "libs", "config"
```

## Code Conventions

### Components

- All components are **functional** with **PropTypes** validation (enforced by ESLint at error level).
- Each component directory has an `index.js` that re-exports the main component.
- SCSS modules are co-located with their component (e.g., `PageSection.jsx` + `PageSection.scss`).
- `defaultProps` should be declared for optional props.

### Hooks

- Custom hooks live in `src/hooks/` and follow the `useXxx` naming pattern.
- The `react-hooks` ESLint plugin enforces rules-of-hooks and exhaustive-deps.

### Utilities

- Utilities are pure functions in `src/utils/`.
- Ramda is the preferred functional programming library (`curry`, `path`, `filter`, etc.).
- Import Ramda functions selectively — the Babel plugin prevents full-bundle imports.

### Styling

- Write styles in SCSS; `core.scss` is automatically imported in every file via `gatsby-config.js`.
- Use Bootstrap utility classes when possible before writing custom SCSS.

### Content / Markdown

Section markdown files use YAML front matter:

```yaml
---
anchor: "Section Anchor"   # Used for nav links + scroll target IDs
header: "Display Title"
subheader: "Subtitle"
# Section-specific fields follow (timeline, members, faqs, etc.)
---
```

Filenames follow the pattern `<order>-<SectionName>.md` (e.g., `2-OurStory.md`). The numeric prefix controls display order. `fileNameToSectionName` maps the base name to the corresponding React component in `views/Sections/`.

### Formatting

| Rule | Value |
|---|---|
| Print width | 100 chars |
| Indentation | 2 spaces |
| Quotes | Double (`"`) |
| Semicolons | Yes |
| Trailing commas | All |
| Line endings | LF |

Run `yarn format` to auto-apply Prettier. The editor config (`.editorconfig`) enforces these settings in VS Code.

## Data Flow

1. `gatsby-source-filesystem` sources all files under `content/`.
2. `gatsby-transformer-remark` parses Markdown into `MarkdownRemark` GraphQL nodes.
3. `gatsby-node.js` adds `fileName` and `directoryName` fields to each node, and defines nullable schema types (`Social`, `Service`, `TeamMember`, `Frontmatter`).
4. `src/pages/index.jsx` issues a single GraphQL query that fetches all frontmatter, sorted by directory then filename.
5. `breakDownAllNodes()` splits the flat list into `top`, `navbar`, `footer`, and `sections`.
6. `fileNameToSectionName()` maps each section filename to the matching component in `views/Sections/`.
7. Components are rendered with alternating `bg-light` / `bg-white` backgrounds.
8. `showHideSection()` controls visibility of individual sections.

## Authentication / RSVP

- The site has password-protected RSVP functionality.
- `src/utils/passwordUtil.js` validates passwords and manages session state.
- Sessions are persisted via `js-cookie`.
- The `RsvpDialog` component handles the UI flow.
- `axios` is used for any HTTP calls to the RSVP backend API.

## Gatsby Configuration Highlights

- **Google Analytics:** `gatsby-plugin-google-analytics` (tracking ID in `config/site.js`)
- **PWA:** `gatsby-plugin-offline` enables service-worker based offline support
- **Fonts loaded:** Droid Sans, Montserrat, Kaushan Script, Roboto Slab, Better Saturday, Great Vibes
- **SASS auto-import:** `core.scss` is prepended to every SCSS file

## Deployment

### Docker

```bash
docker build -f Dockerfile.juju-wedding-website -t <image>:<tag> .
```

Multi-stage build: Node 16 compiles the Gatsby site; the output is served by `arm64v8/nginx:alpine`.

### Kubernetes

```bash
kubectl apply -f k8s/deployment.yml
kubectl apply -f k8s/service.yml
kubectl apply -f k8s/ingress.yml
```

Or use `deploy.sh` which wraps the build, push, and apply steps.

### CI/CD

GitHub Actions (`.github/workflows/docker-image-dev.yml`) builds the Docker image on every PR to the `develop` branch.

## Common Gotchas

- **Node version matters.** Use `nvm use` (reads `.nvmrc`) before installing or building. Mismatched Node versions cause `node-sass` compilation failures.
- **Always use Yarn.** A `yarn.lock` is committed; running `npm install` will create a conflicting `package-lock.json`.
- **Gatsby cache issues.** If the dev server shows stale data or build errors, run `yarn clean` first.
- **Schema changes.** If you add new fields to a Markdown front matter, update the `gatsby-node.js` schema definitions to make those fields nullable/typed, otherwise GraphQL builds will fail.
- **Font Awesome imports.** Import icons selectively via `utils/makeFAIcon.js` — the Babel `transform-imports` plugin tree-shakes unused icons. Never import from the top-level `@fortawesome` package directly.
- **React Bootstrap tree-shaking.** Similarly, import React Bootstrap components from their specific paths or rely on the configured `babel-plugin-import`.
- **Prop-types are required.** The ESLint rule `react/prop-types` is set to `error`. Every component prop must be declared; builds will fail lint if they are missing.
