import React, { useState } from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components'

const Button = styled.button`
  background: blue;
  border-radius: 12px;
  padding: 6px;
  margin: 4px;
  color: white;
`

function Count({ startingPoint}) {
    
    const [point, setPoint] = useState(startingPoint)    
    
    function increase(){
        setPoint(point + 1);
        console.log(point);
    }

    function decrease(){
        setPoint(point - 1);
        console.log(point);
    }
    
    return (
        <div>
            <Button onClick={decrease} id="decbtn">-</Button>
                {point}
            <Button onClick={increase} id="incbtn">+</Button>
        </div>
    )
}

Count.propTypes = {
    initialPoint: PropTypes.number
}

export default Count;
