import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Korisnici from './korisnici/Korisnici';
import Predmeti from './predmeti/Predmeti';
import Login from './Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'korisnici',
				element: <Korisnici />,
			},
			{
				path: 'predmeti',
				element: <Predmeti />,
			},
		]
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
