'use client';

import React, { useState } from 'react'
import { HeaderMenuItemInterface } from './menu-items'
import Link from 'next/link';
import { RiAddLine } from '@remixicon/react';
import { motion, AnimatePresence } from "framer-motion";

const SingleSubmenuItem = ({
    data,
}: {
    data: HeaderMenuItemInterface,
}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className='relative'
        >
            <button
                className='text-white group hover:text-theme-three font-medium flex items-center gap-[5px] cursor-pointer'
                onClick={() => {
                    setIsOpen(prev => !prev)
                }}
            >
                {data.label}
                <RiAddLine
                    size={20}
                    className='text-theme-primary group-hover:text-theme-three'
                />
            </button>
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            key={"submenu"}
                            className='bg-theme-secondary py-[20px] px-[25px] absolute top-[40px] left-0 min-w-max space-y-[20px] rounded-sm'
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: 30,
                            }}
                        >
                            {data.submenu?.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className='block text-white hover:text-theme-primary'
                                >{item.label}</Link>
                            ))}
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default SingleSubmenuItem