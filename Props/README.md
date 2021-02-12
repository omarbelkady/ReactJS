## Props Aka Properties
```js
const itemByPerson = 'CobolAndFtnFB';
const slogan = "LLP,Brb Dolls,727225, 7652626,35,34367864 Are The Best Thing Ever";
const img = "https://static.wikia.nocookie.net/borlandpascal/images/5/54/Hello_world.png/revision/latest/scale-to-width-down/340?cb=20071210155316.jpg"


function itemList(){
  return (
    <section className="itemList">
      <Item job="Enthusiast Pascal Developer"/>
      <Item title='Mr.42932' number={429} />
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
      {/*how to display on the first element and not on the second*/}
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  );
};


//How To Render To The DOM
ReactDom.render(<itemList/>, document.getElementbyId('root'));

```


### So What Are Props Used For
- Props are used for passing data from one component to another
- Props are used in ReactJS so that when they are passed from a parent component to a child component the child component cannot mutate it
- We pass props to the child so that he is able to use the data but he cannot modify it
- If a component cannot find a prop it will not generate an error in ReactJS instead it will just output undefined.