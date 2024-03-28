import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'
import Pagination from '../../components/Layout/Pagination'

const Wishlist = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '', description: 'lorem ipsum dolor init' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food", description: 'lorem ipsum dolor init' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White', description: 'lorem ipsum dolor init' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food", description: 'lorem ipsum dolor init' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White', description: 'lorem ipsum dolor init' }, { path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '', description: 'lorem ipsum dolor init' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png', description: 'lorem ipsum dolor init' },]

    return (
        <div>
            <MainLayout component={<div className='lg:col-span-10 flex flex-col gap-4 m-4 '>
                <div className='text-2xl md:text-4xl font-black text-white bg-gray text-center' >
                    My Wishlist
                </div>
                <div>
                </div>
                <div className='lg:columns-3 md:columns-2 columns-1  space-y-4 '>
                    {images.map(image => <div>
                        <div className="p-1 flex flex-col backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  shadow-md rounded-3xl break-inside-avoid-column w-100" >
                            <img src={image.path} alt="" className='rounded-3xl ' />
                            <div className='absolute text-gray-200 right-0  p-2 my-3 mx-4 rounded-full bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10' > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            </div>
                            {/* <div className=' text-lg flex justify-between items-center p-3' > */}
                            <div className='flex flex-row p-2  font-bold justify-between items-center'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='text-gray-200 text-lg'>
                                        {image.description}
                                    </h1>
                                    <div className='bg-green-800/75 flex flex-row items-center gap-1  rounded-lg ps-1 pe-2 text-gray-200 w-min'  >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <p className='text-nowrap text-sm font-medium w-min' >
                                            In Stock </p>
                                    </div>
                                </div>
                                <h1 className='text-gray-300 text-2xl font-extrabold'>
                                    ₹ 749
                                </h1>
                            </div>
                        </div>
                    </div>)}
                </div>
                <Pagination />
            </div>} />
        </div>
    )
}

export default Wishlist
