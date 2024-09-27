import React from 'react'
import { Button } from './ui/moving-border'
import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
const HeroSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-center bg-grid-white/[0.1] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='text w-full text-white flex flex-col gap-3 items-center'>
            <h1 className='text-[6vw] font-bold bg-clip-text bg-gradient-to-r '>
                Master the Art of Music
            </h1>
            <h3 className='text-xl font-thin max-w-[40vw]'>Dive into our comprehensive music courses and transform your musical journey today. Whether you&quot;re a beginner or looking to refine your skill, join us to unlock your true potential.</h3>
            <Link href="/courses">
                <Button borderRadius='2rem' className='bg-white dark:bg-black/[0.3] text-black dark:text-white border-neutral-200 dark:border-slate-800 border-4"'> Explore Courses</Button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection