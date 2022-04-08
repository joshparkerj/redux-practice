import React from 'react';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from './redux/store';

import App from './App';

it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const reduxPractice = screen.getByText(/REDUX PRACTICE/i);
  expect(reduxPractice).toBeInTheDocument();
});
