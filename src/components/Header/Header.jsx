import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import myPhoto from '../../assets/me.webp';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`header text-center p-10 rounded-lg shadow-lg sm:p-8 md:p-10`}
    >
      <div
        className={`flex flex-col items-center justify-center space-y-4 
                       md:flex-row md:space-y-0 md:space-x-6`}
      >
        <img
          src={myPhoto}
          alt="Andrei Prystauka"
          className="w-32 h-32 rounded-full shadow-lg object-cover aspect-square"
          loading="lazy"
        />
        <div>
          <h1
            className={`text-2xl md:text-4xl font-bold mb-4
                        hover:text-yellow-300 transition 
                        duration-300 ease-in-out`}
          >
            Hello, I&apos;m Andrei Prystauka
          </h1>
          <p
            className={`text-lg md:text-xl 
                        hover:scale-105 transition-transform 
                        duration-300 ease-in-out`}
          >
            React and Next.js Developer
          </p>
          <button
            onClick={toggleTheme}
            className={`mt-6 px-4 py-2 bg-gray-700 text-white rounded
                    hover:bg-gray-600 transition duration-300`}
          >
            Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
