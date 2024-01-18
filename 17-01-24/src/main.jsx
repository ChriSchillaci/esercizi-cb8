import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./routes/page404";
import Home from "./routes/home";
import Product from "./routes/product";
import Contacts from "./routes/contacts";
import About from "./routes/about";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/", // Rotta statica
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "products/:productId", // Rotta dinamica
    element: <Product />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
