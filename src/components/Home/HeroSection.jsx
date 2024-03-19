import React from 'react'
import Images from './ImageGrid/Images'

const HeroSection = () => {
    return (
        <div>
            <div className='relative  w-100 xl:grid xl:grid-cols-2 h-[100vh] overflow-hidden rounded-s-lg' >
                <div className='m-auto' >
                    <div className=' absolute xl:relative z-50 top-1/2 flex-col flex items-center transform  -translate-y-1/2 '>
                        <h1 className='text-5xl font-black  text-wrap  text-gray-200  text-center p-4 '>Explore High Quality Images & Video</h1>
                        <p className='text-gray-400 text-sm m-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,?</p>
                        <button className='text-white px-10 py-4 bg-gray-700 w-min  rounded-lg text-lg  p-5 text-nowrap font-bold'>
                            Explore Now
                        </button>
                    </div>
                </div><div className=' mx-auto absolute xl:relative  overflow-hidden rounded-s-lg'>
                    <img src="./bg3.jpg" alt="" className=' rounded-s-3xl object-center h-[100vh] w-screen object-cover filter blur-sm overflow-hidden' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection