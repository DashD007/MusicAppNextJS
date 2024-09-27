import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-gray-400'>
        <div className='grid grid-cols-4 gap-3 px-10 py-6'>
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">About us:</h3>
                <p className='mb-4'>Music School is a premier institution dedicated to teaching the art
                and science of music. We nurture talent from the ground up,
                fostering a vibrant community of musicians.</p>
            </div>
            <div>
                <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                <ul>
                    <li>
                    <a
                        href="#"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Home
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="hover:text-white transition-colors duration-300"
                    >
                        About
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Courses
                    </a>
                    </li>
                    <li>
                    <a
                        href="#"
                        className="hover:text-white transition-colors duration-300"
                    >
                        Contact
                    </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                    <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                    >
                    Facebook
                    </a>
                    <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                    >
                    Twitter
                    </a>
                    <a
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                    >
                    Instagram
                    </a>
                </div>
            </div>
            <div>
                <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                <p>New Delhi, India</p>
                <p>Delhi 10001</p>
                <p>Email: info@musicschool.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
        <div className='w-full flex items-center justify-center py-7'>
            <p>© 2024 Music School. All rights reserved.</p>
        </div>
    </div>
  )
};

export default Footer