import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('renders the header with correct text', () => {
  render(<Header />);
  // Проверка на отображение заголовка
  const headingElement = screen.getByRole('heading', {
    name: /Hello, I'm Andrei Prystauka/i,
  });
  expect(headingElement).toBeInTheDocument();

  // Проверка на отображение подзаголовка
  const subheadingElement = screen.getByText(/React and Next\.js Developer/i);
  expect(subheadingElement).toBeInTheDocument();
});
