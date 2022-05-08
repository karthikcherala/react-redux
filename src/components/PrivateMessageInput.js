import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {BsCheck, BsExclamation, BsFileEarmarkPlus, BsFileEarmarkX} from "react-icons/bs";
import {useState} from "react";
import {CANCEL_ADD_MEMO, SEND_PRIVATE_MESSAGE} from "../modules/memos";
import {useDispatch, useSelector} from "react-redux";

export default function PrivateMessageInput({messageToSend, _useDispatch = useDispatch, _useSelector = useSelector}) {
    const [privatemessage, setMessage] = useState({
        description: messageToSend.description,
        touser: messageToSend.touser,
        fromuser: messageToSend.fromuser
    })
    const dispatch = useDispatch()
    function handleApply() {
        dispatch({type: SEND_PRIVATE_MESSAGE, privateMessage: privatemessage})
    }

    function handleCancel() {
        dispatch({type: CANCEL_ADD_MEMO})
    }
    return <Card>
        <Card.Header>
            <Row className='align-items-center'>
                <Col xs='auto'>
                    <Button title='Apply' variant={"outline-success"} size='sm'
                            onClick={handleApply}>
                        <BsFileEarmarkPlus/>
                    </Button>
                </Col>
                <Col xs='auto'>
                    <Button title='Cancel' variant={"outline-danger"} size='sm'
                            onClick={handleCancel}>
                        <BsFileEarmarkX/>
                    </Button>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            <Form.Control as="textarea" defaultValue={privatemessage.touser}
                          placeholder='To'
                          onChange={e => setMessage({...privatemessage, touser: e.target.value})}/>
            <Form.Control as="textarea" rows={2} defaultValue={privatemessage.description}
                          placeholder='Description'
                          onChange={e => setMessage({...privatemessage, description: e.target.value})}/>
        </Card.Body>
    </Card>
}