"use client";
import { BackgroundBeams } from '@/components/ui/background-beam'
import React from 'react'
// import { Meteors } from "@/components/ui/meteors";

const page = () => {
    return (
        <div className="h-[40rem] w-full rounded-md bg-slate-900 relative flex flex-col items-center  antialiased min-h-screen">
            <div className="max-w-2xl mx-auto p-4 mt-28 flex flex-col items-center">
                <h1 className="relative z-10 text-lg md:text-7xl text-white  text-center font-sans font-bold">
                Contact us
                </h1>
                <form className='flex flex-col mt-10 gap-5 w-[200%]'>
                    <input
                    type="email"
                    placeholder="Email address"
                    className="rounded-lg border px-4 py-3 text-xl border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-white text-white"
                    />
                    <textarea
                    placeholder='Enter your message'
                    className="rounded-lg border px-4 py-3 text-xl border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-white text-white h-[30vh]"></textarea>
                    <button className='bg-black text-white text-lg font-thin self-center py-2 px-4 rounded-md '>Submit</button>
                </form>
            </div>
            <BackgroundBeams />
            </div>
    )
}

export default page