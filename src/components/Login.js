//First parameter is an object containing
// all properties that are passed into this component
import {useState} from "react";
function Login(properties) {
   const[username, setUsername] = useState('');
   const[password, setPassword] = useState('');

    function sendCredentials(){
        properties.onLogin({username, password})
    }
    function onUsernameChange(event){
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    function onPasswordChange(event){
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    return <>
    <input type='text' placeholder='Username' onChange={onUsernameChange}/>
        <input type='text' placeholder='Password' onChange={onPasswordChange}/>
        <button onClick={sendCredentials}>Login</button>
    </>
}

export default Login