import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-app-2jvh.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-4xl font-bold text-center">All Books are Here</h2>

      {/* Grid Layout */}
      <div className="grid gap-8 my-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <Card key={book._id} className="p-4 shadow-md rounded-lg">
            {/* Book Image */}
            <img
              src={book.imageURL}
              alt={book.bookTitle}
              className="h-80 w-full object-cover rounded-lg"
            />

            {/* Book Title */}
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mt-3">
              {book.bookTitle}
            </h5>

            {/* Author Name */}
            <p className="text-sm text-gray-600 dark:text-gray-400">
              By {book.authorName}
            </p>

            {/* Buy Now Button */}
            <Link to={`/book/${book._id}`}>
              <button className="mt-3 w-full bg-blue-700 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition">
                View Details
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
