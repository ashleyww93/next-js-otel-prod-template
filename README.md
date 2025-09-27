# Next.js Production Template

A modern, production-ready Next.js template with Tailwind CSS 4.1 and a beautiful purple-themed dark mode.

## Features

- **Next.js 15.5.4** - Latest version with App Router
- **Tailwind CSS 4.1** - Modern CSS-first configuration
- **Turbopack** - Lightning-fast HMR and builds
- **TypeScript** - Full type safety
- **Dark Mode** - Beautiful purple-themed dark mode by default
- **ESLint** - Code quality and consistency

## Tech Stack

- Framework: Next.js 15.5.4
- Styling: Tailwind CSS 4.1
- Language: TypeScript
- Font: Inter (Google Fonts)
- Build Tool: Turbopack

## Getting Started

### Installation

Clone this template and install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Build

Create a production build:

```bash
npm run build
```

### Production

Run the production server:

```bash
npm start
```

## Project Structure

```
/app              # App Router directory
  layout.tsx      # Root layout with dark mode
  page.tsx        # Home page
  globals.css     # Global styles and Tailwind config
/public           # Static assets
```

## Customization

### Theme Colors

The template uses a beautiful purple color palette. You can customize the colors in `app/globals.css` within the `@theme` directive:

- Primary color: Purple-500 (#a855f7)
- Dark background: Deep purple-black (#0a0118)
- Surface colors: Purple-tinted grays

### Tailwind Configuration

Tailwind CSS 4.1 uses CSS-first configuration. All theme customization is done in `app/globals.css` using the `@theme` directive.

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Turbopack Documentation](https://turbo.build/pack)
