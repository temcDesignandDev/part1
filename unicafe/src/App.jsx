import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <p>
      {props.text}: {props.value}
    </p>
  );
};

const Statistic = (props) => {
  return (
    <>
      {props.good + props.neutral + props.bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <p>Total: {props.good + props.neutral + props.bad}</p>
          <p>
            Average:{" "}
            {(props.good - props.bad) /
              (props.good + props.neutral + props.bad)}
          </p>
          <p>
            Positive:{" "}
            {(props.good * 100) / (props.good + props.neutral + props.bad)}
          </p>
        </div>
      )}
    </>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    console.log("Good clickeado");
    setGood(good + 1);
  };

  const neutralClick = () => {
    console.log("Neutral clickeado");
    setNeutral(neutral + 1);
  };

  const badClick = () => {
    console.log("Bad clickeado");
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give FeedBack</h1>
      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>
      <h2>Statistic</h2>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
