import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const AppContext = createContext();
const apiKey = import.meta.env.VITE_API_KEY
const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;


const getStorageTheme = () => {
  let currentTheme = "dark-mode";
  if (localStorage.getItem("theme")) {
    currentTheme = localStorage.getItem("theme");
  }
  return currentTheme;
};

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("one piece");
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };


  useEffect(() => {

    const fetchData = async() => {
      const response = await axios(`${url}${searchTerm}`)
      console.log(response.data.Search)
    }
    
    
    fetchData()
  }, [searchTerm]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
