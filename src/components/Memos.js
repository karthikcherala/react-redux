
export default function Memo({title, date, description, complete}) {
    return <>
    <h2>{title}</h2>
        <h3>{date.toDateString()}</h3>
        <h3>{description}</h3>
        <h4>{complete ? 'Complete' :'To Do'}</h4>
    </>
}