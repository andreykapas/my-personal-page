import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { ThemeContext } from '../context/ThemeContext.jsx';

test('renders the header with correct text', () => {
  const mockThemeContextValue = {
    theme: 'light',
    toggleTheme: jest.fn(),
  };
  render(
    <ThemeContext.Provider value={mockThemeContextValue}>
      <Header />
    </ThemeContext.Provider>
  );

  // Проверка на отображение заголовка
  const headingElement = screen.getByRole('heading', {
    name: /Hello, I'm Andrei Prystauka/i,
  });
  expect(headingElement).toBeInTheDocument();

  // Проверка на отображение подзаголовка
  const subheadingElement = screen.getByText(/React and Next\.js Developer/i);
  expect(subheadingElement).toBeInTheDocument();
});
