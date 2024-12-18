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
      console.log("Run");
      const interval = setInterval(() => dispatch(second()), 1000);
      return () => clearInterval(interval);
    }
    return
  }, [time_left, on]);
  
  return (
    <>
    <div className="timer">
      <p className="sub-title">{state_mode}</p>
      <p className="time">{time_left}</p>
    </div>
    <div className="start_buttons">
      <button onClick={() => dispatch(start_pause())}>&#x23EF;</button>
      <button onClick={() => dispatch(reset())}>&#128472;</button>
    </div>
  </>
  )
}
  
export default Timer  