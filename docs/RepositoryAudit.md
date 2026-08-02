# Repository Audit

**Owner:** Tyler Vo

**Status:** Complete

**Version:** 0.1.0

**Last Updated:** August 3, 2026

---

# Purpose

This document captures the findings of the initial audit of the TylerKVO.com repository. It provides a snapshot of the project's current architecture, identifies areas for improvement, and establishes a baseline for future modernization efforts.

The repository audit serves as the starting point for technical planning and guides the work completed during the Website Foundation Epic.

---

## 1. Executive Summary

Tylerkvo.com is a functional single-page React portfolio deployed as a static site through GitHub Pages and connected to the custom domain `tylerkvo.com`. The project has a sensible first-generation component hierarchy and already separates routing, page composition, and several page sections.

The project should be **modernized rather than discarded**. Its strongest elements—React, component-based composition, GitHub Pages hosting, the custom domain, and the existing project content—can be retained. The main concerns are an aging Create React App toolchain, template-era JavaScript and CSS living alongside React, duplicated layout markup, hardcoded content, inconsistent JSX, stale or accidental dependencies, limited documentation, missing automated tests, and project links that point to route components that do not exist.

The recommended direction is a controlled v2 migration: preserve the live site, establish a verified local development workflow, document the architecture, migrate the build system to Vite, introduce TypeScript incrementally, move content into structured data, simplify dependencies, and redesign the application around pages, reusable components, features, and services.

## 2. Current Technology Stack

### Application

- React 18.2
- React DOM 18.2
- JavaScript and JSX
- React Router DOM 6.12
- Create React App / `react-scripts` 5.0.1
- npm with `package-lock.json`

### UI and animation

- `react-tsparticles` and `tsparticles`
- AOS
- Anime.js
- React Vertical Timeline Component
- Large template-derived global CSS files
- Static JavaScript plugins loaded from `public/`
- Swiper loaded from a CDN

### Analytics and performance

- Google Analytics is initialized directly in `public/index.html`
- `react-ga` remains installed, but its React integration code is commented out
- Create React App's `web-vitals` helper is present but called without a reporting callback

### Hosting and deployment

- GitHub Pages
- `gh-pages` deployment package
- Custom domain: `tylerkvo.com`
- Root-level `CNAME`
- Deployment script: `npm run deploy`

## 3. Repository Structure

```text
personal-portfolio/
├── build/                     # Generated production output, committed to repository
├── docs/
│   └── CNAME                  # GitHub Pages domain file for docs-based publishing
├── public/
│   ├── css/                   # Large template/global stylesheets
│   ├── images/                # Profile, project, and decorative assets
│   ├── js/                    # Template-era browser scripts
│   ├── unitybuild/            # Unity WebGL game and supporting assets
│   ├── index.html             # HTML shell and external scripts/styles
│   └── manifest/favicon files
├── src/
│   ├── Components/
│   │   ├── Projects/          # Individual project-detail components
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Extra.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── Particle.js
│   │   ├── Project.js
│   │   └── Works.js
│   ├── App.js                 # Router and top-level application composition
│   ├── index.js               # React entry point
│   └── reportWebVitals.js
├── CNAME
├── package.json
├── package-lock.json
└── README.md
```

### Assessment

The structure is understandable for a small Create React App project. It is organized primarily by homepage section rather than by reusable UI, page, feature, or service boundaries. This works at the present size but will become difficult to maintain once travel, fantasy, crossword, blog, and additional portfolio features are introduced.

## 4. Application Architecture

### Startup flow

```text
Browser requests tylerkvo.com
        ↓
GitHub Pages serves public/index.html-derived production HTML
        ↓
The page provides <div id="root"></div>
        ↓
src/index.js creates the React root
        ↓
<App /> is rendered inside React.StrictMode
        ↓
App.js selects a page based on the URL
```

### Route flow

