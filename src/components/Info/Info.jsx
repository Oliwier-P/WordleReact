import "./InfoStyle.scss";

export function Info({ handleExit }) {
  return (
    <>
      <button className="info-container" onClick={() => handleExit("tutorial")}>
        <div className="info-content">?</div>
      </button>
    </>
  );
}
