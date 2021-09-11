import React from 'react';

import {Navbar, NavbarBrand} from "reactstrap";

export default props => {
    return(
        <div>
            <Navbar></Navbar>
            <Navbar color="light" light expand="md" ></Navbar>
            <NavbarBrand
                className="nav--brand"
                onClick={_ => {
                    props.setPage(0);
                }}
            >
            Place Cabin
            </NavbarBrand>
        </div>
    );
};
