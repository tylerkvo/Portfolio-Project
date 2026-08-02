# Engineering Standards

**Owner:** Tyler Vo

**Status:** Living Document

**Last Updated:** August 3, 2026

---

## Purpose

This document defines the engineering standards followed throughout tylerkvo.com to ensure consistency, maintainability, and professionalism.

---

# Git Workflow

- One Jira Story = One feature branch.
- Use descriptive branch names.
- Commit early and commit often.
- Merge only after the Story is complete.

Example:

feature/TVO-6-migrate-to-vite

---

# Commit Messages

Format:

TVO-<Issue> <type>: <description>

Examples:

TVO-6 feat: migrate project to Vite

TVO-3 docs: create README

TVO-12 refactor: reorganize components

---

# Jira Workflow

Backlog

↓

In Progress

↓

Code Review

↓

Done

Every Story should include:

- Description
- Definition of Done

---

# Documentation

Major architectural decisions should be documented.

Documentation should remain concise and up to date.

---

# Development Principles

- Build incrementally.
- Prioritize maintainability.
- Prefer reusable components.
- Document important decisions.
- Learn before implementing.