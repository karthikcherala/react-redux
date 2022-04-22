import { render, screen } from '@testing-library/react';
import Login from './Login';

test('should show username and password inputs', () => {
  render(<Login />);
  const usernameElement = screen.getByPlaceholderText(/Username/i);
  expect(usernameElement).toBeInTheDocument();
  const passwordElement = screen.getByPlaceholderText(/Password/i);
  expect(passwordElement).toBeInTheDocument();
  //const linkElement = screen.getByText(/This is the main App/i);
  //expect(linkElement).toBeInTheDocument();
});
