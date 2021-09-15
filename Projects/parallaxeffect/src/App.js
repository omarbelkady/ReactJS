import React from 'react';
import { Parallax } from 'react-parallax';

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const image5 = 
"https://www.wallpapertip.com/wmimgs/196-1963020_website-backgrounds-website-login-page-background.jpg";

const inlineStyle = {
  background: '#fff',
  //to bring it to the center
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)'

}
 
function App() {
  { /* Creating an inline style above the div className="App" tag*/}
  return (
    <div style = {{ textAlign: 'center'}}>
      {/* The bigger the number the heavier transition you will have */}
      <Parallax bgImage={ image5 } strength={ 500 }>
        <div style= {{height: 900 }}>
            <div style = {inlineStyle}>Hey There</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={ image3 } blur={{ min: -1, max: 5 }}>
        <div style= {{height: 900 }}>
            <div style = {inlineStyle}>Dynamic Blur </div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={ image3 } strength={-200}>
        <div style= {{height: 900 }}>
            <div style = {inlineStyle}>Reversed </div>
        </div>
      </Parallax>
      <Parallax 
        bgImage={ image4 }
        strength={200}
        renderLayer={ percentage => (
          <div style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            borderRadius:'50%', 
            background: `rgba(255,123,23,${percentage*3})`,
            left: '50%',
            top: '50%',
            transform: `translate(-50%,-50%) scale(${percentage * 4.5})`,
          }}
          ></div>
        )}
        >
        <div style= {{height: 900 }}>
            <div style = {inlineStyle}>Rendering Props</div>
        </div>
      </Parallax>
      <div style= {{ height: '100vh' }}></div>
    </div>
  );
}

export default App;
