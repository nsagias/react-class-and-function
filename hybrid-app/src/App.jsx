import React from "react";
import './App.css';
import Message from "./components/Message";

class App extends React.Component {
  render() {
    const helloWorld = "Hello World!!";
    const handleHello = () => console.log("Hello Function");
  
    return (
      <div>
        <Message 
           message={helloWorld}
           fnMessage={handleHello}
        />
      </div>
    );
  }
}

export default App;
