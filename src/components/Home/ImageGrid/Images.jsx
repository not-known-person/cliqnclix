import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const Images = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food" }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food" }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White' }]
    return (
        <div className='mt-8'>
            {/* <div className='m-12 flex justify-center flex-col items-center'>
                <h1 className='text-5xl font-black text-gray-800 text-center'>Explore High Quality Images & Video</h1>
                <p className='text-gray-500 text-md m-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique repellat animi blanditiis itaque,?</p>
            </div> */}
            <div className='bg-gray-800 shadow-md  p-3 pt-6 static '>
                <div className='mb-6' >
                    <h1 className='text-3xl font-extrabold text-white text-center '>Choose By Categories</h1>
                    <p className='text-gray-400 text-xs  m-1 text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <SearchBar />
                <div className='columns-1 md:columns-2 lg:columns-3 space-y-3 ' >
                    {
                        images.map(image => {
                            return (
                                <>
                                    <div className="relative rounded-xl p-2 bg-gray-800">
                                        <img src={image.path} className='rounded-xl' />
                                        <div className=' px-2  absolute  bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-sm bottom-0  bg-opacity-10 '>
                                            <div className='  p-2 px-8 w-min '>
                                                <p className='text-xl text-nowrap flex items-center top justify-center gap-2  font-semibold text-white' >
                                                    {image.category}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Images