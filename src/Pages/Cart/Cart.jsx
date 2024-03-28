import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'

const Cart = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '', description: 'lorem ipsum dolor init' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food", description: 'lorem ipsum dolor init' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White', description: 'lorem ipsum dolor init' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food", description: 'lorem ipsum dolor init' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White', description: 'lorem ipsum dolor init' }, { path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '', description: 'lorem ipsum dolor init' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png', description: 'lorem ipsum dolor init' }]
    // const filters = [{ name: 'Beauty and Fashion', types: ['Beauty Shots', 'Close-Up/Face Shots', 'Cosmetics/Make-up', 'Ethnic Wear', 'Fashion Shots', 'Glamorous Woman', 'Hair Care', 'Self Care/Fitness', 'Trendy Wear'] }, {
    //     name: 'Age', types: ['Mature Adult']
    // }, { name: 'People', types: ['1 Person Only'] }, { name: 'Location', types: ['Outdoor', 'Studio Shot'] }, { name: 'Outfits', types: ['Saree', 'Traditional', 'Women Casual Wear', 'Women Gym Wear', 'Women Indian Suit'] }]
    const filter = [{ name: 'Size', value: 'Large' }, { name: 'Format', value: 'JPG' }, { name: 'Currency', value: 'USD' }, { name: 'Quantity', value: '1' }]
    const options = [{
        svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        )
    }, {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>)
    }
        , {
        svg: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>
        )
    }
    ]

    return (
        <div>
            <MainLayout component={
                <div>
                    <div className=' gap-20 mt-4 mb-12 m-4'>
                        <div className=' flex flex-col gap-3'>
                            <div className='text-4xl md:text-5xl font-black text-white bg-gray text-center' >
                                Cart
                            </div>

                            <div className='columns-3  gap-3 space-y-3'>
                                {images.map(img => {
                                    return (
                                        <div className="p-2 flex flex-col gap-3 backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  shadow-md rounded-3xl break-inside-avoid-column " >
                                            <img src={img.path} alt="" className='rounded-3xl w-72' />
                                            <div className='flex justify-between w-full flex-col'>
                                                <div className='flex flex-col gap-3 justify-evenly'>
                                                    <div>
                                                        <h3 className='text-gray-200 text-2xl font-semibold'>
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea illo quibusdam.
                                                        </h3>
                                                        <h5 className='text-sm font-medium  text-gray-400'>
                                                            By Cliqnclix
                                                        </h5>
                                                    </div>
                                                    <h5 className='font-medium  text-gray-200'>
                                                        Options
                                                    </h5>
                                                    <div className='flex gap-3 flex-wrap'>
                                                        {
                                                            filter.map(fil => {
                                                                return (
                                                                    <div className='bg-gray-900/50 flex text-gray-200  rounded-full'>
                                                                        <h6 className='bg-gray-700 text-gray-200 rounded-full py-1 px-3'>
                                                                            {fil.name}
                                                                        </h6>
                                                                        <h6 className='py-1 px-2'>
                                                                            {fil.value}
                                                                        </h6>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className='flex flex-col gap-1 text-gray-200' >
                                                        <h3 className='text-lg font-semibold '>
                                                            Price
                                                        </h3>
                                                        <div className='flex gap-3 font-bold text-2xl'>
                                                            ₹ 7500
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className='flex gap-3'>
                                                  
                                                    <div className='flex  gap-3 justify-evenly'>
                                                        {
                                                            options.map(opt => {
                                                                return <div className='bg-gray-700 text-gray-200 p-3  rounded-full'>
                                                                    {opt.svg}
                                                                </div>
                                                            })
                                                        }
                                                    </div>
                                                    <div>

                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* <Pagination /> */}
                        </div>
                    </div>
                </div>} />
        </div >
    )
}

export default Cart