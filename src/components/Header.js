import {useDispatch} from "react-redux";
import {LOGOUT, ADD_MEMO, ADD_PRIVATE_MESSAGE} from "../modules/memos";
import {BsDoorOpen, BsFileEarmarkPlus} from "react-icons/bs";
import {Button, Col, Row} from "react-bootstrap";

export default function Header({username, _useDispatch=useDispatch}) {
    const dispatch = _useDispatch()

    return <Row className='my-3 align-items-center'>
        <Col><Button title='Add' onClick={() => dispatch({type: ADD_MEMO})} variant={"outline-primary"}>
            <BsFileEarmarkPlus/>
        </Button></Col>
        <Col><Button title='SendPrivateMessage' onClick={() => dispatch({type: ADD_PRIVATE_MESSAGE})} variant={"outline-primary"}>
            <BsFileEarmarkPlus/>
        </Button></Col>
        <Col xs='auto'>Welcome, {username}</Col>
        <Col xs='auto'><Button title='Logout' onClick={() => dispatch({type: LOGOUT})} variant={"outline-secondary"}>
            <BsDoorOpen/>
        </Button></Col>
    </Row>
}