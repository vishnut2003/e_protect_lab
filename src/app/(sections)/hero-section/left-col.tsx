'use client';

import { RiPlayFill } from '@remixicon/react'
import React from 'react'
import { motion } from "framer-motion";

const LeftCol = () => {
    return (
        <div
            className='w-[50%]'
        >
            <div
                className='flex items-center gap-[25px] pt-[80px]'
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
                <hr
                    className='w-full border-white/20'
                />
            </div>
        </div>
    )
}

export default LeftCol