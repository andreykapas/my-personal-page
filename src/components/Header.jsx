import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header text-center p-10 rounded-lg shadow-lg sm:p-8 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 hover:text-yellow-300 transition duration-300 ease-in-out">
        Hello, I&apos;m Andrei Prystauka
      </h1>
      <p className="text-lg md:text-xl mt-4 hover:scale-105 transition-transform duration-300 ease-in-out">
        React and Next.js Developer
      </p>

      <button
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition duration-300"
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </header>
  );
};

export default Header;
