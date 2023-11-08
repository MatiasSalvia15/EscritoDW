import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./Home";
import CrearUsuario from "./CrearUsuario"; 

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/crear",
    element: <CrearUsuario />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </RouterProvider>,
);