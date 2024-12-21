import { useSelector, useDispatch } from "react-redux";
import { reset, start_pause, second } from "./store/slice";
import { useEffect } from "react";

function Timer() {
  let dispatch = useDispatch();
  const state_mode = useSelector((state) => state.do.mode);
  const time_left = useSelector((state) => state.do.timeLeft);
  const on = useSelector((state) => state.do.on);
  useEffect(() => {
    if (on) {
      const interval = setInterval(() => dispatch(second()), 1000);
      return () => clearInterval(interval);
    }
    return
  }, [time_left, on]);

  let formatted_time_left = time_left.toString().replace(".", ":");
  if (formatted_time_left.length <= 2) {
    if (formatted_time_left.length == 1) formatted_time_left = "0" + formatted_time_left;
    formatted_time_left += ":00"
  }
  else if (formatted_time_left.length == 4) {
    formatted_time_left = "0" + formatted_time_left;
  }
  
  return (
    <div className="timer">
    <div className="timer_time">
      <p className="sub-title">{state_mode}</p>
      <p className="time">{formatted_time_left}</p>
    </div>
    <div className="start_buttons">
      <button onClick={() => dispatch(start_pause())}>&#x23EF;</button>
      <button onClick={() => dispatch(reset())}>&#128472;</button>
    </div>
  </div>
  )
}
  
export default Timer  