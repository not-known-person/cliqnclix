import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Services from './Services'
import Testimonials from './Testimonials'

const MainLayout = ({ component }) => {
    return (
        <div className='flex flex-col bg-cover bg-center  bg-fixed bg-[url("https://freeimghost.net/images/2024/03/21/abstract-textured-backgound.jpeg")]' >
            <Navbar />
            <div>
                {component}
            </div>

            <Services />
            <Footer />

        </div>
    )
}

export default MainLayout