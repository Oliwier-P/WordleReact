import "./SwitchStyle.scss";

export function Switch({ handleClickSwitch, switchChecked }) {
  return (
    <input
      type="checkbox"
      className="switch"
      checked={switchChecked}
      onChange={() => handleClickSwitch()}
    />
  );
}
