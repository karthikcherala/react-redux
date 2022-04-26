import Memo from "./Memo";

export default function Memos({memos, onDelete,  _Memo=Memo}) {
    return <>
        {memos.map((memo, index) => <_Memo key={index} memo={memo} onDelete={onDelete}/>)}
    </>
}