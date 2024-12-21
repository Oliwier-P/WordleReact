import "./TextTilesStyle.scss";

export function TextTiles() {
  return (
    <>
      <div className="word-colors-description">
        <div className="row-description">
          <div className="small-tile">T</div>
          <div className="coma">,</div>
          <div className="small-tile">B</div>
          <div className="text-description">aren’t in the target word at all</div>
        </div>
        <div className="row-description">
          <div className="small-tile miss">A</div>
          <div className="coma">,</div>
          <div className="small-tile miss">L</div>
          <div className="text-description">is in the word but in the wrong spot</div>
        </div>
        <div className="row-description">
          <div className="small-tile correct">E</div>
          <div className="text-description">is in the word and in the correct spot</div>
        </div>
      </div>
    </>
  );
}
