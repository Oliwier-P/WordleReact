import { useEffect, useState } from "react";

import "./style.scss";

import { RandomWord } from "./RandomWord.js";
import wordsArray from "./words.json";

import { Header } from "./components/Header/Header.jsx";
import { LostGameDialog } from "./components/Dialog/LostGameDialog.jsx";
import { WonGameDialog } from "./components/Dialog/WonGameDialog.jsx";

import { Game } from "./components/Game/Game.jsx";
import { Tutorial } from "./components/Tutorial/Tutorial.jsx";
import { Settings } from "./components/Settings/Settings.jsx";

export function Wordle() {
  const [wordIndex, setWordIndex] = useState(0);
  const [correctWord, setcorrectWord] = useState("");
  const [words, setWords] = useState(["", "", "", "", "", ""]);

  const [errorMessage, setErrorMessage] = useState("");
  const [gameStatus, setGameStatus] = useState({
    gameOver: false,
    gameWon: false,
    window: "game",
  });

  const [darkmode, setDarkmode] = useState(
    localStorage.getItem("darkmode") === "active" ? true : false
  );
  const [contrast, setContrast] = useState(
    localStorage.getItem("contrast") === "active" ? true : false
  );

  const colors = {
    primary: "var(--primary-color)",
    color: "var(--base-font-color)",
    tile_background: "none",
  };

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

    button.style.color = "var(--guessed-font-color)";

    switch (status) {
      case "correct":
        button.style.background = "var(--guessed-color)";
        break;
      case "missed":
        button.style.background = "var(--almost-guessed-color)";
        break;
      case "incorrect":
        button.style.background = "var(--incorrect)";
        break;
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

        wordColorsArray.push("var(--guessed-color)");

        handleKeyboardAnimation(letter, "correct");
      } else {
        wordColorsArray.push("");
      }
    });

    tempWord.split("").forEach((letter) => {
      if (tempCorrectWord.includes(letter)) {
        tempCorrectWord = tempCorrectWord.replace(letter, "");
        const index = wordColorsArray.findIndex((color) => color === "");
        wordColorsArray[index] = "var(--almost-guessed-color)";
        handleKeyboardAnimation(letter, "missed");
      } else {
        const index = wordColorsArray.findIndex((color) => color === "");
        wordColorsArray[index] = "var(--incorrect)";
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
        setGameStatus((prev) => ({
          ...prev,
          gameOver: true,
          gameWon: false,
        }));
      }, 1000);
    } else if (words[wordIndex].toLocaleLowerCase() === correctWord.toLowerCase()) {
      handleLetterAnimation(["#68AC61", "#68AC61", "#68AC61", "#68AC61", "#68AC61"]);
      setTimeout(() => {
        setGameStatus((prev) => ({
          ...prev,
          gameOver: true,
          gameWon: true,
        }));
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
    setGameStatus((prev) => ({
      ...prev,
      gameOver: false,
      gameWon: false,
    }));
    RandomWord().then((word) => {
      setcorrectWord(word);
    });

    const wordTiles = document.querySelectorAll(".wordle-tile");

    wordTiles.forEach((tile) => {
      tile.style.background = colors.tile_background;
      tile.style.border = `3px solid ${colors.primary}`;
      tile.style.color = colors.color;
    });

    const keyboardTiles = document.querySelectorAll('[id^="key-"]');

    keyboardTiles.forEach((letter) => {
      letter.style.backgroundColor = colors.primary;
      letter.style.color = colors.color;
    });
  };

  const handleDarkmode = () => {
    if (!darkmode) {
      // enable darkmode
      localStorage.setItem("darkmode", "active");
      setDarkmode(() => true);
    } else {
      // disable darkmode
      localStorage.setItem("darkmode", "");
      setDarkmode(() => false);
    }
  };

  const handleContrastMode = () => {
    if (!contrast) {
      // enable contrast mode
      localStorage.setItem("contrast", "active");
      setContrast(() => true);
    } else {
      // disable contrast mode
      localStorage.setItem("contrast", "");
      setContrast(() => false);
    }
  };

  const handleExit = (status) => {
    switch (status) {
      case "tutorial":
        if (gameStatus.window == "tutorial") {
          setGameStatus((prev) => ({ ...prev, window: "game" }));
          return;
        }
        setGameStatus((prev) => ({ ...prev, window: "tutorial" }));
        break;
      case "settings":
        if (gameStatus.window == "settings") {
          setGameStatus((prev) => ({ ...prev, window: "game" }));
          return;
        }
        setGameStatus((prev) => ({ ...prev, window: "settings" }));
        break;
      case "game":
        setGameStatus((prev) => ({ ...prev, window: "game" }));
        break;
      default:
        break;
    }
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

  useEffect(() => {
    console.log(correctWord);
  }, [correctWord]);

  return (
    <>
      <div
        className={`
          ${darkmode ? "darkmode" : ""} 
          ${contrast ? "contrast" : ""} 
          main-container`}
      >
        {gameStatus.gameWon ? (
          <WonGameDialog
            isDialogOpen={gameStatus.gameOver}
            handleNewGame={handleNewGame}
          />
        ) : (
          <LostGameDialog
            isDialogOpen={gameStatus.gameOver}
            correctWord={correctWord}
            handleNewGame={handleNewGame}
          />
        )}

        <div className="wordle-container">
          <Header darkmode={darkmode} handleExit={handleExit} />

          <Tutorial handleExit={handleExit} display={gameStatus.window} />

          <Settings
            handleExit={handleExit}
            handleDarkmode={handleDarkmode}
            handleContrastMode={handleContrastMode}
            display={gameStatus.window}
          />

          <Game
            words={words}
            errorMessage={errorMessage}
            handleKeyDown={handleKeyDown}
            display={gameStatus.window}
          />
        </div>
      </div>
    </>
  );
}
