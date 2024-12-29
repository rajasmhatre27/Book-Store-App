import React from 'react'
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side  */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h1 className='text-6xl font-bold leading-snug text-black'>Buy and Sell Your Books<span className='text-blue-700'> for the best Prices</span></h1>
                <p className='md:w-4/5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ex vel earum aspernatur iste veritatis eveniet iusto velit porro officiis explicabo, odit neque placeat pariatur illo dolorum dolore suscipit recusandae rerum fuga impedit! Voluptate dolor non deserunt unde illo. Quasi adipisci eaque maiores dicta vero corporis minus aliquid iusto pariatur.</p>
                <div>
                    <input type="search" name='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'> Search</button>
                </div>
            </div>
            {/* rightside */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner