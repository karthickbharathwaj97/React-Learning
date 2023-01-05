//Using react to manipulate dom
import React from "react";
import ReactDOM from "react-dom/client";
import { FaUserCircle } from "react-icons/fa";
import "./app.css";
import Logo from "./assets/logo/Logo.gif";
const h1Element = React.createElement(
  "h1",
  { id: "Container", key: 1 },
  "Hello Guys"
);
const h2Element = React.createElement(
  "h2",
  { id: "Container", key: 2 },
  "This is H11"
);
const hello = (
  <div key="3">
    <h1>This is jsx</h1>
  </div>
);
const SomeComponent = () => {
  return <div>hello functional component</div>;
};
console.log(hello);
// const divElement = React.createElement("div", {}, [
//   h1Element,
//   h2Element,
//   hello,
//   <SomeComponent key="4" />,
// ]);
//Creating a nested header element.

const divElement = React.createElement(
  "div",
  { className: "title" },
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
    React.createElement("h3", {}, "Hello H3"),
  ])
);
//creating same elements using jsx
const TitleElement = (
  <div>
    <h1>Hello H1</h1>
    <h2>Hello H2</h2>
    <h3>Hello H3</h3>
  </div>
);
//creating a functional component of the same above in JSX

const TitleFC = ({ children }) => <div>{children}</div>;
//Composition components
//passing child components
//using a element inside the component like this {TitleElement}
//using a component inside a functional component like this <SomeComponent/> and SomeComponent()
const NewFC = () => (
  <div>
    <TitleFC>
      <SomeComponent />
      {SomeComponent()}
      <div>
        {TitleElement}
        <h1>This is a child of Title FC</h1>
      </div>
    </TitleFC>
  </div>
);
//Creating a header component

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <img
          className="logo"
          src={require("./assets/logo/Logo1.jpg")}
          alt="logo"
        />
        <input type="text" placeholder="Search Bar" />
        <FaUserCircle size={50} onClick={() => {}} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
console.log(root);
//root.render(TitleElement);
//root.render(<NewFC />);
root.render(<Header />);
//You can call the component as a functions because it is a functions
//root.render(<SomeComponent />);
