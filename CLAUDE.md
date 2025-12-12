# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website built with Next.js 15 (App Router) that automatically syncs with GitHub repositories. The portfolio features a bilingual interface (Portuguese/English) with automatic locale detection based on user's location.

**Key Feature:** Projects are automatically fetched from GitHub API and classified by type (frontend/backend/fullstack) based on repository topics and languages. Repositories with `featured`, `destaque`, or `highlight` topics are highlighted.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Environment Variables

Required environment variables in `.env.local`:

```bash
# GitHub username to fetch repositories from
GITHUB_USERNAME=jonassoaress
NEXT_PUBLIC_GITHUB_USERNAME=jonassoaress

# Optional: GitHub personal access token (increases API rate limit from 60 to 5,000 req/hour)
# Generate at: https://github.com/settings/tokens
# Required permissions: public_repo
GITHUB_TOKEN=ghp_xxxxxxxxxxxxx

# Optional: Resend API key for contact form email delivery
# Generate at: https://resend.com/api-keys
# Contact form will return 503 error if not configured
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

## Architecture

### Data Flow

1. **GitHub Integration** (`src/lib/github.ts`):
   - `fetchGithubProjects()`: Fetches repositories from GitHub API with 1-hour cache (`next: { revalidate: 3600 }`)
   - Automatically classifies projects as frontend/backend/fullstack based on topics and language
   - Excludes forks and specific repos (jonassoaress, portfolio, jonassoaress.github.io)
   - Generates OpenGraph images from GitHub
   - Featured projects determined by topics: `featured`, `destaque`, or `highlight`

2. **Internationalization** (`src/lib/i18n.ts`):
   - Server-side i18n using Next.js headers and cookies
   - Auto-detects locale from `Accept-Language` header or cookie
   - Falls back to Portuguese for Brazil (`pt-BR`), English for others
   - All translations stored in nested dictionaries within this file
   - Use `getDictionary()` in server components to access translations

3. **Data Adapters** (`src/data/`):
   - `projects.ts`: Wraps GitHub API with helper functions
   - `getProjects()`: Returns all projects
   - `getFeaturedProjects(limit)`: Returns featured projects first, then recent
   - `getProjectsByType(type)`: Filters by frontend/backend/fullstack

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page with hero and featured projects
│   ├── projetos/          # All projects page
│   ├── sobre/             # About page
│   ├── contato/           # Contact page
│   └── api/contact/       # Contact form API endpoint
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── providers/         # Theme provider
│   ├── sections/          # Hero, ProjectsGallery
│   └── ui/                # shadcn/ui components + ProjectCard
├── config/                # Site configuration (GitHub username)
├── data/                  # Data adapters (projects, skills)
├── lib/                   # Core utilities
│   ├── github.ts         # GitHub API integration
│   ├── i18n.ts           # Internationalization system
│   └── utils.ts          # Tailwind merge utilities
└── types/                # TypeScript type definitions
    └── index.ts          # Project, Skill, SocialLink, ContactForm
```

## Key Patterns

### Adding UI Components (shadcn/ui)

This project uses shadcn/ui. Configuration in `components.json`:
- Style: `new-york`
- Base color: `slate`
- CSS variables enabled
- Path aliases configured (`@/components`, `@/lib/utils`, etc.)

To add components:
```bash
npx shadcn@latest add [component-name]
```

### Working with Projects

Projects are typed with `Project` interface from `src/types/index.ts`:
- `type`: "frontend" | "backend" | "fullstack" - auto-classified by GitHub topics/language
- `featured`: boolean - determined by topics containing featured/destaque/highlight
- `tags`: Derived from GitHub topics, formatted with title case
- `image`: Auto-generated OpenGraph image from GitHub
- `stars`, `updatedAt`: Synced from GitHub

To mark a GitHub repo as featured: Add `featured`, `destaque`, or `highlight` as a repository topic.

### Internationalization

Server components:
```typescript
import { getDictionary } from "@/lib/i18n";

const dict = await getDictionary();
const text = dict.hero.greeting; // "Olá, eu sou" or "Hello, I'm"
```

Locale detection happens server-side via headers/cookies. No client-side locale switching.

### Theme System

Uses `next-themes` with Tailwind CSS variables:
- Provider: `src/components/providers/theme-provider.tsx`
- Toggle component in header
- CSS variables defined in `src/app/globals.css`

## Important Implementation Details

1. **GitHub API Rate Limits**: Without `GITHUB_TOKEN`, limited to 60 requests/hour. With token: 5,000/hour. The app caches for 1 hour to minimize API calls.

2. **Project Classification Logic** (`src/lib/github.ts:57-76`):
   - Checks repository topics and language against keyword arrays
   - `FRONTEND_KEYWORDS`: react, nextjs, vue, tailwindcss, etc.
   - `BACKEND_KEYWORDS`: nodejs, express, nestjs, django, etc.
   - Defaults to "fullstack" if no match

3. **Image Optimization**: Next.js config allows GitHub domains for images. Uses AVIF/WebP formats.

4. **Security Headers**: Configured in `next.config.ts` including HSTS, CSP, XSS protection.

5. **Standalone Output**: `next.config.ts` uses `output: "standalone"` for optimized Docker/Vercel deployments.

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **React**: 19.1.0
- **TypeScript**: 5.x with strict mode
- **Styling**: Tailwind CSS 4 with @tailwindcss/postcss
- **UI Components**: Radix UI primitives + shadcn/ui
- **Icons**: lucide-react
- **Theme**: next-themes with CSS variables
- **Analytics**: @vercel/analytics and @vercel/speed-insights
- **Email**: resend (contact form)

## Common Gotchas

- **i18n is server-only**: No client-side locale switching. Use `getDictionary()` in server components only.
- **GitHub token is optional but recommended**: Without it, heavy testing may hit rate limits.
- **Contact form requires Resend API key**: The `/api/contact` route returns 503 if `RESEND_API_KEY` is not set. The build will succeed, but the contact form won't work at runtime.
- **Project types are auto-assigned**: Don't manually set project types; they're derived from GitHub topics/language.
- **Featured repos need topics**: Add `featured`, `destaque`, or `highlight` as GitHub repository topics.
- **TypeScript strict mode**: All code must pass strict TypeScript checks.
