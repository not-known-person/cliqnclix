import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Services from './Services'

const MainLayout = ({ component }) => {
    return (
        <div>
            <Navbar />
            <div className='p-5'>
                {component}
            </div>
            <Services />
            <Footer />
        </div>
    )
}

export default MainLayout