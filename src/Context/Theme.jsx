import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const darkTheme = () => setTheme("dark");
  const lightTheme = () => setTheme("light");

  useEffect(() => {
    const root = document.querySelector("html");
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
