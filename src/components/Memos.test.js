import {render, screen} from "@testing-library/react";
import Memos from "./Memos";
test('should show 2 memos and pass onDelete to each Mock', () => {

    const memoData = ['memo1','memo2']
    let _onDelete = undefined;

    const mockMemo = ({memo, onDelete}) => {
        _onDelete = onDelete
        return<div>{memo}</div>
    }

    render(<Memos memos={memoData} _Memo={mockMemo} onDelete={()=>{}}/>)
    expect(screen.getByText('memo1')).toBeInTheDocument();
    expect(screen.getByText('memo2')).toBeInTheDocument();
    expect(typeof _onDelete).toBe('function');

})