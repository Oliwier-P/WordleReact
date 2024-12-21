import "./SettingsIconStyle.scss";
import dark_settings from "../../assets/dark_settings.svg";
import light_settings from "../../assets/light_settings.svg";

export function SettingsIcon({ darkmode, handleExit }) {
  return (
    <>
      <button className="settings-icon-container" onClick={() => handleExit("settings")}>
        <img src={darkmode ? light_settings : dark_settings} alt="settings" />
      </button>
    </>
  );
}
