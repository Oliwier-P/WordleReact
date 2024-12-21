import "./AlertBoxStyle.scss";

export function AlertBox({ errorMessage }) {
  return (
    <>
      <div id="alert_box" className="worlde-alert">
        {errorMessage}
      </div>
    </>
  );
}
