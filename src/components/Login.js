// First parameter is an object containing all
//    properties that are passed into this
//    component
import {useState} from "react";
import {Button, Card, Form, InputGroup, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {LOGIN} from "../modules/memos";
import {BsLock, BsPerson} from "react-icons/bs";

function Login({_useDispatch = useDispatch}) {
    const dispatch = _useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function sendCredentials() {
        dispatch({type: LOGIN, credentials: {username, password}})
    }

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true)
        sendCredentials();
    }

    return <Card style={{borderWidth: 0}}>
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-2">
                    <InputGroup.Text><BsPerson/></InputGroup.Text>
                    <Form.Control type='text' placeholder="Username" onChange={onUsernameChange}
                                  isInvalid={submitted && !username}/>
                </InputGroup>

                <InputGroup className="mb-2">
                    <InputGroup.Text><BsLock/></InputGroup.Text>
                    <Form.Control type='password' placeholder="Password" onChange={onPasswordChange}
                                  isInvalid={submitted && !password}/>
                </InputGroup>

                <Row className={'p-3'}>
                    <Button type={'submit'} variant={"primary"}>Login</Button>
                </Row>
            </Form>
        </Card.Body>
    </Card>
}

export default Login