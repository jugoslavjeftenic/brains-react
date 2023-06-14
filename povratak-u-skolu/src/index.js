import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import Login from './login/Login';
import Predmeti from './predmeti/Predmeti';
import PredmetNew from './predmeti/PredmetNew';
import Predavanja from './predavanja/Predavanja';
import PredavanjeNew from './predavanja/PredavanjeNew';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'predmeti',
				element: <Predmeti />,
				children: [
					{
						path: 'novi-predmet',
						element: <PredmetNew />,
					},
				]
			},
			{
				path: 'predavanja',
				element: <Predavanja />,
				children: [
					{
						path: 'novo-predavanje',
						element: <PredavanjeNew />,
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
