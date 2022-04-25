import { render, screen } from '@testing-library/react';
import App from './App';

test('should display the counter component when logged in', () => {
  const mock = () => <>This is the expected count</>
    render(<App loggedInInit={true} _Counter={mock}/>);
  const h1 = screen.getByText(/This is the expected count/);
  expect(h1).toBeInTheDocument();
  // const h1 = screen.getByText(/This is the main App/);
  // expect(h1).toBeInTheDocument();
  // const h2 = screen.getByText(/The count is 0/);
  // expect(h2).toBeInTheDocument();
  // const btn = screen.getByText(/Hello/);
  // expect(btn).toBeInTheDocument();
});

test('should display the login screen when logged out', () => {
    const mockLogin = () => <>This is the expected text</>
    render(<App _Login= {mockLogin}/>);
        const element = screen.getByText(/This is the expected text/);
        expect(element).toBeInTheDocument();
    // const usernameElement = screen.getByPlaceholderText(/Username/);
    // expect(usernameElement).toBeInTheDocument();
    // const passwordElement = screen.getByPlaceholderText(/Password/);
    // expect(passwordElement).toBeInTheDocument();
    // const loginButton = screen.getByText(/Login/);
    // expect(loginButton).toBeInTheDocument();
  });