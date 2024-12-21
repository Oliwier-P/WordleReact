import "./BoardStyle.scss";
import { LetterTile } from "../LetterTile/LetterTile.jsx";

const WordsColumns = [1, 2, 3, 4, 5];
const WordsRows = [1, 2, 3, 4, 5, 6];

export function Board({ words }) {
  return (
    <>
      {WordsRows.map((row) => (
        <div key={row} className={`wordle-tile-row`}>
          {WordsColumns.map((index, col) => (
            <LetterTile key={`${index}-${col}`} col={col} word={words[row - 1]} />
          ))}
        </div>
      ))}
    </>
  );
}
