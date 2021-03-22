import React, { useState } from 'react';
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
import { FormControlLabel, FormGroup, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import useHistory from 'react-router-dom';

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


//to track what the user wrote in the form field I use the onChange Event Handler
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
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
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
    const myHistory = useHistory();
    const [title, setTitle] = useState('');
    const [codes, setCodes] = useState('');
    //we want to set the errors to false at first so that they are no shown
    const [titleError,setTheTitleError] = useState(false);
    const [codesError, setTheCodesError] = useState(false);
    const [category, setCategory] = useState('DJ')
    const handleMySubmit = (evnt) => {
        //do not refresh the page
        evnt.preventDefault();

        //resetting the vals for setTitleError and setCodes to false after the user enters something right or wrong
        setTheTitleError(false);
        setTheCodesError(false);
        
        //checking if i have a value for title
        if(title == ''){
            setTheTitleError(true)
        }

        //chcecking if I have a value for Codes
        if(codes == ''){
            setTheCodesError(true)
        }
        
        if(title && codes){
            //if the title and codes are not blank
            console.log(title, codes, category);
            fetch('https://localhost:3000/pages', { 
                method: 'POST', 
                headers: {"Content-type": "application/json"}, 
                body: JSON.stringify({ title, codes, category })
                //how to redirect user: use the useHistoryHook to the homepage 
            }).then(()=> myHistory.push('/')
        }
    }

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

            {/*adding an onSubmit Prop*/}
            <form noValidate="" autoComplete="off" onSubmit={handleMySubmit}>
                {/*applying the style to Text field in the form and 
                to make the field multiline I add the boolean multiline prop
                to specify the number of rows I want in my text field
                I pass in the rows props to my TextField Fragment
                
                error is a boolean prop I pass in to my TextField fragment
                If set to true it will show error feedback
                
                If the user does not enter the professor name or his favorite codes I will raise and error*/} 
                <TextField
                className={myCSSClass.field}
                onChange={(pol)=>{
                    setTitle(pol.target.value)
                }}
                label="Best Prof You Took"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                error={titleError}/>

                <TextField
                className={myCSSClass.field}
                onChange={(pol)=>{
                    setCodes(pol.target.value)
                }}
                label="What are codes You Like Or Other Hobbies Activities(BD, 429,375)"
                variant="outlined"
                color="secondary"
                multiline="true"
                rows={3}
                fullWidth
                required
                error={codesError}/> 


                {/* I want to associate the form label with the radio group therefore I use Form Control Tag */}
                <FormControl className={myCSSClass.field}>
                <FormLabel>Category</FormLabel>

                {/* I want the user to be able to choose one therefore I import RadioGroup */}
                <RadioGroup value={category} onChange={(ev)=>{ setCategory(ev.target.value)}}>
                    {/* <Radio value="2526 56837 DJ"/>
                    <Radio value="2526 56837 Bernard" /> 
                    I need the value prop to be able to select one and have them both selected
                    */}
                    <FormControlLabel control={<Radio/>} label="2526 56837 DJ" value="DJ 32"/>
                    <FormControlLabel control={<Radio/>} label="2526 56837 Bernard" value="Bernard 32"/>
                    <FormControlLabel control={<Radio/>} label="2526 56837 Chen_7864" value="ChenS 32"/>
                    <FormControlLabel control={<Radio/>} label="2526 56837 429" value="Comp Arch FB"/>
                    {/*I need state to select what the user selected as their note category */}

                </RadioGroup>
                </FormControl>

                {/*Button To Submit a Form and to use OnClick event I pass in an OnClick Prop to my Button tag 
                Applying the class to my component(button) 
                It will apply the properties in my object to the Button
                For A Form to be submitted I must place the button in the FORM*/}
                <Button
                    className={myCSSClass.btn}
                    type="submit" 
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon/>}>
                    Submit
                </Button>

            </form>
           
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
