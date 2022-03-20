import React from "react";
import './App.css';
import Message from "./components/Message";

class App extends React.Component {
  render() {
    const helloWorld = "Hello World!!";
    return (
      <div>
        <h1>{helloWorld}</h1>
        <Message />
      </div>
    );
  }
}

export default App;
