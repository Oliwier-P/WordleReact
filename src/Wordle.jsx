import { LetterButton } from './components/LetterButton.jsx'
import { LetterTile } from './components/LetterTile.jsx'
import "./style.scss";

const words = ["", ""];
const currentWord = 1;

const WordsColumns = [1, 2, 3, 4, 5]
const WordsRows = [1, 2, 3, 4, 5, 6]

const FirstRowLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const SecondRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
const ThirdRowLetters = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]

export function Wordle() {

  return (
    <>
      <div className="wordle-container">
        <section id="header" className="wordle-header">
          <h1>Wordle</h1> 
        </section>

        <section id="game" className="wordle-game-words">
          {WordsRows.map((row) => (
            <div key={row} className={`wordle-tile-row`}>
              { WordsColumns.map((index, col) => (<LetterTile key={index} letter={col}/>))}
            </div>
          ))}
        </section>

        <section id="keyboard" className="wordle-keyboard">
          <div className="wordle-keyboard-row-first">
            {FirstRowLetters.map((letter) => (
              <LetterButton key={letter} letter={letter}/>
            ))}
          </div>
          <div className="wordle-keyboard-row-second">
            {SecondRowLetters.map((letter) => (
              <LetterButton key={letter} letter={letter} />
            ))}
          </div>
          <div className="wordle-keyboard-row-third">
            {ThirdRowLetters.map((letter) => (
              <LetterButton key={letter} letter={letter} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
