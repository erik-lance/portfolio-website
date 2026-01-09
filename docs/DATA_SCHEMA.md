# Data Schema Documentation

This document describes the JSON data structures used throughout the portfolio website. All data files are located in `src/data/`.

## Table of Contents

- [Projects Schema](#projects-schema)
- [Experience Schema](#experience-schema)
- [Education Schema](#education-schema)
- [Events Schema](#events-schema)
- [Speaker Schema](#speaker-schema)
- [Tech Schema](#tech-schema)
- [General Guidelines](#general-guidelines)

---

## Projects Schema

**File**: `src/data/projects.json`

An array of project objects representing portfolio projects.

### Structure

```json
[
  {
    "id": "string",
    "title": "string",
    "tagline": "string",
    "description": "string",
    "image": "string (optional)",
    "link": "string",
    "github": "string",
    "tech": ["string", "string", ...]
  }
]
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier for the project (lowercase, underscores) |
| `title` | `string` | Yes | Display name of the project |
| `tagline` | `string` | Yes | Short one-line description (displayed on project tile) |
| `description` | `string` | Yes | Detailed project description (displayed on project detail page) |
| `image` | `string` | No | Filename of project image (stored in `/public/project_imgs/`) |
| `link` | `string` | Yes | External URL to live project (use empty string "" if none) |
| `github` | `string` | Yes | GitHub repository URL (use empty string "" if none) |
| `tech` | `string[]` | Yes | Array of technology names used in the project |

### Example

```json
{
  "id": "particle_simulator",
  "title": "Particle Simulator",
  "tagline": "Simulating particles in a 2D space with elastic collisions",
  "description": "A comprehensive particle simulation system with distributed computing...",
  "image": "particle_sim.png",
  "link": "",
  "github": "https://github.com/username/Particle-Simulator",
  "tech": ["C++", "SDL2", "Java", "UDP"]
}
```

### Best Practices

- **ID Naming**: Use lowercase with underscores, matching title
  - Good: `particle_simulator`, `star_rail_assistant`
  - Bad: `ParticleSimulator`, `particle-simulator`
- **Taglines**: Keep under 100 characters for best display
- **Descriptions**: Can be longer, markdown-like formatting supported
- **Images**: 
  - Use PNG or JPG format
  - Recommended size: 400x300px or similar aspect ratio
  - Place in `/public/project_imgs/`
- **Links**: Use empty string `""` if project has no live link
- **Tech Array**: Use official/canonical names (e.g., "TypeScript" not "typescript")

---

## Experience Schema

**File**: `src/data/experience.json`

An array of work experience objects.

### Structure

```json
[
  {
    "id": "number",
    "company": "string",
    "position": "string",
    "duration": "string",
    "location": "string",
    "description": "string",
    "responsibilities": ["string", "string", ...],
    "tech": ["string", "string", ...]
  }
]
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `number` | Yes | Unique identifier |
| `company` | `string` | Yes | Company/organization name |
| `position` | `string` | Yes | Job title/position |
| `duration` | `string` | Yes | Time period (e.g., "Jan 2020 - Dec 2022") |
| `location` | `string` | Yes | Work location (e.g., "Remote" or "City, Country") |
| `description` | `string` | Yes | Brief overview of the role |
| `responsibilities` | `string[]` | Yes | Array of key responsibilities or achievements |
| `tech` | `string[]` | Yes | Technologies used in this role |

### Example

```json
{
  "id": 1,
  "company": "Orange & Bronze Software Labs",
  "position": "Software Engineering Intern",
  "duration": "June 2023 - August 2023",
  "location": "Manila, Philippines",
  "description": "Developed full-stack web applications using modern technologies",
  "responsibilities": [
    "Built RESTful APIs using Spring Boot",
    "Developed responsive front-end with React",
    "Collaborated with senior developers on code reviews"
  ],
  "tech": ["Java", "Spring Boot", "React", "PostgreSQL"]
}
```

---

## Education Schema

**File**: `src/data/education.json`

An array of educational background objects.

### Structure

```json
[
  {
    "id": "number",
    "institution": "string",
    "degree": "string",
    "field": "string",
    "duration": "string",
    "location": "string",
    "honors": "string (optional)",
    "gpa": "string (optional)",
    "relevant_coursework": ["string", "string", ...] (optional)
  }
]
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `number` | Yes | Unique identifier |
| `institution` | `string` | Yes | School/university name |
| `degree` | `string` | Yes | Degree type (e.g., "Bachelor of Science") |
| `field` | `string` | Yes | Field of study (e.g., "Computer Science") |
| `duration` | `string` | Yes | Time period (e.g., "2019 - 2023") |
| `location` | `string` | Yes | School location |
| `honors` | `string` | No | Academic honors (e.g., "Magna Cum Laude") |
| `gpa` | `string` | No | Grade point average |
| `relevant_coursework` | `string[]` | No | List of relevant courses |

### Example

```json
{
  "id": 1,
  "institution": "De La Salle University - Manila",
  "degree": "Bachelor of Science",
  "field": "Computer Science",
  "duration": "2019 - 2023",
  "location": "Manila, Philippines",
  "honors": "Magna Cum Laude",
  "gpa": "3.8/4.0",
  "relevant_coursework": [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Software Engineering"
  ]
}
```

---

## Events Schema

**File**: `src/data/events.json`

An array of events attended (conferences, workshops, etc.).

### Structure

```json
[
  {
    "id": "number",
    "name": "string",
    "date": "string",
    "image": "string (optional)",
    "link": "string",
    "description": "string",
    "tech": ["string", "string", ...],
    "type": "attended"
  }
]
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `number` | Yes | Unique identifier |
| `name` | `string` | Yes | Event name |
| `date` | `string` | Yes | Event date (any format, e.g., "January 15, 2024") |
| `image` | `string` | No | Filename of event image (stored in `/public/event_imgs/`) |
| `link` | `string` | Yes | Event website URL |
| `description` | `string` | Yes | Event description (truncated to 100 chars on display) |
| `tech` | `string[]` | Yes | Technologies/topics covered |
| `type` | `string` | Yes | Always "attended" for this file |

### Example

```json
{
  "id": 1,
  "name": "Microsoft Build 2023",
  "date": "May 23-25, 2023",
  "image": "msbuild2023.jpg",
  "link": "https://build.microsoft.com",
  "description": "Attended Microsoft's annual developer conference focusing on Azure, AI, and cloud technologies.",
  "tech": ["Azure", "AI", "Cloud Computing"],
  "type": "attended"
}
```

---

## Speaker Schema

**File**: `src/data/speaker.json`

An array of speaking engagements.

### Structure

Same as Events Schema, but with `"type": "speaker"`.

```json
[
  {
    "id": "number",
    "name": "string",
    "date": "string",
    "image": "string (optional)",
    "link": "string",
    "description": "string",
    "tech": ["string", "string", ...],
    "type": "speaker"
  }
]
```

### Field Descriptions

Same as Events Schema. The `type` field differentiates speaking engagements from attended events.

### Example

```json
{
  "id": 1,
  "name": "Azure Functions Workshop",
  "date": "March 10, 2023",
  "image": "azure_workshop.jpg",
  "link": "https://example.com/event",
  "description": "Hosted a workshop on serverless computing with Azure Functions, teaching 50+ students.",
  "tech": ["Azure", "Serverless", "Functions"],
  "type": "speaker"
}
```

### Image Location

Speaker event images are stored in `/public/speaker_imgs/` (different from attended events).

---

## Tech Schema

**File**: `src/data/tech.json`

An array or object of technologies (if used for categorization or filtering).

### Structure

*Note: This file's structure may vary based on implementation needs.*

```json
[
  {
    "name": "string",
    "category": "string",
    "icon": "string (optional)"
  }
]
```

Or simply an array of strings:

```json
["React", "TypeScript", "Node.js", "Python", "AWS"]
```

### Example

```json
[
  {
    "name": "React",
    "category": "Frontend",
    "icon": "react-icon.svg"
  },
  {
    "name": "Node.js",
    "category": "Backend",
    "icon": "nodejs-icon.svg"
  }
]
```

---

## General Guidelines

### JSON Formatting

1. **Validation**: Always validate JSON syntax before committing
   - Use online validators: [JSONLint](https://jsonlint.com/)
   - Use IDE extensions for real-time validation
   
2. **Formatting**: Use consistent indentation (2 or 4 spaces)
   ```bash
   # Format JSON files
   npx prettier --write "src/data/*.json"
   ```

3. **Encoding**: Use UTF-8 encoding for special characters

### Data Entry Best Practices

1. **Consistency**
   - Use consistent date formats within each file
   - Use consistent capitalization for technology names
   - Keep IDs sequential and unique

2. **Required vs Optional**
   - Always provide required fields
   - Use empty string `""` or empty array `[]` rather than omitting fields
   - Only omit truly optional fields (like `image`)

3. **Escaping**
   - Escape double quotes in strings: `"He said \"hello\""`
   - Use single quotes in display text to avoid escaping
   - For newlines in JSON strings, use `\n`

4. **Array Order**
   - Order matters: Items appear in the order listed
   - Most recent/important items typically come first
   - Use consistent ordering logic (chronological, alphabetical, etc.)

### Image Assets

1. **Naming Convention**
   - Use lowercase
   - Use underscores or hyphens (be consistent)
   - Include file extension in JSON: `"image.png"`

2. **File Locations**
   - Projects: `/public/project_imgs/`
   - Events (attended): `/public/event_imgs/`
   - Events (speaker): `/public/speaker_imgs/`
   - Profile: `/public/`

3. **Optimization**
   - Compress images before adding
   - Recommended max size: 500KB per image
   - Use appropriate format (PNG for logos, JPG for photos)

### Testing Changes

After editing JSON files:

1. **Syntax Check**: Validate JSON syntax
2. **Build Test**: Run `npm run build` to catch type errors
3. **Visual Test**: Check the website locally with `npm run dev`
4. **Browser Test**: Test on different screen sizes

### Version Control

1. **Commit Messages**: Be descriptive
   ```bash
   git commit -m "Add new project: Machine Learning Dashboard"
   git commit -m "Update education with latest degree"
   ```

2. **Review Changes**: Always review diffs before committing
   ```bash
   git diff src/data/projects.json
   ```

3. **Small Commits**: One logical change per commit

### Common Mistakes

❌ **Don't:**
```json
{
  "title": "Project",
  "tech": "React"  // Should be array
}
```

✅ **Do:**
```json
{
  "title": "Project",
  "tech": ["React"]
}
```

❌ **Don't:**
```json
{
  "description": "This is a "quote""  // Invalid escaping
}
```

✅ **Do:**
```json
{
  "description": "This is a \"quote\""
}
```

---

## Extending the Schema

To add new fields to a schema:

1. **Update TypeScript Interface** (if exists)
   ```typescript
   export interface ProjectTileProps {
     // ... existing fields
     newField?: string;  // Add new field
   }
   ```

2. **Update Component** to use new field
   ```tsx
   export default function ProjectTile({ newField, ...props }) {
     return (
       <div>
         {newField && <p>{newField}</p>}
       </div>
     );
   }
   ```

3. **Add to JSON Data**
   ```json
   {
     "id": "project1",
     "newField": "New value"
   }
   ```

4. **Update Documentation** (this file)

5. **Test Thoroughly**
