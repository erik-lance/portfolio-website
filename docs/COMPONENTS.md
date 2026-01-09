# Components Documentation

This document provides detailed information about all React components in the portfolio website.

## Table of Contents

- [Layout Components](#layout-components)
  - [Header](#header)
  - [ThemeWrapper](#themewrapper)
- [Content Components](#content-components)
  - [Hero](#hero)
  - [ProjectTile](#projecttile)
  - [EventTile](#eventtile)
- [Page Components](#page-components)

---

## Layout Components

### Header

**File**: `src/components/Header.tsx`

The main navigation header component that appears on all pages.

#### Purpose
Provides consistent navigation across the entire website with links to all major sections.

#### Props
None (stateless component)

#### Usage
```tsx
import Header from '@/components/Header'

<Header />
```

#### Features
- Responsive navigation menu
- Links to all major sections:
  - Home
  - Education
  - Experience
  - Projects
  - Certifications
  - Events
  - Resume
- Fixed positioning at top of page
- Styled with TailwindCSS utilities

#### Structure
```tsx
<div> // Container
  <Link to="/">Home</Link>
  <div> // Nav links container
    <Link to="/education">Education</Link>
    <Link to="/experience">Experience</Link>
    // ... other links
  </div>
</div>
```

#### Customization
To add new navigation items:
1. Add a new `<Link>` component in the navigation div
2. Ensure the corresponding page exists in `/src/pages/`

---

### ThemeWrapper

**File**: `src/components/ThemeWrapper.tsx`

Wraps the application with Material UI's ThemeProvider to apply custom theme globally.

#### Purpose
Provides the custom Material UI theme to all child components.

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `children` | `ReactNode` | Yes | Child components to be wrapped |

#### Usage
```tsx
import ThemeWrapper from '@/components/ThemeWrapper'

<ThemeWrapper>
  <App />
</ThemeWrapper>
```

#### Features
- Client-side component (`'use client'` directive)
- Applies custom theme from `src/styles/theme.ts`
- Enables theme-aware MUI components throughout the app

#### Theme Customization
Edit `src/styles/theme.ts` to modify:
- Color palette
- Typography
- Component defaults

---

## Content Components

### Hero

**File**: `src/components/Hero.tsx`

The hero section displayed on the home page introducing the portfolio owner.

#### Purpose
Creates an engaging introduction with personal information, profile picture, and key highlights.

#### Props
None (content is hardcoded)

#### Usage
```tsx
import Hero from '@/components/Hero'

<Hero />
```

#### Features
- Responsive grid layout
- Profile picture (Avatar)
- Name and title
- Personal introduction
- Highlighted achievements in styled boxes
- Mobile-first responsive design

#### Structure
```tsx
<Grid container>
  <Grid item> // Left column - Avatar
    <Avatar src="portrait.JPG" />
  </Grid>
  <Grid item> // Right column - Content
    <Typography variant="h1">Name</Typography>
    <Typography variant="h4">Subtitle</Typography>
    <Typography variant="h6">Description</Typography>
    <Box> // Highlighted info box
      <Typography>Achievements</Typography>
    </Box>
  </Grid>
</Grid>
```

#### Responsive Behavior
- **Mobile (xs)**: Stacked layout, centered avatar
- **Tablet (sm)**: Stacked layout with padding
- **Desktop (md, lg)**: Side-by-side layout, avatar on left

#### Customization
To update content:
1. Edit text directly in the component
2. Replace `portrait.JPG` in `/public/` directory
3. Modify spacing using MUI's `sx` prop

---

### ProjectTile

**File**: `src/components/ProjectTile.tsx`

A card component displaying project information in a grid layout.

#### Purpose
Displays project details in a visually appealing, clickable card format.

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | `string` | Yes | Project title |
| `tagline` | `string` | Yes | Short project description |
| `description` | `string` | No | Detailed description (not displayed on tile) |
| `image` | `string` | No | Filename of project image |
| `link` | `string` | Yes | External project link |
| `github` | `string` | Yes | GitHub repository URL |
| `tech` | `string[]` | Yes | Array of technologies used |

#### TypeScript Interface
```typescript
export interface ProjectTileProps {
    title: string;
    tagline: string;
    description?: string;
    image?: string;
    link: string;
    github: string;
    tech: string[];
}
```

#### Usage
```tsx
import ProjectTile from '@/components/ProjectTile'

<ProjectTile
  title="My Project"
  tagline="A cool project"
  image="project.png"
  link="https://myproject.com"
  github="https://github.com/user/project"
  tech={["React", "TypeScript"]}
/>
```

#### Features
- **Clickable Card**: Entire card links to project detail page
- **Optional Image**: Displays project screenshot if provided
- **Tech Stack Chips**: Visual representation of technologies
- **Action Buttons**: GitHub and external link buttons
- **Responsive Height**: Fixed max height with scrollable content

#### Helper Functions

##### `project_page_parse(title: string)`
Converts project title to URL-friendly slug.

```typescript
project_page_parse("My Project") // Returns: "my_project"
```

#### Card Structure
```tsx
<Card>
  <CardActionArea href="/p/project_slug">
    <CardMedia /> // Project image
    <CardHeader /> // Title and tagline
    <CardContent> // Tech chips
  </CardActionArea>
  <CardActions> // GitHub and link buttons
</Card>
```

#### Customization
- **Card Height**: Modify `maxHeight` in Card's `sx` prop
- **Image Height**: Adjust `maxHeight` in CardMedia
- **Chip Styling**: Edit Chip component props

---

### EventTile

**File**: `src/components/EventTile.tsx`

A card component displaying event information (attended events or speaking engagements).

#### Purpose
Displays event details with image, description, and technologies in a card format.

#### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `id` | `number` | Yes | Unique event identifier |
| `name` | `string` | Yes | Event name |
| `date` | `string` | Yes | Event date |
| `image` | `string` | No | Filename of event image |
| `link` | `string` | Yes | Event website or details URL |
| `description` | `string` | Yes | Event description |
| `tech` | `string[]` | Yes | Technologies/topics covered |
| `type` | `string` | Yes | Event type: "attended" or "speaker" |

#### TypeScript Interface
```typescript
export interface EventTileProps {
    id: number;
    name: string;
    date: string;
    image?: string;
    link: string;
    description: string;
    tech: string[];
    type: string;
}
```

#### Usage
```tsx
import EventTile from '@/components/EventTile'

<EventTile
  id={1}
  name="Tech Conference 2024"
  date="2024-01-15"
  image="event.png"
  link="https://event.com"
  description="An amazing tech conference..."
  tech={["Cloud", "AI", "Web Development"]}
  type="attended"
/>
```

#### Features
- **Image Source Logic**: Different image directories based on event type
  - `type="attended"` → `/event_imgs/`
  - `type="speaker"` → `/speaker_imgs/`
- **Truncated Description**: Limits description to 100 characters
- **Clickable Image**: Links to event website
- **Tech Tags**: Displays technologies as chips
- **Fixed Height**: Consistent card height (`minHeight: 400`)

#### Card Structure
```tsx
<Card>
  <CardActionArea href={link}>
    <CardMedia /> // Event image
  </CardActionArea>
  <CardHeader /> // Name and date
  <CardContent>
    <Typography /> // Truncated description
    <List> // Tech chips
  </CardContent>
</Card>
```

#### Image Path Logic
```typescript
const img_src = type === "attended" ? "/event_imgs/" : "/speaker_imgs/";
```

#### Description Truncation
```typescript
{description.length > 100 
  ? description.substring(0, 100) + "..." 
  : description}
```

#### Customization
- **Card Height**: Modify `minHeight` in Card's `sx` prop
- **Description Length**: Change `100` to desired character limit
- **Image Paths**: Update `img_src` logic for different directories

---

## Page Components

### Projects Page

**File**: `src/pages/projects.tsx`

#### Purpose
Displays all projects in a responsive grid layout.

#### Features
- Imports project data from `src/data/projects.json`
- Responsive grid (1-4 columns based on screen size)
- Page title
- Maps over projects array to create ProjectTile components

#### Grid Breakpoints
- `xs`: 12 columns (1 project per row)
- `sm`: 12 columns (1 project per row)
- `md`: 6 columns (2 projects per row)
- `lg`: 3 columns (4 projects per row)

---

## Component Best Practices

### Creating New Components

1. **File Naming**: Use PascalCase (e.g., `MyComponent.tsx`)
2. **Export**: Default export for the component
3. **Props Interface**: Define TypeScript interface for props
4. **Documentation**: Add JSDoc comments

Example template:
```typescript
/**
 * MyComponent displays [description]
 * 
 * @param {MyComponentProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export interface MyComponentProps {
  title: string;
  description?: string;
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### Styling Guidelines

1. **Prefer MUI Components**: Use Material UI components when possible
2. **Use sx Prop**: For component-specific styles
3. **TailwindCSS**: For layout utilities
4. **Responsive**: Always consider mobile, tablet, and desktop views

### TypeScript Guidelines

1. **Define Interfaces**: Always define prop interfaces
2. **Export Interfaces**: If they might be reused
3. **Optional Props**: Use `?` for optional properties
4. **Avoid Any**: Use proper types instead of `any`

### Accessibility

1. **Alt Text**: Always provide alt text for images
2. **ARIA Labels**: Use appropriate ARIA labels for buttons/links
3. **Semantic HTML**: Use semantic elements when possible
4. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
