import React from 'react'
import MainLayout from '../../components/Layout/MainLayout'

const Product = () => {
    const options = [{ prop: 'Sizes', options: [{ isSelected: false, option: 'Large' }, { isSelected: false, option: 'Medium' }, { isSelected: false, option: 'Small' }, { isSelected: true, option: 'Web' }] }, { prop: 'Currency', options: [{ isSelected: true, option: 'USD' }, { isSelected: false, option: 'INR' }, { isSelected: false, option: 'EURO' }] }, { prop: 'Type', options: [{ isSelected: true, option: 'JPG' }, { isSelected: false, option: 'JPEG' }, { isSelected: false, option: 'PNG' }] }]
    const properties = [{ prop: 'Sizes', options: ['Large', 'Medium', 'Small', 'Web'] }, , { prop: 'Category', options: ['Large', 'Medium', 'Small', 'Web'] }, { prop: "Tags used", options: ['Large', 'Medium', 'Small', 'Web'] }, { prop: 'Currency', options: ['USD', 'INR', 'EURO'] }]
    return (
        <div>
            <MainLayout
                component={
                    <div className='grid grid-cols-2 gap-4 bg-white p-3 shadow rounded-md text-gray-800'>
                        <div className='col-span-1'>
                            <div >
                                <img src="./pexels-ata-daftarifard-20440051.jpg" alt="" className='shadow-md rounded-md' />
                            </div>
                        </div>
                        <div className='col-span-1' >
                            <h1 className='font-black text-4xl ' >
                                Lorem ipsum dolor sit amet consectetur.
                            </h1>
                            <div className='px-3 py-2 flex flex-col gap-1' >
                                <h3 className='text-lg font-semibold '>
                                    Price
                                </h3>
                                <div className='flex gap-3 font-bold text-2xl'>
                                    ₹   7500
                                </div>
                            </div>
                            {/* <div className='px-3 py-2 flex flex-col gap-2' >
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
                            </div> */}

                            <div>
                                {
                                    options.map(property => {
                                        return (
                                            <div className='px-3 py-2 flex flex-col gap-2' >
                                                <h3 className='text-lg font-semibold '>
                                                    {property.prop}
                                                </h3>
                                                <div className='flex gap-3'>
                                                    {
                                                        property.options.map(opt => <div className={`flex gap-2 px-3 py-2 border border-gray-400/45 rounded-lg ${opt.isSelected ? 'bg-green-300/50 text-green-800' : ''}`} >
                                                            {
                                                                opt.isSelected && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg>
                                                            }
                                                            {opt.option}</div>)
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                                <div className='px-3 py-2 flex flex-col gap-2'>
                                    <h3 className='text-lg font-semibold '>
                                        Quanity
                                    </h3>
                                    <div className='flex gap-5' >
                                        <div className=' border border-gray-400/45 rounded-full flex' >
                                            <div className='bg-gray-400/45 rounded-s-full p-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className='text-xl font-bold  p-[10px] px-5 flex items-center'>
                                                    1
                                                </h4>
                                            </div>
                                            <div className='bg-gray-400/45 rounded-e-full p-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    )
}

export default Product