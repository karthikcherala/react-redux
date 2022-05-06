import {render, screen} from "@testing-library/react";
import EditMemo from "./EditMemo";
import {APPLY_EDIT_MEMO, CANCEL_EDIT_MEMO, EDIT_MEMO} from "../modules/memos";

test('should supply memo, onMemoChange, onCancel, and onApply to MemoInput', () => {
    const memoToEdit = 'some memo'
    let _onMemoChange
    let _onCancel
    let _onApply
    const _MemoInput = ({memo, onMemoChange, onCancel, onApply}) => {
        _onMemoChange=onMemoChange
        _onCancel = onCancel
        _onApply = onApply
        return <>{memo}</>
    }
    const dispatch = jest.fn()

    render(<EditMemo _useSelector={fn => fn({memoToEdit})} _useDispatch={() => dispatch}
                     _MemoInput={_MemoInput}/>)
    expect(screen.getByText(memoToEdit)).toBeInTheDocument()
    _onMemoChange('change')
    expect(dispatch).toHaveBeenLastCalledWith({type: EDIT_MEMO, memo: 'change'})
    _onCancel()
    expect(dispatch).toHaveBeenLastCalledWith({type: CANCEL_EDIT_MEMO})
    _onApply()
    expect(dispatch).toHaveBeenLastCalledWith({type: APPLY_EDIT_MEMO})
})