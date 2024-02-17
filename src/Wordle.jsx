import { useEffect, useRef, useState } from 'react';
import { LetterButton } from './components/LetterButton.jsx'
import { LetterTile } from './components/LetterTile.jsx'
import "./style.scss";

const WordsColumns = [1, 2, 3, 4, 5]
const WordsRows = [1, 2, 3, 4, 5, 6]

const FirstRowLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
const SecondRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
const ThirdRowLetters = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]

export function Wordle() {
  const [word, setWord] = useState("kiosk");  // This is the word that the user will have to guess
  const [words, setWords] = useState(["", "", "", "", "", ""]); // This is the array of words that the user is typing
  const currentIndexWord = useRef(0);

  const handleKeyPress = async (event) => {
    if(words[currentIndexWord.current].length < 5){

      words[currentIndexWord.current] += event.key;

      setWords([...words]);
    }
  }

  const handleKeyDown = (event) => {
    const { key, keyCode } = event;
    if (/^[a-zA-Z]$/.test(key)) {
      handleKeyPress(event);
    }
    if(keyCode === 13){
      handleEnter();
    } 
    if(keyCode === 8){
      handleBackspace();
    }
  };

  const handleEnter = async () => {
    if(words[currentIndexWord.current].length >= 5){
      // change to checking by every single letter
      if(words[currentIndexWord.current].toUpperCase() === word.toUpperCase()){
        console.log("You win");
      }
      if(currentIndexWord.current === 5){
        console.log("You lose");
      }
      currentIndexWord.current++;
    }
    console.log(currentIndexWord.current);
  }

  const handleBackspace = async () => {
    if(words[currentIndexWord.current].length > 0){
      words[currentIndexWord.current] = words[currentIndexWord.current].slice(0, -1);
      setWords([...words]);
    }
  
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [])

  return (
    <>
      <div className="wordle-container">
        <section id="header" className="wordle-header">
          <h1>Wordle</h1> 
        </section>

        <section id="game" className="wordle-game-words">
          {WordsRows.map((row) => (
            <div key={row} className={`wordle-tile-row`}>
              { WordsColumns.map((index, col) => (<LetterTile key={index} id={col} word={words[row-1]}/>))}
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
