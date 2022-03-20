import React from "react";

export default function Message(props) {
  console.log(props);
  const name = "nick"
  return (
    <>
      <div>
        {props.isShowMessage ?  (
          <>
          <h1>{props.messageObject.message}</h1> 
          <h1>{props.messageArray[0].message}</h1>
          </>
        ): null}
      <button onClick={() => props.messageFunction(name)}>Hello function</button> 
      </div>
    </>
  );
}