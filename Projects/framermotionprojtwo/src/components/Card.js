import { motion } from "framer-motion";

const Card = () =>{
    return(
        <motion.div
            animate={{ y: ["0px", "-10px"] }}
            transition= {{ type:"spring", duration: 0.5, yoyo: Infinity}}
            style={{
                width: "320px",
                border: "5px #fad161 solid",
                borderRadius: "11px",
                padding: "100px 140px 35px 140px",
                fontSize: "16px",
                color: "#f8f8f8",
                margin: "220px 450px"
            }}
            >
            <h1>This will be a Bouncy Card</h1>
            <p>Simple Dummy Filler Text</p>
            <p>How is your day going to day? </p>
        </motion.div>
    );
};

export default Card;