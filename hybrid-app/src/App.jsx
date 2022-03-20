import React from "react";
import './App.css';
import Message from "./components/Message";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      isShowMessage: true,
      messageList: [],
      messageListItem: {}
    };
  }

  handleShowMessage = () => {
    this.setState(state => ({ isShowMessage: !state.isShowMessage}));
    console.log("Handle-Show-Message:",this.state)
  }

  render() {
    const helloWorldObject = { message: "Hello World Object!!"};
    const helloWorldArrayOfObject = [{ message: "Hello World Array of Objects!!"}];
    const handleHelloFunction = () => console.log("Hello Function");
    
    return (
      <div className="App">
        <button onClick={this.handleShowMessage} type="button">
          Show Messages
        </button>
        <Message 
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
