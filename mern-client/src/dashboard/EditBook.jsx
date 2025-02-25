import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBook = () => {
  const { id } = useParams();
  const book = useLoaderData();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL } = book;

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

  // Initialize selected category with the current book's category
  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  // Handle category selection
  const handleChangeSelectValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Handle book update
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedBook = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      bookDescription: form.bookDescription.value,
      bookPdfURL: form.bookPdfURL.value,
      categoryName: selectedBookCategory,
    };

    console.log(updatedBook); // Verify data before sending it to the backend

    // Update book data via API
    fetch(`https://book-store-app-2jvh.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is updated successfully!");
      })
      .catch((err) => console.error("Error updating book:", err));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update A Book Data</h2>

      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleUpdate}
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
              defaultValue={bookTitle}
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
              defaultValue={authorName}
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
              defaultValue={imageURL}
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
                <option key={option} value={option}>
                  {option}
                </option>
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
            defaultValue={bookDescription}
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
            defaultValue={bookPdfURL}
            type="text"
            placeholder="Book Link "
            required
          />
        </div>
        <Button type="submit">Update Book</Button>
      </form>
    </div>
  );
};

export default EditBook;
