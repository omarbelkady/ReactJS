import React from 'react';
import image1 from "../images/giphy.gif"

const FullPageLoader = () => {
    return (
        <div className="fp-container">
            <img src={image1} className="fp-loader" alt="loading"/>
        </div>
    )
}

export default FullPageLoader
