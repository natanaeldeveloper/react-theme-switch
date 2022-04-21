import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Header from "./components/Header";
import Switch from "./components/Switch";

function App() {

  const [ theme, setTheme ] = useState<DefaultTheme>(light)

  function handleThemeToggle() {
    setTheme(theme.title == 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={handleThemeToggle}  />      
    </ThemeProvider>
  )
}

export default App
