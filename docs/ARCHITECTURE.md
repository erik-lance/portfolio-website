# Architecture Overview

This document provides a detailed overview of the portfolio website's architecture, design decisions, and technical implementation.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Architecture Pattern](#architecture-pattern)
- [Directory Structure](#directory-structure)
- [Routing Strategy](#routing-strategy)
- [State Management](#state-management)
- [Styling Approach](#styling-approach)
- [Data Management](#data-management)
- [Performance Considerations](#performance-considerations)

## Technology Stack

### Core Framework
- **Next.js 14**: React framework with App Router and Pages Router
  - Chosen for: Server-side rendering, static generation, and excellent developer experience
  - Supports both App Router (new) and Pages Router (legacy) for gradual migration

### Language
- **TypeScript**: Strongly typed JavaScript
  - Provides type safety and better IDE support
  - Catches errors at compile time
  - Improves code maintainability

### UI Libraries
- **Material UI (MUI)**: Component library
  - Provides pre-built, accessible components
  - Customizable through theming
  - Consistent design language
  
- **TailwindCSS**: Utility-first CSS framework
  - Rapid UI development
  - Consistent spacing and sizing
  - Responsive design utilities

### Styling
- **Emotion**: CSS-in-JS library (required by MUI)
- **PostCSS**: CSS processing
- **Autoprefixer**: Automatic vendor prefixing

## Architecture Pattern

### Hybrid Rendering Strategy

The application uses a hybrid approach:

1. **Static Generation (SSG)**: Most pages are statically generated at build time
   - Home page
   - Projects listing
   - Experience, Education, Events, Certificates pages
   
2. **Dynamic Routes**: Project detail pages use dynamic routing
   - `/p/[project]` - Individual project pages generated from JSON data

### Component Architecture

```
┌─────────────────────────────────────────┐
│           Layout (Root)                 │
│  ┌───────────────────────────────────┐  │
│  │        ThemeWrapper               │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │         Header              │  │  │
│  │  └─────────────────────────────┘  │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │      Page Content           │  │  │
│  │  │  ┌────────┐  ┌────────┐    │  │  │
│  │  │  │ Tiles  │  │ Tiles  │    │  │  │
│  │  │  └────────┘  └────────┘    │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Component Types

1. **Layout Components**: Structure the page (Header, ThemeWrapper)
2. **Page Components**: Define routes (pages/*.tsx, app/*.tsx)
3. **UI Components**: Reusable UI elements (ProjectTile, EventTile)
4. **Utility Components**: Helper components (Hero)

## Directory Structure

### `/src/app/` - App Router (Next.js 14)
- `layout.tsx`: Root layout with metadata and global styles
- `page.tsx`: Home page component

**Why App Router?**: Provides better performance, streaming, and React Server Components support.

### `/src/pages/` - Pages Router (Legacy)
- Individual page routes
- `_app.tsx`: Application wrapper for global state/theme
- `p/[project].tsx`: Dynamic project detail pages

**Why Pages Router?**: Existing implementation, gradual migration path.

### `/src/components/` - Reusable Components
- Self-contained, reusable React components
- Each component has a single responsibility
- Components are framework-agnostic (can be used in either router)

### `/src/data/` - Content Data
- JSON files containing all portfolio content
- Separates content from code
- Easy to update without touching component logic

### `/src/styles/` - Style Configuration
- Material UI theme configuration
- Global style definitions

### `/public/` - Static Assets
- Images, fonts, and other static files
- Organized by content type (project_imgs, event_imgs, etc.)

## Routing Strategy

### Page Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page with hero section |
| `/projects` | `pages/projects.tsx` | Projects gallery |
| `/p/[project]` | `pages/p/[project].tsx` | Individual project details |
| `/experience` | `pages/experience.tsx` | Work experience |
| `/education` | `pages/education.tsx` | Educational background |
| `/events` | `pages/events.tsx` | Events attended & speaking |
| `/certificates` | `pages/certificates.tsx` | Certifications |
| `/resume` | `pages/resume.tsx` | Resume/CV |

### Dynamic Routing

Project detail pages use Next.js dynamic routes:
```typescript
// /pages/p/[project].tsx
// Accessible via /p/particle_simulator, /p/star_rail_assistant, etc.
```

Project IDs are slugified versions of project titles (lowercase, spaces to underscores).

## State Management

### Current Approach: No Global State

The application is intentionally simple and doesn't require complex state management:

- **Props**: Data passed from parent to child components
- **Local State**: `useState` for component-specific state (if needed)
- **Static Data**: JSON files imported directly

### Why No Redux/Context?

- Portfolio websites are mostly static
- No user authentication or complex interactions
- Data doesn't change frequently
- Simpler codebase is easier to maintain

## Styling Approach

### Hybrid Styling Strategy

The project uses three styling approaches:

1. **Material UI Components**
   - Pre-styled components (Card, Grid, Typography)
   - Custom theme applied globally
   - Sx prop for component-specific overrides

2. **TailwindCSS**
   - Utility classes for layout (`flex`, `p-4`, `min-h-screen`)
   - Responsive utilities (`md:`, `lg:`)
   - Quick prototyping

3. **Custom Theme**
   - Defined in `src/styles/theme.ts`
   - Color palette, typography, component defaults
   - Consistent across all MUI components

### Responsive Design

Mobile-first approach using MUI breakpoints:
- `xs`: 0px+ (mobile)
- `sm`: 600px+ (tablet)
- `md`: 900px+ (small laptop)
- `lg`: 1200px+ (desktop)

## Data Management

### Content as Data

All portfolio content is stored in JSON files:

```javascript
// Example: projects.json
[
  {
    "id": "unique_id",
    "title": "Project Title",
    "tagline": "Short description",
    "description": "Full description",
    "image": "image.png",
    "link": "https://...",
    "github": "https://github.com/...",
    "tech": ["React", "TypeScript"]
  }
]
```

### Benefits

- **Separation of Concerns**: Content separated from presentation
- **Easy Updates**: Non-developers can update content
- **Type Safety**: TypeScript interfaces validate data structure
- **Version Control**: Content changes tracked in git

### Data Flow

```
JSON File → Import → Page Component → Props → UI Component → Render
```

## Performance Considerations

### Build-Time Optimizations

1. **Static Generation**: Pages pre-rendered at build time
2. **Image Optimization**: Next.js Image component optimizes images
3. **Code Splitting**: Automatic code splitting per page
4. **Tree Shaking**: Unused code removed from bundles

### Runtime Optimizations

1. **Lazy Loading**: Components loaded on-demand
2. **Font Optimization**: Custom fonts optimized with `next/font`
3. **Minimal JavaScript**: Mostly static content, minimal client-side JS

### Asset Optimization

- Images served from `/public/` with appropriate formats
- Font files optimized and preloaded
- CSS minimized in production

## Future Considerations

### Potential Improvements

1. **Full App Router Migration**: Migrate all pages from Pages Router to App Router
2. **CMS Integration**: Connect to a headless CMS for content management
3. **Analytics**: Add analytics tracking (Google Analytics, Plausible)
4. **SEO**: Enhanced metadata, structured data, sitemap
5. **Testing**: Add unit tests (Jest) and E2E tests (Playwright)
6. **Animations**: Add page transitions and micro-interactions
7. **Dark Mode**: Implement theme toggling
8. **Internationalization**: Support multiple languages

### Scalability

The current architecture is suitable for:
- Personal portfolios
- Small business websites
- Project showcases

For larger applications, consider:
- State management library (Redux, Zustand)
- API routes for dynamic data
- Database integration
- Authentication system

## Development Workflow

1. **Local Development**: `npm run dev`
2. **Linting**: `npm run lint`
3. **Production Build**: `npm run build`
4. **Preview Production**: `npm start`
5. **Deploy**: Push to GitHub, auto-deploy via Vercel

## Deployment Architecture

```
Developer → Git Push → GitHub → Vercel → CDN → Users
```

Vercel provides:
- Automatic deployments on push
- Preview deployments for pull requests
- Global CDN distribution
- Serverless functions (if needed)
- Analytics and monitoring
