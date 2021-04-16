import React, { useState } from 'react';
import './App.css';
import back1 from './images/back1.jpg'
import back2 from './images/back2.jpeg'
import back3 from './images/back3.jpeg'


function App() {
  const [offset, setOffset] = useState();

  const handleMyScroll = () => setOffset(window.pageYOffset);

  window.addEventListener('scroll', handleMyScroll)
  return (
    <div className="App">
      <div className="zoom">
        <img src={back1} alt="" id="img1"
          style={{width: (100 + offset * 0.3) + '%'}}
        />
        <img src={back2} alt="" id="img2"
          style={{width: (100 + offset * 0.3) + '%'}}
        />
        <img src={back3} alt="" id="img3"
          style={{top: `-${100 + offset * 0.3 + '%'}` }}
        />
      </div>
      <div className="content">
        <h2>Parallax Efect</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet est rhoncus, faucibus quam nec, <br/>
        dapibus odio. Donec ullamcorper, neque a pharetra malesuada, diam mi bibendum ex, varius egestas orci mauris <br/>
        sed lorem. Sed nisl dui, fringilla vitae felis ut, egestas consectetur ex. Quisque rhoncus purus vitae metus <br/>
        semper, eu tristique velit faucibus. Cras hendrerit posuere facilisis. Ut nec sapien aliquam, vestibulum <br/>
        massa ut, gravida ante. Ut non sem semper, convallis sem at, aliquet lorem. Nunc nec pellentesque urna. Fusce<br/> 
        convallis ipsum nunc, blandit porttitor velit consectetur luctus. Aliquam erat volutpat. Sed ut erat ut tellus <br/>
        elementum congue.
        <br/>
        <br />
        Suspendisse tempus nunc non faucibus viverra. Aenean at turpis iaculis, eleifend ligula condimentum, suscipit felis. <br/>
        Phasellus facilisis auctor maximus. Vestibulum viverra pellentesque risus nec viverra. Nullam et felis turpis. Nulla <br/>
        lobortis quam sit amet laoreet consequat. Etiam eu dignissim metus. Aenean semper, lectus at convallis dictum, neque <br/>
        elit hendrerit purus, ac aliquet augue orci et orci. Fusce pulvinar lorem in blandit venenatis. Suspendisse potenti. <br/>
        Suspendisse fringilla imperdiet eros. Sed nec arcu ac sapien tincidunt sollicitudin. Duis imperdiet leo enim, vitae <br/>
        cursus nibh gravida quis. Donec facilisis turpis id bibendum dignissim. Quisque ultricies dapibus venenatis. <br/>
        Suspendisse convallis augue dictum odio dapibus, ut.
        </p>
      </div>
    </div>
  );
}

export default App;
