import React from "react";
import ReactDOM from "react-dom";

/**
    @function hydrate
    @description react-dom的hydrate和unmountComponentAtNode的提取，返回render和destroy
    @at 2020-06-28
 */
function hydrate() {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const destroy = () => {
    const unmount = ReactDOM.unmountComponentAtNode(div);
    if (unmount) {
      if (div.parentNode) div.parentNode.removeChild(div);
    }
  };
  const render = (Component, injectProps) => {
    setTimeout(() => {
      ReactDOM.hydrate(<Component {...injectProps} />, div);
    });
  };

  return { render, destroy };
}

export default hydrate;

export { hydrate };
