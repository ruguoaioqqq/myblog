# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

A VuePress 1.x static blog site using `vuepress-theme-libra`. See `README.md` for standard commands (`yarn install`, `yarn dev`, `yarn build`).

### Non-obvious caveats

- **Node.js OpenSSL compatibility**: VuePress 1.x uses webpack 4 which is incompatible with Node.js 17+. You **must** set `NODE_OPTIONS=--openssl-legacy-provider` before running `yarn dev` or `yarn build`. Example: `NODE_OPTIONS=--openssl-legacy-provider yarn dev --port 8080`.
- **Theme component bug (pre-existing)**: The `vuepress-theme-libra@1.0.6` theme has a case-sensitivity issue — layouts import `@theme/components/Footer` but the file is `footer.vue` (lowercase). This causes inner pages (blog posts, categories, tags) to fail to render while the homepage works fine. This is a bug in the upstream theme package, not in this repo's code.
- **No lint/test scripts**: The project has no ESLint config or test framework. Only `dev` and `build` scripts exist in `package.json`.
- **Dev server default port**: The dev server runs on port 8080 by default. Use `--port` flag to change.
