import Memo from "./Memo";

export default function Memos({memos, onDelete,  _Memo=Memo}) {
    return <>
        {memos.map(
            (memo, index) => <div key={index} className={'m-3'}>
            <_Memo memo={memo} onDelete={onDelete}/>
        </div>)
        }
    </>
}