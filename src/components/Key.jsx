export function Key({ letter }) {
  return (
    <>
        <button className={`wordle-button${letter == "ENTER" | letter == "BACKSPACE" ? "-special" : ""}`}>
          <b>{letter}</b>
        </button>
    </>
  )
}
