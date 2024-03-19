import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const FetauredImages = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }]
    return (
        <div className='w-100  m-3 rounded-3xl  flex flex-col gap-8'>
            <div className='relative overflow-hidden rounded-3xl'>
                <img src="./pexels-caio-69970.jpg" alt="" className='w-screen h-96  object-cover  filter blur-[5px] rounded-lg' />
                <div className='flex flex-col gap-6  z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center' >
                    <h1 className='text-5xl font-black  text-wrap  text-gray-200'>Explore Our Most Liked Categories and Most Downloaded Photos</h1>
                    <p className='text-gray-400 text-md m-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,? Veritatis similique repellat animi blanditiis itaque,?</p>
                </div>
            </div>
            {/* <h1 className='text-gray-800 pb-7 pt-4 text-3xl m-auto w-min text-nowrap font-extrabold flex gap-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Most Downloaded
            </h1> */}
            <div>
                <div className="flex flex-col gap-8">
                    <h1 className='text-gray-200 text-3xl font-bold text-center'>Popular Categories</h1>
                    <Carousel centerMode autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} centerSlidePercentage={30}>
                        {
                            images.map(image => {
                                return (
                                    <div className='m-4 shadow-md  backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  rounded-3xl' >
                                        <img src={image.path} alt="" className=' rounded-xl rounded-b-3xl ' />

                                        <h2 className='text-2xl py-3 font-normal text-center  text-nowrap  gap-2 bg-clip-text text-gray-200'>
                                            {image.category}
                                        </h2>
                                        {/* <h1 className='text-white'>
                                                750
                                            </h1> */}

                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <h1 className='text-gray-200 text-3xl font-bold text-center'>Popular Photos</h1>

                    <Carousel centerMode autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} centerSlidePercentage={30}>
                        {
                            images.map(image => {
                                return (
                                    <div className='m-4 shadow-md backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10 rounded-3xl ' >
                                        <img src={image.path} alt="" className=' rounded-xl rounded-b-3xl  ' />
                                        <div className=''>
                                            <h2 className='text-2xl py-3 font-normal text-center  text-nowrap  gap-2 bg-clip-text text-gray-200'>
                                                {image.category}
                                            </h2>
                                            {/* <h1 className='text-white'>
                                                750
                                            </h1> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default FetauredImages