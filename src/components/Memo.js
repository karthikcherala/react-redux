import {Button, Card, Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_MEMO, EDIT_MEMO} from "../modules/memos";
import {BsCheck, BsExclamation, BsPencil, BsTrash} from 'react-icons/bs'
import EditMemo from "./EditMemo";

export default function Memo({
                                 memo, _useDispatch = useDispatch, _useSelector = useSelector,
                                 _EditMemo = EditMemo
                             }) {
    const dispatch = _useDispatch()
    const editID = _useSelector(state => state.memoToEdit?.id)
    const {id, date, description, complete} = memo

    const StaticMemo = () => <Card>
        <Card.Header>
            <Row className='align-items-center'>
                <Col xs='auto'>{complete ?
                    <BsCheck title='Complete' size={20}/> :
                    <BsExclamation title='Complete' size={20}/>}
                </Col>
                <Col>{date.toDateString()}</Col>
                <Col xs='auto'>
                    <Button title='Edit' variant={"outline-secondary"} size='sm'
                            onClick={() => dispatch({type: EDIT_MEMO, memo})}>
                        <BsPencil/>
                    </Button>
                </Col>
                <Col xs='auto'>
                    <Button title='Delete' variant={"outline-danger"} size='sm'
                            onClick={() => dispatch({type: DELETE_MEMO, id})}>
                        <BsTrash/>
                    </Button>
                </Col>
            </Row>
        </Card.Header>

        <Card.Body>{description}</Card.Body>
    </Card>

    if (id === editID)
        return <_EditMemo/>
    else
        return StaticMemo()
}