import Login from "./Login";
import {Badge, Button, Card} from "react-bootstrap";


export default function Memo({memo, onDelete}) {
    const {id, title, date, description, complete} = memo;
    return <Card>
        <Card.Header>
            <h3 className={'d-flex justify-content-between'}>
                {title}
                <span>{date.toDateString()}</span>
            </h3>
        </Card.Header>
        <Card.Body>
        <h5>{description}</h5>
        </Card.Body>
        <Card.Footer>
            <div className={'d-flex justify-content-between'}>
                <Button variant={"outline-danger"} onClick={() => onDelete(id)}>Delete</Button>
                <Badge bg={complete ? 'secondary' : 'success'} className={'d-flex flex-column justify-content-center w-25'}>
                {complete ? 'Complete' :'To Do'}
                </Badge>
            </div>
        </Card.Footer>
    </Card>
}