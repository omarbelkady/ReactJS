import React from 'react';
import comparch from '../assets/comparch.jpg';
import polan from '../assets/polan.jpg';
import pintos from '../assets/pintos.jpg';
import './card-style.css';

const Card = props => {
    return (
        <div>
            <div className="card-text-center">
                <div className="overflow">
                    <img src={comparch} alt="image1" className="card-img-top" />
                </div>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    Pintos56837
                </h4>
                <p className="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Adipisci accusantium facere officiis suscipit, officia atque sequi! 
                    Similique culpa perspiciatis consequatur.
                </p>
                <a href="#" className="btn btn-outline-success">Go Code Visual 22742!</a>            
            </div>
        </div>
    );
};

export default Card;