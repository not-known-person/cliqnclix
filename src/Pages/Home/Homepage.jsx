import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import Search from '../../components/Home/SearchBar/Search'
import Search2 from '../../components/Home/SearchBar/SearchBar'
import Images from '../../components/Home/ImageGrid/Images'
import FetauredImages from '../../components/Fetaured/FetauredImages'
import MainLayout from '../../components/Layout/MainLayout'
import HeroSection from '../../components/Home/HeroSection'

const Homepage = () => {

    // const selectCategory = (category) => {
    //     let isSelected = categories.find(cat => category == cat).isSelected
    //     isSelected = !isSelected
    // }
    return (

        <MainLayout component={<><HeroSection /> <Images /> <FetauredImages /></>}  ></MainLayout>
    )
}

export default Homepage