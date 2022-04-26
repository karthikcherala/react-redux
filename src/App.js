import "./App.css";
import {useState} from "react";
import Login from "./components/Login";
import Memos from "./components/Memos";
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
 function App({loggedInInit = false, _Login = Login, _Memos = Memos}) {


    //useState returns an array with 2 elements
    //1st element is the current value
    //the second element is a function that we can call to update the value
    const [memos, setMemos] = useState([
        {id: 0, title: 'Title1', date: new Date(), description: 'Desc1', complete: false},
        {id: 1, title: 'Title2', date: new Date(), description: 'Desc2', complete: true},
        {id: 2, title: 'Title3', date: new Date(), description: 'Desc3', complete: true}
    ])
    const [isLoggedIn, setIsLoggedIn] = useState(loggedInInit)

//In order to delete we need to remove an element from our memos state
// we need to rerender
     //Take some identifier and use that Id to delete the memo
    function deleteMemo(memoId) {
        const newMemos = memos.filter(memo => memo.id !== memoId);
        setMemos(newMemos);
    }

     function handleLogin(credentials) {


        if (credentials.username === 'ubatta'
            && credentials.password === 'mypass')
            setIsLoggedIn(true);
    }

    if (isLoggedIn)
        return <_Memos memos={memos} onDelete={deleteMemo}/>

    else
        return <_Login onLogin={handleLogin}/>

}

export default App;
