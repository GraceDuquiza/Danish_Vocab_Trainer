# AGENTS.md

## Project overview

This repository contains **Danish Vocabulary Trainer**, a dependency-free static web app for studying Danish vocabulary and preparing for oral/written exams. It is deployed from the repository root with GitHub Pages and also works as an installable/offline-capable PWA.

Read `README.md` before making broad product changes. There is no package manager, bundler, framework, or automated test suite in this repository.

## Architecture

- `index.html` contains the study, quiz, writing-guide, footer, and cookie-consent UI.
- `cookie-policy.html` contains the privacy and cookie notice.
- `style.css` contains all shared responsive styles.
- `script.js` coordinates study mode, navigation, the writing guide, cookie consent/analytics, and service-worker registration.
- `quiz.js` owns quiz state and interactions. It communicates with `script.js` through custom window events such as `quiz:start-fresh` and `quiz:quit`.
- `verber.js`, `substantiver.js`, `adjektiver.js`, and `adverbKonjunktion.js` define global vocabulary arrays.
- `skriveguide.js` defines the global writing-guide page array; its `content` fields contain trusted HTML rendered by the app.
- `sw.js` implements the offline app shell and static-asset caching.
- `manifest.webmanifest` and `icons/` contain PWA metadata and assets.

The browser scripts are classic scripts, not ES modules. Their order in `index.html` matters: vocabulary data must load before the application and quiz code that consumes it. Do not introduce a build step or third-party dependency unless the task explicitly calls for one.

## Coding conventions

- Use plain HTML5, CSS, and modern browser JavaScript consistent with the existing code.
- Use four-space indentation in HTML/CSS and follow the surrounding JavaScript style in the file being edited.
- Prefer `const`, `let`, optional chaining, and small named helpers; avoid adding new globals unless they are part of the existing data-file pattern.
- Reuse the existing `is-hidden` class and established view-switching/event patterns.
- Preserve Danish characters directly as UTF-8.
- Vocabulary entries use objects with `danish`, `english`, and `example` string fields. Keep articles/infinitive markers consistent with their category.
- Keep CSS in `style.css`; avoid inline styles. Reuse existing variables, responsive breakpoints, button states, focus styles, and reduced-motion behavior where possible.
- Use semantic elements, explicit button types, labels, useful `aria-*` attributes, and keyboard-accessible interactions. Do not rely on color alone to convey state.

## PWA and deployment rules

- Keep internal and cached asset paths relative (for example, `./style.css`) so deployment continues to work under a GitHub Pages repository subpath.
- When changing a cache-busted asset such as `style.css?v=11` or `script.js?v=12`, update its query version consistently in both `index.html`/other HTML pages and `sw.js`.
- When changing any precached file or the `ASSETS` list, increment the `CACHE` version in `sw.js` so existing installations receive the update.
- Add new offline-critical files to `ASSETS`. Do not add cross-origin resources to the app-shell cache.
- Preserve the network-first navigation and offline fallback behavior unless the requested feature requires a caching-strategy change.

## Privacy

Google Analytics is optional and must not load before affirmative consent. Preserve the accept, decline, settings, consent-storage, and analytics-cookie cleanup flows. If analytics or cookie behavior changes, update `cookie-policy.html` and the banner text so they remain accurate.

## Validation

For every change:

1. Review all edited HTML, CSS, and JavaScript for syntax errors and broken relative paths.
2. Serve the repository over HTTP rather than opening `index.html` as a `file://` URL, because service-worker behavior requires a web origin. A simple local option is `python -m http.server 8000` from the repository root.
3. Check the study flow, all vocabulary categories, forward/reverse quiz modes, writing-guide navigation, and returning to the main view when affected.
4. Check keyboard navigation, visible focus, narrow mobile layouts, and the browser console.
5. For PWA/cache changes, verify a fresh load, an update from an older cache, and an offline reload in browser developer tools.
6. For consent changes, test first visit, accept, decline, reopening Cookie settings, and persistence after reload.

Because there is currently no automated test suite, report the exact manual checks performed. Do not claim tests passed if they were not run.

## Scope and repository hygiene

- Keep changes focused on the requested feature and preserve unrelated user edits.
- Do not commit generated caches, local-server files, browser profiles, or editor settings.
- Do not rewrite the vocabulary or writing-guide content merely for stylistic consistency unless content editing is part of the request.
- Update `README.md` when user-visible features, setup, deployment, or project structure materially change.
