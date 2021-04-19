import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl";
//import Arabic from './languages/ar-MR.json';
//import English from './languages/en-US.json';
import Wrapper from './components/Wrapper'


/*
intl provider accepts many props

first one is: locale
second one is: messages
*/

//const local= navigator.language;
/*
let lang;

if(local === "en-US"){
  let lang = English;
}

else{
  lang = Arabic;
}
*/

ReactDOM.render(
    //<IntlProvider locale="ar-MR" messages={Arabic}><App date={Date.now()}/></IntlProvider>,
    <Wrapper><App date={Date.now()}/></Wrapper>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
