import React from 'react'
import Images from './ImageGrid/Images'

const HeroSection = () => {
    return (
        <div>
            <div className='relative  w-100 grid grid-cols-2 ' >
                <div className='col-span-1 m-auto ' >
                    <div className='m-12 flex flex-col gap-6'>
                        <h1 className='text-7xl font-black  text-wrap  text-white '>Explore High Quality Images & Video</h1>
                        <p className='text-gray-400 text-md m-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,?</p>
                        <button className='text-white px-10 py-4 bg-gray-700 w-min  rounded-lg text-lg  p-5 text-nowrap font-bold'>
                            Explore Now
                        </button>
                    </div>
                </div><div className='col-span-1 mx-auto'>
                    <img src="./bg3.jpg" alt="" className=' rounded-s-3xl' />
                </div>
            </div>
            <Images />
        </div>
    )
}

export default HeroSection