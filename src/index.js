//Create a react app from scratch.
var React = require("react");
var ReactDom = require("react-dom");
//It should display a h1 heading.
ReactDom.render(<h1>Hello World</h1>, document.getElementById("root"));
//It should display an unordered list (bullet points).
ReactDom.render(
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Chicken</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should contain 3 list elements.
