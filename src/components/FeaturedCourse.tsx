"use client";
import React from 'react'
import courseData from "../data/music-courses.json";
import { BackgroundGradient } from './ui/background-gradient';
import Link from 'next/link';
interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
  
}

function FeaturedCourse() {
    const featuredCourse = courseData.courses.filter((course : Course) => course.isFeatured);
  return (
    <div className='w-full bg-slate-900'>
        <div className='w-full p-16 flex flex-col gap-4 items-center '>
            <h2 className='uppercase text-2xl text-teal-600 font-bold'>Featured Course</h2>
            <p className='text-5xl font-bold text-white'>Learn With The Best</p>
        </div>
        <div className='grid grid-cols-3 gap-3 px-6'>
            {featuredCourse.map((course) => {return <BackgroundGradient key={course.id} className='text-center text-white font-thin bg-gray-700 rounded-3xl p-4 flex flex-col gap-3'>
              <h2 className='text-xl '>{course.title}</h2>
              <p>{course.description}</p>
              <Link href={`/courses/${course.slug}`} className='px-4 py-2 bg-white text-black self-center rounded-md'><button>Learn more</button></Link>
            </BackgroundGradient>})}
        </div>
        <div className='w-full py-14 flex items-center justify-center'>
          <Link href="/courses" className='px-4 py-2 bg-white text-black self-center rounded-md'><button>Explore all courses</button></Link>
        </div>
    </div>
  )
}

export default FeaturedCourse