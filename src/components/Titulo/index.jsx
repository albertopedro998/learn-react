import React from "react";

function Titulo({ as = "h1", className, children, ...props }) {
  const styles = [
    {
      tag: "h1",
      className: "text-blue-500 text-5xl md:text-9xl font-bold",
    },
    {
      tag: "h2",
      className: "text-blue-500 text-3xl md:text-7xl font-bold",
    },
    {
      tag: "h3",
      className: "text-blue-500 text-lg md:text-3xl font-bold",
    },
  ];
  styles
    .filter((elem) => elem.tag.includes(as))
    .map((elem) => (className += elem.className));
  return React.createElement(as, { className, ...props }, children);
}

export default Titulo;
