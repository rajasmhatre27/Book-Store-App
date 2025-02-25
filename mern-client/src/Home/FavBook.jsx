import React from 'react';
import FavBookImg from '../assets/BannerBooks/banner.jpg';
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <img src={FavBookImg} alt="Favorite Book" className="rounded w-full md:w-10/12" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold my-5 leading-snug">
          Find Your Favorite <span className="text-blue-700">Book Here!</span>
        </h1>
        <p className="mb-6 text-base md:text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti, qui fuga totam doloremque incidunt quidem sequi, maxime, odio beatae harum nisi nam modi amet quibusdam. Non impedit perspiciatis laborum!
        </p>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">800</h3>
            <p className="text-sm md:text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">550+</h3>
            <p className="text-sm md:text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">1200+</h3>
            <p className="text-sm md:text-base">PDF Downloads</p>
          </div>
        </div>

        {/* Button */}
        <Link to="./Shop" className="mt-6 inline-block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
