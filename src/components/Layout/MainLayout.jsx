import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Services from './Services'
import Testimonials from './Testimonials'

const MainLayout = ({ component }) => {
    return (
        <div className='flex flex-col bg-gray-800'>
            {/* <Navbar /> */}
            <div>
                {component}
            </div>

            <Services />
            <Footer />

        </div>
    )
}

export default MainLayout