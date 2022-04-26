export default function EditMemo({memo}) {
    const {title, date, description, complete} = memo;
    return <>
        <input defaultValue={title}/>
        <input defaultValue={date.toISOString().substr(0,10)}/>
        <input defaultValue={description}/>
        <input type='checkbox' defaultChecked={complete}/>
    </>
}
