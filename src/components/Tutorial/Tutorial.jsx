import "./TutorialStyle.scss";
import { Word } from "./Word";
import { TextTiles } from "./TextTiles";
import { Bar } from "../Bar/Bar";

export function Tutorial({ handleExit, display }) {
  return (
    <>
      <div
        id="tutoiral-container"
        className="tutoiral-container"
        style={{ display: `${display == "tutorial" ? "flex" : "none"}` }}
      >
        <Bar text="How to play" handleExit={handleExit} />
        <div className="text">
          You have to guess the hidden word in 6 tries and the color of the letters
          changes to show how close you are.
        </div>
        <div className="text">To start the game, just eneter any word, for example:</div>
        <Word />
        <TextTiles />
      </div>
    </>
  );
}
