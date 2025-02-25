import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const data = useLoaderData();

  if (!data) {
    return <div className="text-center text-red-500 mt-10">Book data not available!</div>;
  }

  const { bookTitle, authorName, imageURL, bookDescription, bookPdfURL, category } = data;

  return (
    <div className="mt-20 px-4 lg:px-24 flex flex-col items-center text-center">
      {/* Book Image */}
      <img 
        src={imageURL} 
        alt={bookTitle} 
        className="w-full max-w-sm h-auto rounded-xl shadow-md"
      />

      {/* Book Details */}
      <div className="mt-5 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800">{bookTitle}</h2>
        <p className="text-lg text-gray-600 mt-1">By <span className="font-semibold">{authorName}</span></p>
        <p className="text-sm text-gray-500 mt-1">Category: <span className="font-medium">{category}</span></p>

        {/* Description */}
        <p className="mt-4 text-gray-700 leading-relaxed">{bookDescription}</p>

        {/* Read PDF Button */}
        {bookPdfURL && (
          <a 
            href={bookPdfURL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-blue-600 text-white py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Read Book
          </a>
        )}
      </div>
    </div>
  );
};

export default SingleBook;
