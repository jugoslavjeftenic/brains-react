import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import './index.css';

import App from './App';
import AppMain from './AppMain';
import Login from './Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// children: [
		// 	{
		// 		path: 'login',
		// 		element: <Login></Login>,
		// 	},
		// ]
	},
	{
		path: '/main',
		element: <AppMain />,
		// children: [
		// 	{
		// 		path: 'login',
		// 		element: <Login></Login>,
		// 	},
		// ]
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
