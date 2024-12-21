import "./BarStyle.scss";

export function Bar({ text, handleExit }) {
  return (
    <div className="bar">
      {text}
      <button className="exit" onClick={() => handleExit("game")}>
        X
      </button>
    </div>
  );
}
