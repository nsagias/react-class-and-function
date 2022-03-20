import React from "react";

export default function Message(props) {
  console.log(props);
  return (
    <>
      <h1>{props.message.message}</h1>
      <button onClick={props.fnMessage}>Hello function</button>
    </>
  );
}