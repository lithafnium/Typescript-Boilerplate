import React from "react";
import Home from "@app/pages/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@app/shared/utils/routes";

const router = createBrowserRouter([{ path: routes.HOME, element: <Home /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
