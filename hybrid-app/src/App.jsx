import React from "react";
import './App.css';

class App extends React.Component {
  render() {
    const helloWorld = "Hello World!!";
    return (
      <div>
        <h1>{helloWorld}</h1>
      </div>
    );
  }
}

export default App;
