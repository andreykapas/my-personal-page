import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders hello world', () => {
  render(<App />);

  // Проверка на отображение заголовка
  const headerElement = screen.getByText(/Hello, I'm Andrei Prystauka/i);
  expect(headerElement).toBeInTheDocument();

  // Проверка на наличие раздела About Me
  const aboutSection = screen.getByText(/About Me/i);
  expect(aboutSection).toBeInTheDocument();

  // Проверка на наличие раздела Projects
  const projectsSection = screen.getByText(/Projects/i);
  expect(projectsSection).toBeInTheDocument();
});
