# ADR-001: Migrate from Create React App to Vite

**Status:** Accepted

**Date:** August 8, 2026

---

## Context

Tylerkvo.com currently uses Create React App (CRA) as its build tool. While CRA was the standard for React applications for many years, it has become slower and less flexible than modern alternatives. This project is beginning a long-term modernization effort, making this an appropriate time to adopt a more modern build tool that hopefully is supported deeper into the future.

---

## Decision

The project will migrate from Create React App to Vite.

---

## Rationale

Vite offers:

- Faster development server startup
- Faster hot module replacement
- Simpler configuration
- Better support for modern JavaScript tooling
- Active community adoption

Migrating earlier in my project work reduces future technical debt and provides a better development experience for all future work.

---

## Consequences

### Positive

- Faster local development
- Simpler project structure
- Modern tooling
- Easier future upgrades

### Negative

- Initial migration effort
- Small changes to project structure
- Updated development workflow (`npm run dev` instead of `npm start`)