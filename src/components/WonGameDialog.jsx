

export function WonGameDialog({isDialogOpen, handleNewGame}) {

  if (!isDialogOpen) return null;

  return (
    <>
        <dialog className="game-dialog">
          <h2>You Win!</h2>

          <button className="game-dialog-button" onClick={handleNewGame}>NEW GAME</button>
        </dialog>
    </>
  )
}
