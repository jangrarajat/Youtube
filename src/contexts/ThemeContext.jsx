// TodoContext.js
import React, { createContext, useState } from "react";
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(true);
   
    
    const changeTheme = () => {
        setDark(!dark)
    }



    return (
        <ThemeContext.Provider value={{ dark, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export { ThemeProvider, ThemeContext };