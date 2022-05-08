import {useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import PrivateMessage from "./PrivateMessage";
import PrivateMessageInput from "./PrivateMessageInput";

export default function PrivateMessages({_useSelector = useSelector, _PrivateMessage = PrivateMessage, _PrivateMessageInput = PrivateMessageInput}) {
    const privatemessages = _useSelector(state => state.privatemessages)
    const currentuser = _useSelector(state => state.username)
    const messageToSend = _useSelector(state => state.messageToSend)

    return <Row>
        {messageToSend && <Col xs={4} className='mb-3'><_PrivateMessageInput messageToSend={messageToSend}/></Col>}
        {privatemessages
           .filter(privatemessage => privatemessage.touser === currentuser || privatemessage.fromuser === currentuser)
           .map((privatemessage, index) => <Col key={index} xs={4} className='mb-3'>
            <_PrivateMessage privateMessage={privatemessage}/>
        </Col>)
        }</Row>
}