import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  const Course = "Half Stack application development";
  return (
    <div>
      <h1>{Course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>{props.subtitle1}</p>
      <p>{props.subtitle2}</p>
      <p>{props.subtitle3}</p>
    </div>
  );
};

const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  const suma = exercises1 + exercises2 + exercises3;
  return suma;
};

const App = () => {
  const subtitle1 = "Fundamentals of React ................ 10";
  const subtitle2 = "Using props to pass data ............... 7";
  const subtitle3 = "State of a component ................... 14";
  return (
    <div>
      <h1>
        <Header />
      </h1>
      <h2>
        <Content subtitle1={subtitle1} />
        <Content subtitle2={subtitle2} />
        <Content subtitle3={subtitle3} />
        Number of exercises .................... <Total />
      </h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
