"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function CounterText({ endValue }: {
    endValue: number,
}) {

    const [value, setValue] = useState<number>(0);
    const ref = useRef<HTMLSpanElement>(null);

    const animateTextCounter = useCallback(async () => {

        const idelSpeed = 200;
        const speed = idelSpeed / (endValue / 20);

        for (let i = 0; i < endValue; i++) {
            setValue(prev => ++prev);
            await new Promise(resolve => setTimeout(resolve, speed));
        }

    }, [endValue])

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateTextCounter();
                    observer.unobserve(entry.target);
                }
            })
        })

        if (ref.current) {
            observer.observe(ref.current);
        }

    }, [animateTextCounter]);

    return <span ref={ref}>{value}</span>;

}