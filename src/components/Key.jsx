export function Key({ letter, handleKeyDown }) {
  return (
    <>
        <button 
          id={`key-${letter}`}
          className={`wordle-button${letter == "ENTER" | letter == "BACKSPACE" ? "-special" : ""}`}
          onClick={() => handleKeyDown({ key: letter })}
        >
          <b>{letter}</b>
        </button>
    </>
  )
}
