//First parameter is an object containing
// all properties that are passed into this component
import {useState} from "react";
import '../styles.css'
import {Button, Card, Form, Row} from "react-bootstrap";
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
  function handleSubmit(event) {
        event.preventDefault();
        sendCredentials();
  }
    // return <>
    // <input type='text' placeholder='Username' onChange={onUsernameChange}/>
    //     <input type='text' placeholder='Password' onChange={onPasswordChange}/>
    //     <Button variant={'primary'} onClick={sendCredentials}>Login</Button>
    // </>
    return <Card>
        <Card.Header className={'text-center'}><h3>Login</h3></Card.Header>
        <Card.Body>
    <Form onSubmit={handleSubmit}>
        <Form.Group className={'m-1'}>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Username' onChange={onUsernameChange}/>
        </Form.Group>
        <Form.Group className={'m-1'}>
            <Form.Label>Password</Form.Label>
            <Form.Control type='Password' placeholder='Password' onChange={onPasswordChange}/>
        </Form.Group>
        <Row className={'p-3'}>
        <Button type={'submit'}variant={'primary'}>Submit</Button>
        </Row>
    </Form>
        </Card.Body>
    </Card>
}

export default Login