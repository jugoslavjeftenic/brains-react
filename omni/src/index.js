import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HW from "./HW";
import HTMLTekst from "./HTMLTekst";
import CSSLayout from "./css_example/layout/CSSLayout";
import Osnove from "./js/Osnove";
import CSSText from "./css_example/text/CSSText";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Usluzne from "./js/Usluzne";
import BasicCSS from "./css_example/introduction/BasicCSS";
import CSSExample from "./css_example/layout/CSSExample";
import HTMLAssignment from "./html_assignments/HTMLAssignment";
import Zadatak_J1 from "./html_assignments/Zadatak_J1";
import Zadatak_J2 from "./html_assignments/Zadatak_J2";
import Zadatak_J3 from "./html_assignments/Zadatak_J3";
import HTMLOrganizacija from "./HTMLOrganizacija";
import HTMLSlika from "./HTMLSlika";
import HTMLForma from "./HTMLForma";
import Funkcionalno from "./js/Funkcionalno";
import Objektno from "./js/Objektno";
import JSV from "./js_assignments/JSV";
import JSV1 from "./js_assignments/JSV1";
import JSV2 from "./js_assignments/JSV2";
import JSV3 from "./js_assignments/JSV3";
import JSV4 from "./js_assignments/JSV4";
import JSV5 from "./js_assignments/JSV5";
import JSV6 from "./js_assignments/JSV6";
import JSV7 from "./js_assignments/JSV7";
import JSV8 from "./js_assignments/JSV8";
import JSV9 from "./js_assignments/JSV9";
import JSV10 from "./js_assignments/JSV10";
import Zadatak_J4 from "./html_assignments/Zadatak_J4";
import Zadatak_J5 from "./html_assignments/Zadatak_J5";
import Zadatak_J6 from "./html_assignments/Zadatak_J6";
import HTMLTabela from "./HTMLTabela";
import Zadatak_J7 from "./html_assignments/Zadatak_J7";
import Zadatak_J8 from "./html_assignments/Zadatak_J8";
import Zadatak_J9 from "./html_assignments/Zadatak_J9";
import CSSExample_ListMainView from "./css_example/layout/CSSExample_ListMainView";
import CSSExample_Dashboard from "./css_example/layout/CSSExampla_Dashboard";
import JSXOsnove from "./jsx_examples/Osnove";
import Stopwatch1 from "./jsx_examples/Stopwatch1";
import HooksExample from "./jsx_examples/Hooks";
import ConditionalExample from "./jsx_examples/Conditional";
import EventsExample from "./jsx_examples/Events";
import FetchExample from "./jsx_examples/Fetch";
import ListsExample from "./jsx_examples/Lists";
import Stopwatch2 from "./jsx_examples/Stopwatch2";

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
    path: "/js_osnove",
    element: <Osnove />,
  },
  {
    path: "/js_usluzne",
    element: <Usluzne />,
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
    path: "/html_form",
    element: <HTMLForma />,
  },
  {
    path: "/html_table",
    element: <HTMLTabela />,
  },
  {
    path: "/css_layout/css_example",
    element: <CSSExample />,
  }, 
  {
    path: "/css_layout/css_list_view_example",
    element: <CSSExample_ListMainView/>
  },
  {
    path: "/css_layout/css_dashboard",
    element: <CSSExample_Dashboard/>
  },
  {
    path: "/html_assignment",
    element: <HTMLAssignment />,
  },
  {
    path: "/html_assignment/zad1",
    element: <Zadatak_J1 />,
  },
  {
    path: "/html_assignment/zad2",
    element: <Zadatak_J2 />,
  },
  {
    path: "/html_assignment/zad3",
    element: <Zadatak_J3 />,
  },
  {
    path: "/html_assignment/zad4",
    element: <Zadatak_J4 />,
  },
  {
    path: "/html_assignment/zad5",
    element: <Zadatak_J5 />,
  },
  {
    path: "/html_assignment/zad6",
    element: <Zadatak_J6 />,
  },
  {
    path: "/html_assignment/zad7",
    element: <Zadatak_J7 />,
  },
  {
    path: "/html_assignment/zad8",
    element: <Zadatak_J8 />,
  },
  {
    path: "/html_assignment/zad9",
    element: <Zadatak_J9 />,
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
    path: "/js_assignments",
    element: <JSV />,
  },
  {
    path: "/js_assignments/z1",
    element: <JSV1 />,
  },
  {
    path: "/js_assignments/z2",
    element: <JSV2 />,
  },
  {
    path: "/js_assignments/z3",
    element: <JSV3 />,
  },
  {
    path: "/js_assignments/z4",
    element: <JSV4 />,
  },
  {
    path: "/js_assignments/z5",
    element: <JSV5 />,
  },
  {
    path: "/js_assignments/z6",
    element: <JSV6 />,
  },
  {
    path: "/js_assignments/z7",
    element: <JSV7 />,
  },
  {
    path: "/js_assignments/z8",
    element: <JSV8 />,
  },
  {
    path: "/js_assignments/z9",
    element: <JSV9 />,
  },
  {
    path: "/js_assignments/z10",
    element: <JSV10 />,
  },
  {
    path: "jsx/osnove",
    element: <JSXOsnove/>
  },
  {
    path: "jsx/stopwatch1",
    element: <Stopwatch1/>
  },
  {
    path: "jsx/hooks",
    element: <HooksExample/>
  },
  {
    path: "jsx/conditional",
    element: <ConditionalExample/>
  },
  {
    path: "jsx/events",
    element: <EventsExample/>
  },
  {
    path: "jsx/lists",
    element: <ListsExample/>
  },
  {
    path: "jsx/fetch",
    element: <FetchExample/>
  },
  {
    path: "jsx/stopwatch2",
    element: <Stopwatch2/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