```text
App.js
├── /                       → Home.js
└── /projects/:projectId    → Project.js
```

`HashRouter` is used, producing URLs such as `/#/projects/Scanner`. This is a common workaround for static hosting because GitHub Pages cannot natively route arbitrary client-side paths back to the React entry page.

### Homepage composition

```text
Home.js
├── Header
├── Particle
├── Hero markup embedded directly in Home
├── About
├── Experience
├── Works
└── Footer
```

### Project-detail flow

`Project.js` reads `projectId` from the route and dynamically imports a matching file from `src/Components/Projects/`. For example:

```text
/projects/Scanner → ./Projects/Scanner
```

This is an inventive lightweight approach, but it is fragile because route names must exactly match filenames and there is no central project registry or validation.

## 5. Strengths to Preserve

### 5.1 Clear entry point and routing responsibility

`index.js` bootstraps the application, while `App.js` focuses mostly on routing. This separation is easy to understand and should be preserved conceptually during modernization.

### 5.2 Component-based homepage composition

The homepage is assembled from separate components such as `About`, `Experience`, `Works`, `Header`, and `Footer`. This is substantially better than placing the entire application in one large component.

### 5.3 Working static-hosting model

GitHub Pages is suitable for the current application because the site is predominantly static and the planned Sleeper integration can initially call a public read-only API from the browser.

### 5.4 Existing custom domain and deployment scripts

The custom domain and `gh-pages` deployment flow provide a working production foundation that can remain in place during the early modernization phases.

### 5.5 Existing interactive work

The repository already includes particles, smooth navigation, project detail routes, a Unity WebGL build, embedded project media, and responsive template styling. This provides useful content and interaction to preserve or selectively rebuild.

## 6. Findings and Technical Debt

Priority definitions:

- **P0:** Immediate security, privacy, or production-blocking concern
- **P1:** High-value foundation work before major feature development
- **P2:** Important maintainability or quality improvement
- **P3:** Cleanup or refinement

### 6.1 Create React App is the build system

**Priority:** P1  
**Observation:** The project uses `react-scripts` 5.0.1 and Create React App conventions.  
**Why it matters:** Create React App is no longer the preferred foundation for new React projects, and its hidden configuration and aging dependency tree will make future maintenance harder.  
**Recommendation:** Migrate to Vite in a dedicated ticket after local setup and build behavior are verified. Preserve functionality during the migration.

### 6.2 The repository mixes React with template-era global scripts

**Priority:** P1  
**Observation:** `public/index.html` loads `js/plugins.js`, `js/main.js`, Swiper from a CDN, a missing-looking `anime.min.js` path, and large global CSS files. Some of those scripts directly query and manipulate the DOM.  
**Why it matters:** React expects to own the UI lifecycle. Direct DOM manipulation outside React can create hidden coupling, stale event handlers, timing problems, and difficulty debugging component behavior.  
**Recommendation:** Inventory which template scripts are still required. Gradually replace useful behavior with React components/hooks and remove unused scripts and CSS.

### 6.3 Several project routes do not have matching components

**Priority:** P1  
**Observation:** `Works.js` links to project IDs including `LousList`, `Portfolio`, `UNSC`, `StewsBoatSprings`, and `SlideDecks`, but the `Projects` folder only contains `Scanner`, `EscapeTheLawn`, and `Sabre`.  
**Why it matters:** Those links resolve to the generic “This Project Page is in Progress” state because dynamic imports fail. This can look like a broken experience to visitors.  
**Recommendation:** Create an explicit project data registry with a published/draft status. Only render internal detail links for published project pages; otherwise link directly to the external artifact or show a clearly labeled “coming soon” state.

### 6.4 Dynamic imports are driven directly by a URL parameter

**Priority:** P2  
**Observation:** `Project.js` interpolates `projectId` into an import path.  
**Why it matters:** This tightly couples public URLs to filenames and makes refactoring, validation, metadata, error handling, and build-tool migration harder.  
**Recommendation:** Replace it with a controlled mapping or data-driven project registry, such as `{ scanner: ScannerPage }`, or use structured project data and a reusable project-detail template.

