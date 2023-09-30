const ele = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", { className: "h1" }, "Hello by React"),
    React.createElement("h2", { className: "h1-2" }, "hello by react2"),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement("h1", { className: "h1" }, "Hello by React"),
    React.createElement("h2", { className: "h1-2" }, "hello by react2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);
