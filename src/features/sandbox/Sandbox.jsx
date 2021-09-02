import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  return (
    <>
      <h1>Testing</h1>
      <h2>The data is: {data}</h2>
      <Button onClick={()=> dispatch(increment(20))} content="INCREMENT" color='green'/>
      <Button onClick={()=> dispatch(decrement(10))} content="DECREMENT" color='red'/>
    </>
  );
}
