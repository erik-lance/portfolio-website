import '@/styles/globals.css'

import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] })

import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import { Box, ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';

// Makes every page under pages/ use the same layout
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme} >
        <div className={lexend.className}>
            <main className='flex flex-col min-h-screen'>
                <Header />
                <div className="flex flex-col items-center justify-between">
                    <Box
                        width="100%"
                        sx={{
                            paddingTop: { xs: 2, sm: 3, md: 4, lg: 8},
                            paddingX: { xs: 2, sm: 3, md: 6, lg: 8}
                        }}
                    >
                        <Component {...pageProps} />
                    </Box>
                </div>
            </main>
        </div>
        </ThemeProvider>
    );
}

export default MyApp;