### 6.5 Loading, missing, and error states are indistinguishable

**Priority:** P2  
**Observation:** `ProjectComponent` starts as `null`, and `null` also represents an import error. The UI immediately displays “This Project Page is in Progress” while a valid dynamic import is still loading.  
**Why it matters:** Visitors may briefly see an incorrect message, and genuine errors are hidden behind the same state.  
**Recommendation:** Model separate `loading`, `loaded`, and `notFound/error` states. Add a proper 404 route.

### 6.6 Layout wrappers are duplicated

**Priority:** P2  
**Observation:** Both `App.js` and `Home.js` render `className="App"` and `id="page" className="s-pagewrap"`.  
**Why it matters:** Duplicate IDs are invalid HTML, and repeated structural markup makes styling and page-level behavior harder to reason about.  
**Recommendation:** Introduce a single shared layout boundary and ensure each HTML `id` is unique.

### 6.7 The hero section is embedded in `Home.js`

**Priority:** P3  
**Observation:** Homepage composition and hero presentation are combined in the same component.  
**Why it matters:** The hero will likely be redesigned and animated independently, and separating it will keep `Home` focused on page composition.  
**Recommendation:** Extract a `Hero` component during the redesign.

### 6.8 Content is hardcoded into components

**Priority:** P1  
**Observation:** Professional experience, education, organizations, project cards, social links, and profile content are written directly in JSX.  
**Why it matters:** Updating content requires editing presentation code, repeated markup increases inconsistency, and the approach will not scale to a blog or many projects.  
**Recommendation:** Move content into typed structured data files or content files. Render reusable cards and timeline entries from arrays. Later use Markdown/MDX for travel writing.

### 6.9 Some components are large or appear unused

**Priority:** P2  
**Observation:** `Extra.js` is approximately 400 lines and contains visible remnants of the original template, including testimonial and DreamHost content. It is not imported by the active application. `Particle.js` is approximately 235 lines, mostly configuration.  
**Why it matters:** Dead or template code increases cognitive load and may contain stale assets, scripts, or links. Large inline configuration obscures component intent.  
**Recommendation:** Confirm unused components with runtime/build analysis, then remove them. Move particle configuration into a dedicated configuration file if the effect is retained.

### 6.10 Inconsistent React JSX conventions

**Priority:** P1  
**Observation:** `Works.js` uses HTML `class` attributes instead of React's `className`. `Experience.js` exports a lowercase function named `resume`. Some list markup places `<ul>` elements inside `<p>` elements, which is invalid HTML.  
**Why it matters:** These patterns can cause warnings, invalid DOM structure, reduced accessibility, and confusion for future contributors.  
**Recommendation:** Enable a modern ESLint configuration, resolve all warnings, use PascalCase component names, use valid semantic markup, and apply consistent formatting.

### 6.11 Accessibility gaps

**Priority:** P1  
**Observation:** Several project images use empty `alt` text even when they are meaningful links. The menu button has no explicit `aria-expanded` or `aria-controls`. External SVG links rely on screen-reader text but lack consistent accessible names and focus behavior. The generic project-loading page uses inline visual styling without a semantic status or heading.  
**Why it matters:** Accessibility is a quality requirement and affects keyboard, screen-reader, and low-vision visitors. It also improves general usability and professional credibility.  
**Recommendation:** Perform a semantic and keyboard audit; add meaningful alternative text, accessible menu state, visible focus styles, correct heading hierarchy, reduced-motion support, and automated accessibility checks.

### 6.12 Navigation mixes router behavior with full-page browser navigation

