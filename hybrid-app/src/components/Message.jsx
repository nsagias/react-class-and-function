import React from "react";
import moment from "moment";

export default function Message(props) {
  console.log(props);
  const name = "nick"

  const monthNow = moment().format('MMMM');
  const yearNow  = moment().format('YYYY');
  const monthAndYearNow = moment().format('YYYYMM');
  const startOfMonth = moment(monthAndYearNow).startOf('month').format('YYYYMMDD');
  const endOfMonth = moment(monthAndYearNow).endOf('month').format('YYYYMMDD');
  console.log(`  monthNow ${monthNow} 
  yearNow ${yearNow} 
  monthAndYearNow ${monthAndYearNow} 
  startOfMonth ${startOfMonth} 
  endOfMonth ${endOfMonth}`
  );
  
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