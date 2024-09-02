import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import App from "./App";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: ["Click me!"],
// };
const anotherUser = "sajal";

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit google
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
