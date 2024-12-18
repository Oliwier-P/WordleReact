import "./KeyStyle.scss";

export function Key({ letter, handleKeyDown }) {
  return (
    <>
      <button
        id={`key-${letter}`}
        className={`wordle-button${
          (letter == "ENTER") | (letter == "DELETE") ? "-special" : ""
        }`}
        onClick={() => handleKeyDown({ key: letter })}
      >
        <b>{letter}</b>
      </button>
    </>
  );
}
