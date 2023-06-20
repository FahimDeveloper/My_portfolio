import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
    isDarkMode: true,
    toggleTheme: () => { },
});

const ThemeProviders = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "light" : "dark");
    };
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProviders;