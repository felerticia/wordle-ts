import "./Keyboard.css";

const rows = ["QWERTYUIOP", "ASDFGHJKL+", "ZXCVBNM-"];

const Keyboard = () => {
  return (
    <div className="keyboard">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="keyboard__row">
          {row.split("").map((letter, letterIdx) => (
            <div key={letterIdx} className="keyboard__letter">
              {letter === "+" ? "Enter" : letter === "-" ? "Delete" : letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
