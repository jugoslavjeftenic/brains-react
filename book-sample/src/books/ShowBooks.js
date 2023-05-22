import React from 'react';
import './books.css';
import { useLoaderData } from 'react-router-dom';
import ShowBook from './ShowBook';

const ShowBooks = () => {
    const books = useLoaderData();

    return (
        <div>
            <h1>ShowBooks</h1>
            <div className='books_container'>
                {books.map((b) => <ShowBook key={b.id} book={b} />)}
            </div>
        </div>
    );
};

export default ShowBooks;