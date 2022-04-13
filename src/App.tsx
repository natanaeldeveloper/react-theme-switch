import { useCallback, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';
import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState';

function App() {

  const [ theme, setTheme ] = usePersistedState('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light)
  }, [theme]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    </div>
  )
}

export default App
