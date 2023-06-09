import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Login from './login/Login';
import Korisnici from './korisnici/Korisnici';
import Predmeti from './predmeti/Predmeti';
import NoviPredmet from './predmeti/NoviPredmet';

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
				children: [
					{
						path: 'novi-predmet',
						element: <NoviPredmet />,
					},
				]
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
