import Link from 'next/link'
import React from 'react'

const Card = ({ projects }) => {

    return (
        <div>
            <div className=" py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">
                        {projects
                            ?.map((project, index) => {
                                return (
                                    <div key={index} className="group h-96 xl:h-[450px] flex flex-col bg-gray-100 rounded-lg outline-none overflow-hidden relative">
                                        <Link target="_blank" href={project.website}>
                                            <img src={project.image.url} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                                        </Link>

                                        <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                                        <div className="relative p-4 mt-auto backdrop-blur-2xl">
                                            <h2 className="text-white text-xl font-semibold transition duration-100 mb-4">{project.name}</h2>
                                            <Link target="_blank" href={project.website}>
                                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                                                    View Website
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card