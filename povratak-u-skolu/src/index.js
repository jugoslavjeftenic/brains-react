// Jugoslav Jeftenic
// GitHub - frontend (private, bice public posle roka za predaju)
// https://github.com/jugoslavjeftenic/brains-react/tree/master/povratak-u-skolu
// GitHub - backend (public)
// https://github.com/jugoslavjeftenic/brains-springboot/tree/master/be_t99_back_to_school

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
