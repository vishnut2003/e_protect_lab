import TextMarquee from '@/components/ui-elements/text-marquee'
import DeafaultSection from '@/layouts/default-section'
import React from 'react'
import Image, { StaticImageData } from 'next/image';

import ServiceImage1 from "./assets/service-1.jpg";
import ServiceImage2 from "./assets/service-2.jpg";
import ServiceImage3 from "./assets/service-3.jpg";

import blurGreen from "./assets/blur.png";

const OurServices = () => {

    const services: {
        title: string,
        description?: string,
        href: string,
        image: StaticImageData,
        type: "one" | "two" | "three",
    }[] = [
            {
                title: "Cloud Security & Compliance",
                href: "#",
                image: ServiceImage1,
                type: "one",
            },
            {
                title: "AI-Driven Risk Intelligence",
                description: "Our system evolves with every data point—learning from new threats and improving protection every day.",
                href: "#",
                image: ServiceImage3,
                type: "two",
            },
            {
                title: "Cloud Security & Compliance",
                href: "#",
                image: ServiceImage2,
                type: "three",
            }
        ];

    return (
        <DeafaultSection
            outerClassName='py-[70px]'
            className='space-y-[70px]'
        >
            <div
                className='flex w-full items-end'
            >
                <div
                    className='w-full space-y-[30px]'
                >
                    <TextMarquee
                        maxWidth={250}
                        text='Our Services'
                    />

                    <h2
                        className='text-5xl font-light font-rethink-sans max-w-[500px] leading-[55px]'
                    >Our Cybersecurity Services at a Glance</h2>
                </div>
                <div
                    className='w-full flex justify-end'
                >
                    <p
                        className='max-w-[350px]'
                    >From real-time threat response to zero-trust infrastructure Oryn delivers smart, scalable protection built to adapt every single day.</p>
                </div>
            </div>

            <div
                className='grid grid-cols-3 gap-5'
            >
                {services.map((service, index) => {
                    if (service.type === "one") {
                        return (
                            <div
                                key={index}
                                className='min-h-[400px] bg-cover bg-no-repeat relative rounded-2xl overflow-hidden flex items-end p-[30px]'
                                style={{
                                    backgroundImage: `url(${service.image.src})`
                                }}
                            >
                                <div
                                    className='absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-background to-transparent'
                                />

                                <div
                                    className='z-10 space-y-4'
                                >
                                    <h3
                                        className='text-4xl font-rethink-sans'
                                    >{service.title}</h3>
                                    <button
                                        className='button-primary'
                                    >Get Started</button>
                                </div>
                            </div>
                        )
                    }

                    if (service.type === "two") {
                        return (
                            <div
                                className='flex min-h-[400px] flex-col justify-between gap-[20px] bg-cover bg-no-repeat relative rounded-2xl overflow-hidden p-[30px]'
                                style={{
                                    backgroundImage: `url(${service.image.src})`,
                                }}
                            >
                                <div
                                    className='absolute top-0 left-0 w-full h-full bg-background/70 z-0'
                                />

                                <div
                                    className='text-center flex flex-col items-center justify-between h-full z-10'
                                >
                                    <h3
                                        className='text-4xl'
                                    >{service.title}</h3>
                                    <button
                                        className='button-primary'
                                    >
                                        Get Started
                                    </button>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        )
                    }

                    if (service.type === "three") {
                        return (
                            <div
                                className='flex min-h-[400px] flex-col justify-between gap-[20px] relative rounded-2xl overflow-hidden p-[30px] bg-background-secondary'
                            >

                                <div
                                    className='flex flex-col gap-[25px]'
                                >
                                    <div
                                        className='w-full h-[180px] overflow-hidden rounded-2xl'
                                    >
                                        <Image
                                            src={service.image}
                                            alt='Service three design'
                                            className='w-full h-full object-cover object-center'
                                        />
                                    </div>
                                    <div
                                        className='space-y-[20px]'
                                    >
                                        <h3
                                            className='font-rethink-sans text-4xl'
                                        >{service.title}</h3>
                                        <button
                                            className='button-primary'
                                        >Get Started</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </DeafaultSection>
    )
}

export default OurServices