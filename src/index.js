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

const Content = () => {
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <p>
        {part1} ................
        {exercises1}
      </p>
      <p>
        {part2} ................
        {exercises2}
      </p>
      <p>
        {part3} ...................
        {exercises3}
      </p>
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
  return (
    <div>
      <h1>
        <Header />
      </h1>
      <h2>
        <Content />
        Number of exercises .................... <Total />
      </h2>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
