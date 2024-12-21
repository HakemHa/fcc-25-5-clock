import Button from "./Button";

function Display() {

  return (
    <div className="display">
      <div className="title">25 + 5 Clock</div>
      <Button name="Break Length" sets="breakLength"/>
      <Button name="Session Length" sets="sessionLength"/>
    </div>
  )
}

export default Display
