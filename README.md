# Incognito Dashboard

A modern React + TypeScript + Vite dashboard for creators and marketers, featuring AI-powered analytics, persona builder, competitor intelligence, hit prediction, and visual prompt generation.

## Features

- **Light/Dark Mode**: Fully adaptive UI with consistent theme support across all pages.
- **Analytics**: Real-time engagement stats, platform comparison, and top-performing posts.
- **Audience Persona**: AI-generated segment builder for deep market insights.
- **Competitor Engine**: Analyze competitors, discover gaps, and benchmark performance.
- **Hit Prediction**: Predict post performance and get actionable improvement tips.
- **Visual Prompt Generator**: Create and manage AI-ready visual prompts for brand assets.
- **Sidebar Navigation**: Quick access to all modules.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide Icons](https://lucide.dev/) for UI icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the app:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Folder Structure

- `src/components/` — Reusable UI components (Sidebar, StatCard, Logo, etc.)
- `src/pages/` — Main dashboard pages (Analytics, AudiencePersona, CompetitorEngine, HitPrediction, VisualPromptGenerator, etc.)
- `src/context/` — Theme context provider
- `src/assets/` — Static assets

## Customization

- **Theme:** Easily toggle light/dark mode for accessibility.
- **UI:** All pages use consistent padding, card layouts, and theme-aware text colors.

## Contributing

Pull requests and suggestions are welcome! Please follow the existing code style and structure.

## License

MIT

---

> For any issues or feature requests, open an issue or contact the maintainer.

    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
#
