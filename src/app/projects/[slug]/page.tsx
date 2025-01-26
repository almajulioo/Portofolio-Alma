import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import { SingleProduct } from '@/components/Product';
import { Products } from '@/components/Products';
import { products } from '@/constants/products';
import { Product } from '@/types/products';
import { Metadata } from 'next';
import Image from 'next/image';
import { redirect } from 'next/navigation';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.slug;
    const product = products.find((p) => p.slug === slug) as Product | undefined;
    if (product) {
        return {
            title: product.title,
            description: product.description,
        };
    } else {
        return {
            title: 'Projects | Alma Julio',
            description:
                'Alma Julio Isnansyah adalah seorang mahasiswa Teknik Informatika di ITERA dengan minat pada pengembangan perangkat lunak, khususnya di bidang backend development dan web development. Alma memiliki pengalaman membangun aplikasi web yang scalable dengan menggunakan teknologi seperti Laravel dan React.js, serta memiliki antusiasme untuk berkontribusi dalam solusi digital inovatif.',
        };
    }
}

export default function SingleProjectPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        redirect('/projects');
    }
    return (
        <Container>
            <SingleProduct product={product} />
        </Container>
    );
}
