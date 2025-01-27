'use client';
import { Paragraph } from '@/components/Paragraph';
import Image from 'next/image';

import { motion } from 'framer-motion';
import sukamarga from 'public/images/sukamargahome-about.png';
import sukamargaumkm from 'public/images/sukamargaumkm-about.png';
import whickerbutler from 'public/images/whickerbutler-abouts.png';
import whickerbutler2 from 'public/images/whickerbutler2-about.png';

export default function About() {
    const images = [sukamarga, whickerbutler2, sukamargaumkm, whickerbutler];
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
                {images.map((image, index) => (
                    <motion.div
                        key={image.src}
                        initial={{
                            opacity: 0,
                            y: -50,
                            rotate: 0,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotate: index % 2 === 0 ? 3 : -3,
                        }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}>
                        <Image
                            src={image}
                            width={200}
                            height={400}
                            alt="about"
                            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-4xl">
                <Paragraph className="mt-4">
                    Hey there, I&apos;m Alma Julio Isnansyah - a passionate Informatics student,
                    aspiring backend developer, and a curious learner. Welcome to my digital space!
                </Paragraph>
                <Paragraph className="mt-4">
                    Since the beginning of my journey in technology, I&apos;ve been deeply intrigued
                    by the art of creating impactful digital solutions. As a developer, I love
                    transforming ideas into scalable and elegant web applications. My focus lies in
                    crafting systems that not only function seamlessly but also provide significant
                    value.
                </Paragraph>
                <Paragraph className="mt-4">
                    Beyond technical skills, I&apos;ve honed my ability to lead and teach. I&apos;ve
                    had the opportunity to be a CSS instructor, sharing knowledge about selectors,
                    margins, paddings, and layout systems like Flexbox and Grid. It&apos;s been
                    fulfilling to empower others in their learning journeys.
                </Paragraph>
                <Paragraph className="mt-4">
                    My professional experiences include developing projects using frameworks like
                    Laravel for backend and React.js for frontend. Collaborating with a dynamic
                    team, I contributed to building systems that serve over 5000 users, showcasing
                    my ability to handle challenges in real-world scenarios.
                </Paragraph>
                <Paragraph className="mt-4">
                    Through this platform, I hope to share my experiences, projects, and insights
                    with you. Whether you&apos;re a fellow developer seeking ideas, a learner
                    exploring technology, or someone who values innovative solutions, there&apos;s
                    something here for everyone.
                </Paragraph>
                <Paragraph className="mt-4">
                    Let&apos;s explore the exciting possibilities in technology together, learning
                    and growing as we go. Thank you for stopping by, and I&apos;m excited to share
                    this journey with you.
                </Paragraph>
            </div>
        </div>
    );
}
