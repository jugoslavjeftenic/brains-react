import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import PageError from './PageError';

import Korisnici from './korisnici/Korisnici';
import NoviKorisnik from './korisnici/NoviKorisnik';

import Administratori from './korisnici/Administratori';
import Nastavnici from './korisnici/Nastavnici';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/korisnici',
				element: <Korisnici ucitano='true' />,
				errorElement: <PageError />,
				loader: async () => {
					const fetchBooks = await fetch('http://localhost:8080/api/v1/korisnici');
					if (fetchBooks.status === 404) {
						throw new Response("Resurs nije nađen", { status: 404 });
					}
					const retVal = fetchBooks;
					return retVal;
				},
				children: [
					{
						path: 'novi-korisnik',
						element: <NoviKorisnik />
					}
				]
			},
			{
				path: '/administratori',
				element: <Administratori />,
				errorElement: <PageError />,
				loader: async () => {
					const fetchAuthors = await fetch(`http://localhost:8080/api/v1/administratori`);
					if (fetchAuthors.status === 404) {
						throw new Response("Resurs nije nađen", { status: 404 });
					}
					const retVal = fetchAuthors;
					return retVal;
				},
			},
			{
				path: '/nastavnici',
				element: <Nastavnici />,
				errorElement: <PageError />,
				loader: async () => {
					const fetchGenres = await fetch(`http://localhost:8080/api/v1/nastavnici`);
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
