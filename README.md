# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Material UI to showcase professional experience, education, projects, certifications, and events.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Multiple Sections**: 
  - Home/Hero section with personal introduction
  - Projects showcase with detailed project pages
  - Professional experience timeline
  - Education history
  - Certifications display
  - Events (attended and speaking engagements)
  - Resume/CV download
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, Material UI, and TailwindCSS
- **Dynamic Content**: Content managed through JSON files for easy updates
- **Custom Theming**: Custom Material UI theme with personalized color palette

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/erik-lance/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
portfolio-website/
├── public/              # Static assets (images, icons, etc.)
│   ├── project_imgs/    # Project screenshots
│   ├── event_imgs/      # Event photos
│   └── speaker_imgs/    # Speaker event photos
├── src/
│   ├── app/            # Next.js 14 app directory
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section for home page
│   │   ├── ProjectTile.tsx # Project card component
│   │   ├── EventTile.tsx   # Event card component
│   │   └── ThemeWrapper.tsx # MUI theme provider
│   ├── data/          # JSON data files
│   │   ├── projects.json    # Projects data
│   │   ├── experience.json  # Work experience
│   │   ├── education.json   # Education history
│   │   ├── events.json      # Events attended
│   │   └── speaker.json     # Speaking engagements
│   ├── pages/         # Next.js pages (Pages Router)
│   │   ├── _app.tsx         # App wrapper
│   │   ├── projects.tsx     # Projects page
│   │   ├── experience.tsx   # Experience page
│   │   ├── education.tsx    # Education page
│   │   ├── events.tsx       # Events page
│   │   ├── certificates.tsx # Certifications page
│   │   ├── resume.tsx       # Resume page
│   │   └── p/[project].tsx  # Dynamic project detail pages
│   └── styles/        # Style configurations
│       └── theme.ts         # Material UI theme
├── next.config.js     # Next.js configuration
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json      # TypeScript configuration
└── package.json       # Project dependencies
```

## 🎨 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Material UI](https://mui.com/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Material Icons](https://mui.com/material-ui/material-icons/)
- **Font**: [Lexend](https://fonts.google.com/specimen/Lexend)

## 📝 Managing Content

All content is managed through JSON files in the `src/data/` directory. This makes it easy to update your portfolio without touching the code.

### Adding a New Project

Edit `src/data/projects.json` and add a new entry:

```json
{
  "id": "unique_project_id",
  "title": "Project Title",
  "tagline": "Short description",
  "description": "Detailed description",
  "image": "image_filename.png",
  "link": "https://project-url.com",
  "github": "https://github.com/username/repo",
  "tech": ["Technology1", "Technology2"]
}
```

Place the project image in `public/project_imgs/`.

### Adding Experience

Edit `src/data/experience.json` with your work experience details.

### Adding Education

Edit `src/data/education.json` with your educational background.

### Adding Events

- For events attended: Edit `src/data/events.json`
- For speaking engagements: Edit `src/data/speaker.json`

## 🎨 Customizing the Theme

The Material UI theme can be customized in `src/styles/theme.ts`. You can modify:
- Color palette (primary, secondary, text colors)
- Typography (font family, sizes)
- Component default styles

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Other Deployment Options

- **Netlify**: Follow the [Next.js on Netlify guide](https://docs.netlify.com/integrations/frameworks/next-js/)
- **AWS Amplify**: Follow the [Next.js on AWS Amplify guide](https://docs.amplify.aws/guides/hosting/nextjs/)
- **Self-hosted**: Build with `npm run build` and serve with `npm start`

## 📚 Additional Documentation

For more detailed information, check out these docs:

- [ARCHITECTURE.md](docs/ARCHITECTURE.md) - Detailed architecture overview
- [COMPONENTS.md](docs/COMPONENTS.md) - Component API documentation
- [DATA_SCHEMA.md](docs/DATA_SCHEMA.md) - JSON data schema reference
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines

## 📄 License

This project is open source and available under the MIT License.

## 🙋‍♂️ Contact

For questions or feedback, feel free to reach out through the contact information on the website.

## 🔗 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Material UI Documentation](https://mui.com/material-ui/getting-started/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
