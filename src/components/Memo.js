import Login from "./Login";


export default function Memo({memo, onDelete}) {
    const {id, title, date, description, complete} = memo;
    return <>
        <h2>{title}</h2>
        <h3>{date.toDateString()}</h3>
        <h3>{description}</h3>
        <h4>{complete ? 'Complete' :'To Do'}</h4>
        <button onClick={() => onDelete(id)}>Delete</button>
    </>
}