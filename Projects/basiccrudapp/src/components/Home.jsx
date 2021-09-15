import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import BudgetSedan from "../assets/images/BudgetSedan.jpg";
import LuxuryRoadster from "../assets/images/LuxuryRoadster.jpg";
import Minivan from "../assets/images/Minivan.jpg";
import Sedan from "../assets/images/Sedan.jpg";
import Suv from "../assets/images/Suv.jpg";
import Truck from "../assets/images/Truck.png";


const useStyle = makeStyles({
    image: {
        width: "50%",
        height: "50%"
    },
    component:{
        margin: 50
    }
})

const Home = () => {
    const styles = useStyle();
    return (
        <Box className={styles.component}>
            <Typography variant="h4" style={{marginBottom: 50}}>Home</Typography>
                <Box style={{display: "flex"}}>
                    <img className={styles.image} src={BudgetSedan} alt="budget Sedan" />
                    <br/>
                    <br/>
                    <img className={styles.image} src={LuxuryRoadster} alt="Luxury Roadser"/>
                    <br/>
                    <br/>
                    <img className={styles.image} src={Minivan} alt="Minivan"/>
                    <br/>
                    <br/>
                    <img className={styles.image} src={Sedan} alt="Sedan"/>
                    <br/>
                    <br/>
                    <img className={styles.image} src={Suv} alt="SUV"/>
                    <br/>
                    <br/>
                    <img className={styles.image} src={Truck} alt="Truck"/>
                </Box>
        </Box>
    )
}

export default Home;