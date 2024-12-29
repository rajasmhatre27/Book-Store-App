import React, { useState } from 'react';
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Fantasy",
    "Horror",
    "History",
    "Science",
    "Comics",
    "Business",
    "Travel",
    "Religion",
    "Art",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;
    const categoryName = selectedBookCategory;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      bookDescription,
      bookPdfURL,
      categoryName,
    };
    console.log(bookObj)

    //send data to db
    fetch("http://localhost:5000/upload-book" ,{
      method:"POST",
      headers: {
       "Content-type" : "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data=>{
      alert("Book Uploded succesfully!!!")
    })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleBookSubmit}
      >
        {/* First row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>

          {/* Author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectValue}
            >
              {bookCategories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* Book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Book Description"
            rows={6}
            required
            className="w-full"
          />
        </div>

        {/* Book PDF link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfURL" value="Book Pdf Link " />
          </div>
          <TextInput
            id="bookPdfURL"
            name="bookPdfURL"
            type="text"
            placeholder="Book Link "
            required
          />
        </div>
        <Button type="submit">Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBook;
