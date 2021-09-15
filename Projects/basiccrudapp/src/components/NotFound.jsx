import React from 'react'
import fourofour from "../assets/images/404.png"

const NotFound = () => {
    
    return (
        <div align="center">
            <br/>
            <h4 className="notfoundheading">Ce lien est invalide</h4>
            <div align="center" id="pic">
                <img src={fourofour} style={{width: "80%"}} alt="fourofour"/>
            </div>
        </div>
    )
}

export default NotFound;
