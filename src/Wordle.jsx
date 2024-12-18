import { useEffect, useRef, useState } from "react";

import { RandomWord } from "./RandomWord.js";
import wordsArray from "./words.json";

import { Board } from "./components/Board.jsx";
import { Keyboard } from "./components/Keyboard.jsx";
import { LostGameDialog } from "./components/LostGameDialog.jsx";
import { WonGameDialog } from "./components/WonGameDialog.jsx";

import "./style.scss";
import { Header } from "./components/Header.jsx";
import { AlertBox } from "./components/AlertBox.jsx";

const word = RandomWord();

export function Wordle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [correctWord, setcorrectWord] = useState("");
  const [words, setWords] = useState(["", "", "", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  const [gameStatus, setGameStatus] = useState({
    gameOver: false,
    gameWon: false,
  });

  const handleLetterAnimation = (wordColorsArray) => {
    const wordTiles = document.querySelectorAll(".wordle-tile-row")[wordIndex].children;

    wordColorsArray.map((color, index) => {
      wordTiles[index].style.background = color;
      wordTiles[index].style.border = color;
      wordTiles[index].style.color = "white";
    });
  };

  const handleKeyboardAnimation = (letter, status) => {
    const button = document.getElementById(`key-${letter}`);
    const computedStyles = window.getComputedStyle(button);

    // computedStyle returns rgb(104, 172, 97) instead of #68AC61 (because HEX was empty)

    if (status === "correct" || computedStyles === "rgb(104, 172, 97)") {
      button.style.background = "#68AC61";
      button.style.color = "white";
    } else if (status === "missed" && button.style.background !== "rgb(104, 172, 97)") {
      button.style.background = "#CBB550";
      button.style.color = "white";
    } else if (
      status === "incorrect" &&
      button.style.background !== "rgb(104, 172, 97)" &&
      button.style.background !== "rgb(203, 181, 80)"
    ) {
      button.style.background = "#5E5E5E";
      button.style.color = "white";
    }
  };

  const handleCheckLetters = () => {
    let tempCorrectWord = correctWord;
    let tempWord = words[wordIndex];
    const wordColorsArray = [];

    words[wordIndex].split("").forEach((letter, index) => {
      if (letter === correctWord[index]) {
        tempCorrectWord = tempCorrectWord.replace(letter, "");
        tempWord = tempWord.replace(letter, "");

        wordColorsArray.push("#68AC61");

        handleKeyboardAnimation(letter, "correct");
      } else {
        wordColorsArray.push("");
      }
    });

    tempWord.split("").forEach((letter) => {
      if (tempCorrectWord.includes(letter)) {
        tempCorrectWord = tempCorrectWord.replace(letter, "");
        const index = wordColorsArray.findIndex((color) => color === "");
        wordColorsArray[index] = "#CBB550";
        handleKeyboardAnimation(letter, "missed");
      } else {
        const index = wordColorsArray.findIndex((color) => color === "");
        wordColorsArray[index] = "#5E5E5E";
        handleKeyboardAnimation(letter, "incorrect");
      }
    });

    handleLetterAnimation(wordColorsArray);
  };

  const handleLetter = (letter) => {
    if (words[wordIndex].length < 5) {
      setWords((words) => {
        const newWords = [...words];
        newWords[wordIndex] += letter.toLowerCase();
        return newWords;
      });
    }
  };

  const handleEnter = () => {
    if (words[wordIndex].length < 5) {
      setErrorMessage(() => "Too short");
    } else {
      handleCheckWord();
    }
  };

  const handleBackspace = () => {
    if (words[wordIndex].length > 0) {
      setWords((words) => {
        const newWords = [...words];
        newWords[wordIndex] = newWords[wordIndex].slice(0, -1);
        return newWords;
      });
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    if (/^[a-zA-Z]$/.test(key)) {
      handleLetter(key);
    }
    if (key === "Enter") {
      handleEnter();
    }
    if (key === "Delete" || key === "Backspace") {
      handleBackspace();
    }
  };

  const handleCheckWord = () => {
    if (wordIndex >= 5) {
      handleCheckLetters();
      setTimeout(() => {
        setGameStatus({
          gameOver: true,
          gameWon: false,
        });
      }, 1000);
    } else if (words[wordIndex].toLocaleLowerCase() === correctWord.toLowerCase()) {
      handleLetterAnimation(["#68AC61", "#68AC61", "#68AC61", "#68AC61", "#68AC61"]);
      setTimeout(() => {
        setGameStatus({
          gameOver: true,
          gameWon: true,
        });
      }, 1000);
    } else if (!wordsArray.includes(words[wordIndex].toLowerCase())) {
      setErrorMessage(() => "Word not found");
    } else {
      handleCheckLetters();
      setWordIndex((wordIndex) => wordIndex + 1);
    }
  };

  const handleNewGame = () => {
    setWords(["", "", "", "", "", ""]);
    setWordIndex(0);
    setGameStatus({
      gameOver: false,
      gameWon: false,
    });
    RandomWord().then((word) => {
      setcorrectWord(word);
    });

    const wordTiles = document.querySelectorAll(".wordle-tile");

    wordTiles.forEach((tile) => {
      tile.style.background = "white";
      tile.style.border = "3px solid #D3D7DA";
      tile.style.color = "black";
    });

    const keyboardTiles = document.querySelectorAll('[id^="key-"]');

    keyboardTiles.forEach((letter) => {
      letter.style.backgroundColor = "#d3d7da";
      letter.style.color = "black";
    });
  };

  useEffect(() => {
    RandomWord().then((word) => {
      setcorrectWord(word);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (errorMessage === "") return;

    const alert_box = document.getElementById("alert_box");
    alert_box.style.display = "block";

    setTimeout(() => {
      alert_box.style.display = "none";
      setErrorMessage("");
    }, 1500);
  }, [errorMessage]);

  return (
    <>
      {gameStatus.gameWon ? (
        <WonGameDialog isDialogOpen={gameStatus.gameOver} handleNewGame={handleNewGame} />
      ) : (
        <LostGameDialog
          isDialogOpen={gameStatus.gameOver}
          correctWord={correctWord}
          handleNewGame={handleNewGame}
        />
      )}
      <div className="wordle-container">
        <Header />

        <AlertBox errorMessage={errorMessage} />

        <section id="game" className="wordle-game-board">
          <Board words={words} />
        </section>

        <section id="keyboard" className="wordle-keyboard">
          <Keyboard handleKeyDown={handleKeyDown} />
        </section>
      </div>
    </>
  );
}
