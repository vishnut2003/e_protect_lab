'use client';

import TextMarquee from '@/components/ui-elements/text-marquee'
import DeafaultSection from '@/layouts/default-section'
import { RiAddLine, RiArrowRightLongLine, RiBrainLine, RiGitForkLine, RiServerLine, RiSubtractLine, RiTimeLine } from '@remixicon/react'
import React, { useState } from 'react';
import { motion } from "framer-motion";

// assets
import KeyboardWithKey from "./assets/keyboard-with-key.jpg";

const WhyChooseUs = () => {

    const [currentFaqOpen, setCurrentFaqOpen] = useState<number>(0);

    return (
        <DeafaultSection
            outerClassName='py-[60px]'
            className='flex items-stretch gap-10'
        >
            <div
                className='w-[90%] space-y-[40px]'
            >
                <TextMarquee
                    maxWidth={300}
                    text='Why Choose Us'
                />
                <h2
                    className='text-5xl font-rethink-sans font-extralight leading-[55px]'
                >Designed for a World That Changes Daily</h2>

                <div
                    className='flex items-center justify-start gap-10'
                >
                    {
                        [
                            {
                                icon: RiServerLine,
                                title: "Based learning",
                            },
                            {
                                icon: RiGitForkLine,
                                title: "Based learning",
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className='flex items-center gap-2.5'
                            >
                                <item.icon
                                    size={20}
                                    className='shrink-0 w-8 h-8 rounded-full p-1.5 bg-theme-secondary'
                                />
                                <p
                                    className='font-rethink-sans uppercase tracking-widest'
                                >{item.title}</p>
                            </div>
                        ))
                    }
                </div>

                <div
                    className='space-y-6'
                >
                    {
                        [
                            {
                                heading: "Daily-Evolving Defense",
                                description: "Our AI adapts every day, learning from global threat patterns to protect your business in real time.",
                            },
                            {
                                heading: "Rapid Threat Response",
                                description: "Stop breaches in seconds, not hours. We detect, isolate, and neutralize threats before they cause harm.",
                            },
                            {
                                heading: "End-to-End Security",
                                description: "From endpoint to cloud, your entire digital environment stays protected under one unified system.",
                            },
                            {
                                heading: "Behavior-Based Detection",
                                description: "Go beyond signatures—Oryn identifies unusual behavior and emerging threats before they’re even known.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className='space-y-5'
                            >
                                <button
                                    className={'cursor-pointer text-2xl flex items-center justify-between w-full' + ` ${index === currentFaqOpen ? "text-theme-primary" : ""}`}
                                    onClick={() => setCurrentFaqOpen(index)}
                                >
                                    <h3>{faq.heading}</h3>
                                    {
                                        currentFaqOpen === index ? (
                                            <RiAddLine
                                                size={30}
                                            />
                                        ) : (
                                            <RiSubtractLine
                                                size={30}
                                            />
                                        )
                                    }
                                </button>
                                {
                                    currentFaqOpen === index && (
                                        <motion.p
                                            initial={{
                                                y: 30,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                y: 0,
                                                opacity: 1,
                                            }}
                                            className='text-foreground/80'
                                        >{faq.description}</motion.p>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>

            </div>
            <div
                className='w-full flex items-stretch gap-7'
            >
                <div
                    className='w-full h-full bg-background-secondary border border-theme-secondary rounded-2xl p-6'
                >
                    <div
                        className='flex flex-col h-full justify-between'
                    >
                        <div
                            className='flex items-center justify-start gap-4'
                        >
                            <div
                                className='shrink-0 w-10 h-10 rounded-full bg-theme-three flex items-center justify-center'
                            >
                                <RiBrainLine
                                    size={23}
                                />
                            </div>
                            <p
                                className='text-xl font-rethink-sans'
                            >Delivers intelligent</p>
                        </div>
                        <div
                            className='space-y-5'
                        >
                            <p
                                className='text-2xl'
                            >Ready to Outsmart Tomorrow’s Threats?</p>
                            <button
                                className='button-primary flex items-center gap-3'
                            >
                                <p>Get Started</p>
                                <RiArrowRightLongLine
                                    size={25}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='w-full h-full bg-cover rounded-2xl p-6 bg-center flex justify-start items-start'
                    style={{
                        backgroundImage: `url(${KeyboardWithKey.src})`,
                    }}
                >
                    <div
                        className='flex items-center justify-start gap-4 bg-theme-secondary p-2 rounded-full pr-6'
                    >
                        <div
                            className='shrink-0 w-10 h-10 rounded-full bg-theme-three flex items-center justify-center'
                        >
                            <RiTimeLine
                                size={23}
                            />
                        </div>
                        <p
                            className='text-xl font-rethink-sans'
                        >Delivers intelligent</p>
                    </div>
                </div>
            </div>
        </DeafaultSection>
    )
}

export default WhyChooseUs