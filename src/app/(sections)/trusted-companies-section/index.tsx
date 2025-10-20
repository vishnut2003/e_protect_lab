'use client';

import DeafaultSection from "@/layouts/default-section";
import { motion } from "framer-motion";

// static brand logos
import brand1 from "./brands/brand-1.png";
import brand2 from "./brands/brand-2.png";
import brand3 from "./brands/brand-3.png";
import brand4 from "./brands/brand-4.png";
import brand5 from "./brands/brand-5.png";
import brand6 from "./brands/brand-6.png";
import brand7 from "./brands/brand-7.png";
import brand8 from "./brands/brand-8.png";
import brand9 from "./brands/brand-9.png";
import brand10 from "./brands/brand-10.png";
import brand11 from "./brands/brand-11.png";
import Image from "next/image";
import MetrixAnimationText from "@/components/ui-elements/metrix-text";

const TrustedCompaniesSection = () => {

    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11];

    return (
        <DeafaultSection
            outerClassName="bg-background-secondary py-[50px] flex"
            className="flex items-center gap-[50px]"
        >
            <div
                className='shrink-0 min-w-max w-full max-w-[300px] text-foreground/70 text-lg font-medium'
            >
                <p>
                    <MetrixAnimationText
                        text="Trusted by thousands companies."
                        onetime
                    />
                </p>
            </div>
            <div
                className="w-full overflow-hidden"
            >
                <motion.div
                    className="min-w-max flex items-center gap-[100px]"
                    animate={{
                        x: "-50%",
                        transition: {
                            duration: 20,
                            repeatType: "loop",
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <Image
                            src={brand}
                            alt={"Brand"}
                            key={index}
                            className="w-full max-w-[100px] shrink-0"
                        />
                    ))}
                </motion.div>
            </div>
        </DeafaultSection>
    )
}

export default TrustedCompaniesSection