import React, {useState} from "react";
import moment from "moment";

export default function Message(props) {
  console.log(props);

  const name = "nick"

  const monthAndYearNow = moment().format('YYYYMM');
  const startOfMonth = moment(monthAndYearNow).startOf('month').format('YYYYMMDD');
  const endOfMonth = moment(monthAndYearNow).endOf('month').format('YYYYMMDD');
  const [date, setDate] = useState({startOfMonth, endOfMonth})

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
      <button onClick={(event) => props.setDate(event.preventDefault(),date.startOfMonth, date.endOfMonth )}>Set Date</button> 
      </div>
    </>
  );
}