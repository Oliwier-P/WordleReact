

export function LostGameDialog({correctWord, isDialogOpen, handleNewGame}) {

  if (!isDialogOpen) return null;

  return (
    <>
        <dialog className="game-dialog">
          <h2>The answer was:</h2>

          <div className="game-dialog-word">{correctWord}</div>
          <span href="">What does this word mean?</span>

          <button className="game-dialog-button" onClick={handleNewGame}>NEW GAME</button>
        </dialog>
    </>
  )
}
