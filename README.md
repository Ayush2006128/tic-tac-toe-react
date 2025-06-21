# Tic-Tac-Toe (React + TypeScript + Vite)

A modern, responsive Tic-Tac-Toe game built with React, TypeScript, and Vite. Play against a friend or challenge the AI at different difficulty levels. The app is installable and works offline.

## Features
- Play vs Human, Easy AI, or Hard AI (Minimax)
- Responsive design for desktop and mobile
- Custom game mode selection dialog
- Themeable with CSS variables
- Offline support (PWA)
- Move history and reset with confirmation

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Running the App
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

### Play Offline / Install
- The app registers a service worker automatically.
- You can "Install" the app from your browser for a native-like experience.

## Project Structure
```
src/
  components/        # React components (Board, Square, GameModeDialog, ...)
  logic/             # Game logic (AI, winner calculation)
  theme/vars.css     # Theme variables (colors, fonts)
  App.tsx            # Main app logic
  ...
public/
  service-worker.js  # Service worker for offline support
  # And app logos
```

## Customization
- Edit `src/theme/vars.css` to change theme colors and fonts.
- Update logic in `src/logic/` for AI or rules tweaks.

## Credits
- Built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- Icons from [react-icons](https://react-icons.github.io/react-icons/)
- Logos from [favicon.io](https://www.favicon.io)

---
Enjoy playing!
