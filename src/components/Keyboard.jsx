import "./KeyboardStyle.scss";
import { Key } from "./Key.jsx";

const FirstRowLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const SecondRowLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const ThirdRowLetters = ["Delete", "z", "x", "c", "v", "b", "n", "m", "Enter"];

export function Keyboard({ handleKeyDown }) {
  return (
    <>
      <div className="wordle-keyboard-row-first">
        {FirstRowLetters.map((letter) => (
          <Key key={letter} letter={letter} handleKeyDown={handleKeyDown} />
        ))}
      </div>
      <div className="wordle-keyboard-row-second">
        {SecondRowLetters.map((letter) => (
          <Key key={letter} letter={letter} handleKeyDown={handleKeyDown} />
        ))}
      </div>
      <div className="wordle-keyboard-row-third">
        {ThirdRowLetters.map((letter) => (
          <Key key={letter} letter={letter} handleKeyDown={handleKeyDown} />
        ))}
      </div>
    </>
  );
}
