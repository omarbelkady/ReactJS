import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';
function App() {
  const [faqs, setFaqs] = useState([
    {
      question: "Is it true that reading a book for programming is going to make you a better programmer",
      answer: "False. It is not true because the way to become a better programmer is by practicing",
      open: true
    },
    {
      question: "What is Nelan's Favorite Class At UT?",
      answer: "CS429 which is Computer Architecture with Assembly Language. The professors he wanted to be there were Ocnalop, Chen-Sung and DJ",
      open: false
    },
    {
      question: "What is Nelan's Favorite Programming Language?",
      answer: "Visual Basic",
      open: false
    }
  ]);
  const toggleFAQ = elem => {
    setFaqs(faqs.map((elems, i) => {
      if (i === elem) {
        elems.open = !elems.open
      } else {
        elems.open = false;
      }

      return elems;
    }))
  }

  {/*above is our default state*/}
  return (
    <div className="App">
      <Header />
      <div className="elem">
        {/*this is an faqs container*/}
        { faqs.map((elems, elem) => (
         <FAQ faq={elems} index={elem} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default App;
