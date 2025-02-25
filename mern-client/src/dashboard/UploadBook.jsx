import React, { useState } from 'react';
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction", "Non-Fiction", "Mistery", "Programming", "Fantasy", "Horror", "History", "Science", "Comics", "Business", "Travel", "Religion", "Art",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookObj = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      bookDescription: form.bookDescription.value,
      bookPdfURL: form.bookPdfURL.value,
      categoryName: selectedBookCategory,
    };
    console.log(bookObj);

    fetch("https://book-store-app-2jvh.onrender.com/upload-book" ,{
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(() => alert("Book Uploaded successfully!"));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center">Upload A Book</h2>
      <form className="flex flex-col gap-4 w-full" onSubmit={handleBookSubmit}>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required label="Book Title" className="w-full" />
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required label="Author Name" className="w-full" />
        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required label="Book Image URL" className="w-full" />
        <Select id="inputState" name="categoryName" value={selectedBookCategory} onChange={handleChangeSelectValue} className="w-full">
          {bookCategories.map((option) => <option key={option}>{option}</option>)}
        </Select>
        <Textarea id="bookDescription" name="bookDescription" placeholder="Book Description" rows={6} required className="w-full" />
        <TextInput id="bookPdfURL" name="bookPdfURL" type="text" placeholder="Book Link" required className="w-full" />
        <Button type="submit" className="w-full">Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBook;
