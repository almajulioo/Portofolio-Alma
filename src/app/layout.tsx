import { Sidebar } from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { Footer } from '@/components/Footer';
import rack from 'public/images/rack.ico';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Alma Julio - Backend Developer',
    icons: { icon: rack.src },
    description:
        'Alma Julio Isnansyah adalah seorang mahasiswa Teknik Informatika di ITERA dengan minat pada pengembangan perangkat lunak, khususnya di bidang backend development dan web development. Alma memiliki pengalaman membangun aplikasi web yang scalable dengan menggunakan teknologi seperti Laravel dan React.js, serta memiliki antusiasme untuk berkontribusi dalam solusi digital inovatif.',
    openGraph: {
        title: 'Alma Julio - Backend Developer',
        description:
            'Alma Julio Isnansyah adalah seorang mahasiswa Teknik Informatika di ITERA dengan minat pada pengembangan perangkat lunak, khususnya di bidang backend development dan web development. Alma memiliki pengalaman membangun aplikasi web yang scalable dengan menggunakan teknologi seperti Laravel dan React.js, serta memiliki antusiasme untuk berkontribusi dalam solusi digital inovatif.',
        images: [
            {
                url: '/favicon.ico',
                width: 1200,
                height: 630,
                alt: 'Alma Julio - Backend Developer',
            },
        ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta
                    name="google-site-verification"
                    content="JP5HhKiR5WlS1D-bzKpsPJqcriQyyWlZJhMFuvmdp7s"
                />
            </head>
            <body
                className={twMerge(
                    inter.className,
                    'flex antialiased h-screen overflow-hidden bg-gray-100'
                )}>
                <Sidebar />
                <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
                    <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
