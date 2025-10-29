import TextMarquee from '@/components/ui-elements/text-marquee'
import DeafaultSection from '@/layouts/default-section'
import Image, { StaticImageData } from 'next/image';
import React from 'react'

// assets
import Profile1 from "./assets/profile-1.jpg";
import Profile2 from "./assets/profile-2.jpg";
import Profile3 from "./assets/profile-3.jpg";
import Profile4 from "./assets/profile-4.jpg";
import BlurGraphics from "../our-projects/assets/blur.png";

const OurExpertsSection = () => {

    const teamList: {
        image: StaticImageData,
        name: string,
        designation: string,
    }[] = [
            {
                image: Profile1,
                designation: "Chief Security Strategist",
                name: "Darren Mills",
            },
            {
                image: Profile2,
                designation: "AI Systems Engineer",
                name: "Aria Tanaka",
            },
            {
                image: Profile3,
                designation: "Cloud Security Lead",
                name: "Leo Fernandez",
            },
            {
                image: Profile4,
                designation: "Compliance & Risk Advisor",
                name: "Nadya Rahim",
            },
        ];

    return (
        <DeafaultSection
            outerClassName='py-[60px]'
            className='space-y-11'
        >
            <div
                className='flex w-full items-end'
            >
                <div
                    className='w-full space-y-[30px]'
                >
                    <TextMarquee
                        maxWidth={250}
                        text='Our Expert'
                    />

                    <h2
                        className='text-5xl font-light font-rethink-sans max-w-[500px] leading-[55px]'
                    >Meet the Cyber Architects of Oryn</h2>
                </div>
                <div
                    className='w-full flex justify-end'
                >
                    <p
                        className='max-w-[350px]'
                    >Behind every defense line is a team of experts constantly thinking ahead. Our specialists combine years of real-world security experience with cutting-edge AI innovation.</p>
                </div>
            </div>

            <div
                className='flex items-stretch gap-7'
            >
                {teamList.map((profile, index) => (
                    <div
                        key={index}
                        className='w-full bg-background-secondary border border-theme-secondary rounded-2xl p-6 pb-0 space-y-8 overflow-hidden relative'
                    >
                        <Image
                            alt={profile.name}
                            src={profile.image}
                            className='aspect-square rounded-2xl'
                        />
                        <div
                            className='space-y-2 z-10 relative'
                        >
                            <h3
                                className='text-2xl font-rethink-sans'
                            >{profile.name}</h3>
                            <p
                                className='text-foreground/90'
                            >{profile.designation}</p>
                        </div>

                        {
                            index % 2 === 0 ? (
                                <Image
                                    alt='blur'
                                    src={BlurGraphics}
                                    className='min-w-[500px] absolute bottom-[-30%] left-[-20%] z-0'
                                />
                            ) : null
                        }

                    </div>
                ))}
            </div>
        </DeafaultSection>
    )
}

export default OurExpertsSection