import React from "react";
import './App.css';
import Message from "./components/Message";

class App extends React.Component {
  render() {
    const helloWorldObject = { message: "Hello World!!"};
    const helloWorldArray = [{ message: "Hello World!!"}];
    const handleHelloFunction = () => console.log("Hello Function");
  
    return (
      <div>
        <Message 
          messageObject={helloWorldObject}
          messageArray={helloWorldArray}
          messageFunction={handleHelloFunction}
        />
      </div>
    );
  }
}

export default App;
