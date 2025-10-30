'use client';

import TextMarquee from '@/components/ui-elements/text-marquee'
import DeafaultSection from '@/layouts/default-section'
import React from 'react'
import TestmonialsCarousel from './carousel'
import { motion } from "framer-motion";

// assets
import VideoPlaceholder from "./assets/video-placeholder.jpeg";
import { RiPlayFill } from '@remixicon/react';

const TestimonialSection = () => {
    return (
        <DeafaultSection
            outerClassName='py-[60px]'
            className='space-y-11'
        >
            <div
                className='flex items-end'
            >
                <div
                    className='w-full space-y-4'
                >
                    <TextMarquee
                        maxWidth={200}
                        text='Reviews'
                    />
                    <h2
                        className='text-5xl font-rethink-sans leading-15'
                    >What Leaders Say About eProtectLab</h2>
                </div>
                <div
                    className='w-full flex justify-end'
                >
                    <button
                        className='button-primary'
                    >
                        Talk to a Client Specialist
                    </button>
                </div>
            </div>
            <div
                className='flex items-stretch min-h-[400px] gap-11'
            >
                <TestmonialsCarousel />
                <div
                    className='bg-cover bg-center w-[40%] p-6 rounded-3xl'
                    style={{ backgroundImage: `url(${VideoPlaceholder.src})` }}
                >
                    <div>
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
                </div>
            </div>
        </DeafaultSection>
    )
}

export default TestimonialSection