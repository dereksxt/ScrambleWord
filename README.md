# 🔀 Scramble Words

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

An interactive word game where players unscramble jumbled letters to guess the hidden word. Built with React, TypeScript and Vite.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [State Management: useReducer vs useState](#-state-management-usereducer-vs-usestate)
- [Author](#-author)

---

## 📌 Overview

**Scramble Words** is a single-page game where the player has to put scrambled letters back in order to find the original word. The project is also a practical comparison of two approaches to React state management: the main game is built with `useReducer`, and an alternative version of the same game is built with `useState`.

---

## ✨ Features

- 🔀 **Word unscrambling gameplay:** guess the original word from its shuffled letters.
- 🧠 **`useReducer` architecture:** game logic centralized in a reducer for predictable state transitions.
- 🔁 **`useState` variant:** the same game implemented with `useState` for side-by-side comparison.
- 🎉 **Visual feedback:** celebratory effects powered by `canvas-confetti`.
- 🎨 **Modern UI:** styled with Tailwind CSS v4 and shadcn/ui components.
- ⚡ **Fast tooling:** Vite for the dev server and builds, React Compiler enabled.

---

## 💻 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Vite](https://vitejs.dev/) | Dev server and build tool |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/) | Accessible UI components |
| [Lucide React](https://lucide.dev/) | Icons |
| [canvas-confetti](https://github.com/catdad/canvas-confetti) | Confetti animation |
| [React Compiler](https://react.dev/learn/react-compiler) | Automatic memoization |
| [ESLint](https://eslint.org/) | Linting |

---

## 📁 Project Structure

```text
ScrambleWord/
├── public/                 # Static assets
├── src/
│   └── useReducer/
│       └── ScrambleWordsUseState.tsx   # useState variant of the game
├── components.json         # shadcn/ui configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/dereksxt/ScrambleWord.git
cd ScrambleWord
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at the local address shown in your terminal (usually `http://localhost:5173`).

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Type-checks and builds for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint |

---

## 🧩 State Management: useReducer vs useState

The main game uses `useReducer`, which keeps all game transitions in a single reducer function. This makes the logic easier to follow and test as the game grows.

For comparison, the same game is implemented with `useState` in `src/useReducer/ScrambleWordsUseState.tsx`. Reading both versions side by side is a good way to see the trade-offs between the two approaches.

---

## 👤 Author

**Derek Serpa** — [@dereksxt](https://github.com/dereksxt)
