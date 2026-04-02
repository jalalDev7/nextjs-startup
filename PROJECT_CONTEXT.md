# Project Context: Yasser Next.js Dashboard

## Overview

A Next.js + Tailwind CSS dashboard app with auth features and analytics UI. Uses Next.js App Router, NextAuth, Prisma, and Recharts.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS (class dark mode)
- next-auth (authentication)
- @auth/prisma-adapter
- Prisma ORM + SQLite/Postgres (schema in prisma/schema.prisma)
- next-themes (theme mode handling)
- react-query (data fetching caching)
- recharts (charts)
- framer-motion (UI animation)
- zod (schema validation)

## Directory structure

- `app/`
  - `layout.tsx` (font setup, global providers)
  - `dashboard/page.tsx` (dashboard layout)
  - `auth/*` (auth pages: login, register, reset, etc.)
  - `api/auth/[...nextauth]/route.ts`
- `components/`
  - `Providers.tsx` (SessionProvider + QueryClientProvider + ThemeProvider)
  - `dashboard/Topbar.tsx` (search, theme toggle, bell, user link)
  - `dashboard/Sidebar.tsx`
  - `dashboard/AnalyticsCards.tsx`
  - `dashboard/AnalyticsCharts.tsx`
  - `auth/*` (auth form components)
  - `notifications` (FormError, FormSuccess)
  - `ui` (button, form, input, label primitives)
- `lib/` (mail, tokens, utils)
- `routes.ts` (app routes maybe)
- `schemas/index.ts` (Zod schema definitions)
- `db/prisma.ts` (Prisma client)
- `public/` (static assets)

## Additional notes

- `tailwind.config.ts` already uses `darkMode: ["class"]`
- Global CSS in `globals.css` defines `:root` and `.dark` CSS variables for theme values.
- Lint passes after all modifications (`npm run lint`).
- For reusable startup template behavior, theme persistence via localStorage has been removed and can be re-added as an optional feature for future projects.

## How to run

- `npm install`
- `npm run dev` (Next.js dev server)
- `npm run lint` (ESLint check)
