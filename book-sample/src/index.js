import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import PageError from './PageError';

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
				errorElement: <PageError />,
				loader: async () => {
					const fetchBooks = await fetch(`http://localhost:8080/api/v1/book`);
					if (fetchBooks.status === 404) {
						throw new Response("Resurs nije nađen", { status: 404 });
					}
					const retVal = fetchBooks;
					return retVal;
				},
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
				errorElement: <PageError />,
				loader: async () => {
					const fetchAuthors = await fetch(`http://localhost:8080/api/v1/author`);
					if (fetchAuthors.status === 404) {
						throw new Response("Resurs nije nađen", { status: 404 });
					}
					const retVal = fetchAuthors;
					return retVal;
				},
			},
			{
				path: "/genres",
				element: <ShowGenres />,
				errorElement: <PageError />,
				loader: async () => {
					const fetchGenres = await fetch(`http://localhost:8080/api/v1/genre`);
					if (fetchGenres.status === 404) {
						throw new Response("Resurs nije nađen", { status: 404 });
					}
					const retVal = fetchGenres;
					return retVal;
				},
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
