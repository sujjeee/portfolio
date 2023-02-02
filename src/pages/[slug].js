import SlugHead from '@/components/SlugHead'
import React from 'react'

const slug = () => {
    return (
        <div className=''>
            <div className=' backdrop-blur-xl sticky top-0 max-w-screen-xl mx-auto px-2 md:px-0 text-white'>
                <SlugHead />
            </div>
            <div className='md:px-4 py-3 md:py-8 border-y border-gray-900 max-w-screen-xl mx-auto px-4 text-white '>
                <div class=" grid  grid-row-2 grid-cols-3  gap-1">
                    <div class="bg-green-300 row-span-2 col-span-2 rounded-lg ">
                        <img src="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div class="bg-green-500 rounded-lg ">
                        <img src="https://images.unsplash.com/photo-1675124516483-b7d21f60e6d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
                    </div>
                    <div class="bg-green-600 rounded-lg ">
                        <img src="https://images.unsplash.com/photo-1675096293298-e529645322b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
                    </div>
                    <div class="bg-green-200  rounded-lg ">
                        <img src="https://images.unsplash.com/photo-1675124516483-b7d21f60e6d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
                    </div>
                    <div class="bg-green-900 rounded-lg ">
                        <img src="https://plus.unsplash.com/premium_photo-1664698362212-0b9f241f55b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
                    </div>
                    <div class="bg-green-500  rounded-lg ">
                        <img src="https://images.unsplash.com/photo-1675124516483-b7d21f60e6d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
                    </div>
                </div>
                <div className='pt-10 max-w-3xl mx-auto'>
                    <div className='col-span-2'>
                        <h2 className='text-xl'>About the product</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nulla nam vero, temporibus quam quos fuga non laboriosam pariatur facilis animi. Quo reprehenderit voluptas a. Provident sapiente impedit id at!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorem ipsum praesentium obcaecati nulla quis modi corporis cum illum porro, molestiae deserunt, voluptate repudiandae non ipsam sunt neque repellat corrupti.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default slug