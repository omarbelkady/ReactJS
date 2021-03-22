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