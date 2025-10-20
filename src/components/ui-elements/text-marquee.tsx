'use client';

import { motion } from "framer-motion";
import { Fragment } from "react";

const TextMarquee = ({ text, maxWidth }: {
    text: string,
    maxWidth: number,
}) => {
    return (
        <div
            style={{ maxWidth }}
            className="w-full overflow-hidden py-[7px] px-[20px] bg-[#31422D33] rounded-2xl border border-theme-secondary"
        >
            <motion.div
                className="flex items-center gap-[10px] min-w-max"
                animate={{
                    x: '-50%',
                    transition: {
                        repeatType: "loop",
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                    },
                }}
            >
                {[1, 2, 3, 4].map((key) => (
                    <Fragment
                        key={key}
                    >
                        <p
                            className="tracking-[8px] font-rethink-sans uppercase text-[14px]"
                        >{text}</p>
                        <div
                            className="w-[1px] h-[20px] bg-white/20 shrink-0"
                        />
                    </Fragment>
                ))}
            </motion.div>
        </div>
    )
}

export default TextMarquee