/** @format */

import React, { cloneElement } from 'react';
import ReactDOM from 'react-dom';

function mount() {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const render = (Component, injectProps) => {
    setTimeout(() => {
      ReactDOM.render(
        cloneElement(Component, {
          ...Component.props,
          ...injectProps,
        }),
        div
      );
    });    
  };
  
  const destroy = () => {
    const unmount = ReactDOM.unmountComponentAtNode(div);
    if (unmount) {
      if (div.parentNode) div.parentNode.removeChild(div);
    }
  };

  return { render, destroy };
}

export default mount;
