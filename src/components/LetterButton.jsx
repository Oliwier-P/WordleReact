export function LetterButton({ letter }) {
  return (
    <>
        <button className={`wordle-button${letter == "ENTER" | letter == "BACKSPACE" ? "-special" : ""}`}><b>{letter}</b></button>
    </>
  )
}
