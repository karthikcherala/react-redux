import {Button, Card, Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {BsCheck, BsExclamation, BsPencil, BsTrash} from 'react-icons/bs'

export default function PrivateMessage({
                                 privateMessage, _useDispatch = useDispatch, _useSelector = useSelector
                             }) {
    const dispatch = _useDispatch()
    const {description, touser, fromuser} = privateMessage

    const StaticMessage = () => <Card>
        <Card.Header>
            Message From {fromuser} To {touser}
        </Card.Header>

        <Card.Body>{description}</Card.Body>
    </Card>

    return StaticMessage()
}