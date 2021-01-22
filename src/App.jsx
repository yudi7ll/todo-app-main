import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import TodoCard from './components/TodoCard';
import { GlobalStyles, light, dark } from './theme';
import './assets/app.scss';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme((prevState) => !prevState);

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <>
        <GlobalStyles />

        <div className="bg">
          <div className="container">
            <div className="header">
              <h1>T O D O</h1>
              <button
                className="header__toggle-btn"
                type="button"
                onClick={toggleTheme}
              >
                TOGGLE THEME
              </button>
            </div>
            <TodoCard />
          </div>
          <center>
            <small>Drag and drop to reorder list</small>
          </center>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
