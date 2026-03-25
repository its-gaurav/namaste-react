import React from "react";
import ReactDOM from "react-dom/client";

// Creating a React element ==> This is just an object ==> On rendering on DOM, it becomes an http element
const heading = React.createElement("h1",
     {
        id: "heading"
    }, 
    "Namaste React !"
);

console.log(heading);
// Creating JSX object
// JSX ==> Babel transpiles it to React.createElement ==> React Element-JS object ==> HTMLElement(render)  
const jsxHeading  = <h1 id="heading" className="heading"> 
Namaste React Using JSX! </h1>
console.log(jsxHeading)

// React Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}; 

console.log(<HeadingComponent />)

// Can also be written as
const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>; 


// Creating a root in DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

