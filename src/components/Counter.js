
//Components handle displaying to the user and
//user interaction
export default function Counter({number, onIncrement}){
return <>
    {number}
    <button onClick={onIncrement}/>
</>
}