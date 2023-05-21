import React from 'react';
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ShowBooks from './books/ShowBooks';
import BookForm from './books/BookForm';

import ShowAuthors from './authors/ShowAuthors';
import ShowGenres from './genres/ShowGenres';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/books",
				element: <ShowBooks />,
				children: [
					{
						path: "new_book",
						element: <BookForm />
					}
				]
			},
			{
				path: "/authors",
				element: <ShowAuthors />,
			},
			{
				path: "/genres",
				element: <ShowGenres />,
			},
		]
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
