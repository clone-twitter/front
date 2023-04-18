import React, { createContext } from "react";
import { Theme } from "../interfaces/Theme";
import { AppService } from "../services/appService";

export const ThemeContext =  createContext<Theme>("DarkTheme");

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = React.useState<Theme>("DarkTheme");

  const appService = new AppService();

  React.useEffect(() => {
    setTheme(appService.theme)
  })

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};


export default ThemeProvider;