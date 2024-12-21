import "./OptionContainerStyle.scss";
import { Switch } from "../Switch/Switch";

export function OptionContainer({
  title,
  description,
  handleClickSwitch,
  switchChecked,
}) {
  return (
    <div className="option-container">
      <div className="option-title">{title}</div>
      <div className="option-description">{description}</div>
      <Switch handleClickSwitch={handleClickSwitch} switchChecked={switchChecked} />
    </div>
  );
}
