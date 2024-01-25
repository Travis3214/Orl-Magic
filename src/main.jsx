import React from "react";
import ReactDOM from "react-dom/client";

// Import custom css
import "./index.css";

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import my App
import App from "./App";

// Import all or pages to route them
import Home from "./pages/home";
import Error from "./pages/Error";
import Roster from "./pages/Roster";
import Schedule from "./pages/Schedule";
import Login from "./pages/Login";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Roster",
        element: <Roster />,
      },
      {
        path: "/Schedule",
        element: <Schedule />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
