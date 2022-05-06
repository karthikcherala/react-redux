import {useDispatch} from "react-redux";
import {APPLY_ADD_MEMO, CANCEL_ADD_MEMO} from "../modules/memos";
import {useState} from "react";
import MemoInput from "./MemoInput";

export default function AddMemo({_useDispatch = useDispatch, _MemoInput=MemoInput}) {
    const dispatch = _useDispatch()
    const [memo, setMemo] = useState({
        description: '',
        date: new Date(),
        complete: false
    })

    function handleAdd() {
        dispatch({type: APPLY_ADD_MEMO, memo})
    }

    function handleCancel() {
        dispatch({type: CANCEL_ADD_MEMO})
    }

    return <_MemoInput memo={memo} onMemoChange={setMemo} onCancel={handleCancel}
                       onApply={handleAdd}/>
}