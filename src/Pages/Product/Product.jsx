import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'
import { Carousel } from 'react-responsive-carousel'

const Product = () => {
    const options = [{ prop: 'Sizes', options: [{ isSelected: true, option: 'Web' }, { isSelected: false, option: 'Large' }, { isSelected: false, option: 'Medium' }, { isSelected: false, option: 'Small' }] }, { prop: 'Currency', options: [{ isSelected: true, option: 'USD' }, { isSelected: false, option: 'INR' }, { isSelected: false, option: 'EURO' }] }, { prop: 'Type', options: [{ isSelected: true, option: 'JPG' }, { isSelected: false, option: 'JPEG' }, { isSelected: false, option: 'PNG' }] }]
    const properties = [{
        prop: 'Category', options: ['Large', 'Medium', 'Small', 'Web'], icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>)
    }, { prop: 'Divider' }, { prop: 'Rating' }, { prop: 'Divider' }, {
        prop: "Tags used", options: ['Large', 'Medium', 'Small', 'Web'], icon: (< svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke- width="1.5" stroke="currentColor" class="w-6 h-6" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
        </svg >
        )
    }]
    const images = [{ path: "./pexels-ata-daftarifard-20440051.jpg", category: 'Nature', icon: 'https://img.icons8.com/material-outlined/24/deciduous-tree.png' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }, { path: "./pexels-equalstock-in-20344348.jpg", category: 'Urban', icon: 'https://img.icons8.com/material-outlined/24/hut.png' }, { path: "./pexels-marieke-mol-20518865.jpg", category: "Kids", icon: 'https://img.icons8.com/material-outlined/24/kid.png' }]

    return (
        <div>
            <MainLayout
                component={
                    <div className='text-gray-200'>
                        <div className='backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10 lg:m-3 rounded-xl'>
                            <div className='p-3'>
                                <h1 className='font-black text-2xl  lg:text-4xl md:text-center' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quaerat.
                                </h1>
                                <h5 className='font-medium lg:text-lg md:text-center text-gray-400'>
                                    By Cliqnclix
                                </h5>
                            </div>
                            <div className='grid  lg:grid-cols-2 gap-4  p-3 shadow rounded-md '>
                                <div className='lg:col-span-1   flex flex-col rounded-md items-center justify-center '>
                                    <div >
                                        <img src="./pexels-ata-daftarifard-20440051.jpg" alt="" className='shadow-md  rounded-xl' />
                                    </div>
                                </div>
                                <div className='lg:col-span-1' >
                                    {/* <h1 className='font-black text-4xl ' >
                                        Lorem ipsum dolor sit amet consectetur.
                                    </h1> */}
                                    <div className='flex flex-col gap-4'>
                                        {
                                            options.map(property => {
                                                return (
                                                    <div className='flex flex-col gap-2' >
                                                        <h3 className='text-lg font-semibold '>
                                                            {property.prop}
                                                        </h3>
                                                        <div className='flex gap-3 flex-wrap'>
                                                            {
                                                                property.options.map(opt => <div className={`flex gap-2 px-3 py-2 border border-gray-400/45 rounded-lg ${opt.isSelected ? 'bg-green-800/50 text-green-100 border-none' : ''}`} >
                                                                    {
                                                                        opt.isSelected && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                        </svg>
                                                                    }
                                                                    {opt.option}</div>)
                                                            }
                                                        </div>
                                                    </div>)
                                            })}
                                        <div className=' flex flex-col gap-2'>
                                            <h3 className='text-lg font-semibold '>
                                                Quantity
                                            </h3>
                                            <div className='flex gap-5' >
                                                <div className=' border border-gray-400/45 rounded-md flex' >
                                                    <div className='bg-gray-700 text-white rounded-s-md px-4 py-3 '>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className='text-xl font-bold  p-[10px] px-5 flex items-center'>
                                                            1
                                                        </h4>
                                                    </div>
                                                    <div className='bg-gray-700 text-white rounded-e-md px-4 py-3  p-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-1' >
                                            <h3 className='text-lg font-semibold '>
                                                Price
                                            </h3>
                                            <div className='flex gap-3 font-bold text-2xl'>
                                                ₹ 7500
                                            </div>
                                        </div>
                                        <button className=' rounded-md my-3 w-min text-nowrap  flex gap-2 items-center text-white px-5 sm:px-6 sm:py-4 py-3   font-semibold bg-gray-700 shadow-md'  >
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                        </svg> */}
                                            Add to Cart  </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between border-t border-b   border-gray-400/45 py-2 lg:mx-3 flex-wrap lg:flex-nowrap'>
                                {
                                    properties.map(property => {
                                        if (property.prop == 'Rating') {
                                            return (
                                                <div className='lg:px-3 py-2 flex flex-col gap-2 items-center w-full justify-center' >
                                                    <div className='rounded-full w-min p-4 flex justify-center items-center bg-gradient-to-tr  from-blue-400 to-red-400 text-gray-200'    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className='text-lg font-semibold '>
                                                        Ratings
                                                    </h3>
                                                    <div className='flex gap-1' >
                                                        {
                                                            [1, 2, 3, 4, 5].map(() => {
                                                                return (
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                                    </svg>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else if (property.prop == 'Divider') {
                                            return (
                                                <div className='lg:w-[2px] lg:h-auto  w-full  h-[1px]  bg-gray-500'></div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className='lg:px-3 py-3 flex flex-col gap-4 justify-center items-center w-full' >
                                                    <div className='rounded-full w-min p-4 flex justify-center items-center bg-gradient-to-tr  from-blue-400 to-red-400 text-gray-200'  >
                                                        {property.icon}
                                                    </div>
                                                    <h3 className='text-lg font-semibold '>
                                                        {property.prop}
                                                    </h3>
                                                    <div className='flex gap-3'>
                                                        {
                                                            property.options.map(opt => <div className={`flex gap-2 px-3 py-2 border border-gray-400/45 rounded-lg ${opt.isSelected ? 'bg-green-100/75 text-green-950' : ''}`} >
                                                                {opt}</div>)
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }
                                    )
                                }
                            </div>

                            <div className='flex justify-center items-center flex-col gap-6 p-4'>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-2xl font-semibold'>
                                        Reviews
                                    </h1>
                                </div>
                                <div className='flex gap-4 flex-wrap md:flex-nowrap'>
                                    <div className='p-3 bg-gray-700 rounded-lg shadow'>
                                        <div className='flex gap-2 items-center'>
                                            <img src="https://th.bing.com/th/id/OIP.RczZ4xzTOoFZPPnqHD5MYgHaJ3?w=488&h=650&rs=1&pid=ImgDetMain" alt="" className='w-6 rounded-full h-6 object-cover object-center' />
                                            <h5 className='text-gray-200 text-lg'>Anonymous</h5>
                                        </div>
                                        <h6 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus voluptate odit doloremque quidem at nobis! Ipsum beatae fugit delectus enim?</h6>
                                    </div>
                                    <div className='p-3 bg-gray-700 rounded-lg shadow'>
                                        <div className='flex gap-2 items-center'>
                                            <img src="https://th.bing.com/th/id/OIP.RczZ4xzTOoFZPPnqHD5MYgHaJ3?w=488&h=650&rs=1&pid=ImgDetMain" alt="" className='w-6 rounded-full h-6 object-cover object-center' />
                                            <h5 className='text-gray-200 text-lg'>Anonymous</h5>
                                        </div>
                                        <h6 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus voluptate odit doloremque quidem at nobis! Ipsum beatae fugit delectus enim?</h6>
                                    </div>
                                    <div className='p-3 bg-gray-700 rounded-lg shadow'>
                                        <div className='flex gap-2 items-center'>
                                            <img src="https://th.bing.com/th/id/OIP.RczZ4xzTOoFZPPnqHD5MYgHaJ3?w=488&h=650&rs=1&pid=ImgDetMain" alt="" className='w-6 rounded-full h-6 object-cover object-center' />
                                            <h5 className='text-gray-200 text-lg'>Anonymous</h5>
                                        </div>
                                        <h6 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus voluptate odit doloremque quidem at nobis! Ipsum beatae fugit delectus enim?</h6>
                                    </div>
                                    {/* *There are no reviews yet */}
                                </div>
                                <hr className='h-2' />
                                <div className='flex flex-col items-center gap-2'>
                                    <h3 className='text-lg font-semibold '>
                                        Give  Ratings
                                    </h3>
                                    <div className='flex gap-1' >
                                        {
                                            [1, 2, 3, 4, 5].map(() => {
                                                return (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                                    </svg>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='text-2xl font-semibold'>
                                        Write your own  review
                                    </h1>
                                    <p className='text-sm text-gray-400 text-center'> Required fields are marked *</p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex justify-around gap-4 flex-wrap md:flex-nowrap' >
                                        <div className='w-full'>
                                            <input type="text" className=' rounded-lg p-3 outline-none bg-gray-700 w-full' placeholder='* Name' />
                                        </div>
                                        <div className='w-full'>
                                            <div className='w-full'>
                                                <input type="text" className=' rounded-lg p-3 outline-none bg-gray-700 w-full' placeholder='* Email' />
                                                <p className='text-xs text-nowrap  text-gray-400 '>Your email address will not be published. </p>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <input type="text" className=' rounded-lg p-3 outline-none bg-gray-700 w-full' placeholder=' Website' />
                                        </div>
                                    </div>
                                    <textarea name="" id="" rows='12' className=' rounded-lg p-3  outline-none bg-gray-700' placeholder='* Write your reviews'  ></textarea>

                                    <button className=' w-full bg-gradient-to-tr  from-blue-400 to-red-400 text-gray-200 p-3 rounded-md shadow ' >Save</button>
                                </div>
                            </div>
                        </div>


                        <h1 className='text-gray-200 text-2xl  xl:text-3xl font-bold text-center my-7'>Recommended For You</h1>

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
                }
            />

        </div>
    )
}

export default Product