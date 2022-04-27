import { render, screen } from '@testing-library/react';
import Login from './Login';

test('should show username and password inputs', () => {
  render(<Login />);
  const usernameElement = screen.getByPlaceholderText(/Username/);
  expect(usernameElement).toBeInTheDocument();
  const passwordElement = screen.getByPlaceholderText(/Password/);
  expect(passwordElement).toBeInTheDocument();
  //const linkElement = screen.getByText(/This is the main App/i);
  //expect(linkElement).toBeInTheDocument();
});
test('should show login button', () => {
  render(<Login />);
  const loginButton = screen.getByText(/Submit/);
  expect(loginButton).toBeInTheDocument();
});

