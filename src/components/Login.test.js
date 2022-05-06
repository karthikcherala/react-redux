import { render, screen } from '@testing-library/react';
import Login from './Login';
import userEvent from "@testing-library/user-event";
import {LOGIN} from "../modules/memos";

// Is this a unit test? yes
test('should show username and password inputs', () => {
  render(<Login _useDispatch={() => {}}/>);
  const usernameElement = screen.getByPlaceholderText(/Username/);
  expect(usernameElement).toBeInTheDocument();
  const passwordElement = screen.getByPlaceholderText(/Password/);
  expect(passwordElement).toBeInTheDocument();
});

test('should show login button', () => {
  render(<Login _useDispatch={() => {}}/>);
  const loginButton = screen.getByText(/Login/);
  expect(loginButton).toBeInTheDocument();
});

it('should dispatch LOGIN with typed creds when login button clicked', () => {
  const mock = jest.fn()
  render(<Login _useDispatch={() => mock}/>)
  const credentials = {
    username: 'some username',
    password: 'some password'
  }
  userEvent.type(screen.getByPlaceholderText('Username'), credentials.username)
  userEvent.type(screen.getByPlaceholderText('Password'), credentials.password)
  userEvent.click(screen.getByText('Login'))
  expect(mock).toHaveBeenCalledWith({type: LOGIN, credentials})
})
