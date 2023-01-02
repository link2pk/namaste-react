import React from "react";
import react from "react";
import reactDom from "react-dom/client";

//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const h1 = React.createElement("h1", {}, "Heading One");
// const h2 = React.createElement("h2", {}, "Heading 2");
// const h3 = React.createElement("h3", {}, "Heading Three");
// const div = React.createElement(
//   "div",
//   {
//     className: "title",
//   },
//   [h1, h2, h3]
// );

//Create the same element using JSX
const div = (
  <div className="title">
    <h1>Heading One</h1>
    <h2>Heading 2</h2>
    <h3>Heading Three</h3>
  </div>
);

const root = reactDom.createRoot(document.getElementById("root"));
root.render(div);
