import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button onClick={increment} type="button" className="btn btn-primary">
        +1
      </button>

      <button onClick={decrement} type="button" className="btn btn-success">
        -1
      </button>
    </div>
  );
};

export default Controls;
