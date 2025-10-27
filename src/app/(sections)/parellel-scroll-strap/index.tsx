'use client';

import { RiShieldLine } from '@remixicon/react';
import React, { Fragment, useEffect, useRef, useState } from 'react'

const ParallelScrollStrap = () => {

    const [points] = useState([
        "Cyberspace",
        "Security",
        "Defend",
    ]);

    const scrollWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            const offSet = window.pageYOffset;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentPercent = (offSet / scrollHeight) * 100;

            if (scrollWrapper.current) {
                const elementScrollWidth = scrollWrapper.current.scrollWidth - scrollWrapper.current.clientWidth;
                const targetPos = (currentPercent / 100) * elementScrollWidth;

                scrollWrapper.current.scroll({
                    left: targetPos,
                    behavior: "instant",
                })
            }

        })

    }, [])

    return (
        <div
            className='bg-background-secondary text-foreground/20 py-[30px] overflow-hidden'
            ref={scrollWrapper}
        >
            <div
                className='flex items-center text-5xl gap-[40px] min-w-max'
            >
                {
                    [...points, ...points, ...points, ...points].map((text, index) => (
                    <Fragment
                        key={index}
                    >
                        <p
                            className='shrink-0 font-extralight'
                        >{text}</p>
                        <RiShieldLine
                            size={30}
                            className='shrink-0'
                        />
                    </Fragment>
                ))
                }
            </div>
        </div>
    )
}

export default ParallelScrollStrap