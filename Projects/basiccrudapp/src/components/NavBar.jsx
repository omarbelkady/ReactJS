import React from "react";
import {AppBar, Toolbar, makeStyles} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
    header: {
        background: '#1111111'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: '20px'
    }
});

const NavBar = () => {
    const myClass = useStyle();
    return (
        <AppBar className={myClass.header}>
            <Toolbar>
                {/*Changing Typography To NavLink To Make It Clickable */}
                <NavLink className={myClass.tabs} to="/">Location De Voiture</NavLink>
                <NavLink className={myClass.tabs} to="/voitures"><h5>Tous Les Vehicule</h5></NavLink>
                <NavLink className={myClass.tabs} to="/ajouter"><h5>Ajouter Vehicule</h5></NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;