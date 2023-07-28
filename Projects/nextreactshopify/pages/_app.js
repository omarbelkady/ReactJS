import { useState, useEffect } from "react";
import '../styles/globals.css';
import Link from "next/link"
import {Button, Container, Grid, Header, Image, Menu, Segment, Sidebar, Visibility } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const NavBar = () =>{
    const [fixed, setFixed] = useState(false);
    
    return(
    <Visibility
    once={false}
    onBottomPasssed={()=> setFixed(true)}
    onBottomPassedReverse={()=> setFixed(false)}
    >
    <Segment>
      <Menu>
        <Container>
          <Link href="/">
            Home
          </Link>
        </Container>
      </Menu>
    </Segment>

    </Visibility>
    );
}

function MyApp({ Component, pageProps }) {
    return(
    <>
        <NavBar/>
        <Component {...pageProps} />
    </>
    )
}

export default MyApp
