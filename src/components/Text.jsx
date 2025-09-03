import React from "react";
function Text({as="span", children, className, ...props}){
    return React.createElement(as, {className, ...props}, children)
}

export default Text