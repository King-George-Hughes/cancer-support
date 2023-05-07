import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { About, Contact, GetInvolved, Team, Event, Gallery } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/get_involved",
    element: <GetInvolved />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
