import React, {useEffect, useState} from "react";

export default function DebounceButton () {

  const onClickleDebounceButton = (event) => {
    event.preventDefault();
    console.log("DB buttton");
  }

  return (
    <>
      <button onClick={onClickleDebounceButton}>D-Button</button>
    </>
  );
}

