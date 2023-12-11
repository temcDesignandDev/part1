import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={() => props.click(props.name)}>{props.name}</button>
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
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
          <StatisticLine
            text="total"
            value={props.good + props.neutral + props.bad}
          />
          <StatisticLine
            text="Average"
            value={
              (props.good - props.bad) /
              (props.good + props.neutral + props.bad)
            }
          />
          <StatisticLine
            text="Positive"
            value={
              (props.good * 100) / (props.good + props.neutral + props.bad)
            }
          />
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

  const Click = (typeButton) => {
    console.log("hola", typeButton);
    typeButton === "Good" && setGood(good + 1);
    typeButton === "Neutral" && setNeutral(neutral + 1);
    typeButton === "Bad" && setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button name="Good" click={Click} />
      <Button name="Neutral" click={Click} />
      <Button name="Bad" click={Click} />
      <h2>Statistic</h2>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
