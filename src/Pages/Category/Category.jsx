import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'

const Category = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '', description: 'lorem ipsum dolor init' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food", description: 'lorem ipsum dolor init' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White', description: 'lorem ipsum dolor init' }]
    const categories = [
        'Beauty Shots', 'Close-Up/Face Shots', 'Cosmetics/Make-up', 'Ethnic Wear', 'Fashion Shots', 'Glamorous Woman', 'Hair Care', 'Self Care/Fitness', 'Trendy Wear'
    ]
    const filter = [{
        name: 'Age'
    }]
    return (
        <div>
            <MainLayout component={<div className='flex gap-5'>
                <div>
                    <div className='w-60 bg-gray-700 h-[900px] rounded-md shadow-md p-4' >
                        <h1 className='font-bold text-xl text-white' >Beauty and Fashion</h1>
                        <div className='flex flex-col gap-2 text-white font-semibold my-2' >
                            {categories.map(category => {
                                return <p>&bull; {category}</p>
                            })}
                        </div>
                        <hr />
                        {/* <div>
                            <h1 className='font-bold text-xl text-gray-700' >Gender</h1>
                            <p>Male</p>
                            <p>Female</p>
                        </div> */}
                    </div>
                </div>
                <div>
                    <div className='mb-5  text-5xl font-black text-gray-700 ' >
                        Fashion
                    </div>
                    <div className='columns-3 space-y-4  space-x-4'>
                        {images.map(image => <div>
                            <div className="bg-white shadow-md rounded-md " >
                                <img src={image.path} alt="" className='rounded-t-lg' />
                                <div className='p-2  text-lg flex justify-between items-center ' >
                                    <div className='flex flex-col font-bold'>
                                        <h1 className='text-gray-500 text-base'>
                                            {image.description}
                                        </h1>
                                        <h1 className='text-gray-700 text-xl font-extrabold'>
                                            ₹ 749
                                        </h1>
                                    </div>
                                    <div></div>
                                    <div className='flex gap-3' >
                                        <div className='bg-green-300/50 p-3 text-green-800 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>

                                        </div>
                                        <div className='bg-red-100/50 p-3 text-red-800 rounded-full' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>} />
        </div >
    )
}

export default Category