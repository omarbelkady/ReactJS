import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Arabic from '../languages/ar-MR.json';
import English from '../languages/en-US.json';


//using the context API
export const Context = React.createContext();

let lang;
const local = navigator.language;

if(local === "en-US"){
  lang = English;
}

else{
  lang = Arabic;
}


const Wrapper = (props) =>{
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    //creating an onChange Handler
    function selectTheLang(ev){
      const newLocale = ev.target.value;
      setLocale(newLocale);

      if(newLocale === "ar-MR"){
        setMessages(Arabic);
      }

      else{
        setMessages(English);
      }
    }
    /*
    wrapping my component in the context provdier
      passing into the provider an object o two things
      a. 
    */
    return (
      <Context.Provider value= {{locale, selectTheLang}}>
          <IntlProvider messages={messages} locale={locale}>
                {props.children}
          </IntlProvider>
      </Context.Provider>
    )
}

export default Wrapper;
