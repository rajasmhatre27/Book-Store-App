import React from 'react'
import FavBookImg from "../assets/BannerBooks/banner.jpg"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-124'>
        <div className='md:w-1/2 space-y-6'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
        </div>

        <div className='md:w-1/2'>
            <h1 className='text-5xl font-bold my-5 md:w3/44 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here!</span></h1>
            <p className='mb-10 text-lg md:w-5/6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti, qui fuga totam doloremque incidunt quidem sequi, maxime, odio beatae harum nisi nam modi amet quibusdam. Non impedit perspiciatis laborum!</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
                
            </div>
            <Link to="./Shop" className="mt-12 block"><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>

        </div>
    </div>
  )
}

export default FavBook