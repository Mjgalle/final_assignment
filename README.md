# Memory Game

A simple React memory matching game where you flip two cards at a time and try to find all pairs.

## Features

- Choose a difficulty level (easy/medium/hard)
- Flip up to 2 cards per turn
- Non-matching cards flip back after a short delay
- Win alert when all matches are found

## Tech Stack

- React
- React Router (v4)
- CSS (custom styling)

## Data / Assets

- Card faces are images of classmates/instructors from my cohort (created from screenshots and edited in Adobe Illustrator).

## Setup

```bash
npm install
npm start
```

## Improvements & Learnings

While reviving and modernizing this project, I focused on improving maintainability and aligning the codebase with modern React patterns:

- Migrated legacy class-component assumptions to function components using React Hooks.
- Upgraded React to support hooks and resolved runtime errors caused by outdated dependencies.
- Removed unused global Bootstrap styles and consolidated styling into custom CSS.
- Cleaned up routing logic and fixed broken navigation flows.
- Improved state handling and guarded against common runtime edge cases.

This cleanup helped reinforce best practices around incremental refactors, dependency management, and debugging legacy React applications.

Test setup: Jest + React Testing Library
