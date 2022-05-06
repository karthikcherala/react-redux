import {useDispatch} from "react-redux";
import {LOGOUT, ADD_MEMO} from "../modules/memos";
import {BsDoorOpen, BsFileEarmarkPlus} from "react-icons/bs";
import {Button, Col, Row} from "react-bootstrap";

export default function Header({_useDispatch=useDispatch}) {
    const dispatch = _useDispatch()

    return <Row className='my-3 align-items-center'>
        <Col><Button title='Add' onClick={() => dispatch({type: ADD_MEMO})} variant={"outline-primary"}>
            <BsFileEarmarkPlus/>
        </Button></Col>
        <Col xs='auto'>Welcome, User</Col>
        <Col xs='auto'><Button title='Logout' onClick={() => dispatch({type: LOGOUT})} variant={"outline-secondary"}>
            <BsDoorOpen/>
        </Button></Col>
    </Row>
}