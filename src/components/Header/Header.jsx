import "./HeaderStyle.scss";

import { Info } from "../Info/Info.jsx";
import { SettingsIcon } from "../SettingsIcon/SettingsIcon.jsx";

export function Header({ darkmode, handleExit }) {
  return (
    <>
      <div id="header" className="wordle-header">
        <h1>Wordle</h1>
        <div className="info-settings-container">
          <Info handleExit={handleExit} />
          <SettingsIcon darkmode={darkmode} handleExit={handleExit} />
        </div>
      </div>
    </>
  );
}
