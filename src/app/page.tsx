import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import { Products } from '@/components/Products';
import { TechStack } from '@/components/TechStack';
import Image from 'next/image';

export default function Home() {
    return (
        <Container>
            <span className="text-4xl">👋</span>
            <Heading className="font-black">Hello there! I&apos;m Alma Julio Isnansyah</Heading>
            <Paragraph className="max-w-xl mt-4">
                I&apos;m a semester 6 student at ITERA, majoring in{' '}
                <Highlight>Informatics Engineering</Highlight>. I have a passion for{' '}
                <Highlight>software development</Highlight>, particularly in backend development and
                web development.
            </Paragraph>
            <Paragraph className="max-w-xl mt-4">
                I&apos;ve been involved in various projects, from being a CSS instructor in{' '}
                <Highlight>organizational training</Highlight> to developing scalable web
                applications using <Highlight>Laravel and React.js</Highlight>. My experience
                includes collaborating in a team to build a system that handles over 5000 users.
            </Paragraph>
            <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
                What I&apos;ve been working on
            </Heading>
            <Products />
            <TechStack />
        </Container>
    );
}
