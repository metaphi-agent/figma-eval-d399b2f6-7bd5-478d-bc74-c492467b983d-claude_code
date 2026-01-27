# BankDash - Banking Dashboard

A modern, responsive banking dashboard built with React, Vite, and Tailwind CSS v4.

## Features

- 📊 **Comprehensive Dashboard**: Overview with cards, transactions, charts, and quick transfer
- 💳 **Transaction Management**: View and filter all transactions with pagination
- 🏦 **Accounts**: Manage multiple accounts with detailed analytics
- 📈 **Investments**: Track investments with performance metrics
- 💳 **Credit Cards**: Manage multiple cards with expense statistics
- 💰 **Loans**: Overview of active loans with repayment tracking
- 🔧 **Services**: Access various banking services
- ⚙️ **Settings**: Manage profile, preferences, and security

## Tech Stack

- **React 18.3** - Modern React with hooks
- **Vite 6.0** - Fast build tool and dev server
- **Tailwind CSS 4.0** - Utility-first CSS framework with CSS-based theming
- **React Router 6** - Client-side routing
- **Recharts 2.12** - Composable charting library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Input, Card, etc.)
│   └── blocks/       # Layout components (Sidebar, Header, Layout)
├── pages/            # Route components for each page
├── assets/           # Static assets
└── index.css         # Global styles with Tailwind CSS theme
```

## Design System

The project uses a comprehensive design system with:
- **Colors**: Primary, secondary, success, error, warning, text, background, and border colors
- **Typography**: Inter font family with various weights and sizes
- **Spacing**: Consistent spacing scale from xs to 3xl
- **Border Radius**: Standardized border radius from sm to 2xl
- **Shadows**: Three shadow levels (sm, md, lg) plus card shadow

## Responsive Design

The dashboard is fully responsive with breakpoints for:
- **Desktop**: 1440px+
- **Tablet**: 1024px
- **Mobile**: 375px

## License

MIT

## Credits

Design: BankDash Dashboard UI Kit
Implementation: Claude AI (Anthropic)
