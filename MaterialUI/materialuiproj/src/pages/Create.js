import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';

/*
How To Add a Container to contain all my button.. 
A Container is a wrapper that goes around your content
and applies some margin and padding to the content
*/
import Container from '@material-ui/core/Container';
//importing the button
import AcUnitOutlinedIcon  from "@material-ui/icons/AcUnitOutlined";
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';

/*import Number 2 by destructuring
import { Typography } from '@material-ui/core/Typography';

*/

/*
remember the default typography tag is a paragraph tag in html
Default: <Typography></Typography>
To turn it to an h1 <Typography variant="h1"> 
*/
//I want to use the typography component inside this Create Component


/*
instantiating a makeStyles hook and I pass in an object
Within the object I create the different css classes 
and rules

each property inside the object is a css class
*/
const useStyles = makeStyles({
    btn: {
        fontSize: 15,
        backgroundColor: 'red',
        /*applying the hover state to the button*/
        '&:hover': {
            backgroundColor: 'green'
        }
    },
    title:{
        textDecoration: 'underline',
        marginBottom: 15
    }
});

export default function Create() {
    /*
    invoking the hook which I want to use in my Create Component
    This returns an object with all the CSS classes on it

    Well how Do I apply this button class to something in 
    this component (Create)
    I use the nameOfThevariable.btn for the class
    btn because that's what I name the class


    To apply the title class to the Typography component
    I simply use the className keyword
    */
    const myCSSClass = useStyles();
    return (
        <Container>
            <Typography
            variant="h6"
            className={myCSSClass.title}
            color="textSecondary"
            component="h2"
            gutterBottom
            align="center">
                {/*To have a ... in your paragraph pass in a noWrap prop in your typography opening tag */}
                Create A New 7652626 note
            </Typography>  

            {/*Button To Submit a Form and to use OnClick event I pass in an OnClick Prop to my Button tag 
            Applying the class to my component(button) 
            I want to fire the useStyles hook 
            It will apply the properties in my object to the Button*/}
            <Button
                className={myCSSClass.btn}
                onClick={() => console.log("2526 56837 7652626 ")} 
                type="submit" 
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon/>}>
                Submit
            </Button>
            {/*To have an icon in the beginning of your button I use the:
            startIcon prop
            
            To have an icon in the end of your button I use the:
            endIcon prop*/}
            <br/>
            {/*Icons Sir */}
            <AcUnitOutlinedIcon/>
            <AcUnitOutlinedIcon color="primary" fontSize="small"/>
            <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
            <AcUnitOutlinedIcon color="action" fontSize="small"/>
            <AcUnitOutlinedIcon color="error" fontSize="small"/>
            <AcUnitOutlinedIcon color="disabled" fontSize="small"/>
        </Container>
    )
}
