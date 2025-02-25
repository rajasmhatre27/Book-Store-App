import React, { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://book-store-app-2jvh.onrender.com/all-books")
            .then(res => res.json())
            .then(data => {
                setBooks(data.slice(0, 6)); // Limiting to 6 books
                setLoading(false);
            })
            .catch(error => console.error("Error fetching books:", error));
    }, []);

    return (
        <div className="best-seller-container">
            <h2 className="headline">Best Seller Books</h2>
            
            {loading ? (
                <p className="loading-text">Loading books...</p>
            ) : (
                <div className="book-grid">
                    <BookCards books={books} />
                </div>
            )}
        </div>
    );
};

export default BestSellerBooks;
