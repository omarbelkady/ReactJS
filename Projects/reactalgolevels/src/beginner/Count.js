import React, { useState } from "react";


export default function Count({ startingPoint }){
    let [count, setMyCount ] = useState(startingPoint);

    function increase(){
        count += 1;
        console.log(count);
    }

    function decrease(){
        count -= 1;
        console.log(count)
    }
    return(
        <div>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
        </div>
    )
}