import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders header text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Astikós Living/i);
  expect(linkElement).toBeInTheDocument();
});
