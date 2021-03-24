import React from 'react';
import comparch from '../assets/comparch.jpg';
import polan from '../assets/polan.jpg';
import pintos from '../assets/pintos.jpg';
import './card-style.css';

const Card = props => {
    return (
            <div className="card-text-center" shadow>
                <div className="overflow">
                    <img src={props.imgsrc} alt="image1" className="card-img-top" />
                </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    {props.title}
                </h4>
                <p className="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Adipisci accusantium facere officiis suscipit, officia atque sequi! 
                    Similique culpa perspiciatis consequatur.
                </p>
                <a href="#" className="btn btn-outline-success">2526: I AM A 26265/35 FB</a>            
            </div>
            </div>
    );
};

export default Card;