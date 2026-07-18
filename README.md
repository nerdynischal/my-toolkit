# Nisch's Toolkit

A small React/Vite site for cataloging the tools in Nischal's design and development workflow. The interface is a continuous grid of product tiles with a detail panel for each tool.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Editing Tools

Tool content lives in:

```text
src/data/tools.json
```

Each tool supports:

- `name`
- `category`
- `icon`
- `iconPath`
- `description`
- `url`

If `url` is omitted, the detail panel shows a disabled product-link state.

## Styling

The design system starts in:

```text
src/styles/tokens.css
```

Component styles are split by area:

```text
src/styles/header.css
src/styles/tool-grid.css
src/styles/detail-panel.css
src/styles/layout.css
src/styles/interactions.css
src/styles/responsive.css
```

Use the root tokens for spacing, typography, radii, colors, surfaces, and motion before adding new raw values.

## Deployment

This project includes a GitHub Pages workflow:

```text
.github/workflows/deploy.yml
```

On push to `main` or `master`, GitHub Actions builds the app and deploys the `dist` folder to GitHub Pages.

Product names, icons, and trademarks belong to their respective owners. Products mentioned are not affiliated with this project.
