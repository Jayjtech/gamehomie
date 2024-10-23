import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/reducers/counter";

const NotFound = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="page">
      <div className="">Count: {count}</div>
      <button
        className="btn-success"
        onClick={() => {
          dispatch(increment());
        }}>
        Increment
      </button>
      <button
        className="btn-danger"
        onClick={() => {
          dispatch(decrement());
        }}>
        Decrement
      </button>
    </div>
  );
};

export default NotFound;
