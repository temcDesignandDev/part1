import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);

    if (updatedVotes[selected] > updatedVotes[mostVoted])
      setMostVoted(selected);
  };

  const handleNextAnecdote = () => {
    const newNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(newNumber);
  };

  return (
    <>
      <div>
        <h2>Vote for the one you like the most</h2>
        <div>{anecdotes[selected]}</div>
        <p>has {votes[selected]} votes</p>
        <button onClick={() => handleVote()}>Vote</button>
        <button onClick={() => handleNextAnecdote()}>Next Anecdote</button>
      </div>
      <hr />
      <div>
        The anecdote with the most votes is: {anecdotes[mostVoted]} He currently
        has {votes[mostVoted]} votes{" "}
      </div>
    </>
  );
};

export default App;
