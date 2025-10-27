'use client';

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const NumberSlider = (data: {
    title: string,
    value: number,
}) => {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        (async () => {
            for (let i = 0; i < data.value; i++) {
                setCount(prev => ++prev);
                await new Promise(resolve => setTimeout(resolve, 20))
            }
        })()
    }, [data.value])

    return (
        <div
            className='space-y-[40px]'
        >
            <p
                className='opacity-50 font-rethink-sans uppercase tracking-widest'
            >{data.title}</p>
            <div
                className='w-full h-[3px] bg-theme-secondary'
            >
                <motion.div
                    className='bg-theme-three h-full w-1/2 relative'
                    initial={{ width: 0 }}
                    whileInView={{
                        width: `${data.value}%`,
                        transition: {
                            ease: "easeOut",
                            duration: 2,
                        }
                    }}
                >
                    <p
                        className='absolute right-0 bottom-[15px] text-theme-three'
                    >{count}%</p>
                </motion.div>
            </div>
        </div>
    )
}

export default NumberSlider