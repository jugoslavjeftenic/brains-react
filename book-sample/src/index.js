import React from 'react';
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
