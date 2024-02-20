export function LetterTile({ id, wordsAttempts }) {
    
    const letter = wordsAttempts.substring(id, id+1);

    return (
      <>
          <div className={`wordle-tile`}>{letter}</div>
      </>
    )
  }
  