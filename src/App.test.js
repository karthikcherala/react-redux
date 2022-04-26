import { render, screen } from '@testing-library/react';
import App from './App';

test('should display the counter component when logged in', () => {
  let _memos = undefined;
  let _onDelete = undefined;
    const mock = ({memos, onDelete}) => {
        _memos = memos;
        _onDelete = onDelete;
        return <>This is the expected count</>
    }
    const noText = 'NONONO';
    const nonono = () => <>{noText}</>

    render(<App loggedInInit={true} _Memos={mock} _Login={nonono}/>);
  const h1 = screen.getByText(/This is the expected count/);
  expect(h1).toBeInTheDocument();
  expect(typeof _memos).toBe('object');
  expect(screen.queryByText(noText)).not.toBeInTheDocument();
  //expect(_onDelete).toBeDefined();
  expect(typeof _onDelete).toBe('function')
  // const h1 = screen.getByText(/This is the main App/);
  // expect(h1).toBeInTheDocument();
  // const h2 = screen.getByText(/The count is 0/);
  // expect(h2).toBeInTheDocument();
  // const btn = screen.getByText(/Hello/);
  // expect(btn).toBeInTheDocument();
});

test('should display the login screen when logged out', () => {
    const mockLogin = () => <>This is the expected text</>
    const noText = 'NONONO';
    const nonono = () => <>{noText}</>
    render(<App _Login= {mockLogin} _Memos={nonono}/>);
    const element = screen.getByText(/This is the expected text/);
    expect(element).toBeInTheDocument();
    expect(screen.queryByText(noText)).not.toBeInTheDocument();
    // const usernameElement = screen.getByPlaceholderText(/Username/);
    // expect(usernameElement).toBeInTheDocument();
    // const passwordElement = screen.getByPlaceholderText(/Password/);
    // expect(passwordElement).toBeInTheDocument();
    // const loginButton = screen.getByText(/Login/);
    // expect(loginButton).toBeInTheDocument();
  });