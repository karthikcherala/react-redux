import Memo from "./Memo";

export default function Memos({memos, _Memo = Memo}) {
    return <>
        {memos.map((memo, index) => <_Memo key={index}
            title={memo.title}
            date={memo.date}
            description={memo.description}
            complete={memo.complete}
        />)}
    </>
}