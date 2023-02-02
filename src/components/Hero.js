import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="justify-center items-center flex  h-screen w-fullt ">
                <div className='w-full items-center justify-center flex'>
                    <div>
                        <div>
                            <h1 className='font-gilroy text-center tracking-[4px] md:tracking-wider text-[50px] sm:text-[70px] md:text-[100px] lg:text-[150px] text-white drop-shadow-2xl'>CodeBustar</h1>
                        </div>
                        <div className='lg:-mt-10 flex justify-end items-center '>
                            <div className='w-[80px] sm:w-[350px] bg-gray-600 h-0.5  rounded-lg'></div>
                            <p className=' text-sm sm:text-xl md:text-3xl lg:text-2xl font-content text-gray-500 lg:tracking-[5px] tracking-[2.5px] lg:pb-1.5 lg:px-6 px-2'>code, debug and run.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero