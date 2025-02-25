import React from 'react'
import { useState , useEffect } from 'react'
import BookCards from '../components/BookCards';
const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://book-store-app-2jvh.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
      
    }, [])
    
  return (
    <div>
        <BookCards books={books} headline="Other Books" />
    </div>
  )
}

export default OtherBooks