import {render, screen} from "@testing-library/react";
import Memos from "./Memos";

it('should show 2 memos', () => {
    const state = {memos: ['memo1', 'memo2']}
    const mockMemo = ({memo}) => <>{memo}</>
    render(<Memos _useSelector={fn => fn(state)} _Memo={mockMemo}/>)
    expect(screen.getByText(state.memos[0])).toBeInTheDocument()
    expect(screen.getByText(state.memos[1])).toBeInTheDocument()
})

it('should show AddMemo at the beginning when adding a memo', () => {
    const state = {memos: ['memo1', 'memo2'], memoToAdd: '?'}
    const mockMemo = ({memo}) => <div>{memo}</div>
    const addMemoText = 'Add Memo?'
    const mockAddMemo = () => <div>{addMemoText}</div>
    render(<Memos _useSelector={fn => fn(state)} _Memo={mockMemo} _AddMemo={mockAddMemo}/>)
    expect(screen.getByText(addMemoText)).toBeInTheDocument()
    expect(screen.getByText(state.memos[0])).toBeInTheDocument()
    expect(screen.getByText(state.memos[1])).toBeInTheDocument()
})