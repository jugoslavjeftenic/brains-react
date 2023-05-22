import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import './books.css';
import ShowBook from './ShowBook';

const ShowBooks = () => {
    const books = useLoaderData();
    const [genres, setGenres] = useState([]);
    const [showBooks, setShowBooks] = useState(books);

    useEffect(() => {
        let cancel = false;
        const getGenres = async () => {
            let fetched = await fetch(`http://localhost:8080/api/v1/genre`);
            let result = await fetched.json();
            if (!cancel) {
                setGenres(result);
            }
        };
        getGenres();
        return () => {
            cancel = true;
        };
    }, []);

    const filterByGenre = (e) => {
        if (e.target.value === '0') {
            setShowBooks(books);
        }
        else {
            const selectedGenre = genres.find((g) => g.id === parseInt(e.target.value));
            const filteredBooks = books.filter((b) => b.genre === selectedGenre.name);
            setShowBooks(filteredBooks);
        }
    };

    return (
        <div>
            <header className='books_container_header'>
                <div className='input-container'>
                    <input type='search' className='input_field' placeholder='Search...' />
                    <button className='search_btn'>Search</button>
                </div>
                <select className='select' onChange={filterByGenre}>
                    <option value='0'>All genres</option>
                    {genres.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                </select>
                <button><NavLink to='new_book'> Add new book </NavLink> </button>
            </header>
            <div className='books_container'>
                {showBooks.map((b) => <ShowBook key={b.id} book={b} />)}
            </div>
        </div>
    );
};

export default ShowBooks;