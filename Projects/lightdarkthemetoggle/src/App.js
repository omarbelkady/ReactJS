import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from 'styled-components';
import THEMES  from './constants/theme';
import { getTheme } from './getTheme';
import { Header } from './styles';

function App() {
  const [themeName, setThemeName] = useState(THEMES.BASIC);
  return (
    <ThemeProvider theme ={getTheme(themeName)}>
    <div className="App">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setThemeName(THEMES.DRACULA)}>Dracula</button>
        <button onClick={() => setThemeName(THEMES.APPLE)}>Apple</button>
      </Header>
    </div>
    </ThemeProvider>
  );
}

export default App;
