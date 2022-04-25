import {render, screen} from "@testing-library/react";
import Memos from "./Memos";
test('should show 2 memos', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const memoData = [
        {title: 'Title1', date: new Date(), description: 'Desc1', complete: false},
        {title: 'Title2', date: yesterday, description: 'Desc2', complete: true}
    ]

    function mockMemo({title, description, date, complete}) {
        return <>
            <div>{title}</div>
            <div>{description}</div>
            <div>{date.toDateString()}</div>
            <div>{complete ? 'Complete' : 'To Do'}</div>
        </>
    }


    render(<Memos memos={memoData} _Memo={mockMemo}/>)
    expect(screen.getByText('Title1')).toBeInTheDocument();
    expect(screen.getByText('Title2')).toBeInTheDocument();
    expect(screen.getByText('Desc1')).toBeInTheDocument();
    expect(screen.getByText('Desc2')).toBeInTheDocument();
    expect(screen.getByText('Complete')).toBeInTheDocument();
    expect(screen.getByText('To Do')).toBeInTheDocument();
    expect(screen.getByText(memoData[0].date.toDateString())).toBeInTheDocument();
    expect(screen.getByText(memoData[1].date.toDateString())).toBeInTheDocument();
})