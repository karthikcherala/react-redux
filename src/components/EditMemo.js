import {useDispatch, useSelector} from "react-redux";
import {APPLY_EDIT_MEMO, CANCEL_EDIT_MEMO, EDIT_MEMO} from "../modules/memos";
import MemoInput from "./MemoInput";

export default function EditMemo({_useSelector = useSelector, _useDispatch = useDispatch,
                                     _MemoInput=MemoInput}) {
    const dispatch = _useDispatch()
    const memo = _useSelector(state => state.memoToEdit)

    function setMemo(change) {
        dispatch({type: EDIT_MEMO, memo: change})
    }

    function handleApply() {
        dispatch({type: APPLY_EDIT_MEMO})
    }

    function handleCancel() {
        dispatch({type: CANCEL_EDIT_MEMO})
    }

    return <_MemoInput memo={memo} onMemoChange={setMemo} onCancel={handleCancel}
                       onApply={handleApply}/>
}