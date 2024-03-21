import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
const Testimonials = () => {

    const testimonials = [{ name: "Ajay Gupta", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tenetur sunt error numquam est? Rem quibusdam error dolorum dicta unde. Tempore, ab voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit.  ", src: "https://cliqnclix.com/wp-content/uploads/2023/05/Untitled-design-11.jpg" }, { name: "Ajay Gupta", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tenetur sunt error numquam est? Rem quibusdam error dolorum dicta unde. Tempore, ab voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit.  ", src: "https://cliqnclix.com/wp-content/uploads/2023/05/Untitled-design-11.jpg" }, { name: "Amir Khan", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tenetur sunt error numquam est? Rem quibusdam error dolorum dicta unde. Tempore, ab voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "https://cliqnclix.com/wp-content/uploads/2023/02/user.jpg" }, { name: "Amir Khan", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tenetur sunt error numquam est? Rem quibusdam error dolorum dicta unde. Tempore, ab voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "https://cliqnclix.com/wp-content/uploads/2023/02/user.jpg" }]
    return (
        <div className='flex flex-col items-center  gap-20  m-5' >
            <h1 className='text-3xl font-bold text-white'>Testimonials</h1>
            {/* <Carousel autoPlay interval={3000} infiniteLoop centerMode showIndicators={false} showThumbs={false} showArrows={false} showStatus={false} > */}
            <div className='flex gap-4 flex-wrap justify-center'>
                {testimonials.map((el) => {
                    return (
                        <div className=' shadow-md flex flex-col gap-2  m-4 relative text-white max-w-xs bg-clip-padding backdrop-filter backdrop-brightness-75 backdrop-blur-sm  bg-opacity-10 text-center rounded-3xl p-3'>
                            <div className=' rounded-full '>
                                <img src={el.src} alt="" className=' m-auto rounded-full' />
                            </div>
                            <div className=' h-full rounded-3xl'>
                                <h3 className='text-3xl mb-4  font-bold' >
                                    {el.name}
                                </h3>
                                <p className='text-base font-normal text-white/50'>
                                    {el.review}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* </Carousel> */}
        </div >
    )
}

export default Testimonials