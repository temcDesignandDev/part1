import { useState } from "react";

const Button = (props) => {
  const goodClick = () => {
    {
      props.setGood(props.good + 1);
    }
  };

  const neutralClick = () => {
    {
      props.setNeutral(props.neutral + 1);
    }
  };

  const badClick = () => {
    {
      props.setBad(props.bad + 1);
    }
  };
  return (
    <>
      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>
    </>
  );
};

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

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
      />
      <h2>Statistic</h2>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
