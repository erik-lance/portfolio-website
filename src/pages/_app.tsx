import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import type { AppProps } from 'next/app';
import Header from '@/components/Header';

// Makes every page under pages/ use the same layout
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <main className='flex flex-col min-h-screen'>
                <Header />
                <div className="flex flex-col items-center justify-between p-24">
                    <Component {...pageProps} />
                </div>
            </main>
        </div>
    );
}

export default MyApp;