**Priority:** P2  
**Observation:** The logo uses `<a href="/">`, while project navigation uses React Router `Link`, and section navigation manually calls `document.getElementById`.  
**Why it matters:** With `HashRouter`, a normal root anchor may trigger a full reload and behave differently from client-side navigation. Manual document queries also couple navigation to specific element IDs.  
**Recommendation:** Standardize internal navigation with React Router links and create a deliberate anchor/scroll strategy.

### 6.13 Analytics implementation is duplicated/incomplete

**Priority:** P2  
**Observation:** Google Analytics is active in `public/index.html`, while `react-ga` is installed and related code in `App.js` is commented out.  
**Why it matters:** The repository suggests two competing approaches, and route changes in a single-page app may not be measured correctly without deliberate configuration. Privacy and consent requirements should also be considered.  
**Recommendation:** Select one analytics approach, document it, confirm SPA page-view tracking, and remove the unused dependency and commented code.

### 6.14 Web Vitals is present but not used

**Priority:** P3  
**Observation:** `reportWebVitals()` is invoked without a callback.  
**Why it matters:** It adds files and dependencies without producing measurements.  
**Recommendation:** Either implement a meaningful reporting destination or remove the helper during the Vite migration.

### 6.15 Accidental or suspicious dependencies exist

**Priority:** P1  
**Observation:** `package.json` includes dependencies named `-` and `save-dev`, both at placeholder/security-package versions. Testing libraries are installed but no test files were found. `animejs`, `aos`, and `react-ga` may be unused by active React code.  
**Why it matters:** Unnecessary dependencies increase install time, vulnerability surface, and maintenance overhead.  
**Recommendation:** Run a dependency usage and security audit, remove accidental packages, move development-only packages to `devDependencies`, and retain only libraries with confirmed use.

### 6.16 No automated tests were found

**Priority:** P1  
**Observation:** Testing libraries are installed, but the uploaded source contains no test files.  
**Why it matters:** Modernization and redesign will carry regression risk, especially around routing and interactive components.  
**Recommendation:** Add a small, high-value test baseline before major refactoring: application render, route behavior, project-not-found state, and header menu behavior.

### 6.17 Documentation is insufficient

**Priority:** P1  
**Observation:** `README.md` contains only a title, one-sentence description, and live-site link.  
**Why it matters:** A new contributor cannot reliably determine prerequisites, local commands, architecture, deployment process, or project conventions.  
**Recommendation:** Expand the README and create `/docs` documentation for product vision, architecture, repository audit, roadmap, and engineering workflow.

### 6.18 Generated build output is committed

**Priority:** P2  
**Observation:** The root `build/` directory is included in the archive.  
**Why it matters:** Generated output increases repository size, can become stale, and creates noisy diffs. Whether it is required depends on the exact GitHub Pages publishing configuration.  
**Recommendation:** Confirm the active Pages source. Prefer deployment through the `gh-pages` branch or GitHub Actions and exclude local build output from the main source branch.

### 6.19 Multiple CNAME locations may reflect an unclear deployment model

**Priority:** P2  
**Observation:** A `CNAME` exists at the repository root and another exists under `docs/`.  
**Why it matters:** This suggests the project may have used more than one Pages publishing strategy. Duplicate configuration can become confusing during migration.  
**Recommendation:** Confirm whether Pages publishes from `gh-pages`, `/docs`, or GitHub Actions, then retain the CNAME only in the appropriate generated/publishing location.

### 6.20 No `.gitignore` was present in the uploaded archive

**Priority:** P1  
**Observation:** The archive contains `.DS_Store` files and generated output, and no `.gitignore` was found.  
**Why it matters:** macOS metadata, local dependencies, environment files, logs, and build output can accidentally enter version control.  
**Recommendation:** Add a standard React/Node `.gitignore` covering `node_modules`, build artifacts as appropriate, `.DS_Store`, logs, local environment files, and editor metadata.

### 6.21 Large static assets increase repository and deployment weight

