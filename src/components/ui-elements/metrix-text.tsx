"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function MetrixAnimationText({ text, onetime }: {
    text: string,
    onetime?: boolean,
}) {

    const speed = 10;
    const [value, setValue] = useState<string>("");
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const spanRef = useRef<HTMLSpanElement>(null);

    const animateText = useCallback(async (index: number) => {

        const alphabet = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ]

        function generateRandomLetter() {
            const letters = [];

            for (let i = 0; i < 10; i++) {
                const random = Math.floor(Math.random() * (alphabet.length + 1));
                letters.push(alphabet[random] || "a");
            }

            return letters;
        }

        await new Promise(resolve => setTimeout(resolve, speed));

        const existLetter = text[index];

        if (!existLetter) {
            return;
        }

        const letters = generateRandomLetter();
        letters.push(existLetter);


        for (const letter of letters) {
            setValue(prev => {
                if (!prev) {
                    return letter;
                }

                const tempCopy = `${prev}`;
                const newValue = tempCopy.substring(0, index) + letter;
                return newValue;
            })

            await new Promise(resolve => setTimeout(resolve, speed));
        }

        await animateText(++index);
        return;

    }, [text])

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    (async () => {
                        setIsRunning(true);
                        await animateText(0);
                        setIsRunning(false);
                    })()

                    if (onetime) {
                        observer.unobserve(entry.target);
                    }
                }
            })
        })

        if (spanRef.current) {
            observer.observe(spanRef.current);
        }

    }, [onetime, animateText])

    return (
        <span
            ref={spanRef}
        >
            {value}

            {
                isRunning &&
                <span
                    className="bg-foreground px-[1px] opacity-70"
                ></span>
            }

        </span>
    )


}