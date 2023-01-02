import react from "react";
import reactDom from "react-dom/client";

const heading = react.createElement("h2", {}, "Hello World");
const heading2 = react.createElement("h3", {}, "this is heading type 3");
const div = react.createElement(
  "div",
  {
    className: "test-div",
  },
  [heading, heading2]
);
const root = reactDom.createRoot(document.getElementById("root"));
root.render(div);
