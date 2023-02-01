//Using react to manipulate dom
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import CartPage from "./components/CartPage";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantPage from "./components/RestaurantPage";
import Login from "./components/Login";
import Profile from "./components/Profile";

//Making an app layout which contains header , body and footer
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantPage />,
      },
      {
        path: "/login/",
        element: <Login />,
      },
    ],
  },
]);
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={Router} />);
