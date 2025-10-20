import DeafaultSection from '@/layouts/default-section'
import React from 'react'

// static images
import circleOrbit from "./images/circle-orbit.png";
import HeroBgGraphics from './bg-graphics';
import LeftCol from './left-col';
import TextMarquee from '@/components/ui-elements/text-marquee';
import CounterText from '@/components/ui-elements/counter-text';

const HeroSection = () => {

  return (
    <DeafaultSection
      className='flex items-starts justify-center'
      outerClassName='relative overflow-hidden py-[150px]'
    >
      <div
        className='z-50 relative w-full flex items-start gap-[30px]'
        style={{
          backgroundImage: `url(${circleOrbit.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <LeftCol />
        <div
          className='w-full space-y-[30px]'
        >
          <TextMarquee
            maxWidth={300}
            text='Cyber Security NO. #1'
          />

          <h1
            className='text-8xl font-semibold font-rethink-sans leading-[110px] min-h-[330px]'
          >Cyber Defense That Evolves Daily.</h1>
          <p
            className='text-lg text-foreground-secondary leading-[35px] max-w-[500px]'
          >AI-driven protection that learns, adapts, and grows stronger every single day—so you stay one step ahead of every digital threat.</p>

          <div
            className='flex items-center gap-[15px]'
          >
            <button
              className='button-primary'
            >Get Protected Today</button>
            <button
              className='button-outline'
            >Get Protected Today</button>
          </div>

          <div
            className='flex items-center justify-end gap-[50px] mt-[150px]'
          >
            {
              [
                {
                  value: 1600,
                  suffix: "+",
                  label: "user active",
                },
                {
                  value: 300,
                  suffix: "+",
                  label: "technologies",
                }
              ].map((data, index) => (
                <div
                  key={index}
                  className='flex min-w-[300px] gap-[30px] justify-end items-center'
                >
                  <p
                    className='text-5xl font-semibold font-rethink-sans'
                  >
                    <CounterText
                      endValue={data.value}
                    />
                    {data.suffix}
                  </p>
                  <p
                    className='opacity-70'
                  >{data.label}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <HeroBgGraphics />

    </DeafaultSection>
  )
}

export default HeroSection