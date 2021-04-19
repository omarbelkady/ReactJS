import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
import Arabic from './languages/ar-MR.json';
import English from './languages/en-US.json';

/*
intl provider accepts many props

first one is: locale
second on is: messages
*/

ReactDOM.render(
    <IntlProvider locale messages=""><App/></IntlProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
