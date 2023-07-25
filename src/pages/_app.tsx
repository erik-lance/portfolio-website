import '@/styles/globals.css'

import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] })

import type { AppProps } from 'next/app';
import Header from '@/components/Header';
import { ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';

// Makes every page under pages/ use the same layout
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme} >
        <div className={lexend.className}>
            <main className='flex flex-col min-h-screen'>
                <Header />
                <div className="flex flex-col items-center justify-between p-24">
                    <Component {...pageProps} />
                </div>
            </main>
        </div>
        </ThemeProvider>
    );
}

export default MyApp;