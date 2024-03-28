import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'
import Pagination from '../../components/Layout/Pagination'

const Category = () => {
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '', description: 'lorem ipsum dolor init' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food", description: 'lorem ipsum dolor init' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White', description: 'lorem ipsum dolor init' }, { path: "./pexels-larissa-farber-19919509.jpg", category: "Food", description: 'lorem ipsum dolor init' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-yuliana-pavlova-20425642.jpg", category: 'Black & White', description: 'lorem ipsum dolor init' }, { path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png', description: 'lorem ipsum dolor init' }, { path: "./pexels-cody-graphy-20434627.jpg", category: 'Flower', icon: '', description: 'lorem ipsum dolor init' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png', description: 'lorem ipsum dolor init' },]
    const filters = [{ name: 'Beauty and Fashion', types: ['Beauty Shots', 'Close-Up/Face Shots', 'Cosmetics/Make-up', 'Ethnic Wear', 'Fashion Shots', 'Glamorous Woman', 'Hair Care', 'Self Care/Fitness', 'Trendy Wear'] }, {
        name: 'Age', types: ['Mature Adult']
    }, { name: 'People', types: ['1 Person Only'] }, { name: 'Location', types: ['Outdoor', 'Studio Shot'] }, { name: 'Outfits', types: ['Saree', 'Traditional', 'Women Casual Wear', 'Women Gym Wear', 'Women Indian Suit'] }]
    // const types = [{
    //     name: 'Images', count: 21, icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:block hidden">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    //     </svg>
    //     )
    // },
    // {
    //     name: 'Divider'
    // },
    // {
    //     name: 'Videos', count: 21, icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:block hidden">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    //     </svg>)
    // },
    // {
    //     name: 'Divider'
    // },
    // {
    //     name: 'Vector', count: 25, icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 lg:block hidden">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    //     </svg>)
    // }]
    return (
        <div>
            <MainLayout component={
                <div>
                    {/* <CategoryStrip /> */}
                    <div className='grid lg:grid-cols-12 gap-20 mt-4 mb-12 m-4'>
                        <div className='lg:col-span-2 hidden lg:block'>
                            <div className='sticky overflow-y-scroll h-[98vh] top-2 w-60 backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  rounded-md shadow-md p-4 scrollbar-thin scrollbar-thumb-gray-400/35 scrollbar-track-transparent' >
                                <div className='text-white flex flex-col gap-3'>
                                    {
                                        filters.map(filter =>
                                            <div>
                                                <h1 className='font-bold text-xl text-center mb-2' >{filter.name}</h1>
                                                {
                                                    filter.types.map(type => <><button className='my-2 font-medium p-2 hover:text-black hover:bg-white transition-colors delay-100 w-full  bg-gray-700 text-white/80 rounded-lg cursor-pointer'> {type}</button><br /></>)
                                                }
                                                <hr className='mt-4 text-gray-200' />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-10 flex flex-col gap-3'>
                            <div className='flex justify-center flex-col md:flex-row gap-4  md:justify-between items-center text-white ' >
                                <div className='text-4xl md:text-6xl font-black text-white bg-gray text-center' >
                                    Fashion
                                </div>
                                <div className='flex border-2 border-gray-500   p-1 rounded-lg gap-y-5 gap-x-2'>
                                    <div>
                                        <div class="relative inline-block text-left">
                                            <div>
                                                <button type="button" class="inline-flex  w-full justify-center gap-x-1.5 text-nowrap text-white rounded-md font-bold py-2 px-3  md:py-3 md:px-5" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>   Images
                                                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* {
                                        types.map(type => {
                                            if (type.name == 'Divider') {
                                                return <div className='w-[2px] h-100 bg-gray-500'></div>
                                            }
                                            else {
                                                return (
                                                    <div className='py-3 px-4  flex gap-2 items-center backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  rounded-md '>
                                                        {type.icon}
                                                        <p className='flex flex-col items-center'>
                                                            {type.name}
                                                        </p>
                                                        <div className='rounded-full p-1 px-2   bg-gray-400/35 hidden  lg:flex justify-center items-center' >
                                                            21
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                        )
                                    } */}
                                </div>
                            </div>
                            <div>
                            </div>
                            <div className='lg:columns-3 md:columns-2 columns-1  space-y-4 '>
                                {images.map(image => <div>
                                    <div className="p-1 flex flex-col gap-1 backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10  shadow-md rounded-3xl break-inside-avoid-column w-100" >
                                        <img src={image.path} alt="" className='rounded-3xl' />
                                        <div className=' text-lg flex justify-between items-center p-3' >
                                            <div className='flex flex-col font-bold '>
                                                <h1 className='text-gray-200 text-base'>
                                                    {image.description}
                                                </h1>
                                                <h1 className='text-gray-300 text-xl font-extrabold'>
                                                    ₹ 749
                                                </h1>
                                            </div>
                                            <div></div>
                                            <div className='flex gap-3' >
                                                <div className='bg-gradient-to-tr  from-blue-400 to-red-400 text-gray-200 p-3  rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                </div>
                                                <div className='bg-gradient-to-tr  from-blue-400 to-red-400 text-gray-200 p-3  rounded-full' >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>} />
        </div >
    )
}

export default Category