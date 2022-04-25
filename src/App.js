import "./App.css";
import {useState} from "react";
import Login from "./components/Login";
import Counter from "./components/Counter";
//All functional react components are rendered functions
//This function is called every time we want to render our application
//Each FRC must return a single tag/element
//1.Allow user to create, edit, and delete memos
//2.Each memo shall have
//a.title
//b.date that it was created
//c.description(the actual memo)
//d.complete/not complete
//3.Authenticate the user
export function App({loggedInInit = false, _Login = Login, _Counter = Counter}) {


    //useState returns an array with 2 elements
    //1st element is the current value
    //the second element is a function that we can call to update the value
    const [count, setCount] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(loggedInInit)

    function handleClick() {

        setCount(count + 1)
    }

    function handleLogin(credentials) {


        if (credentials.username === 'ubatta'
            && credentials.password === 'mypass')
            setIsLoggedIn(true);
    }

    if (isLoggedIn)
        return <_Counter number={count} onIncrement={handleClick}/>

    else
        return <_Login onLogin={handleLogin}/>

}

export default App;
