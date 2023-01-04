import React from "react";
import ReactDOM from "react-dom/client";
//Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const h1 = React.createElement(
//   "h1",
//   {
//     id: "h1",
//     key: "h1key",
//   },
//   "Heading Oneee"
// );

// console.log(h1);
// const h2 = React.createElement(
//   "h2",
//   {
//     key: "h2key",
//   },
//   "Heading 2"
// );
// const h3 = React.createElement(
//   "h3",
//   {
//     key: "h3key",
//   },
//   "Heading Three"
// );
// const div = React.createElement(
//   "div",
//   {
//     className: "title",
//   },
//   [h1, h2, h3]
// );

//Create the same element using JSX
// const div = (
//   <div className="title">
//     <h1>Heading One</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading Three</h3>
//   </div>
// );

//Create a functional component of the same with JSX
// const Header= ()=> {
//   return (
//     <div className="title">
//       <h1>Heading One</h1>
//       <h2>Heading 2</h2>
//       <h3>Heading Three</h3>
//     </div>
//   );
// }

// const h1class = "green";
//Pass attributes into the tag in JSX
// const Header = () => {
//   return (
//     <div>
//       <h1 className={h1class}>functional component h11</h1>
//       <h2>Heading 2</h2>
//       <h3>Heading Three</h3>
//     </div>
//   );
// };

// component composition(Add one component inside other)
const mainheading = "Title";
const Title = () => {
  return <h1>{mainheading}</h1>;
};

const Header = () => {
  return (
    <div>
      <Title /> {/*component Title inside Header component*/}
      <h2>heading two</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header></Header>);
