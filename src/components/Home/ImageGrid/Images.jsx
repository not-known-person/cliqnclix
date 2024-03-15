import React from 'react'
import Search2 from '../SearchBar/Search2'

const Images = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food" }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White' }]
    return (
        <div>
            <div className='m-12 flex justify-center flex-col items-center'>
                <h1 className='text-5xl font-black text-gray-800 text-center'>Explore High Quality Images & Video</h1>
                <p className='text-gray-500 text-md m-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique repellat animi blanditiis itaque,?</p>
            </div>
            <Search2 />
            <div className='bg-white shadow-md rounded-xl p-3 pt-6 '>
                <div className='mb-6' >
                    <h1 className='text-2xl font-extrabold text-gray-800 text-center '>Choose By Categories</h1>
                    <p className='text-gray-500 text-xs  m-1 text-center' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                    {/* <hr /> */}
                </div>
                <div className='columns-1 md:columns-2 lg:columns-3 space-y-3 ' >
                    {
                        images.map(image => {
                            return (
                                <>
                                    <div className="relative">
                                        <img src={image.path} className='rounded-xl' />
                                        <div className='bottom-0 absolute   bg-white rounded-tr-xl'>
                                            <div className=' bg-red-100/50 p-2 px-8 w-min rounded-tr-xl rounded-bl-xl '>
                                                <p className='text-xl text-nowrap flex items-center justify-center gap-2  font-semibold text-gray-700' >
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