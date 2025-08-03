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

let parent = React.createElement(
  "div",
  {id: "parent",},
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "Hello World!"),
    React.createElement("h2", null, "This is a heading!"),
  ]) ,
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", null, "Hello World!"),
    React.createElement("h2", null, "This is a heading!"),
  ])]
);

//above is bad, so enter JSX
// console.log(heading);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
