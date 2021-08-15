import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import  ListItem  from "./ListItem";

const mycontainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const List = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(()=>{
        if(inView){
            controls.start("show");
        }
    }, [controls, inView]);

    return(
        <motion.div
            ref={ref}
            variants= {mycontainer}
            initial="hidden"
            animate={controls}
            style={{display: "flex", flexDirection: "column"}}
        >
            <ListItem>Super Cool List Item</ListItem>
            <ListItem>I am Staggering</ListItem>
            <ListItem>Showing Only This......</ListItem>
            <ListItem>Scroll Down To See Me :)</ListItem>
        </motion.div>
    )
}

export default List;