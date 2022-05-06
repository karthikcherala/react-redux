import { render, screen } from '@testing-library/react';
import App from './App';


test('should display _Memos and _Header when logged in', () => {
    const expectedMemos = 'This is Memos'
    const expectedHeader = 'This is Header'
    const mockMemos = () => <div>{expectedMemos}</div>
    const mockHeader = () => <div>{expectedHeader}</div>
    const mockEdit = () => <></>

    const state = {
        isLoggedIn: true
    }

    function useSelector(selectorFn) {
        return selectorFn(state)
    }

    render(<App _Memos={mockMemos} _Header={mockHeader} _EditMemo={mockEdit} _useDispatch={() => {}}
                _useSelector={useSelector}/>)
    expect(screen.getByText(expectedMemos)).toBeInTheDocument()
    expect(screen.getByText(expectedHeader)).toBeInTheDocument()
});


test('should display the login screen when logged out', () => {
    const expectedText = 'This is the expected text'
    const mockLogin = () => <>{expectedText}</>


    const state = {
        isLoggedIn: false
    }

    function useSelector(selectorFn) {
        return selectorFn(state)
    }

    render(<App _Login={mockLogin} _useDispatch={() => {}} _useSelector={useSelector}/>)
    expect(screen.getByText(expectedText)).toBeInTheDocument()

});
it('should not display AddMemo when state.memoToAdd is not null', () => {
    const state = {
        isLoggedIn: true,
        memoToAdd: 'some memo'
    }

    const text = 'This is AddMemo'
    const AddMemo = () => <>{text}</>

    render(<App _AddMemo={AddMemo} _useSelector={fn => fn(state)} _useDispatch={() => {}}
                _Memos={() => {}} _Header={() => {}}/>)
    expect(screen.queryByText(text)).not.toBeInTheDocument()
})