import "./WordStyle.scss";

export function Word() {
  return (
    <>
      <div className="word-container">
        <div className="tile">T</div>
        <div className="tile miss">A</div>
        <div className="tile">B</div>
        <div className="tile miss">L</div>
        <div className="tile correct">E</div>
      </div>
    </>
  );
}
