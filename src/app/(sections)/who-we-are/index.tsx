'use client';

import DeafaultSection from '@/layouts/default-section'
import React from 'react'
import { motion } from "framer-motion";

// assets
import Banner from "./assets/about-banner.jpeg";
import { RiPlayFill } from '@remixicon/react';
import TextMarquee from '@/components/ui-elements/text-marquee';
import NumberSlider from './slide';
import CounterText from '@/components/ui-elements/counter-text';

const WhoWeAre = () => {
    return (
        <DeafaultSection
            className='flex items-center gap-[80px]'
            outerClassName='py-[70px]'
        >
            <div
                className='w-[450px] shrink-0 h-[600px] bg-cover bg-center rounded-2xl flex flex-col'
                style={{
                    backgroundImage: `url(${Banner.src})`,
                }}
            >
                <div
                    className='h-full p-7 flex items-center justify-center'
                >
                    <motion.button
                        className='shrink-0 w-[70px] h-[70px] flex items-center justify-center bg-theme-three rounded-full cursor-pointer'
                        initial={{
                            boxShadow: "0 0 0 0 #ff0000",
                        }}
                        animate={{
                            boxShadow: "0 0 50px 20px #ff000000",
                            transition: {
                                repeatType: "loop",
                                repeat: Infinity,
                                duration: 5,
                            }
                        }}
                    >
                        <RiPlayFill
                            size={30}
                        />
                    </motion.button>
                </div>
                <div
                    className='bg-gradient-to-t from-background to-transparent'
                >
                    <p
                        className='text-lg pt-[60px] pb-[20px] text-center'
                    >We Don’t Just Defend. We Adapt.</p>
                </div>
            </div>
            <div
                className='w-full space-y-[40px]'
            >
                <TextMarquee
                    maxWidth={200}
                    text='Who we are'
                />

                <p
                    className='text-2xl'
                >At Oryn, we believe cyber threats don’t sleep and neither should your defense. We build intelligent, evolving security systems powered by AI and real-time data.</p>

                <div
                    className='space-y-[40px]'
                >
                    {
                        [
                            {
                                title: "Real-time protection",
                                value: 90,
                            },
                            {
                                title: "Trusted Defense",
                                value: 80,
                            }
                        ].map((data, index) => (
                            <NumberSlider
                                key={index}
                                {...data}
                            />
                        ))
                    }
                </div>

                <div
                    className='flex items-center justify-baseline pt-[30px]'
                >
                    {
                        [
                            {
                                title: "Attendees",
                                value: 600,
                                suffix: "+",
                            },
                            {
                                title: "Project Complete",
                                value: 1600,
                                suffix: "+",
                            },
                            {
                                title: "Company Statisfied",
                                value: 800,
                                suffix: "+",
                            },
                        ].map((data, index) => (
                            <div
                                key={index}
                                className='min-w-[200px] space-y-3'
                            >
                                <p
                                    className='text-sm opacity-50 font-light'
                                >{data.title}</p>
                                <p
                                    className='text-4xl'
                                >
                                    <CounterText
                                        endValue={data.value}
                                    />
                                    {data.suffix}
                                </p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </DeafaultSection>
    )
}

export default WhoWeAre