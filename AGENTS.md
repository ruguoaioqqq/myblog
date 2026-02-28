# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

A VuePress 1.x static blog site using `vuepress-theme-libra`. See `README.md` for standard commands (`yarn install`, `yarn dev`, `yarn build`).

### Non-obvious caveats

- **Node.js OpenSSL compatibility**: VuePress 1.x uses webpack 4 which is incompatible with Node.js 17+. You **must** set `NODE_OPTIONS=--openssl-legacy-provider` before running `yarn dev` or `yarn build`. Example: `NODE_OPTIONS=--openssl-legacy-provider yarn dev --port 8080`.
- **Linux case-sensitivity workaround**: The `vuepress-theme-libra` theme has a case mismatch — most layouts import `@theme/components/Footer` (uppercase) but the installed file is `footer.vue` (lowercase). This works on macOS (case-insensitive FS) but breaks on Linux. After `yarn install`, you must run: `cp node_modules/vuepress-theme-libra/components/footer.vue node_modules/vuepress-theme-libra/components/Footer.vue`. The update script handles this automatically.
- **No lint/test scripts**: The project has no ESLint config or test framework. Only `dev` and `build` scripts exist in `package.json`.
- **Dev server port**: Use `NODE_OPTIONS=--openssl-legacy-provider yarn dev --port 8080` to start the dev server.
- **Build SSR issue**: `yarn build` compiles successfully but fails during static HTML rendering due to a Vue Router compatibility issue with Node.js 22. This does not affect the dev server.
