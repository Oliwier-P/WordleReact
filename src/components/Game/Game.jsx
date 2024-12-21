import "./GameStyle.scss";

import { AlertBox } from "../AlertBox/AlertBox";
import { Board } from "../Board/Board";
import { Keyboard } from "../Keyboard/Keyboard";

export function Game({ errorMessage, words, handleKeyDown, display }) {
  return (
    <div
      className="game-container"
      style={{ display: `${display == "game" ? "flex" : "none"}` }}
    >
      <AlertBox errorMessage={errorMessage} />
      <AlertBox errorMessage={errorMessage} />

      <section id="game" className="wordle-game-board">
        <Board words={words} />
      </section>

      <section id="keyboard" className="wordle-keyboard">
        <Keyboard handleKeyDown={handleKeyDown} />
      </section>
    </div>
  );
}
