import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputelement = useRef();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const add = () => {
    dispatch(counterActions.add({ num: inputelement.current.value }));
    inputelement.current.value = "";
  };

  const subtract = () => {
    dispatch(counterActions.subtract({ num: inputelement.current.value }));
    inputelement.current.value = "";
  };

  const togglePrivacy = () => {
    dispatch(privacyActions.togglePrivacy());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={increment} type="button" className="btn btn-primary">
          +1
        </button>

        <button onClick={decrement} type="button" className="btn btn-success">
          -1
        </button>
        <button
          onClick={togglePrivacy}
          type="button"
          className="btn btn-warning"
        >
          privacy toogle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          className="number-input"
          type="text"
          ref={inputelement}
          placeholder="Enter a number.."
        />

        <button onClick={add} type="button" className="btn btn-info">
          Add
        </button>
        <button onClick={subtract} type="button" className="btn btn-danger">
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
