'use client';

import Image from 'next/image'
import React from 'react';
import { motion } from "framer-motion";

// static images
import blurCircle from "./images/blur.png";
import backgroundArch from "./images/background-arc.png";

const HeroBgGraphics = () => {
    return (
        <>
            <Image
                src={blurCircle}
                alt='blur circle'
                className='absolute top-[-270px] left-[-270px] w-[700px]'
            />
            <Image
                src={blurCircle}
                alt='blur circle'
                className='absolute bottom-[-270px] right-[-270px] w-[700px]'
            />
            <motion.div
                className='absolute top-[100px] right-[-150px] rotate-[60deg] min-w-1/2'
                initial={{
                    x: 200,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.8,
                    }
                }}
            >
                <Image
                    src={backgroundArch}
                    alt='Arch 1'
                    className='w-full'
                />
            </motion.div>
            <motion.div
                className='absolute bottom-0 left-0 rotate-[-135deg] min-w-1/2'
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                    }
                }}
            >
                <Image
                    src={backgroundArch}
                    alt='Arch 2'
                    className='w-full'
                />
            </motion.div>
        </>
    )
}

export default HeroBgGraphics