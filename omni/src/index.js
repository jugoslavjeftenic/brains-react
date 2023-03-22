import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HW from "./HW";
import HTMLTekst from "./HTMLTekst";
import HTMLOrganizacija from "./HTMLOrganizacija";
import HTMLSlika from "./HTMLSlika";
import HTMLTabela from "./HTMLTabela";
import HTMLForma from "./HTMLForma";

import BasicCSS from "./css_example/introduction/BasicCSS";
import CSSText from "./css_example/text/CSSText";
import CSSLayout from "./css_example/layout/CSSLayout";
import CSSExample from "./css_example/layout/CSSExample";
import CSSExampleListMainView from "./css_example/layout/CSSExample_ListMainView";
import CSSExampleDashboard from "./css_example/layout/CSSExampla_Dashboard";

import Osnove from "./js/Osnove";
import Usluzne from "./js/Usluzne";
import Funkcionalno from "./js/Funkcionalno";
import Objektno from "./js/Objektno";


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

import JSVAssignment from "./js_assignments/JSVAssignment";
import JSV01 from "./js_assignments/JSV01";
import JSV02 from "./js_assignments/JSV02";
import JSV03 from "./js_assignments/JSV03";
import JSV04 from "./js_assignments/JSV04";
import JSV05 from "./js_assignments/JSV05";
import JSV06 from "./js_assignments/JSV06";
import JSV07 from "./js_assignments/JSV07";
import JSV08 from "./js_assignments/JSV08";
import JSV09 from "./js_assignments/JSV09";
import JSV10 from "./js_assignments/JSV10";
import Zadatak_J10 from "./html_assignments/ZadatakJ10";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/hello_world",
		element: <HW />,
	},
	{
		path: "/html_text",
		element: <HTMLTekst />,
	},
	{
		path: "/html_organisation",
		element: <HTMLOrganizacija />,
	},
	{
		path: "/html_image",
		element: <HTMLSlika />,
	},
	{
		path: "/html_table",
		element: <HTMLTabela />,
	},
	{
		path: "/html_form",
		element: <HTMLForma />,
	},
	{
		path: "/css_basic",
		element: <BasicCSS />,
	},
	{
		path: "/css_text",
		element: <CSSText />,
	},
	{
		path: "/css_layout",
		element: <CSSLayout />,
	},
	{
		path: "/css_layout/css_example",
		element: <CSSExample />,
	},
	{
		path: "/css_layout/css_list_view_example",
		element: <CSSExampleListMainView />
	},
	{
		path: "/css_layout/css_dashboard",
		element: <CSSExampleDashboard />
	},
	{
		path: "/js_osnove",
		element: <Osnove />,
	},
	{
		path: "/js_usluzne",
		element: <Usluzne />,
	},
	{
		path: "/js_funkcionalno",
		element: <Funkcionalno />,
	},
	{
		path: "/js_objektno",
		element: <Objektno />,
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
		path: "/js_assignments",
		element: <JSVAssignment />,
	},
	{
		path: "/js_assignments/z01",
		element: <JSV01 />,
	},
	{
		path: "/js_assignments/z02",
		element: <JSV02 />,
	},
	{
		path: "/js_assignments/z03",
		element: <JSV03 />,
	},
	{
		path: "/js_assignments/z04",
		element: <JSV04 />,
	},
	{
		path: "/js_assignments/z05",
		element: <JSV05 />,
	},
	{
		path: "/js_assignments/z06",
		element: <JSV06 />,
	},
	{
		path: "/js_assignments/z07",
		element: <JSV07 />,
	},
	{
		path: "/js_assignments/z08",
		element: <JSV08 />,
	},
	{
		path: "/js_assignments/z09",
		element: <JSV09 />,
	},
	{
		path: "/js_assignments/z10",
		element: <JSV10 />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
