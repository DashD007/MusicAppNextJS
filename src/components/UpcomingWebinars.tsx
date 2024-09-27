"use client";
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import Link from 'next/link';
const UpcomingWebinars = () => {
    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];
  return (
    <div className='w-full relative bg-slate-900'>
        <div className='w-full p-16 flex flex-col gap-4 items-center '>
            <h2 className='uppercase text-2xl text-teal-600 font-bold'>Featured Webinars</h2>
            <p className='text-5xl font-bold text-white'>Enhance Your Musical Journey</p>
        </div>
        <div className='w-full px-16'>
            <HoverEffect className='gap-4 text-xl text-center' items={featuredWebinars.map((webinar) => ({title : webinar.title,description:webinar.description, link:webinar.slug}))}></HoverEffect>
        </div>
        <div className='w-full flex items-center justify-center pb-10'>
            <Link href="/courses" className='px-4 py-2 bg-white text-black self-center rounded-md'><button>View All Webinars</button></Link>
        </div>
    </div>
  )
}

export default UpcomingWebinars