import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedDate } from "react-intl";
import { Context } from "./components/Wrapper"

function App(props) {

  const context = useContext(Context)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select value={context.locale} onChange={context.selectTheLang}>
          <option value="en-US">English</option>
          <option value="ar-MR">Arabic</option>
        </select>
        <p>
          <FormattedMessage 
            id="app.header"
            defaultMessage="Edit <code>src/App.js</code> and save to reload."
            values={{fileName: "src/App.js", code: (word)=><strong>{word}</strong>}}
            />
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage 
            id="app.content"
            defaultMessage="Learn React"
          />
        </a>
        <FormattedMessage 
          id="app.channel.plug"
          defaultMessage="For the best learning env contact 7652626/35"
          values={{channelNameof7652626: "Learning with 7652626"}}
        />
        <br />
        <FormattedDate
          value={props.date}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </header>
    </div>
  );
}

export default App;
