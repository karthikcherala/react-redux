import Memo from "./Memo";
import {useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import AddMemo from "./AddMemo";

export default function Memos({_useSelector = useSelector, _Memo = Memo, _AddMemo=AddMemo}) {
    const memos = _useSelector(state => state.memos)
    const memoToAdd = _useSelector(state => state.memoToAdd)

    return <Row>
        {memoToAdd && <Col xs={4} className='mb-3'><_AddMemo/></Col>}
        {memos.map((memo, index) => <Col key={index} xs={4} className='mb-3'>
            <_Memo memo={memo}/>
        </Col>)
        }</Row>
}