import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {BsCheck, BsExclamation, BsFileEarmarkPlus, BsFileEarmarkX} from "react-icons/bs";

export default function MemoInput({memo, onMemoChange, onCancel, onApply}) {
    const {description, date, complete} = memo

    return <Card>
        <Card.Header>
            <Row className='align-items-center'>
                <Col xs='auto'>
                    <Button size='sm' variant={"outline-primary"}
                            onClick={() => onMemoChange({...memo, complete: !complete})}>
                        {complete ? <BsCheck title='Complete' size={20}/> :
                            <BsExclamation title='Todo' size={20}/>}
                    </Button>
                </Col>
                <Col xs='auto'>
                    <Form.Control type='date' placeholder='Date'
                                  defaultValue={date.toISOString().substring(0, 10)}
                                  onChange={e => onMemoChange({...memo, date: new Date(e.target.value)})}/>
                </Col>
                <Col/>
                <Col xs='auto'>
                    <Button title='Apply' variant={"outline-success"} size='sm'
                            onClick={onApply}>
                        <BsFileEarmarkPlus/>
                    </Button>
                </Col>
                <Col xs='auto'>
                    <Button title='Cancel' variant={"outline-danger"} size='sm'
                            onClick={onCancel}>
                        <BsFileEarmarkX/>
                    </Button>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            <Form.Control as="textarea" rows={2} defaultValue={description}
                          placeholder='Description'
                          onChange={e => onMemoChange({...memo, description: e.target.value})}/>
        </Card.Body>
    </Card>
}