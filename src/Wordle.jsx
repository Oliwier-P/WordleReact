import { useEffect, useRef, useState } from 'react';
import { Board } from './components/Board.jsx'
import { Keyboard } from './components/Keyboard.jsx'
import "./style.scss";

export function Wordle() {
  const [word, setWord] = useState("kiosk");  // This is the word that the user will have to guess
  const [wordsAttempts, setwordsAttempts] = useState(["", "", "", "", "", ""]); // This is the array of wordsAttempts that the user is typing
  const currentIndexWordAttempt = useRef(0);

  const handleKeyPress = async (event) => {
    if(wordsAttempts[currentIndexWordAttempt.current].length < 5){

      wordsAttempts[currentIndexWordAttempt.current] += event.key;

      setwordsAttempts([...wordsAttempts]);
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
    if(wordsAttempts[currentIndexWordAttempt.current].length >= 5){
      handleLetterAnimation();
      if(wordsAttempts[currentIndexWordAttempt.current].toUpperCase() === word.toUpperCase()){
        console.log("You win");
        return;
      }
      if(currentIndexWordAttempt.current === 5){
        console.log("You lose");
        return;
      }
      currentIndexWordAttempt.current++;
    }
  }

  const handleBackspace = async () => {
    if(wordsAttempts[currentIndexWordAttempt.current].length > 0){
      wordsAttempts[currentIndexWordAttempt.current] = wordsAttempts[currentIndexWordAttempt.current].slice(0, -1);
      setwordsAttempts([...wordsAttempts]);
    }
  }

  const handleTileLayout = (id, color) => {
    const wordTiles = document.querySelectorAll('.wordle-tile-row')[currentIndexWordAttempt.current].children; // The tiles of the word that player wrote - wordTile[0] is the first letter, ...

    setTimeout(() => {
      wordTiles[id].classList.add('wordle-tile-flip');
    }, 200*id);

    setTimeout(() => {
      wordTiles[id].classList.remove('wordle-tile-flip');
      wordTiles[id].style.backgroundColor = color;
      wordTiles[id].style.borderColor = color;
      wordTiles[id].style.color = 'white';
    }, (200*id)+400);
  }

  const handleLetterAnimation = async () => {
    let tempWord = word;
    const wordAttempt = wordsAttempts[currentIndexWordAttempt.current];  // The word that player wrote
    const arrayCorrectGuessedLetters = [];
    
    for (let i = 0; i < word.length; i++) {
      if (wordAttempt[i].toUpperCase() === word[i].toUpperCase()) {
        tempWord = tempWord.replace(wordAttempt[i], '');
        arrayCorrectGuessedLetters.push(i);
      }
    }

    for (let i = 0; i < word.length; i++) {
      if(arrayCorrectGuessedLetters.includes(i)){
        handleTileLayout(i, '#68AC61');
      } else if(tempWord.toUpperCase().includes(wordAttempt[i].toUpperCase())){ 
        tempWord = tempWord.replace(wordAttempt[i], '');
        handleTileLayout(i, '#CBB550')
      } else {
        handleTileLayout(i, '#5E5E5E');
      }
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

        <section id="game" className="wordle-game-board">
          <Board wordsAttempts={wordsAttempts}/>
        </section>

        <section id="keyboard" className="wordle-keyboard">
          <Keyboard />
        </section>
      </div>
    </>
  )
}
