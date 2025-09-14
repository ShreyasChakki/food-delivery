import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu"

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },{
        path: "restaurant/:resid",
        element: <RestaurentMenu />,
      },
    ],
  },
      
  {
    path: "/hello",
    element: <h1>Hello, World!!</h1>,
  },
]);

// Replace direct rendering with RouterProvider
root.render(<RouterProvider router={appRouter} />);
