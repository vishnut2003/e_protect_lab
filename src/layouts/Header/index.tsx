import React from 'react'
import DeafaultSection from '../default-section'
import Image from 'next/image'
import logo from "./logo.png";
import Navbar from './navbar';

const Header = () => {
  return (
    <DeafaultSection
        className='flex justify-between items-center py-[15px]'
        outerClassName='absolute top-0 left-0 z-[99]'
    >
        <div
            className='max-w-[120px] w-full shrink-0'
        >
            <Image
                alt='Logo'
                src={logo}
                className='w-full'
            />
        </div>
        <Navbar/>
        <div
            className='shrink-0'
        >
            <button
                className='button-primary'
            >
                Get Started
            </button>
        </div>
    </DeafaultSection>
  )
}

export default Header