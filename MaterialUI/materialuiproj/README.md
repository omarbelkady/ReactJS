## Material UI Project
- Typography
    - Props in The Typography Component:
        - fontSize
        - variant: h1, h2, h3, h4, h5, h6, subtitle1, subtitle2, body1, body2, button, caption
        - htmlFontSize
        - gutterBottom
        - subtitle
        - buttons
- Components I can Use In MaterialUI Library:
    - Buttons(6 types):  Customized Buttons, icon buttons, Float Action Buttons, Outlined Buttons, Text Buttons, Contained Buttons
    - Icons
    - Layout
    - Inputs
    - Navigation
    - Surfaces
    - Feedback
    - Data Display
    - Utils
    - Lab
    - Pagination
    - Rating
    - Skeleton
    - Speed Dial
    - Timeline
    - Toggle Button
    - Tree View
- When I use a color that is darker than my background MaterialUI will automatically sets the text color
    - to white to contrast it


- Buttons:
    - Default
    - Primary
    - Secondary
    - Disabled
    - Href button meaning a Link

    - Failure to pass a variant to my Button tag will result in a text button

    - To have an outlined button I pass in a variant prop
```js
<Button variant="outlined">Watching BD</Button>
```

### How To Use The Button component in your project from MaterialUI
```js
import Button from '@material-ui/core/Button';
```

#### Click Handler in MaterialUI
```js
<Button onClick={()=>{
    alert("Just Clicked a 429 Buton")
}}>Click Here</Button>
```

### Button Type supplying the Button tag with the prop "Type"
```js
<Button type="Submit">Submit Your FTN Project</Button>
```

### How To Use Icons In Material UI and If you want to customize it further pass in the appropriate prop
```js
import AcUnitOutlinedIcon  from "@material-ui/icons/AcUnitOutlined";
<AcUnitOutlinedIcon color="primary" fontSize="small"/>
```

### Use Hooks in MaterialUI by destructuring Only Won't work without destructuring
```js
import { makeStyles } from '@material-ui/core';
//import makeStyles from '@material-ui/core' //this will not work
```

### Grid System
- To Create A Grid In My React
- I must first have imported the grid component from the materialui core library
- I create a grid container aka a Wrapper Class in Java
- Within the grid container I have the grid items
- To create a Grid Container I pass in a prop called container with The Grid keyword
- To say the second Grid Fragment is an item I append the keyword item to them
- The default behavior of a grid is to place items next to each other
- The grid is a 12 column system
- The md prop is for medium sized screen and I pass in the number of colums I want it to have
- The xs prop is for extra small sized screen
- The sm prop is for small sized screen

```js
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
return( 
    <div>
        <Grid container>
            <Grid item xs={12} sm={6} md={3}>
                <Paper></Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper></Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper></Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper></Paper>
            </Grid>
        </Grid>
    </div>
)
```

### How To Create A Grid Container Around Some Notes Example
```js
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
//Container auto applies margin and padding to the content
return( 
    <Container>
        <Grid container> 
        { notes.map(mynotes =>(
            <Grid item key={mynotes.id} xs={12} md={6} lg={4} >
                <Paper>{ mynotes.title } </Paper>
        
        ))}
        </Grid>
    </Container>
);
```