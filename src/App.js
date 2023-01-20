//Using react to manipulate dom
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//Making an app layout which contains header , body and footer
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<AppLayout />);
