import { Key } from './Key.jsx'

const FirstRowLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const SecondRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
const ThirdRowLetters = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]

export function Keyboard() {
  return (
    <>
        <div className="wordle-keyboard-row-first">
            {FirstRowLetters.map((letter) => (
                <Key key={letter} letter={letter} />
            ))}
        </div>
        <div className="wordle-keyboard-row-second">
            {SecondRowLetters.map((letter) => (
                <Key key={letter} letter={letter} />
            ))}
        </div>
        <div className="wordle-keyboard-row-third">
            {ThirdRowLetters.map((letter) => (
                <Key key={letter} letter={letter} />
            ))}
        </div>
    </>
  )
}
