# Contributing to Portfolio Website

Thank you for your interest in contributing to this portfolio website! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Suggesting Enhancements

Enhancement suggestions are welcome! Please create an issue with:
- A clear, descriptive title
- Detailed description of the proposed feature
- Why this enhancement would be useful
- Any implementation ideas you have

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 💻 Development Guidelines

### Code Style

- Follow the existing code style
- Use TypeScript for all new files
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable and function names

### TypeScript

- Always use proper typing (avoid `any` when possible)
- Define interfaces for component props
- Export interfaces when they might be reused

### React/Next.js

- Use functional components
- Follow React best practices and hooks rules
- Keep state management simple
- Use Next.js features appropriately (routing, image optimization, etc.)

### Styling

- Use TailwindCSS for utility classes when possible
- Use Material UI components for UI elements
- Follow the existing theme in `src/styles/theme.ts`
- Ensure responsive design (test on mobile, tablet, and desktop)

### File Organization

```
src/
├── app/           # App router pages
├── components/    # Reusable React components
├── data/          # JSON data files
├── pages/         # Pages router pages
└── styles/        # Theme and style configurations
```

### Component Structure

When creating new components:

1. Create the component file in `src/components/`
2. Define TypeScript interfaces for props
3. Add JSDoc comments explaining the component's purpose
4. Export the component as default
5. Keep components pure and testable

Example:
```typescript
/**
 * ComponentName displays [description]
 * 
 * @param {ComponentNameProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Component implementation
}
```

### Data Files

- All content data is stored in `src/data/*.json`
- Follow existing schema for each data type
- Validate JSON syntax before committing
- Keep data structures consistent

### Commit Messages

Write clear, descriptive commit messages:
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests when relevant

Examples:
- `Add new project to portfolio`
- `Fix navigation menu on mobile devices`
- `Update experience section with new role`
- `Refactor ProjectTile component for better reusability`

## 🧪 Testing

Before submitting a pull request:

1. Test on multiple screen sizes (mobile, tablet, desktop)
2. Test on different browsers (Chrome, Firefox, Safari)
3. Run the linter: `npm run lint`
4. Build the project: `npm run build`
5. Test the production build: `npm start`

## 📝 Adding Documentation

When making significant changes:
- Update relevant documentation files
- Add JSDoc comments to new functions/components
- Update README.md if necessary
- Add examples for new features

## 🔄 Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation as needed
3. Make sure all tests pass
4. Request review from maintainers
5. Address any feedback from code review
6. Once approved, your PR will be merged

## ❓ Questions?

If you have questions about contributing, feel free to:
- Open an issue for discussion
- Reach out through the contact information on the website

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other contributors

Thank you for contributing! 🎉
