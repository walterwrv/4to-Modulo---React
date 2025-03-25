import { createContext, useState, useEffect } from "react";

//1er paso crear el contexto
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  //cargo el estado tema con lo que tengo en local storage on sino le setel "light"
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  //aqui lo que hace es cada vez que cambia el tema, lo setea en el local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  //esta funcion me cambia el estado tema segun el anterior que tenia
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    //2do paso proveer el contexto"
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
