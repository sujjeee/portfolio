import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaInstagram, FaGithub, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>

            <div>
                <footer >
                    <div className="max-w-screen-xl px-4  pb-8 mx-auto sm:px-6 lg:px-8 ">

                        <div
                            className="pt-8 sm:flex sm:items-center sm:justify-between "
                        >
                            <nav aria-label="Footer Navigation - Support">
                                <ul className="flex flex-wrap justify-center gap-4 text-base  font-gilroy lg:justify-end">
                                    <li>
                                        <Link href={`/`} className="text-gray-500 transition hover:opacity-75 tracking-wider font-sans font-semibold items-center justify-center flex text-sm ">
                                            <span className='lg:text-lg mr-2 py-0  font-medium'>&copy; </span> 2023 CodeBustar. All rights reserved.
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <ul className="flex justify-center gap-4 mt-8 sm:mt-0 lg:justify-end text-white">
                                <li>
                                    <div className="flex flex-col justify-center ">
                                        <div className="flex justify-center items-center space-x-14 sm:space-x-7">
                                            <Link target="_blank" href='https://facebook.com/sujjeee'>

                                                <FaFacebookF className='text-lg md:text-xl' />
                                            </Link>
                                            <Link target="_blank" href='https://instagram.com/sujjeee'>

                                                <FaInstagram className='text-lg md:text-xl' />
                                            </Link>
                                            <Link target="_blank" href='https://twitter.com/codebustar'>

                                                <FaTwitter className='text-lg md:text-xl' />
                                            </Link>
                                            <Link target="_blank" href='https://github.com/sujjeee'>

                                                <FaGithub className='text-lg md:text-xl' />
                                            </Link>

                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Footer