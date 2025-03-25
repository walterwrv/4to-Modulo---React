import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 px-4 py-2 rounded transition-all 
                ${theme === "dark" ? "bg-yellow-400 text-gray-900 " : "bg-gray-800 text-white"} hover:opacity-80`}
    >
      {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default ThemeButton;
