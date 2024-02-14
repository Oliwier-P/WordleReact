import { useState } from 'react'
import { LetterButton } from './components/LetterButton.jsx'
import "./style.scss";

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
          <div>Game</div>
        </section>

        <section id="keyboard" className="wordle-keyboard">
          <div className="wordle-keyboard-row">
            {FirstRowLetters.map((letter) => (
              <LetterButton key={letter} letter={letter} />
            ))}
          </div>
          <div className="wordle-keyboard-second-row">
            {SecondRowLetters.map((letter) => (
              <LetterButton key={letter} letter={letter} />
            ))}
          </div>
          <div className="wordle-keyboard-row">
            {ThirdRowLetters.map((letter) => (
              <LetterButton key={letter} letter={letter} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
