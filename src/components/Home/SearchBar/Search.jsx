import React from 'react'

const Search = () => {
    const categories = [{ name: 'All Categories', isSelected: true }, { name: 'Beauty & Fashion', isSelected: false }, { name: 'Bussiness & Corporate', isSelected: false }, { name: 'Concepts & Ideas', isSelected: false }, { name: 'Education & Learning', isSelected: false }, { name: 'Festival & Occasions', isSelected: false }, { name: 'Food & Drink', isSelected: false }, { name: 'Health & Fitness', isSelected: false }, { name: 'Indian Culture', isSelected: false }, { name: 'Rural India', isSelected: false },
    { name: 'Shopping & Retail', isSelected: false }, { name: 'Sports & Leisure', isSelected: false }, { name: 'Technology', isSelected: false }, { name: 'Vectors', isSelected: false }
    ]
    const types = [{
        name: 'Image', isSelected: true, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>      
  ` }, {
        name: 'Video', isSelected: false, icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>      
`}, {
        name: 'Vector Art', isSelected: false, icon: `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>

` }]
    return (
        <div>
            <div className='flex justify-center gap-3  bg-white shadow-md p-7 m-7 rounded-md w-min mx-auto'>
                <div className='bg-red-100/50 p-4  flex gap-5 rounded-md '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <div className='h-100 w-[0.8px] bg-gray-500' ></div>
                    <input type="text" className='bg-transparent placeholder-gray-500 w-72 ' placeholder="I'm looking for..." />
                </div>
                <button className='bg-/40 rounded-md  text-white px-10 font-semibold border bg-slate-500'  > Search  </button>
            </div>
            <div className='flex flex-col items-center gap-7' >
                <h2 className="font-semibold text-lg text-slate-500" >Choose type</h2>
                <div className='flex gap-2 flex-wrap mx-10 justify-center' >
                    {types.map((type) => {
                        return (
                            <>
                                <button className={`bg-white rounded-lg font-semibold text-nowrap p-2 px-4  flex justify-center items-center gap-2  ${type.isSelected ? 'bg-green-500/40 text-black/70' : 'text-slate-500'} `}
                                >   <div dangerouslySetInnerHTML={{ __html: type.icon }}></div>{type.name} {type.isSelected ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                    : ''} </button>
                            </>
                        )
                    })}
                </div>
                <h2 className="font-semibold text-lg text-slate-500" >Choose category</h2>
                <div className='flex gap-2 flex-wrap mx-10 justify-center ' >
                    {categories.map((category) => {
                        return (
                            <>
                                <button className={`bg-white rounded-lg font-semibold text-nowrap p-2 px-4  flex justify-center items-center gap-2  ${category.isSelected ? 'bg-green-500/40 text-black/70' : 'text-slate-500'} `}   > {category.name} {category.isSelected ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                    : ''} </button>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search