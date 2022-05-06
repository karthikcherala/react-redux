import {render, screen} from "@testing-library/react";
import Memo from "./Memo";
import {DELETE_MEMO, EDIT_MEMO} from "../modules/memos";

test('should show date, description, and complete (badge should be grey)', () => {
    const date = new Date()
    const description = 'Test Description'
    const complete = true
    render(<Memo memo={{id: 0, date, description, complete}} _useDispatch={() => {}}
                 _useSelector={fn => fn({})}/>)
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByTitle('Delete')).toBeInTheDocument()
    expect(screen.getByTitle('Complete')).toBeInTheDocument()
})

test('should show date, description, and not complete (badge should be green)', () => {
    const id = 1
    const date = new Date()
    const description = 'Test Description'
    const complete = false
    const deleteMock = jest.fn()
    render(<Memo memo={{id, date, description, complete}} onDelete={deleteMock}
                 _useDispatch={() => {}} _useSelector={fn => fn({})}/>)

    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
})

it('should show an edit button', () => {
    const memo = {
        id: 0,
        date: new Date(),
        description: '',
        complete: false
    }

    render(<Memo memo={memo} _useDispatch={() => {}} _useSelector={fn => fn({})}/>)
    expect(screen.getByTitle('Edit')).toBeInTheDocument()
})

it('should dispatch EDIT_MEMO w/ its memo when the edit button is clicked', () => {
    const memo = {
        id: 0,
        date: new Date(),
        description: '',
        complete: false
    }

    const dispatch = jest.fn()
    render(<Memo memo={memo} _useDispatch={() => dispatch} _useSelector={fn => fn({})}/>)
    screen.getByTitle('Edit').click()
    expect(dispatch).toHaveBeenCalledWith({type: EDIT_MEMO, memo})
})

it('should dispatch DELETE_MEMO w/ the its memos id when the delete button is clicked', () => {
    const memo = {
        id: 0,
        date: new Date()
    }
    const dispatch = jest.fn()
    render(<Memo memo={memo} _useDispatch={() => dispatch} _useSelector={fn => fn({})}/>)
    screen.getByTitle('Delete').click()
    expect(dispatch).toHaveBeenCalledWith({type: DELETE_MEMO, id: memo.id})
})

it('should show _EditMemo when memoToEdits id matches its own memo', () => {
    const mock = jest.fn()
    const memo = {id: 5}
    const state = {
        memoToEdit: memo
    }
    render(<Memo memo={memo} _useSelector={fn => fn(state)} _useDispatch={() => {}}
                 _EditMemo={mock}/>)
    expect(mock).toHaveBeenCalled()
})