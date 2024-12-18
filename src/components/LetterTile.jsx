import "./LetterTileStyle.scss";

export function LetterTile({ col, word }) {
  const letter = word.substring(col, col + 1);

  return (
    <>
      <div className={`wordle-tile`}>{letter}</div>
    </>
  );
}
