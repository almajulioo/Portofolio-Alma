import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import { Products } from '@/components/Products';
import { TechStack } from '@/components/TechStack';

export default function Home() {
    return (
        <Container>
            <span className="text-4xl">👋</span>
            <Heading className="font-black">Hello there! I&apos;m Alma Julio Isnansyah</Heading>
            <Paragraph className="max-w-xl mt-4">
                I am a <Highlight>professional backend developer</Highlight> with a passion for{' '}
                <Highlight>software development</Highlight>, particularly in backend systems and web
                application development.
            </Paragraph>
            <Paragraph className="max-w-xl mt-4">
                I have been involved in various projects, from mentoring CSS in{' '}
                <Highlight>organizational training</Highlight> to developing scalable web
                applications using <Highlight>Laravel and React.js</Highlight>. My experience
                includes collaborating with teams to build systems that handle over 5000 users,
                ensuring performance and reliability.
            </Paragraph>
            <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
                What I&apos;ve been working on
            </Heading>
            <Products />
            <TechStack />
        </Container>
    );
}
