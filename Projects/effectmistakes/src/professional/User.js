import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";


function User({ theAge}){
    const [theName, setTheName] = useState("");
    const [darkTheme, setDarkTheme] = useState(false);

    const userOne = useMemo(()=> {
        return { theAge, theName};
    }, [theAge, theName])

    const styledBtn = {
        backgroundColor: darkTheme ? "#000": "initial",
        color: darkTheme ? "#FFF" : "initial"
    }

    //to make sure you want something to render only when you want to you must supply useEffect with a dep array
    useEffect(()=>{
        console.log(userOne);
    }, [userOne])

    return(
        <div>
            <input value={theName} onChange={ev => setTheName(ev.target.value)} />
            <button
            style={styledBtn}
            onClick={() => setDarkTheme(currentlyDark => !currentlyDark)}>
                Toggle The 7652626Dark Theme
            </button>
        </div>
        
    )
}



User.propTypes = {
    theAge: PropTypes.number
}

export default User;
