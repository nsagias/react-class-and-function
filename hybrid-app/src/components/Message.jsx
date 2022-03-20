import React from "react";

export default function Message(props) {
  console.log(props.message);
  return (
    <h1>{props.message}</h1>
  );
}