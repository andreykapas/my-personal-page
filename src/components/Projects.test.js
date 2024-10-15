import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';

test('renders the Projects section with GitHub links', async () => {
  render(<Projects />);

  await waitFor(() => {
    const links = screen.getAllByRole('link', { name: /View on GitHub/i });
    expect(links.length).toBe(2);

    // Дополнительная проверка на присутствие ссылок с корректным текстом
    links.forEach((link) => {
      expect(link).toHaveAttribute(
        'href',
        expect.stringContaining('github.com')
      );
    });
  });
});
