import { useEffect, useState } from "react";
import "./App.css";
import { pickRandomWord } from "./helpers/helpers";
import { ROWS } from "./constants/contants";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState<string[]>(new Array(ROWS).fill(""));

  const selectWord = () => setSolution(pickRandomWord);

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    selectWord();
  }, []);

  return (
    <div className="App">
      <Board guesses={guesses} />
      <Keyboard />
    </div>
  );
}

export default App;
