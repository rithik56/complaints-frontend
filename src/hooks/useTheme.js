import { useEffect, useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

  useEffect(() => {
    if (theme) {
      let body = document.querySelector("body");
      switch (theme) {
        case "dark-theme":
          body.classList.remove("light-theme");
          body.classList.add("dark-theme");
          break;
        case "light-theme":
          body.classList.remove("dark-theme");
          body.classList.add("light-theme");
          break;
        default:
          body.classList.remove("dark-theme");
          body.classList.add("light-theme");
          break;
      }
      window.localStorage.setItem("theme", theme);
    } else {
      // dark theme by default
      window.localStorage.setItem("theme", "dark-theme");
      setTheme(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log(theme);
    if (theme === "dark-theme") {
      setTheme("light-theme");
      return "light-theme";
    } else {
      setTheme("dark-theme");
      return "dark-theme";
    }
  };

  return (
    <>
      <ThemeContext.Provider value={toggleTheme}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
