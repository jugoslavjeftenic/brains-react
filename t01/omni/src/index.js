import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import HW from "./HW";
import HTMLTekst from "./HTMLTekst";
import HTMLOrganizacija from "./HTMLOrganizacija";
import HTMLSlika from "./HTMLSlika";
import HTMLTabela from "./HTMLTabela";
import HTMLForma from "./HTMLForma";

import CSSExample from "./css_example/layout/CSSExample";
import BasicCSS from "./css_example/introduction/BasicCSS";
import CSSText from "./css_example/text/CSSText";
import CSSLayout from "./css_example/layout/CSSLayout";

import JSOsnove from "./js/JSOsnove";
import JSUsluzne from "./js/JSUsluzne";
import JSFunkcionalno from "./js/JSFunkcionalno";
import JSObjektno from "./js/JSObjektno";

import HTMLAssignment from "./html_assignments/HTMLAssignment";
import ZadatakJ01 from "./html_assignments/Zadatak_J01";
import ZadatakJ02 from "./html_assignments/Zadatak_J02";
import ZadatakJ03 from "./html_assignments/Zadatak_J03";
import ZadatakJ04 from "./html_assignments/Zadatak_J04";
import ZadatakJ05 from "./html_assignments/Zadatak_J05";
import ZadatakJ06 from "./html_assignments/Zadatak_J06";
import ZadatakJ07 from "./html_assignments/Zadatak_J07";
import ZadatakJ08 from "./html_assignments/Zadatak_J08";
import ZadatakJ09 from "./html_assignments/Zadatak_J09";
import ZadatakJ10 from "./html_assignments/Zadatak_J10";

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
    path: "/css_layout/css_example",
    element: <CSSExample />,
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
    path: "/js_osnove",
    element: <JSOsnove />,
  },
  {
    path: "/js_usluzne",
    element: <JSUsluzne />,
  },
  {
    path: "/js_funkcionalno",
    element: <JSFunkcionalno />,
  },
  {
    path: "/js_objektno",
    element: <JSObjektno />,
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
