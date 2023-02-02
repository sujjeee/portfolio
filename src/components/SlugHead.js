import React from 'react'
import { CgArrowLongLeft } from 'react-icons/cg';

const SlugHead = () => {
    return (
        <div>

            <nav class="px-2 sm:px-4 py-2.5 rounded ">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" class="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
                        {/* <div class="mt-16 inline-flex items-center text-indigo-600"> */}
                        <CgArrowLongLeft class=" transform transition-transform hover:-translate-x-2 text-2xl text-white" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white px-5">Flowbite</span>

                    </a>
                    <div>
                        <div class="rounded bg-red-100 px-6 py-1.5 text-red-600 ">
                            <span class="text-lg font-medium "> Live </span>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default SlugHead