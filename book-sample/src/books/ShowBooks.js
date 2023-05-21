import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ShowBooks = () => {
    return (
        <div>
            <h1>ShowBooks</h1>
            <NavLink to='new_book'>Add new book</NavLink>
            <Outlet></Outlet>
        </div>
    );
};

export default ShowBooks;