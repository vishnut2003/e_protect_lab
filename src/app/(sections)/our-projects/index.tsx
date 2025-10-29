import TextMarquee from '@/components/ui-elements/text-marquee'
import DeafaultSection from '@/layouts/default-section'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Link from 'next/link';
import { RiBuilding4Line } from '@remixicon/react';

// assets
import Project1 from "./assets/project-1.jpg";
import Project2 from "./assets/project-2.jpg";
import Project3 from "./assets/project-3.jpg";
import Project4 from "./assets/project-4.jpg";
import BlurGraphics from "./assets/blur.png";

const OurProjectsSection = () => {

    const projectsList: {
        image: StaticImageData,
        company: string,
        heading: string,
        description: string,
        href: string,
    }[] = [
        {
            company: "Finqore Bank (Global)",
            description: "Constant phishing & credential stuffing attacks",
            heading: "Banking Without Breaches",
            href: "#",
            image: Project1,
        },
        {
            company: "Medexia Clinics",
            description: "Patient data leaks and compliance risks",
            heading: "Securing Healthcare Records",
            href: "#",
            image: Project2,
        },
        {
            company: "Nexsoft Systems",
            description: "Growing remote work with unverified devices.",
            heading: "Enabling Safe Remote Work",
            href: "#",
            image: Project3,
        },
        {
            company: "Voltrax Industries",
            description: "Cyberattacks on factory sensors and machines.",
            heading: "Industrial IoT Protection",
            href: "#",
            image: Project4,
        }
    ]

    return (
        <DeafaultSection
            outerClassName='py-[60px]'
            className='space-y-11'
        >
            <div
                className='flex w-full items-end'
            >
                <div
                    className='w-full space-y-[30px]'
                >
                    <TextMarquee
                        maxWidth={250}
                        text='Our Projects'
                    />

                    <h2
                        className='text-5xl font-light font-rethink-sans max-w-[500px] leading-[55px]'
                    >How Oryn Defends in the Real World</h2>
                </div>
                <div
                    className='w-full flex justify-end'
                >
                    <p
                        className='max-w-[350px]'
                    >From fintech to healthcare, our evolving cybersecurity has stopped attacks, ensured uptime, and helped teams scale with confidence.</p>
                </div>
            </div>

            <div
                className='grid grid-cols-4 gap-6'
            >
                {projectsList.map((project, index) => (
                    <div
                        key={index}
                        className='p-6 bg-background-secondary rounded-2xl border border-theme-secondary flex flex-col items-start gap-6 relative overflow-hidden'
                    >
                        <Image
                            src={project.image}
                            alt={project.heading}
                            className='w-full aspect-square object-cover rounded-2xl'
                        />

                        <div
                            className='flex items-center gap-3 bg-theme-secondary rounded-full p-1 pr-5 z-10'
                        >
                            <div
                                className='w-8 h-8 shrink-0 bg-theme-three rounded-full flex items-center justify-center'
                            >
                                <RiBuilding4Line
                                    size={15}
                                />
                            </div>
                            <p
                                className='text-lg font-rethink-sans'
                            >{project.company}</p>
                        </div>

                        <div
                            className='mt-17 flex flex-col items-start gap-4 z-10'
                        >
                            <h3
                                className='text-3xl font-light font-rethink-sans'
                            >{project.heading}</h3>
                            <p>{project.description}</p>
                            <Link
                                href={project.href}
                                className='button-primary flex mt-8'
                            >Get Started</Link>
                        </div>

                        <Image
                            alt='blur'
                            src={BlurGraphics}
                            className='min-w-[500px] absolute bottom-[-30%] left-[-20%] z-0'
                        />

                    </div>
                ))}
            </div>
        </DeafaultSection>
    )
}

export default OurProjectsSection