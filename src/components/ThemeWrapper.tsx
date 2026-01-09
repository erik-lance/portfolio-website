'use client'
import theme from '@/styles/theme'
import { ThemeProvider } from '@emotion/react'
import React, { ReactNode } from 'react'; // Import ReactNode type

/**
 * Props for the ThemeWrapper component
 */
interface ThemeWrapperProps {
  /** Child components to be wrapped with the theme provider */
  children: ReactNode;
}

/**
 * ThemeWrapper component that wraps the application with Material UI's ThemeProvider.
 * This applies the custom theme defined in src/styles/theme.ts to all child components.
 * 
 * Must be a client component ('use client') because ThemeProvider requires client-side rendering.
 * 
 * @param {ThemeWrapperProps} props - Component props
 * @returns {JSX.Element} ThemeProvider wrapper with custom theme
 * 
 * @example
 * <ThemeWrapper>
 *   <App />
 * </ThemeWrapper>
 */
const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;