const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-center p-10 rounded-lg shadow-lg sm:p-8 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 hover:text-yellow-300 transition duration-300 ease-in-out">
        Hello, I'm Andrei Prystauka
      </h1>
      <p className="text-lg md:text-xl mt-4 hover:scale-105 transition-transform duration-300 ease-in-out">
        React and Next.js Developer
      </p>
    </header>
  );
};

export default Header;
