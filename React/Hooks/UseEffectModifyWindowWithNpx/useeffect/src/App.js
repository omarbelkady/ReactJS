import React,{useState, useEffect}  from 'react';
import logo from './logo.svg';
import './App.css';

export default function App{
  	const [windowWidth, setwindowWidth] = useState(window.innerWidth);

	return (
    <div className="App">{windowWidth} </div>
  );
};
