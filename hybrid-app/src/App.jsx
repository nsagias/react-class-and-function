import React from "react";
import './App.css';
import Message from "./components/Message";

class App extends React.Component {
  render() {
    const helloWorldObject = { message: "Hello World Object!!"};
    const helloWorldArrayOfObject = [{ message: "Hello World Array of Objects!!"}];
    const handleHelloFunction = () => console.log("Hello Function");
  
    return (
      <div>
        <Message 
          messageObject={helloWorldObject}
          messageArray={helloWorldArrayOfObject}
          messageFunction={handleHelloFunction}
        />
      </div>
    );
  }
}

export default App;
