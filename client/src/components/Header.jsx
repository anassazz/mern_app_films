import { Link } from "react-router-dom";

const Header = ({ toggleTheme, darkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">🎬 MovieApp</Link>
      <button
        onClick={toggleTheme}
        className="text-sm px-3 py-1 border rounded dark:text-white"
      >
        {darkMode ? '🌞 Light' : '🌙 Dark'}
      </button>
    </header>
  );
};

export default Header;
