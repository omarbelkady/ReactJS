import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Planet1 from '../images/planet1.jpg';
import Planet2 from '../images/planet2.jpg';
import Planet3 from '../images/planet3.jpeg';
import Planet4 from '../images/planet4.jpg';

const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313

`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw -1300px) /2);

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr
    }
`

const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

h1{
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p{
    margin: 2rem;
    font-size: 4rem;
    line-height: 1.1rem;
}
`

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
`

const Image = styled(motion.img)`
    position: absolute;
    width: 80%;
    height: 100%;
    max-width: 150px;
    max-height: 150px;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}: nth-child(1){
        top: 10px;
        left: 10px
    }

    ${Image}: nth-child(2){
        top: 170px;
        right: 10px
    }

    ${Image}: nth-child(3){
        top: 350px;
        left: 50px
    }

    ${Image}: nth-child(4){
        bottom: 100px;
        right: 75px
    }
`

const Hero = () => {
    const fadeToTheLeft = {
        hidden: { opacity: 0, x:-50},
        visible: { opacity: 1, x: 0}

    }
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                    initial= {{ opacity: 0}}
                    animate= {{ opacity: 1}}
                    transition= {{ duration: 1.5}}
                    >
                    Welcome 7652626-32</motion.h1>
                    <motion.p
                    variant={ fadeToTheLeft }
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 3}}
                    >765 32</motion.p>
                    <Button 
                    whileHover={{scale: 1.05}}
                    whileTap={{ scale: 0.95, backgroundColor: '#67F6E7', border: 'none', color: '#000'}}
                    initial= {{ opacity: 0}}
                    animate= {{ opacity: 1, transition: { duration: 1.5 }}}
                    >Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image 
                    src={Planet1} 
                    alt="planet1"
                    whileTap= {{ scale: 0.9 }} 
                    drag= {true} 
                    dragConstraints= {{ left: 0, right: 240, top: 0, bottom: 50}}
                    initial= {{ opacity: 0, y: -100}}
                    animate= {{ opacity: 1, y: 0, transition: { duration: 1 }}}/>
                    
                    <Image 
                    src={Planet2} 
                    alt="planet1" 
                    whileTap= {{ scale: 0.6 }}
                    drag= {true} 
                    dragConstraints= {{ left: 50, right: 0, top: 0, bottom: 50}}
                    initial= {{ opacity: 0, x: 100}}
                    animate= {{ opacity: 1, x: 0, transition: { duration: 1 }}}/>
                    
                    <Image 
                    src={Planet3} 
                    alt="planet1" 
                    whileTap= {{ scale: 0.8 }} 
                    drag= {true}
                    dragConstraints= {{ left: 0, right: 240, top: 0, bottom: 50}}
                    initial= {{ opacity: 0, x: -100}}
                    animate= {{ opacity: 1, x: 0, transition: { duration: 1 }}}
                    />
                    <Image 
                    src={Planet4} 
                    alt="planet1" 
                    whileTap= {{ scale: 0.9 }}
                    drag= {true} 
                    dragConstraints= {{ left: 0, right: 0, top: 0, bottom: 0}}
                    initial= {{ opacity: 0, y: 100}}
                    animate= {{ opacity: 1, y: 0, transition: { duration: 1 }}}/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero
