import React from 'react'

const FetauredImages = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food" }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White' }]
    return (
        <div className='w-100  m-5 rounded-lg p-3 flex flex-col gap-8'>
            <div className='relative overflow-hidden rounded-lg'>
                <img src="./pexels-francesco-ungaro-96381.jpg" alt="" className='w-screen h-96  object-cover  filter blur-[5px] rounded-lg' />
                <div className='flex flex-col gap-6  z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center' >
                    <h1 className='text-5xl font-black  text-wrap  text-white'>Explore Our Most Liked Categories and Most Downloaded Photos</h1>
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
                <div className="columns-1 md:columns-2 lg:columns-3 space-y-3 ">
                    {
                        images.map(image => {
                            return (
                                <div className=' shadow-md rounded-md backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  ' >
                                    <img src={image.path} alt="" className=' rounded-md  ' />
                                    <div className='p-5'>
                                        <h2 className='text-white'>
                                            A girl seeing outside
                                        </h2>
                                        <h1 className='text-white'>
                                            750
                                        </h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FetauredImages