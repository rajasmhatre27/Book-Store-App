import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const data = useLoaderData();

  

  const { _id, bookTitle ,imageURL} = data;

  return (
    <div className="mt-28 px-4 lg:px-24">  
      <img src={imageURL} className='h-90 rounded-2xl'></img>  
      <h2>{bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
