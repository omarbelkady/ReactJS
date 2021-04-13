## Accordion In React Using Hooks


### Example of a simple Accordion using useState Hook and MaterialUI
```js
import { Collapse, IconButton} from "@material-ui/core";
import { ExpandLess, ExpandMore} from "@material-ui/icons";
import { useState } from "react";
import "./styles.css";

export default function App(){
    const [expanded, setExpanded] = useState(false);

    const handleExpandedClick= () => {
        setExpanded(!expanded)
    }

    return(
        <div
            style={{
                boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)"
            }}
        >

        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "2px solid #61aafef",
                padding: "0 17px"
            }}
        >

        <p style= {{ fontWeight: "600", fontSize: "16px" }}>Accordion Handling</p>

        <IconButton
            onClick={handleExpandedClick}
            aria-expanded={expanded}
            aria-label= "show more"
        >
        {expanded ? <ExpandLess /> : <ExpandMore />}

        </IconButton>
        </div>

        <div style={{ padding: "0 17px"}}>
            <Collapse in={expanded} timeout={400} unmountOnExit>

                <p>Accordion Stuff</p>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus
                dui non orci euismod, quis malesuada tortor pretium. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. In eget viverra odio. Aliquam erat
                volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                per inceptos himenaeos.
                </p>

            </Collapse>

        </div>

        </div>
    );
}
```