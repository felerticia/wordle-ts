import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { pickRandomWord } from "./helpers/helpers";
import { ROWS } from "./constants/contants";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState<string[]>(new Array(ROWS).fill(""));
  const [currentWord, setCurrentWord] = useState("");
  const [currentRow, setCurrentRow] = useState(0);

  const selectWord = () => setSolution(pickRandomWord);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "backspace") {
        if (currentWord.length) {
          setCurrentWord((currentWord) => currentWord.slice(0, -1));
        }
        return;
      }

      if (currentWord.length < 5 && key === "enter") {
        return;
      }

      if (currentWord.length === 5) {
        if (key !== "enter") {
          return;
        } else {
          setGuesses((guesses) =>
            guesses.map((guess, idx) =>
              idx === currentRow ? currentWord : guess
            )
          );
          setCurrentRow((currentRow) => currentRow + 1);
          setCurrentWord("");
          return;
        }
      }

      if (key >= "a" && key <= "z") {
        setCurrentWord((currentWord) => currentWord + key.toUpperCase());
        return;
      }
    },
    [currentWord, currentRow]
  );

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
