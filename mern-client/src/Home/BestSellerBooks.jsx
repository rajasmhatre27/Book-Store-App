import React, { useState, useEffect } from 'react'
import BookCards from '../components/BookCards'

const BestSellerBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("https://book-store-app-2jvh.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,6)))
      
    }, []);
    
  return (
    <div>
        <BookCards books={books} headline="Best seller Books" />
    </div>
  )
}

export default BestSellerBooks