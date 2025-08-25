// let parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [React.createElement("h1", null, "Hello World!"),
//     React.createElement("h2", null, "This is a heading!")]
//   )
// );

// import React from "react";
// import ReactDOM from "react-dom/client";

// let parent = React.createElement(
//   "div",
//   {id: "parent",},
//   [React.createElement("div", { id: "child" }, [
//     React.createElement("h1", null, "Hello World!"),
//     React.createElement("h2", null, "This is a heading!"),
//   ]) ,
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", null, "Hello World!"),
//     React.createElement("h2", null, "This is a heading!"),
//   ])]
// );

//above is bad, so enter JSX
// console.log(heading);

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

const title = (<h1 className="head">Hello from Yash Shekhar</h1>);


const HeadingComponent = ()=>(
 <div className="container">
   {title}
   <h2>Part of react component</h2>
 </div>
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
