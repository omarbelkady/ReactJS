import React, { useState, useEffect} from "react";
import PropTypes from "prop-types"

function Count({ startingPoint }){
    const [count, setMyCount] = useState(startingPoint);

    function increase(){
        setMyCount(current => current+1);
    }


    function decrease(){
        setMyCount(current => current-1);
    }

    useEffect(() => {
        console.log(count)
    }, [count]);

    return(
        <div>
            <button onClick={decrease}>-</button>
            {count}
            <button onClick={increase}>+</button>
        </div>
    )
}

Count.propTypes={
    startingPoint: PropTypes.number
}

export default Count;