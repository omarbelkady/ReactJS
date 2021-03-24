import React, { Component } from 'react'

import Card from './CardsUI';
import comparchfb from '../assets/comparch.jpg';
import pintosfb from '../assets/pintos.jpg';
import polan from '../assets/polan.jpg';

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={comparchfb} id="comparch" title="Best Class For Me"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={pintosfb} id="pintos" title="Best Operating System For Me"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={polan} id="polan" title="Best Professor I ever took"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;