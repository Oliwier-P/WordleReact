import "./DialogStyle.scss";

export function LostGameDialog({ correctWord, isDialogOpen, handleNewGame }) {
  if (!isDialogOpen) return null;

  return (
    <>
      <dialog className="game-dialog">
        <h2>The answer was:</h2>

        <div className="game-dialog-word">{correctWord}</div>
        <span>
          <a
            target="_blank"
            href={`https://www.collinsdictionary.com/dictionary/english/${correctWord}`}
          >
            What does this word mean?
          </a>
        </span>

        <button className="game-dialog-button" onClick={handleNewGame}>
          NEW GAME
        </button>
      </dialog>
    </>
  );
}
