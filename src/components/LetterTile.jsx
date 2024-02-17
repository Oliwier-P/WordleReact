export function LetterTile({ id, word }) {
    
    const letter = word.substring(id, id+1);

    return (
      <>
          <div className={`wordle-tile`}>{letter}</div>
      </>
    )
  }
  