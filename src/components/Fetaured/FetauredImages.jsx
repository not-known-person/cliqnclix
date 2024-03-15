import React from 'react'

const FetauredImages = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food" }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White' }]
    return (
        <div className='w-100  m-5 rounded-lg p-3'>
            <hr />
            <h1 className='text-gray-800 pb-7 pt-4 text-3xl m-auto w-min text-nowrap font-extrabold flex gap-3 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Most Downloaded
            </h1>
            <div className="columns-1 md:columns-2 lg:columns-3 space-y-3 ">
                {
                    images.map(image => {
                        return (
                            <div className=' bg-white shadow-md rounded-md ' >
                                <img src={image.path} alt="" className=' rounded-md ' />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default FetauredImages