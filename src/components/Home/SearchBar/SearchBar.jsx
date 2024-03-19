import React from 'react'

const SearchBar = () => {
    return (
        <div>
            <div className=' flex justify-center items-center gap-3  mt-16 mb-4  rounded-xl  flex-wrap lg:flex-nowrap '>
                <div className=' bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-sm shadow-md  bg-opacity-10 p-4  flex gap-5 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <div className='h-100 w-[0.8px] bg-gray-500' ></div>
                    <input type="text" className='bg-transparent placeholder-gray-500 ' placeholder="I'm looking for..." />
                </div>
                <button className=' rounded-md  text-white px-10 py-4  font-semibold bg-gray-700 shadow-md'  > Search  </button>
                {/* <div>
                    <div class="relative inline-block text-left">
                        <div>
                            <button type="button" class="inline-flex  w-full justify-center gap-x-1.5 text-nowrap text-gray-600 rounded-md bg-red-100/50 py-[18px] px-5   text-slate-00 shadow-sm ring-1 ring-inset ring-transparent hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>   Images
                                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SearchBar