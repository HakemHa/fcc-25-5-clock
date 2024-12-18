import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./store/slice";

function Button(props) {
  let dispatch = useDispatch();
  let quantity = useSelector((state) => state.do[props.sets]);
  const on = useSelector((state) => state.do.on);

    return (
      <>
        <div className="sub-title">{props.name}</div>
        <div className="setters">
            <button onClick={() => !on && dispatch(decrease(props.sets))}>&darr;</button>
            <p className="sub-title">{quantity}</p>
            <button onClick={() => !on && dispatch(increase(props.sets))}>&uarr;</button>
        </div>
      </>
    )
  }
  
  export default Button
  