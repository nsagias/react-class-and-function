import React from "react";

export default function Message(props) {
  console.log(props);
  return (
    <>
      <h1>{props.messageObject.message}</h1>
      <h1>{props.messageArray[0].message}</h1>
      <button onClick={props.messageFunction}>Hello function</button>
    </>
  );
}