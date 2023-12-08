import { useState } from "react";

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
      <p>Good {good}</p>
      <p>Neutal {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  );
};

export default App;