**Priority:** P2  
**Observation:** The repository is approximately 205 MB, driven in part by the Unity WebGL build and media assets.  
**Why it matters:** Large repositories clone slowly, consume deployment bandwidth, and may reduce page performance if assets are loaded eagerly.  
**Recommendation:** Measure asset sizes, lazy-load the Unity experience, compress images, use modern image formats, and consider external object storage or a separate deployment for especially large interactive artifacts.

### 6.22 Static assets use inconsistent absolute and relative paths

**Priority:** P2  
**Observation:** Assets are referenced through both `images/...` and `/images/...` paths.  
**Why it matters:** Relative paths can behave differently on nested hash routes and during migration to another base path or build tool.  
**Recommendation:** Adopt one asset strategy: import application-owned assets through the module system or use consistent root-based public paths with a documented base URL.

### 6.23 SEO and social metadata are minimal

**Priority:** P2  
**Observation:** `public/index.html` has a title but no clear page description, Open Graph metadata, social-card image, canonical URL, or structured data.  
**Why it matters:** A portfolio benefits from strong search snippets and professional link previews. Client-side route pages also need a deliberate metadata strategy.  
**Recommendation:** Add site metadata and route-level document titles/descriptions, potentially through a head-management library or framework capability.

### 6.24 Public personal contact information should be reviewed

**Priority:** P0/P1 depending on intent  
**Observation:** The footer publishes a personal phone number and multiple email addresses directly in the client source.  
**Why it matters:** Public source code and pages are easily scraped for spam and unwanted contact.  
**Recommendation:** Confirm that each item is intentionally public. Prefer a professional email and contact form; remove personal phone or outdated school contact details unless there is a clear reason to publish them.

### 6.25 Resume and profile content is outdated

**Priority:** P1 product/content concern  
**Observation:** The About section describes the owner as a recent graduate, and the experience content does not reflect the current role and accomplishments.  
**Why it matters:** The website's primary professional purpose is undermined if its content is stale.  
**Recommendation:** Separate content updates from architecture work, then refresh the professional profile using structured data once the content model is established.

## 7. Dependency Assessment

| Dependency | Current assessment | Recommendation |
|---|---|---|
| `react`, `react-dom` | Core and appropriate | Keep; update deliberately during modernization |
| `react-router-dom` | Appropriate routing library | Keep; evaluate router choice with hosting strategy |
| `react-scripts` | Aging build tool | Replace with Vite |
| `gh-pages` | Supports current deployment | Keep initially or replace with GitHub Actions |
| `react-tsparticles`, `tsparticles` | Used by Particle component | Keep only if particle design remains |
| `react-vertical-timeline-component` | Styles imported; usage should be verified | Retain only if actively used after redesign |
| `react-ga` | Installed but React code commented out | Remove or deliberately reimplement analytics |
| `web-vitals` | Present but not meaningfully used | Remove or configure |
| `animejs`, `aos` | Usage unclear in active React source | Audit and remove if template scripts are the only consumer |
| Testing Library packages | Appropriate but unused | Move to dev dependencies and add tests, or remove |
| `-`, `save-dev` | Likely accidental packages | Remove after lockfile verification |

## 8. Recommended Target Architecture

