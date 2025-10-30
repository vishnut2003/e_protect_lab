'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react'
import { RiDoubleQuotesR, RiStarFill } from '@remixicon/react';
import { motion } from "framer-motion";

// assets
import Profile1 from "./assets/profiles/profile-1.png";
import Profile2 from "./assets/profiles/profile-2.png";
import Profile3 from "./assets/profiles/profile-3.png";

const TestmonialsCarousel = () => {

  const scrollWrapper = useRef<HTMLDivElement>(null);

  const testimonials: {
    name: string,
    title: string,
    description: string,
    image: StaticImageData,
  }[] = [
      {
        image: Profile1,
        name: "Rina W.",
        title: "CTO",
        description: "imple to deploy, powerful under the hood. Oryn gives us real peace of mind—finally a solution that grows smarter with our company.",
      },
      {
        image: Profile2,
        name: "Jordan L",
        title: "VP of Infrastructure",
        description: "We've tried three security platforms. Oryn is the only one that actually adapts to our daily risk levels. Worth every dollar.",
      },
      {
        name: "Kavya P.",
        title: "Head of Security",
        description: "Oryn helped us stop an active threat in real time. Their AI engine is faster than anything we’ve tested before.",
        image: Profile3,
      },
    ]

  return (
    <div
      className='w-full overflow-hidden'
      ref={scrollWrapper}
    >
      <motion.div
        className='flex items-stretch min-w-[150%] max-w-[150%]'
        drag="x"
        dragConstraints={scrollWrapper}
      >
        {testimonials.map((testimonial, index) => (
          <div
            className='px-3 max-w-1/2 w-full'
            key={index}
          >
            <div
              className='bg-background-secondary w-full py-7 px-9 border border-theme-three/30 rounded-2xl h-full flex flex-col justify-between gap-18'
            >
              <div>
                <div
                  className='flex items-start justify-between'
                >
                  <div
                    className='flex items-center gap-2'
                  >
                    {[1, 2, 3, 4, 5].map((index) => (
                      <RiStarFill
                        key={index}
                        size={20}
                        className='text-[#dca300]'
                      />
                    ))}
                  </div>
                  <RiDoubleQuotesR
                    size={60}
                    className='text-theme-secondary'
                  />
                </div>

                <div
                  className='pt-[60px] text-lg'
                >
                  <p>{testimonial.description}</p>
                </div>
              </div>

              <div
                className='flex items-center gap-5'
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='shrink-0 w-[60px] h-[60px] rounded-full'
                />
                <div
                  className='text-left space-y-1'
                >
                  <h3
                    className='text-lg font-rethink-sans font-semibold'
                  >{testimonial.title}</h3>
                  <p
                    className='text-sm text-foreground/90'
                  >{testimonial.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default TestmonialsCarousel