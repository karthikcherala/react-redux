import {render, screen} from '@testing-library/react'
import Header from "./Header";
import {ADD_MEMO, LOGOUT} from "../modules/memos";

it('should show an Add Memo and Logout button', () => {
    render(<Header _useDispatch={() => {}}/>)
    expect(screen.getByTitle('Add')).toBeInTheDocument()
    expect(screen.getByTitle('Logout')).toBeInTheDocument()
})

it('should dispatch LOGOUT when logout button clicked', () => {
    const dispatch = jest.fn()
    render(<Header _useDispatch={() => dispatch}/>)
    screen.getByTitle('Logout').click()
    expect(dispatch).toHaveBeenCalledWith({type: LOGOUT})
})

it('should dispatch ADD_MEMO when add button clicked', () => {
    const dispatch = jest.fn()
    render(<Header _useDispatch={() => dispatch}/>)
    screen.getByTitle('Add').click()
    expect(dispatch).toHaveBeenCalledWith({type: ADD_MEMO})
})