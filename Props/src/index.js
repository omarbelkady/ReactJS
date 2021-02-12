import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
const itemByPerson = 'CobolAndFtnFB';
const slogan = "LLP,Brb Dolls,727225, 7652626,35,34367864 Are The Best Thing Ever";
const img = "https://static.wikia.nocookie.net/borlandpascal/images/5/54/Hello_world.png/revision/latest/scale-to-width-down/340?cb=20071210155316.jpg"


function itemList(){
  return (
    <section className="itemList">
      <Item />
    </section>
  );
}


const Item = (props) =>{

  return (
    <article className="item">
      <img
      src="{img}" alt='63526 Fav Prog Lang'/>
      <h1>{slogan}</h1>
      <h4>{itemByPerson}</h4>
    </article>
  );
};


ReactDOM.render(
  <itemList/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
