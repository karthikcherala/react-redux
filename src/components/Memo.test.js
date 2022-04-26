import {render, screen} from "@testing-library/react";
import Memo from "./Memo";
test('should show title, date, description, and complete', () => {
    const title = 'Test Title';
    const date = new Date();
    const description = 'Test Description';
    const complete = true;

    render(<Memo memo={{title, date, description, complete}}/>);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(date.toDateString())).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText('Complete')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();

})
test('should show title, date, description, and not complete', () => {
    const id = 1;
    const title = 'Test Title';
    const date = new Date();
    const description = 'Test Description';
    const complete = false;
    const deleteMock = jest.fn();
    render(<Memo memo={{id, title, date, description, complete}} onDelete={deleteMock}/>);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(date.toDateString())).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText('To Do')).toBeInTheDocument();
    const deleteButton = screen.getByText('Delete');
    expect(deleteButton).toBeInTheDocument();
    deleteButton.click();
    expect(deleteMock).toHaveBeenCalledWith(id);

})