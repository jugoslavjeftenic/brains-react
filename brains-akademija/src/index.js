import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

import HTMLAssignment from "./html_assignments/HTMLAssignment";
import ZadatakJ01 from "./html_assignments/ZadatakJ01";
import ZadatakJ02 from "./html_assignments/ZadatakJ02";
import ZadatakJ03 from "./html_assignments/ZadatakJ03";
import ZadatakJ04 from "./html_assignments/ZadatakJ04";
import ZadatakJ05 from "./html_assignments/ZadatakJ05";
import ZadatakJ06 from "./html_assignments/ZadatakJ06";
import ZadatakJ07 from "./html_assignments/ZadatakJ07";
import ZadatakJ08 from "./html_assignments/ZadatakJ08";
import ZadatakJ09 from "./html_assignments/ZadatakJ09";
import ZadatakJ10 from "./html_assignments/ZadatakJ10";
import ZadatakJ11 from "./html_assignments/ZadatakJ11";
import ZadatakJ12 from "./html_assignments/ZadatakJ12";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},

	{
		path: "/html_assignment",
		element: <HTMLAssignment />,
	},
	{
		path: "/html_assignment/zad01",
		element: <ZadatakJ01 />,
	},
	{
		path: "/html_assignment/zad02",
		element: <ZadatakJ02 />,
	},
	{
		path: "/html_assignment/zad03",
		element: <ZadatakJ03 />,
	},
	{
		path: "/html_assignment/zad04",
		element: <ZadatakJ04 />,
	},
	{
		path: "/html_assignment/zad05",
		element: <ZadatakJ05 />,
	},
	{
		path: "/html_assignment/zad06",
		element: <ZadatakJ06 />,
	},
	{
		path: "/html_assignment/zad07",
		element: <ZadatakJ07 />,
	},
	{
		path: "/html_assignment/zad08",
		element: <ZadatakJ08 />,
	},
	{
		path: "/html_assignment/zad09",
		element: <ZadatakJ09 />,
	},
	{
		path: "/html_assignment/zad10",
		element: <ZadatakJ10 />,
	},
	{
		path: "/html_assignment/zad11",
		element: <ZadatakJ11 />,
	},
	{
		path: "/html_assignment/zad12",
		element: <ZadatakJ12 />,
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
document.title = "BRAAAINS!!!";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
