import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders hello world', async () => {
  render(<App />);

  // Проверка на отображение заголовка
  const headerElement = await waitFor(() =>
    screen.getByText(/Hello, I'm Andrei Prystauka/i)
  );
  expect(headerElement).toBeInTheDocument();

  // Проверка на наличие раздела About Me
  const aboutSection = await waitFor(() => screen.getByText(/About Me/i));
  expect(aboutSection).toBeInTheDocument();

  // Проверка на наличие раздела Projects
  const projectsSections = await waitFor(() =>
    screen.getAllByText(/Projects/i)
  );
  expect(projectsSections.length).toBeGreaterThan(0);
  projectsSections.forEach((section) => {
    expect(section).toBeInTheDocument();
  });
});
