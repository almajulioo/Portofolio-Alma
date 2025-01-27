import Image from 'next/image';
import React from 'react';
import { Heading } from './Heading';
import { twMerge } from 'tailwind-merge';

export const TechStack = () => {
    const stack = [
        {
            title: 'Next.js',
            src: '/images/logos/next.png',

            className: 'h-10 w-14 object-fit',
        },
        {
            title: 'Laravel',
            src: '/images/logos/laravel.png',
            className: 'h-10 w-14 object-fit',
        },
        {
            title: 'ReactJS',
            src: '/images/logos/reactjs.png',
            className: 'h-10 w-14 object-fit',
        },
        {
            title: 'Node',
            src: '/images/logos/node.png',

            className: 'h-10 w-12 object-fit',
        },
        {
            title: 'Tailwind',
            src: '/images/logos/tailwind.png',

            className: 'h-10 w-24 object-fit',
        },
        {
            title: 'Vercel',
            src: '/images/logos/vercel.png',

            className: 'h-10 w-24 object-fit',
        },
        {
            title: 'Django',
            src: '/images/logos/django.png',

            className: 'h-10 w-24 object-cover',
        },
        {
            title: 'Godot',
            src: '/images/logos/godot.png',

            className: 'h-10 w-24 object-fit',
        },
    ];
    return (
        <div>
            <Heading as="h2" className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
                Tech Stack
            </Heading>
            <div className="flex flex-wrap">
                {stack.map((item) => (
                    <Image
                        src={item.src}
                        key={item.src}
                        width={`200`}
                        height={`200`}
                        alt={item.title}
                        className={twMerge('object-contain mr-4 mb-4', item.className)}
                    />
                ))}
            </div>
        </div>
    );
};
