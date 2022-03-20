import React from "react";
import './App.css';
import Message from "./components/Message";

class App extends React.Component {
  render() {
    const helloWorld = "Hello World!!";
    return (
      <div>
        <Message message={helloWorld}/>
      </div>
    );
  }
}

export default App;