The initial target should remain a static React application, without adding a database prematurely.

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers/
├── pages/
│   ├── home/
│   ├── projects/
│   ├── fantasy/
│   ├── crossword/
│   └── travel/
├── features/
│   ├── experience-timeline/
│   ├── project-gallery/
│   ├── sleeper-roster/
│   └── crossword-player/
├── components/
│   ├── layout/
│   └── ui/
├── services/
│   └── sleeper/
├── content/
│   ├── experience.ts
│   ├── projects.ts
│   └── travel/
├── assets/
├── styles/
└── test/
```

### Data boundaries

- Resume and project content: repository-based structured data
- Travel posts: Markdown or MDX
- Sleeper roster: fetched from Sleeper's public API through a service module
- Crossword definitions: local structured puzzle files initially
- Browser-only progress: local storage initially
- Database/backend: add only when cross-device persistence, accounts, comments, admin editing, or secure secrets are required

## 9. Modernization Roadmap

### Phase 1 — Stabilize and document

1. Verify local installation, development server, production build, and deployment.
2. Add `.gitignore` and remove accidental repository artifacts.
3. Expand README and commit this audit.
4. Confirm GitHub Pages publishing source and CNAME ownership.
5. Capture screenshots and baseline behavior before refactoring.

### Phase 2 — Modernize tooling

1. Migrate Create React App to Vite.
2. Add TypeScript incrementally.
3. Configure ESLint and Prettier.
4. Add Vitest and React Testing Library.
5. Add GitHub Actions for validation and deployment.

### Phase 3 — Simplify architecture

1. Create shared layout and page folders.
2. Remove duplicate wrappers and invalid IDs.
3. Replace dynamic filename routing with a project registry.
4. Move hardcoded content into structured data.
5. Remove unused template scripts, components, styles, and dependencies.

### Phase 4 — Improve product quality

1. Refresh professional content.
2. Redesign navigation and responsive layout.
3. Address accessibility and reduced-motion behavior.
4. Add SEO/social metadata.
5. Optimize large images and Unity assets.

### Phase 5 — Add product features

1. Professional portfolio and case studies
2. Sleeper fantasy dashboard
3. Travel journal using Markdown/MDX
4. Crossword player and puzzle content
5. Backend/database only when justified by a concrete feature

## 10. Decisions: Keep, Improve, Replace

### Keep

- React and component-based development
- GitHub repository as code source of truth
- GitHub Pages during the initial modernization
- Custom domain
- React Router concept
- Existing portfolio assets and valuable project content
- Unity project as an optional showcase, subject to performance improvements

### Improve

- Component boundaries and folder organization
- Project routing and missing-page handling
- Content management
- Accessibility
- Documentation
- Analytics implementation
- Asset loading and repository size
- Deployment automation
- Test coverage

### Replace or remove

- Create React App
- Accidental packages
- Unused template code and dependencies
- Duplicate layout markup and IDs
- Direct DOM scripts where React equivalents are practical
- Unused Web Vitals scaffolding
- Inconsistent JSX and invalid HTML structures

## 11. Proposed Follow-Up Jira Tickets

These should be created or refined after completing the current Repository Audit story:

1. **Verify local development and production build**
2. **Document current GitHub Pages deployment configuration**
3. **Add repository ignore rules and remove generated artifacts**
4. **Create architecture and engineering standards documentation**
5. **Migrate Create React App to Vite**
6. **Configure TypeScript, ESLint, and Prettier**
7. **Create baseline automated tests**
8. **Replace dynamic project imports with a project registry**
9. **Move portfolio content into structured data**
10. **Remove unused template scripts, components, and dependencies**
11. **Complete accessibility baseline audit**
12. **Review public contact information and refresh professional content**

## 12. Repository Audit Definition of Done Assessment

- [x] Repository structure reviewed
- [x] Current architecture documented
- [x] Technology stack and major dependencies identified
- [x] Deployment approach identified from repository configuration
- [x] Technical debt and risks documented
- [x] Modernization recommendations documented
- [x] Follow-up work proposed
- [ ] Local install, runtime, build, and deployment behavior verified — belongs to the Development Environment story
- [ ] Audit committed to the Git repository — action for repository owner

## 13. Final Recommendation

Do not rebuild the website as an unrelated greenfield project. Create a protected modernization branch and evolve the existing application in controlled, testable stages. The project has enough sound structure and valuable content to preserve, while the tooling and architecture are simple enough to modernize without excessive migration risk.

The immediate next engineering task should be **Development Environment verification**, followed by **Architecture documentation and the Vite migration plan**. New user-facing features should begin after the foundation can be built, tested, and deployed reliably.
