import "./styling.css";
import ClickedButton from "./ClickedButton";

function SaveButton() {
  function handleClick() {
    alert("You are saving this pin!");
    
  }
  return (
    <button id="saveButton" className="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
