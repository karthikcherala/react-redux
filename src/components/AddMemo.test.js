import {render, screen} from "@testing-library/react";
import AddMemo from "./AddMemo";
import {APPLY_ADD_MEMO, CANCEL_ADD_MEMO} from "../modules/memos";

test('should supply memo, onMemoChange, onCancel, and onApply to MemoInput', () => {
    let _onMemoChange
    let _onCancel
    let _onApply
    let _memo
    const _MemoInput = ({memo, onMemoChange, onCancel, onApply}) => {
        _memo = memo
        _onMemoChange = onMemoChange
        _onCancel = onCancel
        _onApply = onApply
        return <></>
    }
    const dispatch = jest.fn()

    render(<AddMemo _useDispatch={() => dispatch}
                    _MemoInput={_MemoInput}/>)
    _onCancel()
    expect(dispatch).toHaveBeenLastCalledWith({type: CANCEL_ADD_MEMO})
    _onApply()
    expect(dispatch).toHaveBeenLastCalledWith({type: APPLY_ADD_MEMO, memo: _memo})
})
// test('should show input fields for each key in memo', () => {
//     render(<AddMemo _useDispatch={() => {}}/>)
//     expect(screen.getByPlaceholderText('Description')).toBeInTheDocument()
//     expect(screen.getByPlaceholderText('Date')).toBeInTheDocument()
//     expect(screen.getByTitle('Todo')).toBeInTheDocument()
//     expect(screen.getByTitle('Cancel')).toBeInTheDocument()
//     expect(screen.getByTitle('Add')).toBeInTheDocument()
// })
//
// it('should dispatch an APPLY_ADD_MEMO action w/ a memo payload when the Add button is clicked', () => {
//     const mock = jest.fn()
//     const useDispatch = () => mock
//
//     render(<AddMemo _useDispatch={useDispatch}/>)
//
//     const memo = {
//         description: 'desc',
//         date: new Date(),
//         complete: true
//     }
//
//     memo.date.setTime(0)
//
//     userEvent.type(screen.getByPlaceholderText('Description'), memo.description)
//     userEvent.type(screen.getByPlaceholderText('Date'), memo.date.toISOString().substring(0,10))
//     userEvent.click(screen.getByTitle('Todo'))
//     userEvent.click(screen.getByTitle('Add'))
//
//     expect(mock).toHaveBeenCalledWith({type: APPLY_ADD_MEMO, memo})
// })
//
// it('should dispatch a CANCEL_ADD_MEMO action when cancel button clicked', () => {
//     const dispatch = jest.fn()
//     render(<AddMemo _useDispatch={() => dispatch}/>)
//     screen.getByTitle('Cancel').click()
//     expect(dispatch).toHaveBeenCalledWith({type: CANCEL_ADD_MEMO})
// })
