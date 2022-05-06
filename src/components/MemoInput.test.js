import {render, screen} from "@testing-library/react";
import MemoInput from "./MemoInput";
import userEvent from "@testing-library/user-event";

test('should show input fields with current memo data', () => {
    let memo = {
        date: new Date(),
        description: 'Desc1',
        complete: true
    }

    const setMemo = jest.fn()
    const cancel = jest.fn()
    const apply = jest.fn()

    const {rerender} = render(<MemoInput memo={memo} onMemoChange={setMemo} onCancel={cancel}
                                         onApply={apply}/>)

    expect(screen.getByDisplayValue(memo.description)).toBeInTheDocument()
    expect(screen.getByDisplayValue(memo.date.toISOString().substring(0,10))).toBeInTheDocument()
    expect(screen.getByTitle('Complete')).toBeInTheDocument()
    expect(screen.getByTitle('Apply')).toBeInTheDocument()
    expect(screen.getByTitle('Cancel')).toBeInTheDocument()
    memo.complete = false
    rerender(<MemoInput memo={memo} setMemo={setMemo} cancel={cancel}/>)
    expect(screen.getByTitle('Todo')).toBeInTheDocument()
})

it('should call onCancel when cancel button clicked', () => {
    let memo = {
        date: new Date(),
        description: 'Desc1',
        complete: true
    }

    const setMemo = jest.fn()
    const cancel = jest.fn()
    const apply = jest.fn()

    render(<MemoInput memo={memo} onMemoChange={setMemo} onCancel={cancel}
                      onApply={apply}/>)
    screen.getByTitle('Cancel').click()
    expect(cancel).toHaveBeenCalled()
})

it('should call onApply when the apply button is clicked', () => {
    let memo = {
        date: new Date(),
        description: 'Desc1',
        complete: true
    }

    const setMemo = jest.fn()
    const cancel = jest.fn()
    const apply = jest.fn()

    render(<MemoInput memo={memo} onMemoChange={setMemo} onCancel={cancel}
                      onApply={apply}/>)
    screen.getByTitle('Apply').click()
    expect(apply).toHaveBeenCalled()
})

it('should dispatch EDIT_MEMO when any field changes', () => {
    const memoToEdit = {
        date: new Date(),
        description: 'Desc1',
        complete: true
    }

    const setMemo = jest.fn()
    const cancel = jest.fn()
    const apply = jest.fn()

    render(<MemoInput memo={memoToEdit} onMemoChange={setMemo} onCancel={cancel}
                      onApply={apply}/>)
    const descriptionElement = screen.getByDisplayValue(memoToEdit.description)
    const dateElement = screen.getByDisplayValue(memoToEdit.date.toISOString().substring(0,10))
    const completeElement = screen.getByTitle('Complete')
    const newText = 'A'

    userEvent.type(descriptionElement, newText)
    let memo = {...memoToEdit, description: memoToEdit.description + newText}
    expect(setMemo).toHaveBeenCalledWith(memo)

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    yesterday.setTime(0)
    userEvent.type(dateElement, yesterday.toISOString().substring(0, 10))
    memo = {...memoToEdit, date: yesterday}
    expect(setMemo).toHaveBeenCalledWith(memo)

    userEvent.click(completeElement)
    memo = {...memoToEdit, complete: !memoToEdit.complete}
    expect(setMemo).toHaveBeenCalledWith(memo)
})