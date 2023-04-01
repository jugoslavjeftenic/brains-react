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

import JSassignment from "./js_assignments/JSassignment";
import JSz01 from "./js_assignments/JSz01";
import JSz02 from "./js_assignments/JSz02";
import JSz03 from "./js_assignments/JSz03";
import JSz04 from "./js_assignments/JSz04";
import JSz05 from "./js_assignments/JSz05";
import JSz06 from "./js_assignments/JSz06";
import JSz07 from "./js_assignments/JSz07";
import JSz08 from "./js_assignments/JSz08";
import JSz09 from "./js_assignments/JSz09";
import JSz10 from "./js_assignments/JSz10";

import JSdz01 from "./js_assignments/JSdz01";
import JSdz02 from "./js_assignments/JSdz02";
import JSdz03 from "./js_assignments/JSdz03";
import JSdz04 from "./js_assignments/JSdz04";
import JSdz05 from "./js_assignments/JSdz05";
import JSdz06 from "./js_assignments/JSdz06";
import JSdz07 from "./js_assignments/JSdz07";
import JSdz08 from "./js_assignments/JSdz08";
import JSdz09 from "./js_assignments/JSdz09";
import JSdz10 from "./js_assignments/JSdz10";

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
	},

	{
		path: "/js_assignment",
		element: <JSassignment />,
	},
	{
		path: "/js_assignment/JSz01",
		element: <JSz01 />,
	},
	{
		path: "/js_assignment/JSz02",
		element: <JSz02 />,
	},
	{
		path: "/js_assignment/JSz03",
		element: <JSz03 />,
	},
	{
		path: "/js_assignment/JSz04",
		element: <JSz04 />,
	},
	{
		path: "/js_assignment/JSz05",
		element: <JSz05 />,
	},
	{
		path: "/js_assignment/JSz06",
		element: <JSz06 />,
	},
	{
		path: "/js_assignment/JSz07",
		element: <JSz07 />,
	},
	{
		path: "/js_assignment/JSz08",
		element: <JSz08 />,
	},
	{
		path: "/js_assignment/JSz09",
		element: <JSz09 />,
	},
	{
		path: "/js_assignment/JSz10",
		element: <JSz10 />,
	},

	{
		path: "/js_assignment/JSdz01",
		element: <JSdz01 />,
	},
	{
		path: "/js_assignment/JSdz02",
		element: <JSdz02 />,
	},
	{
		path: "/js_assignment/JSdz03",
		element: <JSdz03 />,
	},
	{
		path: "/js_assignment/JSdz04",
		element: <JSdz04 />,
	},
	{
		path: "/js_assignment/JSdz05",
		element: <JSdz05 />,
	},
	{
		path: "/js_assignment/JSdz06",
		element: <JSdz06 />,
	},
	{
		path: "/js_assignment/JSdz07",
		element: <JSdz07 />,
	},
	{
		path: "/js_assignment/JSdz08",
		element: <JSdz08 />,
	},
	{
		path: "/js_assignment/JSdz09",
		element: <JSdz09 />,
	},
	{
		path: "/js_assignment/JSdz10",
		element: <JSdz10 />,
	},
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
