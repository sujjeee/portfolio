import React from 'react'

const Card = () => {
    return (
        <div>
            <div class=" py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div class="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">

                        <a href="#" class="group h-96 xl:h-[450px] flex flex-col bg-gray-100 rounded-lg outline-none overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                            <div class="relative p-4 mt-auto backdrop-blur-2xl">
                                <h2 class="text-white text-xl font-semibold transition duration-100 mb-4">New trends in Tech</h2>
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                                    View Website
                                </button>
                            </div>
                        </a>

                        <a href="#" class="group h-96 xl:h-[450px]  flex flex-col bg-gray-100 rounded-lg outline-none overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                            <div class="relative p-4 mt-auto backdrop-blur-2xl">
                                <h2 class="text-white text-xl font-semibold transition duration-100 mb-4">New trends in Tech</h2>
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                                    View Website
                                </button>
                            </div>
                        </a>

                        <a href="#" class="group h-96 xl:h-[450px]  flex flex-col bg-gray-100 rounded-lg  overflow-hidden relative">
                            <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                            <div class="relative p-4 mt-auto backdrop-blur-2xl">
                                <h2 class="text-white text-xl font-semibold transition duration-100 mb-4">New trends in Tech</h2>
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                                    View Website
                                </button>
                            </div>
                        </a>

                        <a href="#" class="group h-96 xl:h-[450px] flex flex-col bg-gray-100 rounded-lg  drop-shadow-2xl shadow-gray-900 overflow-hidden relative border border-black">
                            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

                            <div class="relative p-4 mt-auto backdrop-blur-2xl">
                                <h2 class="text-white text-xl font-semibold transition duration-100 mb-4">New trends in Tech</h2>
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                                    View Website
                                </button>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card