
import './App.css';
import {useState} from "react";
//All functional react components are rendered functions
//This function is called every time we want to render our application
//Each FRC must return a single tag/element
function App() {
  //useState returns an array with 2 elements
  //1st element is the current value
  //the second element is a function that we can call to update the value
  const [count,setCount] = useState(0)
  function handleClick(){
    console.log('clicked')
    setCount(count + 1)
  }
  return<>
    <h1>This is the main App</h1>
    <h1>The count is {count}</h1>
    <button onClick={handleClick}>Hello</button>
  </>

}

export default App;
