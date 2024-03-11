import React from 'react'

const Images = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food" }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Childrens" }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White' }]
    return (
        <div>
            <div className='m-12 flex justify-center flex-col items-center'>
                <h1 className='text-5xl font-black text-gray-800'>Explore High Quality Images / Video</h1>
                <p className='text-gray-500 text-sm m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique repellat animi blanditiis itaque,?</p>
            </div>
            <div className='bg-white shadow-md rounded-xl p-3 m-5 '>
                <div className='columns-3 space-y-3 ' >
                    {
                        images.map(image => {
                            return (
                                <>
                                    <div className="relative">
                                        <img src={image.path} className='rounded-md shadow' />
                                        <div className="absolute bottom-0 rounded-md left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-black">
                                            <div className='p-2 bottom-0 absolute'>
                                                <div>
                                                    <div className='text-white font-extrabold text-4xl ' >
                                                        {image.category}
                                                    </div>
                                                    <div className='text-white/90 text-sm '>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id
                                                    </div>
                                                </div>
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