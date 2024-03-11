import React from 'react'
import Navbar from '../../components/Common/Navbar'
import Search from '../../components/Home/SearchBar/Search'
import Search2 from '../../components/Home/SearchBar/Search2'
import Images from '../../components/Home/ImageGrid/Images'

const Homepage = () => {

    // const selectCategory = (category) => {
    //     let isSelected = categories.find(cat => category == cat).isSelected
    //     isSelected = !isSelected
    // }
    return (
        <div>
            <Navbar />
            {/* <Search2 /> */}
            <Images />
        </div >
    )
}

export default Homepage