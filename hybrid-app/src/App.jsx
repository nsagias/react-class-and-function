import React from "react";
import './App.css';
import Message from "./components/Message";
import moment from "moment";


const monthAndYearNow = moment().format('YYYYMM');
const startOfMonth = moment(monthAndYearNow).startOf('month').format('YYYYMMDD');
const endOfMonth = moment(monthAndYearNow).endOf('month').format('YYYYMMDD');

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      isShowMessage: true,
      messageList: [],
      messageListItem: {},
      dateFrom: "" || startOfMonth,
      dateTo: "" || endOfMonth
    };
  }

  handleShowMessage = () => {
    this.setState(state => ({ isShowMessage: !state.isShowMessage}));
    console.log("Handle-Show-Message:",this.state)
  }

  handleSetDate = (event, startOfMonth, endOfMonth) => {
    this.setState(() => ({ dateFrom: startOfMonth}));
    this.setState(() => ({ dateTo: endOfMonth}));
  }

  render() {
    console.log("show state",this.state.dateFrom, this.state.dateTo)
    const helloWorldObject = { message: "Hello World Object!!"};
    const helloWorldArrayOfObject = [{ message: "Hello World Array of Objects!!"}];
    const handleHelloFunction = (name) => console.log("Hello Function", name);
   
    return (
      <div className="App">
        <button onClick={this.handleShowMessage} type="button">
          Show Messages
        </button>
        <Message 
          setDate={this.handleSetDate}
          isShowMessage={this.state.isShowMessage}
          messageObject={helloWorldObject}
          messageArray={helloWorldArrayOfObject}
          messageFunction={handleHelloFunction}
        /> 
        <h1>No Messages</h1>
      </div>
    );
  }
}

export default App;
