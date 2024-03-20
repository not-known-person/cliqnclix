import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'

const FetauredImages = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }]

    let carouselSetting
    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleResize = () => {
        if (window.innerWidth >= 640 && window.innerWidth <= 768) {
            carouselSetting = 75
            console.log("condition meet")
        }
        else {
            console.log("condition not meet")
            carouselSetting = 40
        }
        console.log("working")
    }

    return (
        <div className='w-100  m-3 rounded-3xl  flex flex-col gap-8'>
            <div className='relative overflow-hidden rounded-3xl flex items-center justify-center'>
                <img src="./pexels-caio-69970.jpg" alt="" className='w-screen h-96  object-cover  filter blur-[5px] rounded-lg' />
                <div className='flex flex-col gap-4  z-50 absolute  text-center p-3 w-100' >
                    <h1 className='xl:text-5xl text-4xl font-black  text-wrap text-center m-auto  text-gray-200 '>Explore Our Most Liked Categories and Most Downloaded Photos</h1>
                    {/* <p className='text-gray-300 text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique </p> */}
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-8">
                    <h1 className='text-gray-200 text-2xl  xl:text-3xl font-bold text-center'>Popular Categories</h1>
                    <Carousel centerMode autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} centerSlidePercentage={window.innerWidth < 640 ? 85 : window.innerWidth <= 768 ? 70 : window.innerWidth < 1024 ? 60 : window.innerWidth < 1536 ? 30 : 30}>
                        {

                            images.map(image => {
                                return (
                                    <div className='sm:m-4 m-2  shadow-md  backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  rounded-3xl' >
                                        <img src={image.path} alt="" className=' rounded-xl rounded-b-3xl ' />

                                        <h2 className='xl:text-2xl text-xl xl:py-3 py-2  font-normal text-center  text-nowrap  gap-2 bg-clip-text text-gray-200'>
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
                    <h1 className='text-gray-200 text-2xl  xl:text-3xl font-bold text-center'>Popular Photos</h1>
                    <Carousel centerMode autoPlay infiniteLoop showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} centerSlidePercentage={window.innerWidth < 640 ? 85 : window.innerWidth <= 768 ? 70 : window.innerWidth < 1024 ? 60 : window.innerWidth < 1536 ? 30 : 30}>
                        {
                            images.map(image => {
                                return (
                                    <div className='sm:m-4 m-2 shadow-md backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10 rounded-3xl ' >
                                        <img src={image.path} alt="" className=' rounded-xl rounded-b-3xl  ' />
                                        <div className=''>
                                            <h2 className='xl:text-2xl text-xl xl:py-3 py-2 font-normal text-center  text-nowrap  gap-2 bg-clip-text text-gray-200'>
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