import "./SettingsStyle.scss";

import { Bar } from "../Bar/Bar";
import { OptionContainer } from "./Option/OptionContainer";

export function Settings({ handleExit, handleDarkmode, handleContrastMode, display }) {
  return (
    <div
      className="settings-container"
      style={{ display: `${display == "settings" ? "flex" : "none"}` }}
    >
      <Bar text="Settings" handleExit={handleExit} />
      <OptionContainer
        title="Dark Mode"
        description="Change  dark and light mode"
        handleClickSwitch={handleDarkmode}
        switchChecked={localStorage.getItem("darkmode")}
      />
      <OptionContainer
        title="Color Blind Mode"
        description="High contrast colors"
        handleClickSwitch={handleContrastMode}
        switchChecked={localStorage.getItem("contrast")}
      />
    </div>
  );
}
