import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const getStorageTheme = () => {
  let currentTheme = "dark-mode";
  if (localStorage.getItem("theme")) {
    currentTheme = localStorage.getItem("theme");
  }
  return currentTheme;
};

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
