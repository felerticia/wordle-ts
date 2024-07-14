import { useEffect, useState } from "react";
import "./App.css";
import { pickRandomWord } from "./helpers/helpers";
import { ROWS } from "./constants/contants";
import Board from "./components/Board/Board";

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState<string[]>(new Array(ROWS).fill(""));

  const selectWord = () => setSolution(pickRandomWord);

  useEffect(() => {
    selectWord();
  }, []);

  return (
    <div className="App">
      <Board guesses={guesses} />
    </div>
  );
}

export default App;
