import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import { Products } from '@/components/Products';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Projects | John Doe',
    description:
        'Alma Julio Isnansyah adalah seorang mahasiswa Teknik Informatika di ITERA dengan minat pada pengembangan perangkat lunak, khususnya di bidang backend development dan web development. Alma memiliki pengalaman membangun aplikasi web yang scalable dengan menggunakan teknologi seperti Laravel dan React.js, serta memiliki antusiasme untuk berkontribusi dalam solusi digital inovatif.',
};

export default function Projects() {
    return (
        <Container>
            <span className="text-4xl">⚡</span>
            <Heading className="font-black mb-10"> What I&apos;ve been working on</Heading>

            <Products />
        </Container>
    );
}
